import { SampleFile } from 'projen';
import { CapServiceProject, CapServiceProjectOptions } from '.././project';
import { BaseProject, SampleCodeConfigBase } from '../../base';
import { Settings } from '../../util/types';
import { constants } from '../../util/constants';

/**
 * Implementing all relevant SampleCode configuration for the CapService project.
 */
export class SampleCodeConfigCapService extends SampleCodeConfigBase {
  private options: CapServiceProjectOptions;

  constructor(project: CapServiceProject, options: CapServiceProjectOptions) {
    super(project);

    this.options = options;
  }

  /**
   * Capire root directory templates for the SampleCode configuration.
   * @return Contents for sample root directory files.
   * @protected
   */
  protected get sampleCodeFileRootTemplates(): Record<string, string[]> {
    return {
      '.cdsrc.json': [
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
      ],
      '.cdsprettier.json': [
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
      ],
      'default-env.js': [
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
      ],
      'mta.yaml': [
        "_schema-version: '3.1'",
        `ID: ${this.options.namespace}`,
        'version: 0.0.1',
        `description: ${this.options.description}`,
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
        `  - name: ${this.options.name}-srv`,
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
        `      - name: ${this.options.name}-uaa`,
        `      - name: ${this.options.name}-destination`,
        `      - name: ${this.options.name}-connectivity`,
        `      - name: ${this.options.name}-db`,
        `  - name: ${this.options.name}-destinations`,
        '    type: com.sap.application.content',
        '    requires:',
        `      - name: ${this.options.name}-uaa`,
        '        parameters:',
        '          service-key:',
        `            name: ${this.options.name}-uaa-key`,
        '      - name: srv-api',
        `      - name: ${this.options.name}-destination`,
        '        parameters:',
        '          content-target: true',
        '    parameters:',
        '      content:',
        '        instance:',
        '          destinations:',
        '            - Authentication: OAuth2UserTokenExchange',
        `              Name: ${this.options.name}-app-srv`,
        `              TokenServiceInstanceName: ${this.options.name}-uaa`,
        `              TokenServiceKeyName: ${this.options.name}-uaa-key`,
        '              URL: ~{srv-api/srv-url}',
        `              sap.cloud.service: ${this.options.namespace}`,
        '          existing_destinations_policy: update',
        '    build-parameters:',
        '      no-source: true',
        `  - name: ${this.options.name}-db-deployer`,
        '    type: hdb',
        '    path: gen/db',
        '    parameters:',
        '      buildpack: nodejs_buildpack',
        '    requires:',
        `      - name: ${this.options.name}-db`,
        `      - name: ${this.options.name}-uaa`,
        'resources:',
        `  - name: ${this.options.name}-uaa`,
        '    type: org.cloudfoundry.managed-service',
        '    parameters:',
        '      path: ./xs-security.json',
        '      service: xsuaa',
        '      service-plan: application',
        '      config:',
        '        tenant-mode: dedicated',
        `        xsappname: ${this.options.name}`,
        `  - name: ${this.options.name}-connectivity`,
        '    type: org.cloudfoundry.managed-service',
        '    parameters:',
        '      service: connectivity',
        '      service-plan: lite',
        `  - name: ${this.options.name}-destination`,
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
        `  - name: ${this.options.name}-db`,
        '    type: com.sap.xs.hdi-container',
        '    parameters:',
        '      service: hana',
        '      service-plan: hdi-shared',
        '    properties:',
        '      hdi-service-name: ${service-name}',
      ],
      'xs-security.json': ['{', '  "scopes": [],', '  "attributes": [],', '  "role-templates": []', '}'],
    };
  }

  /**
   * Capire `srv` directory templates for the SampleCode configuration.
   * @return Contents for sample `srv` directory files.
   * @protected
   */
  protected get sampleCodeFileSrvTemplates(): Record<string, string[]> {
    return {
      // Start index.ts
      'srv/index.cds': [`using from './controller/service-1/service-1';`],
      // End index.ts

      // Start Entity handler
      [`srv/controller/service-1/handler/${this.options.entityName}Handler.ts`]: [
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
        `import { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        `import { MiddlewareMethodAfterRead1 } from '../../../middleware/MiddlewareAfterRead1';`,
        `import { Middleware${this.options.entityName} } from '../../../middleware/Middleware${this.options.entityName}';`,
        ``,
        `@EntityHandler(${this.options.entityName})`,
        `@Use(Middleware${this.options.entityName})`,
        `export class ${this.options.entityName}Handler {`,
        `  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;`,
        `  // @OnRead, @BeforeRead, @AfterRead, @OnUpdate ...`,
        ``,
        `  @AfterRead()`,
        `  @Use(MiddlewareMethodAfterRead1)`,
        `  public async afterRead(@Results() results: ${this.options.entityName}, @Req() req: TypedRequest<${this.options.entityName}>): Promise<${this.options.entityName}> {`,
        `    console.log(req);`,
        `    return results;`,
        `  }`,
        `}`,
      ],
      // End

      // Start UnboundActionsHandler
      'srv/controller/service-1/handler/UnboundActionsHandler.ts': [
        `import { Inject, Service, CDS_DISPATCHER, UnboundActions } from '@dxfrontier/cds-ts-dispatcher';`,
        ``,
        `@UnboundActions()`,
        `export class UnboundActionsHandler {`,
        `  @Inject(CDS_DISPATCHER.SRV) private readonly service: Service;`,
        `  // @OnError, @OnEvent, @OnAction, @OnFunction`,
        `}`,
      ],
      // End UnboundActionsHandler

      // Start service-1.cds
      'srv/controller/service-1/service-1.cds': [
        `using {${this.options.namespace} as Base} from '../../../db/schema';`,
        ``,
        `service ServiceA {`,
        `   @readonly`,
        `   entity ${this.options.entityName} as projection on Base.${this.options.entityName};`,
        `}`,
      ],
      // End service-1.cds

      // Start service-1.ts
      'srv/controller/service-1/service-1.ts': [
        `import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';`,
        `import { ${this.options.entityName}Handler } from './handler/${this.options.entityName}Handler';`,
        `import { UnboundActionsHandler } from './handler/UnboundActionsHandler';`,
        '',
        `export = new CDSDispatcher([${this.options.entityName}Handler, UnboundActionsHandler]).initialize();`,
      ],
      // End service-1.ts

      // Start Middleware
      [`srv/middleware/Middleware${this.options.entityName}.ts`]: [
        `import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';`,
        `import type { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        ``,
        `export class Middleware${this.options.entityName} implements MiddlewareImpl {`,
        `  public async use(req: TypedRequest<${this.options.entityName}>, next: NextMiddleware): Promise<void> {`,
        `    console.log('Middleware entity 1 : EXECUTED');`,
        `    await next();`,
        `  }`,
        `}`,
      ],
      // End Middleware

      // Start MiddlewareAfterRead1
      'srv/middleware/MiddlewareAfterRead.ts': [
        `import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';`,
        `import type { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        ``,
        `export class Middleware${this.options.entityName} implements MiddlewareImpl {`,
        `  public async use(req: TypedRequest<${this.options.entityName}>, next: NextMiddleware): Promise<void> {`,
        `    console.log('Middleware entity 1 : EXECUTED');`,
        `    await next();`,
        `  }`,
        `}`,
      ],
      // End MiddlewareAfterRead1

      // Start Repository
      [`srv/repository/${this.options.entityName}Repository.ts`]: [
        `import { Repository } from '@dxfrontier/cds-ts-dispatcher';`,
        `import { BaseRepository } from '@dxfrontier/cds-ts-repository';`,
        ``,
        `import { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        ``,
        `@Repository()`,
        `export class ${this.options.entityName}Repository extends BaseRepository<${this.options.entityName}> {`,
        `  constructor() {`,
        `    super(${this.options.entityName});`,
        `  }`,
        `  // ... define custom CDS-QL actions if BaseRepository ones are not satisfying your needs !`,
        `}`,
      ],
      // End Repository

      // Start Service
      [`srv/service/${this.options.entityName}Service.ts`]: [
        `import { Inject, Service, ServiceLogic, CDS_DISPATCHER } from '@dxfrontier/cds-ts-dispatcher';`,
        ``,
        `import { ${this.options.entityName}Repository } from '../repository/${this.options.entityName}Repository';`,
        ``,
        `@ServiceLogic()`,
        `export class ${this.options.entityName}Service {`,
        `  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;`,
        `  @Inject(${this.options.entityName}Repository) private readonly ${this.options.entityName}Service: ${this.options.entityName}Repository;`,
        `}`,
      ],
      // End Service

      // Start constants.ts
      'srv/util/constants/constants.ts': [
        `const Constants = {`,
        `  // Example`,
        `  CONSTANT_1: {`,
        `    PROP_CONSTANT_1: 'SOMETHING',`,
        `  },`,
        `};`,
        ``,
        `export default Constants;`,
      ],
      // End constants.ts

      // Start util.ts
      'srv/util/helpers/util.ts': [
        `const Util = {`,
        `  // Example`,
        `  aHelperFunction() {`,
        `    return 1;`,
        `  },`,
        `};`,
        ``,
        `export default Util;`,
      ],
      // End util.ts

      // Start types.ts
      'srv/util/types/types.ts': [`// Example`, `export type AType = string;`],
      // End types.ts
    };
  }

  /**
   * Capire db directory templates for the SampleCode configuration.
   * @return Contents for sample db directory files.
   * @protected
   */
  protected get sampleCodeFileDbTemplates(): Record<string, string[]> {
    return {
      'db/schema.cds': [
        "using { managed } from '@sap/cds/common';",
        '',
        `namespace ${this.options.namespace};`,
        '',
        `entity ${this.options.entityName} : managed {`,
        '  key ID: Integer;',
        '  descr: localized String(111);',
        '}',
      ],
    };
  }

  /**
   * Capire data directory templates for the SampleCode configuration.
   * @return Contents for sample data directory files.
   * @protected
   */
  protected get sampleCodeFileDataTemplates(): Record<string, string[]> {
    const filePath = `test/data/${this.options.namespace}-${this.options.entityName}.csv`;
    const filePathTexts = `test/data/${this.options.namespace}-${this.options.entityName}.texts.csv`;

    return {
      [filePath]: [
        'ID,createdAt,createdBy,modifiedAt,modifiedBy,descr',
        '1,,,,,Description 1',
        '2,,,,,Description 2',
        '3,,,,,Description 3',
      ],
      [filePathTexts]: ['locale,ID,descr'],
    };
  }

  /**
   * Creates the template files for the specified directory.
   * @param templates The templates to create.
   */
  public createTemplates(templates: Record<string, string[]>): void {
    for (const path in templates) {
      if (templates[path]) {
        new SampleFile(this.project, path, {
          contents: templates[path].join('\n'),
        });
      }
    }
  }

  protected override get additionalDevDependencies(): string[] {
    return [
      `${constants['@cap-js/cds-typer'].NAME}@${constants['@cap-js/cds-typer'].VERSION}`,
      `${constants['@cap-js/cds-types'].NAME}@${constants['@cap-js/cds-types'].VERSION}`,
      `${constants['@sap/cds-dk'].NAME}@${constants['@sap/cds-dk'].VERSION}`,
      `${constants['@sap/cds-lsp'].NAME}@${constants['@sap/cds-lsp'].VERSION}`,
    ];
  }

  protected override get additionalDependencies(): string[] {
    return [
      '@dxfrontier/cds-ts-dispatcher@^3.2.7',
      `${constants['@dxfrontier/cds-ts-repository'].NAME}@${constants['@dxfrontier/cds-ts-repository'].VERSION}`,
      `${constants['@sap/cds'].NAME}@${constants['@sap/cds'].VERSION}`,
      `${constants['@sap/xssec'].NAME}@${constants['@sap/xssec'].VERSION}`,
    ];
  }

  protected override get additionalScripts(): Record<string, string> {
    return {
      start: 'cds-serve --production',
      'start:local': 'cds-ts serve',
      watch: 'cds-ts watch',
      'build:cds': 'cds-ts build --production',
      'build:cds:message': 'echo "Build CDS ..."',
      'build:ts': 'tsc',
      'build:ts:message': 'echo "Transpile TS => JS ..."',
      'build:srv:clean:ts': 'find gen/srv/srv -type f -name "*.ts" -delete',
      'build:srv:clean:ts:message': 'echo "Clean TS files from srv folder ..."',
      build:
        'run-s build:cds:message build:cds build:ts:message build:ts build:srv:clean:ts:message build:srv:clean:ts',
    };
  }

  protected override get additionalSettings(): Settings {
    return {
      imports: {
        '#cds-models/*': './@cds-models/*/index.js',
        '#dispatcher': './@dispatcher/index.js',
      },
    };
  }

  public override registerConfig(): void {
    if (this.project instanceof BaseProject) {
      this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
      this.project.npmConfig?.addDependencies(this.additionalDependencies);
      this.project.npmConfig?.addScripts(this.additionalScripts);
      this.project.npmConfig?.addSettings(this.additionalSettings);
    }
  }

  public override applyConfig(): void {
    this.createTemplates(this.sampleCodeFileRootTemplates);
    this.createTemplates(this.sampleCodeFileDbTemplates);
    this.createTemplates(this.sampleCodeFileDataTemplates);
    this.createTemplates(this.sampleCodeFileSrvTemplates);
  }
}
