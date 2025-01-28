/**
 * Test files test the whole results of the Projen project creation
 * configuration orchestration. E.g. the npm test module does test the result of the whole `package.json` file
 * and that the devcontainer config module scripts are created. The devcontainer test module itself will not test
 * if the related devcontainer npm scripts are created.
 *
 * The `setup.ts` file includes all relevant bootstrap steps for the test files.
 * It is important that each test file imports and uses the `snapshot` otherwise the bootstrap will not run for this test file.
 **/

import { synthSnapshot } from 'projen/lib/util/synth';
import { CapServiceProject } from '../../../src/cap-service';
import * as samplecode from '../../shared/samplecode';
import { snapshot, props } from './setup';
import { constants } from '../../../src/util/constants';

const expectedTemplateLines: string[] = [
  "_schema-version: '3.1'",
  'ID: __namespace__',
  'version: 0.0.1',
  'description: __description__',
  'parameters:',
  '  enable-parallel-deployments: true',
  'build-parameters:',
  '  before-all:',
  '    - builder: custom',
  '      commands:',
  '        - npm ci',
  '        - npm run build',
  '        - npx @cap-js/cds-typer "*" --outputDirectory gen/srv/@cds-models',
  'modules:',
  '  - name: __name__-srv',
  '    type: nodejs',
  '    path: gen/srv',
  '    parameters:',
  '      buildpack: nodejs_buildpack',
  '      readiness-health-check-type: http',
  '      readiness-health-check-http-endpoint: /health',
  '    build-parameters:',
  '      builder: npm',
  '    provides:',
  '      - name: srv-api',
  '        properties:',
  '          srv-url: ${default-url}',
  '    requires:',
  '      - name: __name__-uaa',
  '      - name: __name__-destination',
  '      - name: __name__-connectivity',
  '      - name: __name__-db',
  '  - name: __name__-destinations',
  '    type: com.sap.application.content',
  '    requires:',
  '      - name: __name__-uaa',
  '        parameters:',
  '          service-key:',
  '            name: __name__-uaa-key',
  '      - name: srv-api',
  '      - name: __name__-destination',
  '        parameters:',
  '          content-target: true',
  '    parameters:',
  '      content:',
  '        instance:',
  '          destinations:',
  '            - Authentication: OAuth2UserTokenExchange',
  '              Name: __name__-app-srv',
  '              TokenServiceInstanceName: __name__-uaa',
  '              TokenServiceKeyName: __name__-uaa-key',
  '              URL: ~{srv-api/srv-url}',
  '              sap.cloud.service: __namespace__',
  '          existing_destinations_policy: update',
  '    build-parameters:',
  '      no-source: true',
  '  - name: __name__-db-deployer',
  '    type: hdb',
  '    path: gen/db',
  '    parameters:',
  '      buildpack: nodejs_buildpack',
  '    requires:',
  '      - name: __name__-db',
  '      - name: __name__-uaa',
  'resources:',
  '  - name: __name__-uaa',
  '    type: org.cloudfoundry.managed-service',
  '    parameters:',
  '      path: ./xs-security.json',
  '      service: xsuaa',
  '      service-plan: application',
  '      config:',
  '        tenant-mode: dedicated',
  '        xsappname: __name__',
  '  - name: __name__-connectivity',
  '    type: org.cloudfoundry.managed-service',
  '    parameters:',
  '      service: connectivity',
  '      service-plan: lite',
  '  - name: __name__-destination',
  '    type: org.cloudfoundry.managed-service',
  '    parameters:',
  '      config:',
  '        HTML5Runtime_enabled: true',
  '        init_data:',
  '          instance:',
  '            destinations:',
  '              - Authentication: NoAuthentication',
  '                Name: ui5',
  '                ProxyType: Internet',
  '                Type: HTTP',
  '                URL: https://ui5.sap.com',
  '            existing_destinations_policy: update',
  '        version: 1.0.0',
  '      service: destination',
  '      service-plan: lite',
  '  - name: __name__-db',
  '    type: com.sap.xs.hdi-container',
  '    parameters:',
  '      service: hana',
  '      service-plan: hdi-shared',
  '    properties:',
  '      hdi-service-name: ${service-name}',
];

test('Projen standard sample files are removed from file system', (): void => {
  samplecode.testProjenSampleFiles(snapshot);
});

test('Sample file mta.yaml matches expected file template', (): void => {
  const placeholders: Record<string, string> = {
    __namespace__: constants.PROJECT_NAMESPACE,
    __description__: constants.PROJECT_DESCRIPTION,
    __name__: 'my-cap-service',
  };

  const resolvedTemplateLines: string[] = expectedTemplateLines.map((line: string): string =>
    line.replace(/__([^_]+)__/g, (_: string, key: string): string => placeholders[`__${key}__`] ?? `__${key}__`),
  );
  samplecode.testSampleFilesTemplates(snapshot, 'mta.yaml', resolvedTemplateLines);
});

test('Sample file mta.yaml matches expected file template with given options', (): void => {
  const customProps = {
    ...props,
    name: 'test-project',
    description: 'This is a description',
    namespace: 'de.mycustomer.myorg.myproject',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const placeholders: Record<string, string> = {
    __namespace__: 'de.mycustomer.myorg.myproject',
    __description__: 'This is a description',
    __name__: 'test-project',
  };

  const resolvedTemplateLines: string[] = expectedTemplateLines.map((line: string): string =>
    line.replace(/__([^_]+)__/g, (_: string, key: string): string => placeholders[`__${key}__`] ?? `__${key}__`),
  );
  samplecode.testSampleFilesTemplates(snapshot, 'mta.yaml', resolvedTemplateLines);
});

test('Sample file xs-security.json matches expected file template', (): void => {
  const expectedTemplateLines: string[] = [
    '{',
    '  "scopes": [],',
    '  "attributes": [],',
    '  "role-templates": []',
    '}',
  ];

  // due to json type received (not string) we stringify it upfront
  const snapshotContent: string = JSON.stringify(snapshot['xs-security.json'], null, 2);
  samplecode.testSampleFilesTemplates(
    { 'xs-security.json': snapshotContent },
    'xs-security.json',
    expectedTemplateLines,
  );
});

test('Sample file .cdsrc.json matches expected file template', (): void => {
  const expectedTemplateLines: string[] = [
    '{',
    '  "requires": {',
    '    "[development]": {',
    '      "auth": {',
    '        "kind": "mocked"',
    '      }',
    '    },',
    '    "[production]": {',
    '      "auth": {',
    '        "kind": "xsuaa"',
    '      },',
    '      "db": {',
    '        "kind": "hana",',
    '        "impl": "@cap-js/hana",',
    '        "deploy-format": "hdbtable"',
    '      }',
    '    }',
    '  },',
    '  "i18n": {',
    '    "default_language": "en"',
    '  },',
    '  "log": {',
    '    "service": true',
    '  },',
    '  "features": {',
    '    "preserve_computed": true',
    '  },',
    '  "sql": {',
    '    "native_hana_associations": false',
    '  },',
    '  "hana": {',
    '    "deploy-format": "hdbtable"',
    '  }',
    '}',
  ];

  // due to json type received (not string) we stringify it upfront
  const snapshotContent: string = JSON.stringify(snapshot['.cdsrc.json'], null, 2);
  samplecode.testSampleFilesTemplates({ '.cdsrc.json': snapshotContent }, '.cdsrc.json', expectedTemplateLines);
});

test('Sample file .cdsprettier.json matches expected file template', (): void => {
  const expectedTemplateLines: string[] = [
    '{',
    '  "alignAfterKey": true,',
    '  "alignAnnotations": true,',
    '  "alignPreAnnotations": true,',
    '  "alignPostAnnotations": true,',
    '  "alignColonsInAnnotations": true,',
    '  "alignValuesInAnnotations": true,',
    '  "alignActionsAndFunctions": true,',
    '  "alignActionNames": true,',
    '  "alignActionReturns": true,',
    '  "alignAs": true,',
    '  "alignAsInEntities": true,',
    '  "alignAsInSelectItems": true,',
    '  "alignAsInUsing": true,',
    '  "alignExpressionsAndConditions": true,',
    '  "alignExprAndCondWithinBlock": true,',
    '  "alignTypes": true,',
    '  "alignColonsBeforeTypes": true,',
    '  "alignEqualsAfterTypes": true,',
    '  "alignTypesWithinBlock": true,',
    '  "alignCompositionStructToRight": true,',
    '  "cqlKeywordCapitalization": "lower",',
    '  "keepPreAnnotationsInOriginalLine": "keepLine",',
    '  "keepPostAnnotationsInOriginalLine": "keepLine",',
    '  "keepEmptyBracketsTogether": true,',
    '  "keepSingleLinedBlocksTogether": true,',
    '  "keepOriginalEmptyLines": true,',
    '  "maxKeepEmptyLines": 2,',
    '  "openingBraceInNewLine": false,',
    '  "selectInNewLine": true,',
    '  "tabSize": 2,',
    '  "finalNewline": true,',
    '  "formatDocComments": false,',
    '  "maxDocCommentLine": 60,',
    '  "whitespaceBeforeColon": true,',
    '  "whitespaceBeforeColonInAnnotation": false,',
    '  "whitespaceAfterColon": true,',
    '  "whitespaceAfterColonInAnnotation": true,',
    '  "whitespaceAfterComma": true,',
    '  "whitespaceAroundAlignedOps": true,',
    '  "whitespaceAroundBinaryOps": true,',
    '  "whitespaceWithinBrackets": false',
    '}',
  ];

  // due to json type received (not string) we stringify it upfront
  const snapshotContent: string = JSON.stringify(snapshot['.cdsprettier.json'], null, 2);
  samplecode.testSampleFilesTemplates(
    { '.cdsprettier.json': snapshotContent },
    '.cdsprettier.json',
    expectedTemplateLines,
  );
});

test('Sample file default-env.js matches expected file template', (): void => {
  const expectedTemplateLines: string[] = [
    '/**',
    ' * Fetches `VCAP_SERVICES` for a given CF application and writes it to a file.',
    ' * It utilizes the Cloud Foundry CLI to do so.',
    ' *',
    ' * Make sure you are logged in via the CF CLI (`cf login`) before running the',
    ' * script. You can check your login and the organization and space you are',
    ' * targetting by using `cf target`.',
    ' *',
    ' * Allows on-premise connectivity proxying if necessary',
    ' *',
    ' * @author Sebastian Blessing',
    ' */',
    "const fs = require('fs');",
    "const util = require('util');",
    "const exec = util.promisify(require('child_process').exec);",
    "const spawn = util.promisify(require('child_process').spawn);",
    '',
    'async function getAppGuid(appName) {',
    '  const cmd = `cf app ${appName} --guid`;',
    '  console.log(cmd);',
    '  const { stdout, stderr } = await exec(cmd);',
    '  if (stderr) console.log(`stderr: ${stderr}`);',
    '  return stdout.trim();',
    '}',
    '',
    'async function getDefaultEnv(appGuid) {',
    '  const cmd = `cf curl "v3/apps/${appGuid}/env"`;',
    '  console.log(cmd);',
    '  const { stdout, stderr } = await exec(cmd);',
    '  if (stderr) console.log(`stderr: ${stderr}`);',
    '  return JSON.parse(stdout).system_env_json;',
    '}',
    '',
    '(async () => {',
    '  const myArgs = process.argv.slice(2);',
    '  const appName = myArgs[0];',
    '  if (!appName) {',
    "    console.error('Please provide a CF application name to fetch its environment!');",
    '    return;',
    '  }',
    '',
    '  let envFileName = myArgs[1];',
    '',
    "  envFileName = envFileName ? envFileName : 'default-env.json';",
    '  console.log(`Writing environment of ${appName} to ${envFileName}`);',
    '',
    '  const defaultEnv = await getDefaultEnv(await getAppGuid(appName));',
    '',
    '  let bRunProxy = false;',
    '  let proxyPort = null;',
    '  let proxyHost = null;',
    '',
    "  if (defaultEnv['VCAP_SERVICES']['connectivity']) {",
    '    proxyPort = defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_port;',
    '    proxyHost = defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_host;',
    "    defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_host = 'localhost';",
    '    bRunProxy = true;',
    '  }',
    '',
    "  fs.writeFile('default-env.json', JSON.stringify(defaultEnv, null, 2), async (err) => {",
    '    if (err) {',
    '      console.error(err);',
    '    } else if (bRunProxy) {',
    '      console.log(`cf ssh ${appName} -L ${proxyPort}:${proxyHost}:${proxyPort}`);',
    "      await spawn('cf', [`ssh ${appName} -L ${proxyPort}:${proxyHost}:${proxyPort}`], {",
    '        shell: true,',
    "        stdio: 'inherit',",
    '      });',
    '    }',
    '  });',
    '',
    "  console.log('Done');",
    '})();',
  ];
  samplecode.testSampleFilesTemplates(snapshot, 'default-env.js', expectedTemplateLines);
});

test('Sample file schema.cds matches expected file template', (): void => {
  const expectedTemplateLines: string[] = [
    "using { managed } from '@sap/cds/common';",
    '',
    `namespace de.customer.org.project;`,
    '',
    'entity Entity1 : managed {',
    '  key ID: Integer;',
    '  descr: localized String(111);',
    '}',
  ];
  samplecode.testSampleFilesTemplates(snapshot, 'db/schema.cds', expectedTemplateLines);
});

test('Sample file schema.cds matches expected file template with given options', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    "using { managed } from '@sap/cds/common';",
    '',
    'namespace de.mycustomer.myorg.myproject;',
    '',
    'entity MyEntity : managed {',
    '  key ID: Integer;',
    '  descr: localized String(111);',
    '}',
  ];
  samplecode.testSampleFilesTemplates(snapshot, 'db/schema.cds', expectedTemplateLines);
});

test('Sample file de.customer.org.project-Entity1.csv matches expected file template', (): void => {
  const expectedTemplateLines: string[] = [
    'ID,createdAt,createdBy,modifiedAt,modifiedBy,descr',
    '1,,,,,Description 1',
    '2,,,,,Description 2',
    '3,,,,,Description 3',
  ];
  samplecode.testSampleFilesTemplates(snapshot, 'test/data/de.customer.org.project-Entity1.csv', expectedTemplateLines);
});

test('Sample file de.mycustomer.myorg.myproject-MyEntity.csv matches expected file template with given options', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    'ID,createdAt,createdBy,modifiedAt,modifiedBy,descr',
    '1,,,,,Description 1',
    '2,,,,,Description 2',
    '3,,,,,Description 3',
  ];
  samplecode.testSampleFilesTemplates(
    snapshot,
    'test/data/de.mycustomer.myorg.myproject-MyEntity.csv',
    expectedTemplateLines,
  );
});

test('Sample file de.customer.org.project-Entity1.texts.csv matches expected file template', (): void => {
  const expectedTemplateLines: string[] = ['locale,ID,descr'];
  samplecode.testSampleFilesTemplates(
    snapshot,
    'test/data/de.customer.org.project-Entity1.texts.csv',
    expectedTemplateLines,
  );
});

test('Sample file de.mycustomer.myorg.myproject-MyEntity.texts.csv matches expected file template with given options', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = ['locale,ID,descr'];
  samplecode.testSampleFilesTemplates(
    snapshot,
    'test/data/de.mycustomer.myorg.myproject-MyEntity.texts.csv',
    expectedTemplateLines,
  );
});

test('Sample file ./srv/index.cds matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [`using from './controller/service-1/service-1';`];
  samplecode.testSampleFilesTemplates(snapshot, 'srv/index.cds', expectedTemplateLines);
});

test('Sample file ./srv/controller/service-1/handler/MyEntityHandler.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `import {
          AfterRead,
          EntityHandler,
          Inject,
          Req,
          Results,
          Service,
          CDS_DISPATCHER,
          type TypedRequest,
          Use,
        } from '@dxfrontier/cds-ts-dispatcher';`,
    ``,
    `import { ${customProps.entityName} } from '#cds-models/ServiceA';`,
    `import { MiddlewareMethodAfterRead1 } from '../../../middleware/MiddlewareAfterRead1';`,
    `import { Middleware${customProps.entityName} } from '../../../middleware/Middleware${customProps.entityName}';`,
    ``,
    `@EntityHandler(${customProps.entityName})`,
    `@Use(Middleware${customProps.entityName})`,
    `export class ${customProps.entityName}Handler {`,
    `  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;`,
    `  // @OnRead, @BeforeRead, @AfterRead, @OnUpdate ...`,
    ``,
    `  @AfterRead()`,
    `  @Use(MiddlewareMethodAfterRead1)`,
    `  public async afterRead(@Results() results: ${customProps.entityName}, @Req() req: TypedRequest<${customProps.entityName}>): Promise<${customProps.entityName}> {`,
    `    console.log(req);`,
    `    return results;`,
    `  }`,
    `}`,
  ];
  samplecode.testSampleFilesTemplates(
    snapshot,
    `srv/controller/service-1/handler/${customProps.entityName}Handler.ts`,
    expectedTemplateLines,
  );
});

test('Sample file .srv/controller/service-1/handler/UnboundActionsHandler.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `import { Inject, Service, CDS_DISPATCHER, UnboundActions } from '@dxfrontier/cds-ts-dispatcher';`,
    ``,
    `@UnboundActions()`,
    `export class UnboundActionsHandler {`,
    `  @Inject(CDS_DISPATCHER.SRV) private readonly service: Service;`,
    `  // @OnError, @OnEvent, @OnAction, @OnFunction`,
    `}`,
  ];

  samplecode.testSampleFilesTemplates(
    snapshot,
    'srv/controller/service-1/handler/UnboundActionsHandler.ts',
    expectedTemplateLines,
  );
});

test('Sample file ./srv/controller/service-1/handler/UnboundActionsHandler.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `import { Inject, Service, CDS_DISPATCHER, UnboundActions } from '@dxfrontier/cds-ts-dispatcher';`,
    ``,
    `@UnboundActions()`,
    `export class UnboundActionsHandler {`,
    `  @Inject(CDS_DISPATCHER.SRV) private readonly service: Service;`,
    `  // @OnError, @OnEvent, @OnAction, @OnFunction`,
    `}`,
  ];

  samplecode.testSampleFilesTemplates(
    snapshot,
    'srv/controller/service-1/handler/UnboundActionsHandler.ts',
    expectedTemplateLines,
  );
});

test('Sample file ./srv/controller/service-1/service-1.cds matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `using {${customProps.namespace} as Base} from '../../../db/schema';`,
    ``,
    `service ServiceA {`,
    `   @readonly`,
    `   entity ${customProps.entityName} as projection on Base.${customProps.entityName};`,
    `}`,
  ];

  samplecode.testSampleFilesTemplates(snapshot, 'srv/controller/service-1/service-1.cds', expectedTemplateLines);
});

test('Sample file ./srv/controller/service-1/service-1.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';`,
    `import { ${customProps.entityName}Handler } from './handler/${customProps.entityName}Handler';`,
    `import { UnboundActionsHandler } from './handler/UnboundActionsHandler';`,
    '',
    `export = new CDSDispatcher([${customProps.entityName}Handler, UnboundActionsHandler]).initialize();`,
  ];

  samplecode.testSampleFilesTemplates(snapshot, 'srv/controller/service-1/service-1.ts', expectedTemplateLines);
});

test('Sample file ./srv/middleware/MyEntity.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';`,
    `import type { ${customProps.entityName} } from '#cds-models/ServiceA';`,
    ``,
    `export class Middleware${customProps.entityName} implements MiddlewareImpl {`,
    `  public async use(req: TypedRequest<${customProps.entityName}>, next: NextMiddleware): Promise<void> {`,
    `    console.log('Middleware entity 1 : EXECUTED');`,
    `    await next();`,
    `  }`,
    `}`,
  ];

  samplecode.testSampleFilesTemplates(
    snapshot,
    `srv/middleware/Middleware${customProps.entityName}.ts`,
    expectedTemplateLines,
  );
});

test('Sample file ./srv/middleware/MiddlewareAfterRead.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';`,
    `import type { ${customProps.entityName} } from '#cds-models/ServiceA';`,
    ``,
    `export class Middleware${customProps.entityName} implements MiddlewareImpl {`,
    `  public async use(req: TypedRequest<${customProps.entityName}>, next: NextMiddleware): Promise<void> {`,
    `    console.log('Middleware entity 1 : EXECUTED');`,
    `    await next();`,
    `  }`,
    `}`,
  ];

  samplecode.testSampleFilesTemplates(snapshot, 'srv/middleware/MiddlewareAfterRead.ts', expectedTemplateLines);
});

test('Sample file ./srv/repository/MyEntityRepository.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `import { Repository } from '@dxfrontier/cds-ts-dispatcher';`,
    `import { BaseRepository } from '@dxfrontier/cds-ts-repository';`,
    ``,
    `import { ${customProps.entityName} } from '#cds-models/ServiceA';`,
    ``,
    `@Repository()`,
    `export class ${customProps.entityName}Repository extends BaseRepository<${customProps.entityName}> {`,
    `  constructor() {`,
    `    super(${customProps.entityName});`,
    `  }`,
    `  // ... define custom CDS-QL actions if BaseRepository ones are not satisfying your needs !`,
    `}`,
  ];

  samplecode.testSampleFilesTemplates(
    snapshot,
    `srv/repository/${customProps.entityName}Repository.ts`,
    expectedTemplateLines,
  );
});

test('Sample file ./srv/service/MyEntityService.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `import { Inject, Service, ServiceLogic, CDS_DISPATCHER } from '@dxfrontier/cds-ts-dispatcher';`,
    ``,
    `import { ${customProps.entityName}Repository } from '../repository/${customProps.entityName}Repository';`,
    ``,
    `@ServiceLogic()`,
    `export class ${customProps.entityName}Service {`,
    `  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;`,
    `  @Inject(${customProps.entityName}Repository) private readonly ${customProps.entityName}Service: ${customProps.entityName}Repository;`,
    `}`,
  ];

  samplecode.testSampleFilesTemplates(
    snapshot,
    `srv/service/${customProps.entityName}Service.ts`,
    expectedTemplateLines,
  );
});

test('Sample file ./srv/util/constants/constants.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `const Constants = {`,
    `  // Example`,
    `  CONSTANT_1: {`,
    `    PROP_CONSTANT_1: 'SOMETHING',`,
    `  },`,
    `};`,
    ``,
    `export default Constants;`,
  ];

  samplecode.testSampleFilesTemplates(snapshot, 'srv/util/constants/constants.ts', expectedTemplateLines);
});

test('Sample file ./srv/util/helpers/util.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [
    `const Util = {`,
    `  // Example`,
    `  aHelperFunction() {`,
    `    return 1;`,
    `  },`,
    `};`,
    ``,
    `export default Util;`,
  ];

  samplecode.testSampleFilesTemplates(snapshot, 'srv/util/helpers/util.ts', expectedTemplateLines);
});

test('Sample file ./srv/util/types/types.ts matches expected file template', (): void => {
  const customProps = {
    ...props,
    namespace: 'de.mycustomer.myorg.myproject',
    entityName: 'MyEntity',
  };

  const project = new CapServiceProject(customProps);
  const snapshot = synthSnapshot(project);

  const expectedTemplateLines: string[] = [`// Example`, `export type AType = string;`];

  samplecode.testSampleFilesTemplates(snapshot, 'srv/util/types/types.ts', expectedTemplateLines);
});
