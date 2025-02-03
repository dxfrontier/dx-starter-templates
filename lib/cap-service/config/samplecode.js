"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../../base");
const constants_1 = require("../../util/constants");
/**
 * Implementing all relevant SampleCode configuration for the CapService project.
 */
class SampleCodeConfigCapService extends base_1.SampleCodeConfigBase {
    constructor(project, options) {
        super(project);
        this.options = options;
    }
    /**
     * Capire root directory templates for the SampleCode configuration.
     * @return Contents for sample root directory files.
     * @protected
     */
    get sampleCodeFileRootTemplates() {
        return {
            // Start .cdsrc.json
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
            // End .cdsrc.json
            // Start .cdsprettier.json
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
            // End .cdsprettier.json
            // Start .eslintrc.json
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
            // End .eslintrc.json
            // Start .eslintrc.json
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
            // End .eslintrc.json
        };
    }
    /**
     * Capire `srv` directory templates for the SampleCode configuration.
     * @return Contents for sample `srv` directory files.
     * @protected
     */
    get sampleCodeFileSrvTemplates() {
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
                `import { MiddlewareAfterRead } from '../../../middleware/MiddlewareAfterRead';`,
                `import { Middleware${this.options.entityName} } from '../../../middleware/Middleware${this.options.entityName}';`,
                ``,
                `@EntityHandler(${this.options.entityName})`,
                `@Use(Middleware${this.options.entityName})`,
                `export class ${this.options.entityName}Handler {`,
                `  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;`,
                `  // @OnRead, @BeforeRead, @AfterRead, @OnUpdate ...`,
                ``,
                `  @AfterRead()`,
                `  @Use(MiddlewareAfterRead)`,
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
            // Start MiddlewareAfterRead
            'srv/middleware/MiddlewareAfterRead.ts': [
                `import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';`,
                `import type { ${this.options.entityName} } from '#cds-models/ServiceA';`,
                ``,
                `export class MiddlewareAfterRead implements MiddlewareImpl {`,
                `  public async use(req: TypedRequest<${this.options.entityName}>, next: NextMiddleware): Promise<void> {`,
                `    console.log('Middleware entity 1 : EXECUTED');`,
                `    await next();`,
                `  }`,
                `}`,
            ],
            // End MiddlewareAfterRead
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
    get sampleCodeFileDbTemplates() {
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
    get sampleCodeFileDataTemplates() {
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
    createTemplates(templates) {
        for (const path in templates) {
            if (templates[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: templates[path].join('\n'),
                });
            }
        }
    }
    get additionalDevDependencies() {
        return [
            `${constants_1.constants['@cap-js/cds-typer'].NAME}@${constants_1.constants['@cap-js/cds-typer'].VERSION}`,
            `${constants_1.constants['@cap-js/cds-types'].NAME}@${constants_1.constants['@cap-js/cds-types'].VERSION}`,
            `${constants_1.constants['@sap/cds-dk'].NAME}@${constants_1.constants['@sap/cds-dk'].VERSION}`,
            `${constants_1.constants['@sap/cds-lsp'].NAME}@${constants_1.constants['@sap/cds-lsp'].VERSION}`,
        ];
    }
    get additionalDependencies() {
        return [
            `${constants_1.constants['@dxfrontier/cds-ts-repository'].NAME}@${constants_1.constants['@dxfrontier/cds-ts-repository'].VERSION}`,
            `${constants_1.constants['@sap/cds'].NAME}@${constants_1.constants['@sap/cds'].VERSION}`,
            `${constants_1.constants['@sap/xssec'].NAME}@${constants_1.constants['@sap/xssec'].VERSION}`,
        ];
    }
    get additionalScripts() {
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
            build: 'run-s build:cds:message build:cds build:ts:message build:ts build:srv:clean:ts:message build:srv:clean:ts',
        };
    }
    get additionalSettings() {
        return {
            imports: {
                '#cds-models/*': './@cds-models/*/index.js',
                '#dispatcher': './@dispatcher/index.js',
            },
        };
    }
    registerConfig() {
        if (this.project instanceof base_1.BaseProject) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addDependencies(this.additionalDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.npmConfig?.addSettings(this.additionalSettings);
        }
    }
    applyConfig() {
        this.createTemplates(this.sampleCodeFileRootTemplates);
        this.createTemplates(this.sampleCodeFileDbTemplates);
        this.createTemplates(this.sampleCodeFileDataTemplates);
        this.createTemplates(this.sampleCodeFileSrvTemplates);
        // new SampleReadme(this.project, {
        //   contents: [
        //     `# ${this.options.name}`,
        //     '',
        //     `${this.options.description}`,
        //     '',
        //     '# Table of Contents',
        //     '',
        //     `- [${this.options.name}](#${this.options.name})`,
        //     '- [Table of Contents](#table-of-contents)',
        //     '  - [Prerequisites](#prerequisites)',
        //     '  - [`Installation`](#installation)',
        //     '  - [`Usage`](#usage)',
        //     '    - [Start locally](#start-locally)',
        //     '    - [Debug locally](#debug-locally)',
        //     '    - [Deploy (`DEV`, `QA`, `PROD`)](#deploy-dev-qa-prod)',
        //     '      - [Deployment steps](#deployment-steps)',
        //     '      - [`Branch-Specific` deployment rules](#branch-specific-deployment-rules)',
        //     '  - [Project tools and utilities](#project-tools-and-utilities)',
        //     '    - [Prettier](#prettier)',
        //     '    - [ESLint](#eslint)',
        //     '    - [Lint-staged](#lint-staged)',
        //     '    - [Commit-Lint](#commit-lint)',
        //     '    - [Husky](#husky)',
        //     '  - [Authors](#authors)',
        //     '',
        //     '## Prerequisites',
        //     '',
        //     'Install [**@sap/cds-dk**](https://cap.cloud.sap/docs/get-started/), [typescript](https://www.typescriptlang.org/), [ts-node](https://www.npmjs.com/package/ts-node) globally:',
        //     '',
        //     '```bash',
        //     'npm install -g @sap/cds-dk typescript ts-node',
        //     '```',
        //     '',
        //     '## `Installation`',
        //     '',
        //     '1. After generating the project using `projen`, install the required dependencies by running:',
        //     '',
        //     '```bash',
        //     'npm install',
        //     '```',
        //     '',
        //     '2. Create the following three labels in your repository by navigating to `Pull Requests` > `Labels` > `New Label`:',
        //     '',
        //     '   - **patch**',
        //     '   - **minor**',
        //     '   - **major**',
        //     '',
        //     '> [!TIP]',
        //     '> For more info about `SemVer (MAJOR.MINOR.PATCH)`, visit [SemVer.org](https://semver.org/)',
        //     '',
        //     '3. The following secrets must be created in your GitHub repository to enable the automatic deployment process:',
        //     '',
        //     '| Parameter       | Description                                                                   |',
        //     '| --------------- | ----------------------------------------------------------------------------- |',
        //     '| `CF_IAS_ORIGIN` | The origin used for IAS authentication when logging into Cloud Foundry. |',
        //     '| `CF_API_DEV` | The API endpoint for the development Cloud Foundry environment. |',
        //     '| `CF_ORG_DEV` | The organization for the development environment in Cloud Foundry. |',
        //     '| `CF_SPACE_DEV` | The space within the development organization in Cloud Foundry. |',
        //     '| `CF_USERNAME_DEV` | The username for logging into the development environment in Cloud Foundry. |',
        //     '| `CF_PASSWORD_DEV` | The password for logging into the development environment in Cloud Foundry. |',
        //     '| `CF_API_PROD` | The API endpoint for the production Cloud Foundry environment. |',
        //     '| `CF_ORG_PROD` | The organization for the production environment in Cloud Foundry. |',
        //     '| `CF_SPACE_PROD` | The space within the production organization in Cloud Foundry. |',
        //     '| `CF_USERNAME_PROD` | The username for logging into the production environment in Cloud Foundry. |',
        //     '| `CF_PASSWORD_PROD` | The password for logging into the production environment in Cloud Foundry. |',
        //     '',
        //     '## `Usage`',
        //     '',
        //     '### Start locally',
        //     '',
        //     'Start the CAP server in watch mode (hot-reload):',
        //     '',
        //     '```bash',
        //     'npm run watch',
        //     '```',
        //     '',
        //     '> [!TIP]',
        //     '> Access the service at http://localhost:4004',
        //     '',
        //     '### Debug locally',
        //     '',
        //     '1. Add breakpoints in your `.ts` files.',
        //     '2. Start the CAP server in debug mode:',
        //     '',
        //     '```bash',
        //     'npm run watch',
        //     '```',
        //     '',
        //     '3. Refresh the service.',
        //     '4. The debugger should stop at the breakpoint line.',
        //     '',
        //     '### Deploy (`DEV`, `QA`, `PROD`)',
        //     '',
        //     'The deployment process is automatically triggered when a `PULL REQUEST` is merged into the `main` branch.',
        //     '',
        //     '#### Deployment steps',
        //     '',
        //     '- `Version Bump`: The `package.json` version is incremented based on the selected label (`patch`, `minor`, or `major`).',
        //     '- `GitHub Tags`: A new tag is created to mark the release.',
        //     '- `GitHub Release`: A release is published in the repository, summarizing the changes.',
        //     '- `Changelog Update`: The `CHANGELOG.md` file is updated with the latest commit messages.',
        //     '',
        //     '> [!CAUTION]',
        //     '> Secrets from installation process are required for automatic deployment. See **[installation](#installation)**.',
        //     '',
        //     '> [!CAUTION]',
        //     '> Every `PULL REQUEST` merged into `main` must have one of the following labels:',
        //     '> - `patch` **(0.0.x)**',
        //     '> - `minor` **(0.x.0)**',
        //     '> - `major` **(x.0.0)**',
        //     '',
        //     '#### `Branch-Specific` deployment rules',
        //     '',
        //     '- `Development (DEV)`: Changes merged into the `dev` branch trigger deployment to the development environment.',
        //     '- `Quality Assurance (QA)`: Merging changes into `qa` triggers deployment to the QA environment.',
        //     '- `Production (PROD)`: Merging changes into `prod` deploys to production.',
        //     '',
        //     '> [!TIP]',
        //     '> To deploy all environments (`DEV`, `QA`, `PROD`), maintain `dev`, `qa`, and `prod` branches and merge changes accordingly.',
        //     '',
        //     '## Project tools and utilities',
        //     '',
        //     '### Prettier',
        //     '',
        //     'A code formatter enforcing consistent style.',
        //     '',
        //     '> [!NOTE]',
        //     '> Prettier runs automatically on commit.',
        //     '',
        //     '> [!TIP]',
        //     '> Manually run Prettier:',
        //     '> ```bash',
        //     '> npm run prettier:fix',
        //     '> ```',
        //     '',
        //     '### ESLint',
        //     '',
        //     'A linter enforcing TypeScript coding standards.',
        //     '',
        //     '> [!NOTE]',
        //     '> ESLint runs automatically on commit.',
        //     '',
        //     '> [!TIP]',
        //     '> Manually run ESLint:',
        //     '> ```bash',
        //     '> npm run eslint:fix',
        //     '> ```',
        //     '',
        //     '### Lint-staged',
        //     '',
        //     'Runs linters only on staged files before committing.',
        //     '',
        //     '### Commit-Lint',
        //     '',
        //     'Ensures commit messages follow a conventional format.',
        //     '',
        //     '### Husky',
        //     '',
        //     'Manages Git hooks for automated tasks (e.g., running tests, linters).',
        //     '',
        //     '## Authors',
        //     '',
        //     '- [@Author1](#link1)',
        //     '- [@Author2](#link2)',
        //     '',
        //     '<p align="right">(<a href="#table-of-contents">back to top</a>)</p>',
        //   ].join('\n'),
        // })
    }
}
exports.SampleCodeConfigCapService = SampleCodeConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFvQztBQUVwQyxxQ0FBK0Q7QUFFL0Qsb0RBQWlEO0FBRWpEOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSwyQkFBb0I7SUFHbEUsWUFBWSxPQUEwQixFQUFFLE9BQWlDO1FBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywyQkFBMkI7UUFDdkMsT0FBTztZQUNMLG9CQUFvQjtZQUNwQixhQUFhLEVBQUU7Z0JBQ2IsR0FBRztnQkFDSCxpQkFBaUI7Z0JBQ2pCLHdCQUF3QjtnQkFDeEIsaUJBQWlCO2dCQUNqQiwwQkFBMEI7Z0JBQzFCLFNBQVM7Z0JBQ1QsUUFBUTtnQkFDUix1QkFBdUI7Z0JBQ3ZCLGlCQUFpQjtnQkFDakIseUJBQXlCO2dCQUN6QixVQUFVO2dCQUNWLGVBQWU7Z0JBQ2YseUJBQXlCO2dCQUN6QixpQ0FBaUM7Z0JBQ2pDLHFDQUFxQztnQkFDckMsU0FBUztnQkFDVCxPQUFPO2dCQUNQLE1BQU07Z0JBQ04sYUFBYTtnQkFDYiw4QkFBOEI7Z0JBQzlCLE1BQU07Z0JBQ04sWUFBWTtnQkFDWixxQkFBcUI7Z0JBQ3JCLE1BQU07Z0JBQ04saUJBQWlCO2dCQUNqQiwrQkFBK0I7Z0JBQy9CLE1BQU07Z0JBQ04sWUFBWTtnQkFDWix1Q0FBdUM7Z0JBQ3ZDLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixpQ0FBaUM7Z0JBQ2pDLEtBQUs7Z0JBQ0wsR0FBRzthQUNKO1lBQ0Qsa0JBQWtCO1lBRWxCLDBCQUEwQjtZQUMxQixtQkFBbUIsRUFBRTtnQkFDbkIsR0FBRztnQkFDSCwwQkFBMEI7Z0JBQzFCLDZCQUE2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VTtRQUNWLGtCQUFrQjtRQUNsQixrQ0FBa0M7UUFDbEMsbUJBQW1CO1FBQ25CLGdDQUFnQztRQUNoQyxlQUFlO1FBQ2YsVUFBVTtRQUNWLG9CQUFvQjtRQUNwQixVQUFVO1FBQ1YseURBQXlEO1FBQ3pELFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsZ0NBQWdDO1FBQ2hDLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsZUFBZTtRQUNmLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLDhEQUE4RDtRQUM5RCxVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLFVBQVU7UUFDViwrREFBK0Q7UUFDL0QsVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsK0VBQStFO1FBQy9FLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIsVUFBVTtRQUNWLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsVUFBVTtRQUNWLDZFQUE2RTtRQUM3RSxrQkFBa0I7UUFDbEIsS0FBSztJQUNQLENBQUM7O0FBdHVCSCxnRUF1dUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FtcGxlRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDYXBTZXJ2aWNlUHJvamVjdCwgQ2FwU2VydmljZVByb2plY3RPcHRpb25zIH0gZnJvbSAnLi4vLi9wcm9qZWN0JztcbmltcG9ydCB7IEJhc2VQcm9qZWN0LCBTYW1wbGVDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc3RhbnRzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgU2FtcGxlQ29kZUNvbmZpZ0Jhc2Uge1xuICBwcml2YXRlIG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBDYXBTZXJ2aWNlUHJvamVjdCwgb3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSByb290IGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSByb290IGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZVJvb3RUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhcnQgLmNkc3JjLmpzb25cbiAgICAgICcuY2RzcmMuanNvbic6IFtcbiAgICAgICAgJ3snLFxuICAgICAgICAnICBcInJlcXVpcmVzXCI6IHsnLFxuICAgICAgICAnICAgIFwiW2RldmVsb3BtZW50XVwiOiB7JyxcbiAgICAgICAgJyAgICAgIFwiYXV0aFwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwibW9ja2VkXCInLFxuICAgICAgICAnICAgICAgfScsXG4gICAgICAgICcgICAgfSwnLFxuICAgICAgICAnICAgIFwiW3Byb2R1Y3Rpb25dXCI6IHsnLFxuICAgICAgICAnICAgICAgXCJhdXRoXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJ4c3VhYVwiJyxcbiAgICAgICAgJyAgICAgIH0sJyxcbiAgICAgICAgJyAgICAgIFwiZGJcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcImhhbmFcIiwnLFxuICAgICAgICAnICAgICAgICBcImltcGxcIjogXCJAY2FwLWpzL2hhbmFcIiwnLFxuICAgICAgICAnICAgICAgICBcImRlcGxveS1mb3JtYXRcIjogXCJoZGJ0YWJsZVwiJyxcbiAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAnICAgIH0nLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiaTE4blwiOiB7JyxcbiAgICAgICAgJyAgICBcImRlZmF1bHRfbGFuZ3VhZ2VcIjogXCJlblwiJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImxvZ1wiOiB7JyxcbiAgICAgICAgJyAgICBcInNlcnZpY2VcIjogdHJ1ZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJmZWF0dXJlc1wiOiB7JyxcbiAgICAgICAgJyAgICBcInByZXNlcnZlX2NvbXB1dGVkXCI6IHRydWUnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwic3FsXCI6IHsnLFxuICAgICAgICAnICAgIFwibmF0aXZlX2hhbmFfYXNzb2NpYXRpb25zXCI6IGZhbHNlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImhhbmFcIjogeycsXG4gICAgICAgICcgICAgXCJkZXBsb3ktZm9ybWF0XCI6IFwiaGRidGFibGVcIicsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIC5jZHNyYy5qc29uXG5cbiAgICAgIC8vIFN0YXJ0IC5jZHNwcmV0dGllci5qc29uXG4gICAgICAnLmNkc3ByZXR0aWVyLmpzb24nOiBbXG4gICAgICAgICd7JyxcbiAgICAgICAgJyAgXCJhbGlnbkFmdGVyS2V5XCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblByZUFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblBvc3RBbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db2xvbnNJbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblZhbHVlc0luQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uc0FuZEZ1bmN0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25OYW1lc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25SZXR1cm5zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5FbnRpdGllc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luU2VsZWN0SXRlbXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJblVzaW5nXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkV4cHJlc3Npb25zQW5kQ29uZGl0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FeHByQW5kQ29uZFdpdGhpbkJsb2NrXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbG9uc0JlZm9yZVR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkVxdWFsc0FmdGVyVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVHlwZXNXaXRoaW5CbG9ja1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db21wb3NpdGlvblN0cnVjdFRvUmlnaHRcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImNxbEtleXdvcmRDYXBpdGFsaXphdGlvblwiOiBcImxvd2VyXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwUHJlQW5ub3RhdGlvbnNJbk9yaWdpbmFsTGluZVwiOiBcImtlZXBMaW5lXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwUG9zdEFubm90YXRpb25zSW5PcmlnaW5hbExpbmVcIjogXCJrZWVwTGluZVwiLCcsXG4gICAgICAgICcgIFwia2VlcEVtcHR5QnJhY2tldHNUb2dldGhlclwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwia2VlcFNpbmdsZUxpbmVkQmxvY2tzVG9nZXRoZXJcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImtlZXBPcmlnaW5hbEVtcHR5TGluZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIm1heEtlZXBFbXB0eUxpbmVzXCI6IDIsJyxcbiAgICAgICAgJyAgXCJvcGVuaW5nQnJhY2VJbk5ld0xpbmVcIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJzZWxlY3RJbk5ld0xpbmVcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcInRhYlNpemVcIjogMiwnLFxuICAgICAgICAnICBcImZpbmFsTmV3bGluZVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiZm9ybWF0RG9jQ29tbWVudHNcIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJtYXhEb2NDb21tZW50TGluZVwiOiA2MCwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VCZWZvcmVDb2xvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUJlZm9yZUNvbG9uSW5Bbm5vdGF0aW9uXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29sb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbG9uSW5Bbm5vdGF0aW9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb21tYVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFyb3VuZEFsaWduZWRPcHNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBcm91bmRCaW5hcnlPcHNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VXaXRoaW5CcmFja2V0c1wiOiBmYWxzZScsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG5cbiAgICAgIC8vIEVuZCAuY2RzcHJldHRpZXIuanNvblxuXG4gICAgICAvLyBTdGFydCAuZXNsaW50cmMuanNvblxuICAgICAgJ2RlZmF1bHQtZW52LmpzJzogW1xuICAgICAgICAnLyoqJyxcbiAgICAgICAgJyAqIEZldGNoZXMgYFZDQVBfU0VSVklDRVNgIGZvciBhIGdpdmVuIENGIGFwcGxpY2F0aW9uIGFuZCB3cml0ZXMgaXQgdG8gYSBmaWxlLicsXG4gICAgICAgICcgKiBJdCB1dGlsaXplcyB0aGUgQ2xvdWQgRm91bmRyeSBDTEkgdG8gZG8gc28uJyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIE1ha2Ugc3VyZSB5b3UgYXJlIGxvZ2dlZCBpbiB2aWEgdGhlIENGIENMSSAoYGNmIGxvZ2luYCkgYmVmb3JlIHJ1bm5pbmcgdGhlJyxcbiAgICAgICAgJyAqIHNjcmlwdC4gWW91IGNhbiBjaGVjayB5b3VyIGxvZ2luIGFuZCB0aGUgb3JnYW5pemF0aW9uIGFuZCBzcGFjZSB5b3UgYXJlJyxcbiAgICAgICAgJyAqIHRhcmdldHRpbmcgYnkgdXNpbmcgYGNmIHRhcmdldGAuJyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIEFsbG93cyBvbi1wcmVtaXNlIGNvbm5lY3Rpdml0eSBwcm94eWluZyBpZiBuZWNlc3NhcnknLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogQGF1dGhvciBTZWJhc3RpYW4gQmxlc3NpbmcnLFxuICAgICAgICAnICovJyxcbiAgICAgICAgXCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XCIsXG4gICAgICAgIFwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcIixcbiAgICAgICAgXCJjb25zdCBleGVjID0gdXRpbC5wcm9taXNpZnkocmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMpO1wiLFxuICAgICAgICBcImNvbnN0IHNwYXduID0gdXRpbC5wcm9taXNpZnkocmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLnNwYXduKTtcIixcbiAgICAgICAgJycsXG4gICAgICAgICdhc3luYyBmdW5jdGlvbiBnZXRBcHBHdWlkKGFwcE5hbWUpIHsnLFxuICAgICAgICAnICBjb25zdCBjbWQgPSBgY2YgYXBwICR7YXBwTmFtZX0gLS1ndWlkYDsnLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhjbWQpOycsXG4gICAgICAgICcgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoY21kKTsnLFxuICAgICAgICAnICBpZiAoc3RkZXJyKSBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTsnLFxuICAgICAgICAnICByZXR1cm4gc3Rkb3V0LnRyaW0oKTsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcnLFxuICAgICAgICAnYXN5bmMgZnVuY3Rpb24gZ2V0RGVmYXVsdEVudihhcHBHdWlkKSB7JyxcbiAgICAgICAgJyAgY29uc3QgY21kID0gYGNmIGN1cmwgXCJ2My9hcHBzLyR7YXBwR3VpZH0vZW52XCJgOycsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGNtZCk7JyxcbiAgICAgICAgJyAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYyhjbWQpOycsXG4gICAgICAgICcgIGlmIChzdGRlcnIpIGNvbnNvbGUubG9nKGBzdGRlcnI6ICR7c3RkZXJyfWApOycsXG4gICAgICAgICcgIHJldHVybiBKU09OLnBhcnNlKHN0ZG91dCkuc3lzdGVtX2Vudl9qc29uOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJycsXG4gICAgICAgICcoYXN5bmMgKCkgPT4geycsXG4gICAgICAgICcgIGNvbnN0IG15QXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTsnLFxuICAgICAgICAnICBjb25zdCBhcHBOYW1lID0gbXlBcmdzWzBdOycsXG4gICAgICAgICcgIGlmICghYXBwTmFtZSkgeycsXG4gICAgICAgIFwiICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgQ0YgYXBwbGljYXRpb24gbmFtZSB0byBmZXRjaCBpdHMgZW52aXJvbm1lbnQhJyk7XCIsXG4gICAgICAgICcgICAgcmV0dXJuOycsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgbGV0IGVudkZpbGVOYW1lID0gbXlBcmdzWzFdOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgZW52RmlsZU5hbWUgPSBlbnZGaWxlTmFtZSA/IGVudkZpbGVOYW1lIDogJ2RlZmF1bHQtZW52Lmpzb24nO1wiLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhgV3JpdGluZyBlbnZpcm9ubWVudCBvZiAke2FwcE5hbWV9IHRvICR7ZW52RmlsZU5hbWV9YCk7JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGNvbnN0IGRlZmF1bHRFbnYgPSBhd2FpdCBnZXREZWZhdWx0RW52KGF3YWl0IGdldEFwcEd1aWQoYXBwTmFtZSkpOycsXG4gICAgICAgICcnLFxuICAgICAgICAnICBsZXQgYlJ1blByb3h5ID0gZmFsc2U7JyxcbiAgICAgICAgJyAgbGV0IHByb3h5UG9ydCA9IG51bGw7JyxcbiAgICAgICAgJyAgbGV0IHByb3h5SG9zdCA9IG51bGw7JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBpZiAoZGVmYXVsdEVudlsnVkNBUF9TRVJWSUNFUyddWydjb25uZWN0aXZpdHknXSkge1wiLFxuICAgICAgICAnICAgIHByb3h5UG9ydCA9IGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X3BvcnQ7JyxcbiAgICAgICAgJyAgICBwcm94eUhvc3QgPSBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9ob3N0OycsXG4gICAgICAgIFwiICAgIGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X2hvc3QgPSAnbG9jYWxob3N0JztcIixcbiAgICAgICAgJyAgICBiUnVuUHJveHkgPSB0cnVlOycsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGZzLndyaXRlRmlsZSgnZGVmYXVsdC1lbnYuanNvbicsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRFbnYsIG51bGwsIDIpLCBhc3luYyAoZXJyKSA9PiB7XCIsXG4gICAgICAgICcgICAgaWYgKGVycikgeycsXG4gICAgICAgICcgICAgICBjb25zb2xlLmVycm9yKGVycik7JyxcbiAgICAgICAgJyAgICB9IGVsc2UgaWYgKGJSdW5Qcm94eSkgeycsXG4gICAgICAgICcgICAgICBjb25zb2xlLmxvZyhgY2Ygc3NoICR7YXBwTmFtZX0gLUwgJHtwcm94eVBvcnR9OiR7cHJveHlIb3N0fToke3Byb3h5UG9ydH1gKTsnLFxuICAgICAgICBcIiAgICAgIGF3YWl0IHNwYXduKCdjZicsIFtgc3NoICR7YXBwTmFtZX0gLUwgJHtwcm94eVBvcnR9OiR7cHJveHlIb3N0fToke3Byb3h5UG9ydH1gXSwge1wiLFxuICAgICAgICAnICAgICAgICBzaGVsbDogdHJ1ZSwnLFxuICAgICAgICBcIiAgICAgICAgc3RkaW86ICdpbmhlcml0JyxcIixcbiAgICAgICAgJyAgICAgIH0pOycsXG4gICAgICAgICcgICAgfScsXG4gICAgICAgICcgIH0pOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgY29uc29sZS5sb2coJ0RvbmUnKTtcIixcbiAgICAgICAgJ30pKCk7JyxcbiAgICAgIF0sXG5cbiAgICAgIC8vIEVuZCAuZXNsaW50cmMuanNvblxuXG4gICAgICAvLyBTdGFydCAuZXNsaW50cmMuanNvblxuICAgICAgJ210YS55YW1sJzogW1xuICAgICAgICBcIl9zY2hlbWEtdmVyc2lvbjogJzMuMSdcIixcbiAgICAgICAgYElEOiAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9YCxcbiAgICAgICAgJ3ZlcnNpb246IDAuMC4xJyxcbiAgICAgICAgYGRlc2NyaXB0aW9uOiAke3RoaXMub3B0aW9ucy5kZXNjcmlwdGlvbn1gLFxuICAgICAgICAncGFyYW1ldGVyczonLFxuICAgICAgICAnICBlbmFibGUtcGFyYWxsZWwtZGVwbG95bWVudHM6IHRydWUnLFxuICAgICAgICAnYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICBiZWZvcmUtYWxsOicsXG4gICAgICAgICcgICAgLSBidWlsZGVyOiBjdXN0b20nLFxuICAgICAgICAnICAgICAgY29tbWFuZHM6JyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gY2knLFxuICAgICAgICAnICAgICAgICAtIG5wbSBydW4gYnVpbGQnLFxuICAgICAgICAnICAgICAgICAtIG5weCBAY2FwLWpzL2Nkcy10eXBlciBcIipcIiAtLW91dHB1dERpcmVjdG9yeSBnZW4vc3J2L0BjZHMtbW9kZWxzJyxcbiAgICAgICAgJ21vZHVsZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1zcnZgLFxuICAgICAgICAnICAgIHR5cGU6IG5vZGVqcycsXG4gICAgICAgICcgICAgcGF0aDogZ2VuL3NydicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICAgIHJlYWRpbmVzcy1oZWFsdGgtY2hlY2stdHlwZTogaHR0cCcsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLWh0dHAtZW5kcG9pbnQ6IC9oZWFsdGgnLFxuICAgICAgICAnICAgIGJ1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkZXI6IG5wbScsXG4gICAgICAgICcgICAgcHJvdmlkZXM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogc3J2LWFwaScsXG4gICAgICAgICcgICAgICAgIHByb3BlcnRpZXM6JyxcbiAgICAgICAgJyAgICAgICAgICBzcnYtdXJsOiAke2RlZmF1bHQtdXJsfScsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25zYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLmFwcGxpY2F0aW9uLmNvbnRlbnQnLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBzZXJ2aWNlLWtleTonLFxuICAgICAgICBgICAgICAgICAgICAgbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBjb250ZW50LXRhcmdldDogdHJ1ZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29udGVudDonLFxuICAgICAgICAnICAgICAgICBpbnN0YW5jZTonLFxuICAgICAgICAnICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogT0F1dGgyVXNlclRva2VuRXhjaGFuZ2UnLFxuICAgICAgICBgICAgICAgICAgICAgICBOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1hcHAtc3J2YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlSW5zdGFuY2VOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICBgICAgICAgICAgICAgICBUb2tlblNlcnZpY2VLZXlOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWEta2V5YCxcbiAgICAgICAgJyAgICAgICAgICAgICAgVVJMOiB+e3Nydi1hcGkvc3J2LXVybH0nLFxuICAgICAgICBgICAgICAgICAgICAgICBzYXAuY2xvdWQuc2VydmljZTogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICcgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBuby1zb3VyY2U6IHRydWUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiLWRlcGxveWVyYCxcbiAgICAgICAgJyAgICB0eXBlOiBoZGInLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9kYicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICdyZXNvdXJjZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBwYXRoOiAuL3hzLXNlY3VyaXR5Lmpzb24nLFxuICAgICAgICAnICAgICAgc2VydmljZTogeHN1YWEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBhcHBsaWNhdGlvbicsXG4gICAgICAgICcgICAgICBjb25maWc6JyxcbiAgICAgICAgJyAgICAgICAgdGVuYW50LW1vZGU6IGRlZGljYXRlZCcsXG4gICAgICAgIGAgICAgICAgIHhzYXBwbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX1gLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWNvbm5lY3Rpdml0eWAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGNvbm5lY3Rpdml0eScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIEhUTUw1UnVudGltZV9lbmFibGVkOiB0cnVlJyxcbiAgICAgICAgJyAgICAgICAgaW5pdF9kYXRhOicsXG4gICAgICAgICcgICAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgICAtIEF1dGhlbnRpY2F0aW9uOiBOb0F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBOYW1lOiB1aTUnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFByb3h5VHlwZTogSW50ZXJuZXQnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFR5cGU6IEhUVFAnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFVSTDogaHR0cHM6Ly91aTUuc2FwLmNvbScsXG4gICAgICAgICcgICAgICAgICAgICBleGlzdGluZ19kZXN0aW5hdGlvbnNfcG9saWN5OiB1cGRhdGUnLFxuICAgICAgICAnICAgICAgICB2ZXJzaW9uOiAxLjAuMCcsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBkZXN0aW5hdGlvbicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLnhzLmhkaS1jb250YWluZXInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGhhbmEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBoZGktc2hhcmVkJyxcbiAgICAgICAgJyAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICBoZGktc2VydmljZS1uYW1lOiAke3NlcnZpY2UtbmFtZX0nLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCAuZXNsaW50cmMuanNvblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGBzcnZgIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBgc3J2YCBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVTcnZUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhcnQgaW5kZXgudHNcbiAgICAgICdzcnYvaW5kZXguY2RzJzogW2B1c2luZyBmcm9tICcuL2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMSc7YF0sXG4gICAgICAvLyBFbmQgaW5kZXgudHNcblxuICAgICAgLy8gU3RhcnQgRW50aXR5IGhhbmRsZXJcbiAgICAgIFtgc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL2hhbmRsZXIvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyLnRzYF06IFtcbiAgICAgICAgYGltcG9ydCB7XG4gICAgICAgICAgQWZ0ZXJSZWFkLFxuICAgICAgICAgIEVudGl0eUhhbmRsZXIsXG4gICAgICAgICAgSW5qZWN0LFxuICAgICAgICAgIFJlcSxcbiAgICAgICAgICBSZXN1bHRzLFxuICAgICAgICAgIFNlcnZpY2UsXG4gICAgICAgICAgQ0RTX0RJU1BBVENIRVIsXG4gICAgICAgICAgdHlwZSBUeXBlZFJlcXVlc3QsXG4gICAgICAgICAgVXNlLFxuICAgICAgICB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnI2Nkcy1tb2RlbHMvU2VydmljZUEnO2AsXG4gICAgICAgIGBpbXBvcnQgeyBNaWRkbGV3YXJlQWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9NaWRkbGV3YXJlQWZ0ZXJSZWFkJztgLFxuICAgICAgICBgaW1wb3J0IHsgTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9NaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0nO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQEVudGl0eUhhbmRsZXIoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pYCxcbiAgICAgICAgYEBVc2UoTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9KWAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyIHtgLFxuICAgICAgICBgICBASW5qZWN0KENEU19ESVNQQVRDSEVSLlNSVikgcHJpdmF0ZSByZWFkb25seSBzcnY6IFNlcnZpY2U7YCxcbiAgICAgICAgYCAgLy8gQE9uUmVhZCwgQEJlZm9yZVJlYWQsIEBBZnRlclJlYWQsIEBPblVwZGF0ZSAuLi5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgQEFmdGVyUmVhZCgpYCxcbiAgICAgICAgYCAgQFVzZShNaWRkbGV3YXJlQWZ0ZXJSZWFkKWAsXG4gICAgICAgIGAgIHB1YmxpYyBhc3luYyBhZnRlclJlYWQoQFJlc3VsdHMoKSByZXN1bHRzOiAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSwgQFJlcSgpIHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9Pik6IFByb21pc2U8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKHJlcSk7YCxcbiAgICAgICAgYCAgICByZXR1cm4gcmVzdWx0cztgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZFxuXG4gICAgICAvLyBTdGFydCBVbmJvdW5kQWN0aW9uc0hhbmRsZXJcbiAgICAgICdzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvaGFuZGxlci9VbmJvdW5kQWN0aW9uc0hhbmRsZXIudHMnOiBbXG4gICAgICAgIGBpbXBvcnQgeyBJbmplY3QsIFNlcnZpY2UsIENEU19ESVNQQVRDSEVSLCBVbmJvdW5kQWN0aW9ucyB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYEBVbmJvdW5kQWN0aW9ucygpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBVbmJvdW5kQWN0aW9uc0hhbmRsZXIge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2U6IFNlcnZpY2U7YCxcbiAgICAgICAgYCAgLy8gQE9uRXJyb3IsIEBPbkV2ZW50LCBAT25BY3Rpb24sIEBPbkZ1bmN0aW9uYCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBVbmJvdW5kQWN0aW9uc0hhbmRsZXJcblxuICAgICAgLy8gU3RhcnQgc2VydmljZS0xLmNkc1xuICAgICAgJ3Nydi9jb250cm9sbGVyL3NlcnZpY2UtMS9zZXJ2aWNlLTEuY2RzJzogW1xuICAgICAgICBgdXNpbmcgeyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0gYXMgQmFzZX0gZnJvbSAnLi4vLi4vLi4vZGIvc2NoZW1hJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYHNlcnZpY2UgU2VydmljZUEge2AsXG4gICAgICAgIGAgICBAcmVhZG9ubHlgLFxuICAgICAgICBgICAgZW50aXR5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IGFzIHByb2plY3Rpb24gb24gQmFzZS4ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfTtgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIHNlcnZpY2UtMS5jZHNcblxuICAgICAgLy8gU3RhcnQgc2VydmljZS0xLnRzXG4gICAgICAnc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMS50cyc6IFtcbiAgICAgICAgYGltcG9ydCB7IENEU0Rpc3BhdGNoZXIgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlci8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXInO2AsXG4gICAgICAgIGBpbXBvcnQgeyBVbmJvdW5kQWN0aW9uc0hhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXIvVW5ib3VuZEFjdGlvbnNIYW5kbGVyJztgLFxuICAgICAgICAnJyxcbiAgICAgICAgYGV4cG9ydCA9IG5ldyBDRFNEaXNwYXRjaGVyKFske3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIsIFVuYm91bmRBY3Rpb25zSGFuZGxlcl0pLmluaXRpYWxpemUoKTtgLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBzZXJ2aWNlLTEudHNcblxuICAgICAgLy8gU3RhcnQgTWlkZGxld2FyZVxuICAgICAgW2BzcnYvbWlkZGxld2FyZS9NaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0udHNgXTogW1xuICAgICAgICBgaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlSW1wbCwgTmV4dE1pZGRsZXdhcmUsIFR5cGVkUmVxdWVzdCB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHR5cGUgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gaW1wbGVtZW50cyBNaWRkbGV3YXJlSW1wbCB7YCxcbiAgICAgICAgYCAgcHVibGljIGFzeW5jIHVzZShyZXE6IFR5cGVkUmVxdWVzdDwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4sIG5leHQ6IE5leHRNaWRkbGV3YXJlKTogUHJvbWlzZTx2b2lkPiB7YCxcbiAgICAgICAgYCAgICBjb25zb2xlLmxvZygnTWlkZGxld2FyZSBlbnRpdHkgMSA6IEVYRUNVVEVEJyk7YCxcbiAgICAgICAgYCAgICBhd2FpdCBuZXh0KCk7YCxcbiAgICAgICAgYCAgfWAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgTWlkZGxld2FyZVxuXG4gICAgICAvLyBTdGFydCBNaWRkbGV3YXJlQWZ0ZXJSZWFkXG4gICAgICAnc3J2L21pZGRsZXdhcmUvTWlkZGxld2FyZUFmdGVyUmVhZC50cyc6IFtcbiAgICAgICAgYGltcG9ydCB0eXBlIHsgTWlkZGxld2FyZUltcGwsIE5leHRNaWRkbGV3YXJlLCBUeXBlZFJlcXVlc3QgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB0eXBlIHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgTWlkZGxld2FyZUFmdGVyUmVhZCBpbXBsZW1lbnRzIE1pZGRsZXdhcmVJbXBsIHtgLFxuICAgICAgICBgICBwdWJsaWMgYXN5bmMgdXNlKHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiwgbmV4dDogTmV4dE1pZGRsZXdhcmUpOiBQcm9taXNlPHZvaWQ+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlIGVudGl0eSAxIDogRVhFQ1VURUQnKTtgLFxuICAgICAgICBgICAgIGF3YWl0IG5leHQoKTtgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBNaWRkbGV3YXJlQWZ0ZXJSZWFkXG5cbiAgICAgIC8vIFN0YXJ0IFJlcG9zaXRvcnlcbiAgICAgIFtgc3J2L3JlcG9zaXRvcnkvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5LnRzYF06IFtcbiAgICAgICAgYGltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLXJlcG9zaXRvcnknO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBAUmVwb3NpdG9yeSgpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4ge2AsXG4gICAgICAgIGAgIGNvbnN0cnVjdG9yKCkge2AsXG4gICAgICAgIGAgICAgc3VwZXIoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgICAvLyAuLi4gZGVmaW5lIGN1c3RvbSBDRFMtUUwgYWN0aW9ucyBpZiBCYXNlUmVwb3NpdG9yeSBvbmVzIGFyZSBub3Qgc2F0aXNmeWluZyB5b3VyIG5lZWRzICFgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFJlcG9zaXRvcnlcblxuICAgICAgLy8gU3RhcnQgU2VydmljZVxuICAgICAgW2BzcnYvc2VydmljZS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2UudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHsgSW5qZWN0LCBTZXJ2aWNlLCBTZXJ2aWNlTG9naWMsIENEU19ESVNQQVRDSEVSIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnknO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQFNlcnZpY2VMb2dpYygpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2Uge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNydjogU2VydmljZTtgLFxuICAgICAgICBgICBASW5qZWN0KCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSkgcHJpdmF0ZSByZWFkb25seSAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2U6ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeTtgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFNlcnZpY2VcblxuICAgICAgLy8gU3RhcnQgY29uc3RhbnRzLnRzXG4gICAgICAnc3J2L3V0aWwvY29uc3RhbnRzL2NvbnN0YW50cy50cyc6IFtcbiAgICAgICAgYGNvbnN0IENvbnN0YW50cyA9IHtgLFxuICAgICAgICBgICAvLyBFeGFtcGxlYCxcbiAgICAgICAgYCAgQ09OU1RBTlRfMToge2AsXG4gICAgICAgIGAgICAgUFJPUF9DT05TVEFOVF8xOiAnU09NRVRISU5HJyxgLFxuICAgICAgICBgICB9LGAsXG4gICAgICAgIGB9O2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzO2AsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIGNvbnN0YW50cy50c1xuXG4gICAgICAvLyBTdGFydCB1dGlsLnRzXG4gICAgICAnc3J2L3V0aWwvaGVscGVycy91dGlsLnRzJzogW1xuICAgICAgICBgY29uc3QgVXRpbCA9IHtgLFxuICAgICAgICBgICAvLyBFeGFtcGxlYCxcbiAgICAgICAgYCAgYUhlbHBlckZ1bmN0aW9uKCkge2AsXG4gICAgICAgIGAgICAgcmV0dXJuIDE7YCxcbiAgICAgICAgYCAgfSxgLFxuICAgICAgICBgfTtgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBkZWZhdWx0IFV0aWw7YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgdXRpbC50c1xuXG4gICAgICAvLyBTdGFydCB0eXBlcy50c1xuICAgICAgJ3Nydi91dGlsL3R5cGVzL3R5cGVzLnRzJzogW2AvLyBFeGFtcGxlYCwgYGV4cG9ydCB0eXBlIEFUeXBlID0gc3RyaW5nO2BdLFxuICAgICAgLy8gRW5kIHR5cGVzLnRzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgZGIgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGRiIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkYi9zY2hlbWEuY2RzJzogW1xuICAgICAgICBcInVzaW5nIHsgbWFuYWdlZCB9IGZyb20gJ0BzYXAvY2RzL2NvbW1vbic7XCIsXG4gICAgICAgICcnLFxuICAgICAgICBgbmFtZXNwYWNlICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX07YCxcbiAgICAgICAgJycsXG4gICAgICAgIGBlbnRpdHkgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gOiBtYW5hZ2VkIHtgLFxuICAgICAgICAnICBrZXkgSUQ6IEludGVnZXI7JyxcbiAgICAgICAgJyAgZGVzY3I6IGxvY2FsaXplZCBTdHJpbmcoMTExKTsnLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGRhdGEgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGRhdGEgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYHRlc3QvZGF0YS8ke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9LSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LmNzdmA7XG4gICAgY29uc3QgZmlsZVBhdGhUZXh0cyA9IGB0ZXN0L2RhdGEvJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfS0ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS50ZXh0cy5jc3ZgO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFtmaWxlUGF0aF06IFtcbiAgICAgICAgJ0lELGNyZWF0ZWRBdCxjcmVhdGVkQnksbW9kaWZpZWRBdCxtb2RpZmllZEJ5LGRlc2NyJyxcbiAgICAgICAgJzEsLCwsLERlc2NyaXB0aW9uIDEnLFxuICAgICAgICAnMiwsLCwsRGVzY3JpcHRpb24gMicsXG4gICAgICAgICczLCwsLCxEZXNjcmlwdGlvbiAzJyxcbiAgICAgIF0sXG4gICAgICBbZmlsZVBhdGhUZXh0c106IFsnbG9jYWxlLElELGRlc2NyJ10sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlcyBmb3IgdGhlIHNwZWNpZmllZCBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZXMgVGhlIHRlbXBsYXRlcyB0byBjcmVhdGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlVGVtcGxhdGVzKHRlbXBsYXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwYXRoIGluIHRlbXBsYXRlcykge1xuICAgICAgaWYgKHRlbXBsYXRlc1twYXRoXSkge1xuICAgICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHBhdGgsIHtcbiAgICAgICAgICBjb250ZW50czogdGVtcGxhdGVzW3BhdGhdLmpvaW4oJ1xcbicpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVyJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVyJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAY2FwLWpzL2Nkcy10eXBlcyddLk5BTUV9QCR7Y29uc3RhbnRzWydAY2FwLWpzL2Nkcy10eXBlcyddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMtZGsnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC9jZHMtZGsnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAvY2RzLWxzcCddLk5BTUV9QCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1sc3AnXS5WRVJTSU9OfWAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGAke2NvbnN0YW50c1snQGR4ZnJvbnRpZXIvY2RzLXRzLXJlcG9zaXRvcnknXS5OQU1FfUAke2NvbnN0YW50c1snQGR4ZnJvbnRpZXIvY2RzLXRzLXJlcG9zaXRvcnknXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAvY2RzJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BzYXAvY2RzJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAc2FwL3hzc2VjJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BzYXAveHNzZWMnXS5WRVJTSU9OfWAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNjcmlwdHMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiAnY2RzLXNlcnZlIC0tcHJvZHVjdGlvbicsXG4gICAgICAnc3RhcnQ6bG9jYWwnOiAnY2RzLXRzIHNlcnZlJyxcbiAgICAgIHdhdGNoOiAnY2RzLXRzIHdhdGNoJyxcbiAgICAgICdidWlsZDpjZHMnOiAnY2RzLXRzIGJ1aWxkIC0tcHJvZHVjdGlvbicsXG4gICAgICAnYnVpbGQ6Y2RzOm1lc3NhZ2UnOiAnZWNobyBcIkJ1aWxkIENEUyAuLi5cIicsXG4gICAgICAnYnVpbGQ6dHMnOiAndHNjJyxcbiAgICAgICdidWlsZDp0czptZXNzYWdlJzogJ2VjaG8gXCJUcmFuc3BpbGUgVFMgPT4gSlMgLi4uXCInLFxuICAgICAgJ2J1aWxkOnNydjpjbGVhbjp0cyc6ICdmaW5kIGdlbi9zcnYvc3J2IC10eXBlIGYgLW5hbWUgXCIqLnRzXCIgLWRlbGV0ZScsXG4gICAgICAnYnVpbGQ6c3J2OmNsZWFuOnRzOm1lc3NhZ2UnOiAnZWNobyBcIkNsZWFuIFRTIGZpbGVzIGZyb20gc3J2IGZvbGRlciAuLi5cIicsXG4gICAgICBidWlsZDpcbiAgICAgICAgJ3J1bi1zIGJ1aWxkOmNkczptZXNzYWdlIGJ1aWxkOmNkcyBidWlsZDp0czptZXNzYWdlIGJ1aWxkOnRzIGJ1aWxkOnNydjpjbGVhbjp0czptZXNzYWdlIGJ1aWxkOnNydjpjbGVhbjp0cycsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW1wb3J0czoge1xuICAgICAgICAnI2Nkcy1tb2RlbHMvKic6ICcuL0BjZHMtbW9kZWxzLyovaW5kZXguanMnLFxuICAgICAgICAnI2Rpc3BhdGNoZXInOiAnLi9AZGlzcGF0Y2hlci9pbmRleC5qcycsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0KSB7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZERlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZVJvb3RUZW1wbGF0ZXMpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVzKHRoaXMuc2FtcGxlQ29kZUZpbGVEYlRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXMpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVzKHRoaXMuc2FtcGxlQ29kZUZpbGVTcnZUZW1wbGF0ZXMpO1xuXG4gICAgLy8gbmV3IFNhbXBsZVJlYWRtZSh0aGlzLnByb2plY3QsIHtcbiAgICAvLyAgIGNvbnRlbnRzOiBbXG4gICAgLy8gICAgIGAjICR7dGhpcy5vcHRpb25zLm5hbWV9YCxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgIGAke3RoaXMub3B0aW9ucy5kZXNjcmlwdGlvbn1gLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMgVGFibGUgb2YgQ29udGVudHMnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgYC0gWyR7dGhpcy5vcHRpb25zLm5hbWV9XSgjJHt0aGlzLm9wdGlvbnMubmFtZX0pYCxcbiAgICAvLyAgICAgJy0gW1RhYmxlIG9mIENvbnRlbnRzXSgjdGFibGUtb2YtY29udGVudHMpJyxcbiAgICAvLyAgICAgJyAgLSBbUHJlcmVxdWlzaXRlc10oI3ByZXJlcXVpc2l0ZXMpJyxcbiAgICAvLyAgICAgJyAgLSBbYEluc3RhbGxhdGlvbmBdKCNpbnN0YWxsYXRpb24pJyxcbiAgICAvLyAgICAgJyAgLSBbYFVzYWdlYF0oI3VzYWdlKScsXG4gICAgLy8gICAgICcgICAgLSBbU3RhcnQgbG9jYWxseV0oI3N0YXJ0LWxvY2FsbHkpJyxcbiAgICAvLyAgICAgJyAgICAtIFtEZWJ1ZyBsb2NhbGx5XSgjZGVidWctbG9jYWxseSknLFxuICAgIC8vICAgICAnICAgIC0gW0RlcGxveSAoYERFVmAsIGBRQWAsIGBQUk9EYCldKCNkZXBsb3ktZGV2LXFhLXByb2QpJyxcbiAgICAvLyAgICAgJyAgICAgIC0gW0RlcGxveW1lbnQgc3RlcHNdKCNkZXBsb3ltZW50LXN0ZXBzKScsXG4gICAgLy8gICAgICcgICAgICAtIFtgQnJhbmNoLVNwZWNpZmljYCBkZXBsb3ltZW50IHJ1bGVzXSgjYnJhbmNoLXNwZWNpZmljLWRlcGxveW1lbnQtcnVsZXMpJyxcbiAgICAvLyAgICAgJyAgLSBbUHJvamVjdCB0b29scyBhbmQgdXRpbGl0aWVzXSgjcHJvamVjdC10b29scy1hbmQtdXRpbGl0aWVzKScsXG4gICAgLy8gICAgICcgICAgLSBbUHJldHRpZXJdKCNwcmV0dGllciknLFxuICAgIC8vICAgICAnICAgIC0gW0VTTGludF0oI2VzbGludCknLFxuICAgIC8vICAgICAnICAgIC0gW0xpbnQtc3RhZ2VkXSgjbGludC1zdGFnZWQpJyxcbiAgICAvLyAgICAgJyAgICAtIFtDb21taXQtTGludF0oI2NvbW1pdC1saW50KScsXG4gICAgLy8gICAgICcgICAgLSBbSHVza3ldKCNodXNreSknLFxuICAgIC8vICAgICAnICAtIFtBdXRob3JzXSgjYXV0aG9ycyknLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMjIFByZXJlcXVpc2l0ZXMnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJ0luc3RhbGwgWyoqQHNhcC9jZHMtZGsqKl0oaHR0cHM6Ly9jYXAuY2xvdWQuc2FwL2RvY3MvZ2V0LXN0YXJ0ZWQvKSwgW3R5cGVzY3JpcHRdKGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8pLCBbdHMtbm9kZV0oaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvdHMtbm9kZSkgZ2xvYmFsbHk6JyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdgYGBiYXNoJyxcbiAgICAvLyAgICAgJ25wbSBpbnN0YWxsIC1nIEBzYXAvY2RzLWRrIHR5cGVzY3JpcHQgdHMtbm9kZScsXG4gICAgLy8gICAgICdgYGAnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMjIGBJbnN0YWxsYXRpb25gJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICcxLiBBZnRlciBnZW5lcmF0aW5nIHRoZSBwcm9qZWN0IHVzaW5nIGBwcm9qZW5gLCBpbnN0YWxsIHRoZSByZXF1aXJlZCBkZXBlbmRlbmNpZXMgYnkgcnVubmluZzonLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJ2BgYGJhc2gnLFxuICAgIC8vICAgICAnbnBtIGluc3RhbGwnLFxuICAgIC8vICAgICAnYGBgJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICcyLiBDcmVhdGUgdGhlIGZvbGxvd2luZyB0aHJlZSBsYWJlbHMgaW4geW91ciByZXBvc2l0b3J5IGJ5IG5hdmlnYXRpbmcgdG8gYFB1bGwgUmVxdWVzdHNgID4gYExhYmVsc2AgPiBgTmV3IExhYmVsYDonLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyAgIC0gKipwYXRjaCoqJyxcbiAgICAvLyAgICAgJyAgIC0gKiptaW5vcioqJyxcbiAgICAvLyAgICAgJyAgIC0gKiptYWpvcioqJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICc+IFshVElQXScsXG4gICAgLy8gICAgICc+IEZvciBtb3JlIGluZm8gYWJvdXQgYFNlbVZlciAoTUFKT1IuTUlOT1IuUEFUQ0gpYCwgdmlzaXQgW1NlbVZlci5vcmddKGh0dHBzOi8vc2VtdmVyLm9yZy8pJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICczLiBUaGUgZm9sbG93aW5nIHNlY3JldHMgbXVzdCBiZSBjcmVhdGVkIGluIHlvdXIgR2l0SHViIHJlcG9zaXRvcnkgdG8gZW5hYmxlIHRoZSBhdXRvbWF0aWMgZGVwbG95bWVudCBwcm9jZXNzOicsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnfCBQYXJhbWV0ZXIgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8JyxcbiAgICAvLyAgICAgJ3wgLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCcsXG4gICAgLy8gICAgICd8IGBDRl9JQVNfT1JJR0lOYCB8IFRoZSBvcmlnaW4gdXNlZCBmb3IgSUFTIGF1dGhlbnRpY2F0aW9uIHdoZW4gbG9nZ2luZyBpbnRvIENsb3VkIEZvdW5kcnkuIHwnLFxuICAgIC8vICAgICAnfCBgQ0ZfQVBJX0RFVmAgfCBUaGUgQVBJIGVuZHBvaW50IGZvciB0aGUgZGV2ZWxvcG1lbnQgQ2xvdWQgRm91bmRyeSBlbnZpcm9ubWVudC4gfCcsXG4gICAgLy8gICAgICd8IGBDRl9PUkdfREVWYCB8IFRoZSBvcmdhbml6YXRpb24gZm9yIHRoZSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBpbiBDbG91ZCBGb3VuZHJ5LiB8JyxcbiAgICAvLyAgICAgJ3wgYENGX1NQQUNFX0RFVmAgfCBUaGUgc3BhY2Ugd2l0aGluIHRoZSBkZXZlbG9wbWVudCBvcmdhbml6YXRpb24gaW4gQ2xvdWQgRm91bmRyeS4gfCcsXG4gICAgLy8gICAgICd8IGBDRl9VU0VSTkFNRV9ERVZgIHwgVGhlIHVzZXJuYW1lIGZvciBsb2dnaW5nIGludG8gdGhlIGRldmVsb3BtZW50IGVudmlyb25tZW50IGluIENsb3VkIEZvdW5kcnkuIHwnLFxuICAgIC8vICAgICAnfCBgQ0ZfUEFTU1dPUkRfREVWYCB8IFRoZSBwYXNzd29yZCBmb3IgbG9nZ2luZyBpbnRvIHRoZSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBpbiBDbG91ZCBGb3VuZHJ5LiB8JyxcbiAgICAvLyAgICAgJ3wgYENGX0FQSV9QUk9EYCB8IFRoZSBBUEkgZW5kcG9pbnQgZm9yIHRoZSBwcm9kdWN0aW9uIENsb3VkIEZvdW5kcnkgZW52aXJvbm1lbnQuIHwnLFxuICAgIC8vICAgICAnfCBgQ0ZfT1JHX1BST0RgIHwgVGhlIG9yZ2FuaXphdGlvbiBmb3IgdGhlIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQgaW4gQ2xvdWQgRm91bmRyeS4gfCcsXG4gICAgLy8gICAgICd8IGBDRl9TUEFDRV9QUk9EYCB8IFRoZSBzcGFjZSB3aXRoaW4gdGhlIHByb2R1Y3Rpb24gb3JnYW5pemF0aW9uIGluIENsb3VkIEZvdW5kcnkuIHwnLFxuICAgIC8vICAgICAnfCBgQ0ZfVVNFUk5BTUVfUFJPRGAgfCBUaGUgdXNlcm5hbWUgZm9yIGxvZ2dpbmcgaW50byB0aGUgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCBpbiBDbG91ZCBGb3VuZHJ5LiB8JyxcbiAgICAvLyAgICAgJ3wgYENGX1BBU1NXT1JEX1BST0RgIHwgVGhlIHBhc3N3b3JkIGZvciBsb2dnaW5nIGludG8gdGhlIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQgaW4gQ2xvdWQgRm91bmRyeS4gfCcsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnIyMgYFVzYWdlYCcsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnIyMjIFN0YXJ0IGxvY2FsbHknLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJ1N0YXJ0IHRoZSBDQVAgc2VydmVyIGluIHdhdGNoIG1vZGUgKGhvdC1yZWxvYWQpOicsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnYGBgYmFzaCcsXG4gICAgLy8gICAgICducG0gcnVuIHdhdGNoJyxcbiAgICAvLyAgICAgJ2BgYCcsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnPiBbIVRJUF0nLFxuICAgIC8vICAgICAnPiBBY2Nlc3MgdGhlIHNlcnZpY2UgYXQgaHR0cDovL2xvY2FsaG9zdDo0MDA0JyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICcjIyMgRGVidWcgbG9jYWxseScsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnMS4gQWRkIGJyZWFrcG9pbnRzIGluIHlvdXIgYC50c2AgZmlsZXMuJyxcbiAgICAvLyAgICAgJzIuIFN0YXJ0IHRoZSBDQVAgc2VydmVyIGluIGRlYnVnIG1vZGU6JyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdgYGBiYXNoJyxcbiAgICAvLyAgICAgJ25wbSBydW4gd2F0Y2gnLFxuICAgIC8vICAgICAnYGBgJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICczLiBSZWZyZXNoIHRoZSBzZXJ2aWNlLicsXG4gICAgLy8gICAgICc0LiBUaGUgZGVidWdnZXIgc2hvdWxkIHN0b3AgYXQgdGhlIGJyZWFrcG9pbnQgbGluZS4nLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMjIyBEZXBsb3kgKGBERVZgLCBgUUFgLCBgUFJPRGApJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdUaGUgZGVwbG95bWVudCBwcm9jZXNzIGlzIGF1dG9tYXRpY2FsbHkgdHJpZ2dlcmVkIHdoZW4gYSBgUFVMTCBSRVFVRVNUYCBpcyBtZXJnZWQgaW50byB0aGUgYG1haW5gIGJyYW5jaC4nLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMjIyMgRGVwbG95bWVudCBzdGVwcycsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnLSBgVmVyc2lvbiBCdW1wYDogVGhlIGBwYWNrYWdlLmpzb25gIHZlcnNpb24gaXMgaW5jcmVtZW50ZWQgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGxhYmVsIChgcGF0Y2hgLCBgbWlub3JgLCBvciBgbWFqb3JgKS4nLFxuICAgIC8vICAgICAnLSBgR2l0SHViIFRhZ3NgOiBBIG5ldyB0YWcgaXMgY3JlYXRlZCB0byBtYXJrIHRoZSByZWxlYXNlLicsXG4gICAgLy8gICAgICctIGBHaXRIdWIgUmVsZWFzZWA6IEEgcmVsZWFzZSBpcyBwdWJsaXNoZWQgaW4gdGhlIHJlcG9zaXRvcnksIHN1bW1hcml6aW5nIHRoZSBjaGFuZ2VzLicsXG4gICAgLy8gICAgICctIGBDaGFuZ2Vsb2cgVXBkYXRlYDogVGhlIGBDSEFOR0VMT0cubWRgIGZpbGUgaXMgdXBkYXRlZCB3aXRoIHRoZSBsYXRlc3QgY29tbWl0IG1lc3NhZ2VzLicsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnPiBbIUNBVVRJT05dJyxcbiAgICAvLyAgICAgJz4gU2VjcmV0cyBmcm9tIGluc3RhbGxhdGlvbiBwcm9jZXNzIGFyZSByZXF1aXJlZCBmb3IgYXV0b21hdGljIGRlcGxveW1lbnQuIFNlZSAqKltpbnN0YWxsYXRpb25dKCNpbnN0YWxsYXRpb24pKiouJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICc+IFshQ0FVVElPTl0nLFxuICAgIC8vICAgICAnPiBFdmVyeSBgUFVMTCBSRVFVRVNUYCBtZXJnZWQgaW50byBgbWFpbmAgbXVzdCBoYXZlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGxhYmVsczonLFxuICAgIC8vICAgICAnPiAtIGBwYXRjaGAgKiooMC4wLngpKionLFxuICAgIC8vICAgICAnPiAtIGBtaW5vcmAgKiooMC54LjApKionLFxuICAgIC8vICAgICAnPiAtIGBtYWpvcmAgKiooeC4wLjApKionLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMjIyMgYEJyYW5jaC1TcGVjaWZpY2AgZGVwbG95bWVudCBydWxlcycsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnLSBgRGV2ZWxvcG1lbnQgKERFVilgOiBDaGFuZ2VzIG1lcmdlZCBpbnRvIHRoZSBgZGV2YCBicmFuY2ggdHJpZ2dlciBkZXBsb3ltZW50IHRvIHRoZSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudC4nLFxuICAgIC8vICAgICAnLSBgUXVhbGl0eSBBc3N1cmFuY2UgKFFBKWA6IE1lcmdpbmcgY2hhbmdlcyBpbnRvIGBxYWAgdHJpZ2dlcnMgZGVwbG95bWVudCB0byB0aGUgUUEgZW52aXJvbm1lbnQuJyxcbiAgICAvLyAgICAgJy0gYFByb2R1Y3Rpb24gKFBST0QpYDogTWVyZ2luZyBjaGFuZ2VzIGludG8gYHByb2RgIGRlcGxveXMgdG8gcHJvZHVjdGlvbi4nLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJz4gWyFUSVBdJyxcbiAgICAvLyAgICAgJz4gVG8gZGVwbG95IGFsbCBlbnZpcm9ubWVudHMgKGBERVZgLCBgUUFgLCBgUFJPRGApLCBtYWludGFpbiBgZGV2YCwgYHFhYCwgYW5kIGBwcm9kYCBicmFuY2hlcyBhbmQgbWVyZ2UgY2hhbmdlcyBhY2NvcmRpbmdseS4nLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMjIFByb2plY3QgdG9vbHMgYW5kIHV0aWxpdGllcycsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnIyMjIFByZXR0aWVyJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdBIGNvZGUgZm9ybWF0dGVyIGVuZm9yY2luZyBjb25zaXN0ZW50IHN0eWxlLicsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnPiBbIU5PVEVdJyxcbiAgICAvLyAgICAgJz4gUHJldHRpZXIgcnVucyBhdXRvbWF0aWNhbGx5IG9uIGNvbW1pdC4nLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJz4gWyFUSVBdJyxcbiAgICAvLyAgICAgJz4gTWFudWFsbHkgcnVuIFByZXR0aWVyOicsXG4gICAgLy8gICAgICc+IGBgYGJhc2gnLFxuICAgIC8vICAgICAnPiBucG0gcnVuIHByZXR0aWVyOmZpeCcsXG4gICAgLy8gICAgICc+IGBgYCcsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnIyMjIEVTTGludCcsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnQSBsaW50ZXIgZW5mb3JjaW5nIFR5cGVTY3JpcHQgY29kaW5nIHN0YW5kYXJkcy4nLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJz4gWyFOT1RFXScsXG4gICAgLy8gICAgICc+IEVTTGludCBydW5zIGF1dG9tYXRpY2FsbHkgb24gY29tbWl0LicsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnPiBbIVRJUF0nLFxuICAgIC8vICAgICAnPiBNYW51YWxseSBydW4gRVNMaW50OicsXG4gICAgLy8gICAgICc+IGBgYGJhc2gnLFxuICAgIC8vICAgICAnPiBucG0gcnVuIGVzbGludDpmaXgnLFxuICAgIC8vICAgICAnPiBgYGAnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMjIyBMaW50LXN0YWdlZCcsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnUnVucyBsaW50ZXJzIG9ubHkgb24gc3RhZ2VkIGZpbGVzIGJlZm9yZSBjb21taXR0aW5nLicsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnIyMjIENvbW1pdC1MaW50JyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdFbnN1cmVzIGNvbW1pdCBtZXNzYWdlcyBmb2xsb3cgYSBjb252ZW50aW9uYWwgZm9ybWF0LicsXG4gICAgLy8gICAgICcnLFxuICAgIC8vICAgICAnIyMjIEh1c2t5JyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICdNYW5hZ2VzIEdpdCBob29rcyBmb3IgYXV0b21hdGVkIHRhc2tzIChlLmcuLCBydW5uaW5nIHRlc3RzLCBsaW50ZXJzKS4nLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJyMjIEF1dGhvcnMnLFxuICAgIC8vICAgICAnJyxcbiAgICAvLyAgICAgJy0gW0BBdXRob3IxXSgjbGluazEpJyxcbiAgICAvLyAgICAgJy0gW0BBdXRob3IyXSgjbGluazIpJyxcbiAgICAvLyAgICAgJycsXG4gICAgLy8gICAgICc8cCBhbGlnbj1cInJpZ2h0XCI+KDxhIGhyZWY9XCIjdGFibGUtb2YtY29udGVudHNcIj5iYWNrIHRvIHRvcDwvYT4pPC9wPicsXG4gICAgLy8gICBdLmpvaW4oJ1xcbicpLFxuICAgIC8vIH0pXG4gIH1cbn1cbiJdfQ==