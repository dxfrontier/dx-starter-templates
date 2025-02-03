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
            // Start README.md
            'README.md': [
                `# ${this.options.name}`,
                '',
                `${this.options.description}`,
                '',
                '# Table of Contents',
                '',
                `- [${this.options.name}](#${this.options.name})`,
                '- [Table of Contents](#table-of-contents)',
                '  - [Prerequisites](#prerequisites)',
                '  - [`Installation`](#installation)',
                '  - [`Usage`](#usage)',
                '    - [Start locally](#start-locally)',
                '    - [Debug locally](#debug-locally)',
                '    - [Deploy (`DEV`, `QA`, `PROD`)](#deploy-dev-qa-prod)',
                '      - [Deployment steps](#deployment-steps)',
                '      - [`Branch-Specific` deployment rules](#branch-specific-deployment-rules)',
                '  - [Project tools and utilities](#project-tools-and-utilities)',
                '    - [Prettier](#prettier)',
                '    - [ESLint](#eslint)',
                '    - [Lint-staged](#lint-staged)',
                '    - [Commit-Lint](#commit-lint)',
                '    - [Husky](#husky)',
                '  - [Authors](#authors)',
                '',
                '## Prerequisites',
                '',
                'Install [**@sap/cds-dk**](https://cap.cloud.sap/docs/get-started/), [typescript](https://www.typescriptlang.org/), [ts-node](https://www.npmjs.com/package/ts-node) globally:',
                '',
                '```bash',
                'npm install -g @sap/cds-dk typescript ts-node',
                '```',
                '',
                '## `Installation`',
                '',
                '1. After generating the project using `projen`, install the required dependencies by running:',
                '',
                '```bash',
                'npm install',
                '```',
                '',
                '2. Create the following three labels in your repository by navigating to `Pull Requests` > `Labels` > `New Label`:',
                '',
                '   - **patch**',
                '   - **minor**',
                '   - **major**',
                '',
                '> [!TIP]',
                '> For more info about `SemVer (MAJOR.MINOR.PATCH)`, visit [SemVer.org](https://semver.org/)',
                '',
                '3. The following secrets must be created in your GitHub repository to enable the automatic deployment process:',
                '',
                '| Parameter       | Description                                                                   |',
                '| --------------- | ----------------------------------------------------------------------------- |',
                '| `CF_IAS_ORIGIN` | The origin used for IAS authentication when logging into Cloud Foundry. |',
                '| `CF_API_DEV` | The API endpoint for the development Cloud Foundry environment. |',
                '| `CF_ORG_DEV` | The organization for the development environment in Cloud Foundry. |',
                '| `CF_SPACE_DEV` | The space within the development organization in Cloud Foundry. |',
                '| `CF_USERNAME_DEV` | The username for logging into the development environment in Cloud Foundry. |',
                '| `CF_PASSWORD_DEV` | The password for logging into the development environment in Cloud Foundry. |',
                '| `CF_API_PROD` | The API endpoint for the production Cloud Foundry environment. |',
                '| `CF_ORG_PROD` | The organization for the production environment in Cloud Foundry. |',
                '| `CF_SPACE_PROD` | The space within the production organization in Cloud Foundry. |',
                '| `CF_USERNAME_PROD` | The username for logging into the production environment in Cloud Foundry. |',
                '| `CF_PASSWORD_PROD` | The password for logging into the production environment in Cloud Foundry. |',
                '',
                '## `Usage`',
                '',
                '### Start locally',
                '',
                'Start the CAP server in watch mode (hot-reload):',
                '',
                '```bash',
                'npm run watch',
                '```',
                '',
                '> [!TIP]',
                '> Access the service at http://localhost:4004',
                '',
                '### Debug locally',
                '',
                '1. Add breakpoints in your `.ts` files.',
                '2. Start the CAP server in debug mode:',
                '',
                '```bash',
                'npm run watch',
                '```',
                '',
                '3. Refresh the service.',
                '4. The debugger should stop at the breakpoint line.',
                '',
                '### Deploy (`DEV`, `QA`, `PROD`)',
                '',
                'The deployment process is automatically triggered when a `PULL REQUEST` is merged into the `main` branch.',
                '',
                '#### Deployment steps',
                '',
                '- `Version Bump`: The `package.json` version is incremented based on the selected label (`patch`, `minor`, or `major`).',
                '- `GitHub Tags`: A new tag is created to mark the release.',
                '- `GitHub Release`: A release is published in the repository, summarizing the changes.',
                '- `Changelog Update`: The `CHANGELOG.md` file is updated with the latest commit messages.',
                '',
                '> [!CAUTION]',
                '> Secrets from installation process are required for automatic deployment. See **[installation](#installation)**.',
                '',
                '> [!CAUTION]',
                '> Every `PULL REQUEST` merged into `main` must have one of the following labels:',
                '> - `patch` **(0.0.x)**',
                '> - `minor` **(0.x.0)**',
                '> - `major` **(x.0.0)**',
                '',
                '#### `Branch-Specific` deployment rules',
                '',
                '- `Development (DEV)`: Changes merged into the `dev` branch trigger deployment to the development environment.',
                '- `Quality Assurance (QA)`: Merging changes into `qa` triggers deployment to the QA environment.',
                '- `Production (PROD)`: Merging changes into `prod` deploys to production.',
                '',
                '> [!TIP]',
                '> To deploy all environments (`DEV`, `QA`, `PROD`), maintain `dev`, `qa`, and `prod` branches and merge changes accordingly.',
                '',
                '## Project tools and utilities',
                '',
                '### Prettier',
                '',
                'A code formatter enforcing consistent style.',
                '',
                '> [!NOTE]',
                '> Prettier runs automatically on commit.',
                '',
                '> [!TIP]',
                '> Manually run Prettier:',
                '> ```bash',
                '> npm run prettier:fix',
                '> ```',
                '',
                '### ESLint',
                '',
                'A linter enforcing TypeScript coding standards.',
                '',
                '> [!NOTE]',
                '> ESLint runs automatically on commit.',
                '',
                '> [!TIP]',
                '> Manually run ESLint:',
                '> ```bash',
                '> npm run eslint:fix',
                '> ```',
                '',
                '### Lint-staged',
                '',
                'Runs linters only on staged files before committing.',
                '',
                '### Commit-Lint',
                '',
                'Ensures commit messages follow a conventional format.',
                '',
                '### Husky',
                '',
                'Manages Git hooks for automated tasks (e.g., running tests, linters).',
                '',
                '## Authors',
                '',
                '- [@Author1](#link1)',
                '- [@Author2](#link2)',
                '',
                '<p align="right">(<a href="#table-of-contents">back to top</a>)</p>',
            ],
            // End README.md
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
    }
}
exports.SampleCodeConfigCapService = SampleCodeConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFvQztBQUVwQyxxQ0FBK0Q7QUFFL0Qsb0RBQWlEO0FBRWpEOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSwyQkFBb0I7SUFHbEUsWUFBWSxPQUEwQixFQUFFLE9BQWlDO1FBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywyQkFBMkI7UUFDdkMsT0FBTztZQUNMLGFBQWEsRUFBRTtnQkFDYixHQUFHO2dCQUNILGlCQUFpQjtnQkFDakIsd0JBQXdCO2dCQUN4QixpQkFBaUI7Z0JBQ2pCLDBCQUEwQjtnQkFDMUIsU0FBUztnQkFDVCxRQUFRO2dCQUNSLHVCQUF1QjtnQkFDdkIsaUJBQWlCO2dCQUNqQix5QkFBeUI7Z0JBQ3pCLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZix5QkFBeUI7Z0JBQ3pCLGlDQUFpQztnQkFDakMscUNBQXFDO2dCQUNyQyxTQUFTO2dCQUNULE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixhQUFhO2dCQUNiLDhCQUE4QjtnQkFDOUIsTUFBTTtnQkFDTixZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIsTUFBTTtnQkFDTixpQkFBaUI7Z0JBQ2pCLCtCQUErQjtnQkFDL0IsTUFBTTtnQkFDTixZQUFZO2dCQUNaLHVDQUF1QztnQkFDdkMsTUFBTTtnQkFDTixhQUFhO2dCQUNiLGlDQUFpQztnQkFDakMsS0FBSztnQkFDTCxHQUFHO2FBQ0o7WUFDRCxtQkFBbUIsRUFBRTtnQkFDbkIsR0FBRztnQkFDSCwwQkFBMEI7Z0JBQzFCLDZCQUE2QjtnQkFDN0IsZ0NBQWdDO2dCQUNoQyxpQ0FBaUM7Z0JBQ2pDLHFD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SSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O0FBL2lCSCxnRUFnakJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FtcGxlRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDYXBTZXJ2aWNlUHJvamVjdCwgQ2FwU2VydmljZVByb2plY3RPcHRpb25zIH0gZnJvbSAnLi4vLi9wcm9qZWN0JztcbmltcG9ydCB7IEJhc2VQcm9qZWN0LCBTYW1wbGVDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc3RhbnRzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgU2FtcGxlQ29kZUNvbmZpZ0Jhc2Uge1xuICBwcml2YXRlIG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBDYXBTZXJ2aWNlUHJvamVjdCwgb3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSByb290IGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSByb290IGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZVJvb3RUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5jZHNyYy5qc29uJzogW1xuICAgICAgICAneycsXG4gICAgICAgICcgIFwicmVxdWlyZXNcIjogeycsXG4gICAgICAgICcgICAgXCJbZGV2ZWxvcG1lbnRdXCI6IHsnLFxuICAgICAgICAnICAgICAgXCJhdXRoXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJtb2NrZWRcIicsXG4gICAgICAgICcgICAgICB9JyxcbiAgICAgICAgJyAgICB9LCcsXG4gICAgICAgICcgICAgXCJbcHJvZHVjdGlvbl1cIjogeycsXG4gICAgICAgICcgICAgICBcImF1dGhcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcInhzdWFhXCInLFxuICAgICAgICAnICAgICAgfSwnLFxuICAgICAgICAnICAgICAgXCJkYlwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwiaGFuYVwiLCcsXG4gICAgICAgICcgICAgICAgIFwiaW1wbFwiOiBcIkBjYXAtanMvaGFuYVwiLCcsXG4gICAgICAgICcgICAgICAgIFwiZGVwbG95LWZvcm1hdFwiOiBcImhkYnRhYmxlXCInLFxuICAgICAgICAnICAgICAgfScsXG4gICAgICAgICcgICAgfScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJpMThuXCI6IHsnLFxuICAgICAgICAnICAgIFwiZGVmYXVsdF9sYW5ndWFnZVwiOiBcImVuXCInLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwibG9nXCI6IHsnLFxuICAgICAgICAnICAgIFwic2VydmljZVwiOiB0cnVlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImZlYXR1cmVzXCI6IHsnLFxuICAgICAgICAnICAgIFwicHJlc2VydmVfY29tcHV0ZWRcIjogdHJ1ZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJzcWxcIjogeycsXG4gICAgICAgICcgICAgXCJuYXRpdmVfaGFuYV9hc3NvY2lhdGlvbnNcIjogZmFsc2UnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiaGFuYVwiOiB7JyxcbiAgICAgICAgJyAgICBcImRlcGxveS1mb3JtYXRcIjogXCJoZGJ0YWJsZVwiJyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgICAnLmNkc3ByZXR0aWVyLmpzb24nOiBbXG4gICAgICAgICd7JyxcbiAgICAgICAgJyAgXCJhbGlnbkFmdGVyS2V5XCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblByZUFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblBvc3RBbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db2xvbnNJbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblZhbHVlc0luQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uc0FuZEZ1bmN0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25OYW1lc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25SZXR1cm5zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5FbnRpdGllc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luU2VsZWN0SXRlbXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJblVzaW5nXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkV4cHJlc3Npb25zQW5kQ29uZGl0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FeHByQW5kQ29uZFdpdGhpbkJsb2NrXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbG9uc0JlZm9yZVR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkVxdWFsc0FmdGVyVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVHlwZXNXaXRoaW5CbG9ja1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db21wb3NpdGlvblN0cnVjdFRvUmlnaHRcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImNxbEtleXdvcmRDYXBpdGFsaXphdGlvblwiOiBcImxvd2VyXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwUHJlQW5ub3RhdGlvbnNJbk9yaWdpbmFsTGluZVwiOiBcImtlZXBMaW5lXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwUG9zdEFubm90YXRpb25zSW5PcmlnaW5hbExpbmVcIjogXCJrZWVwTGluZVwiLCcsXG4gICAgICAgICcgIFwia2VlcEVtcHR5QnJhY2tldHNUb2dldGhlclwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwia2VlcFNpbmdsZUxpbmVkQmxvY2tzVG9nZXRoZXJcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImtlZXBPcmlnaW5hbEVtcHR5TGluZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIm1heEtlZXBFbXB0eUxpbmVzXCI6IDIsJyxcbiAgICAgICAgJyAgXCJvcGVuaW5nQnJhY2VJbk5ld0xpbmVcIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJzZWxlY3RJbk5ld0xpbmVcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcInRhYlNpemVcIjogMiwnLFxuICAgICAgICAnICBcImZpbmFsTmV3bGluZVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiZm9ybWF0RG9jQ29tbWVudHNcIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJtYXhEb2NDb21tZW50TGluZVwiOiA2MCwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VCZWZvcmVDb2xvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUJlZm9yZUNvbG9uSW5Bbm5vdGF0aW9uXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29sb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbG9uSW5Bbm5vdGF0aW9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb21tYVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFyb3VuZEFsaWduZWRPcHNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBcm91bmRCaW5hcnlPcHNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VXaXRoaW5CcmFja2V0c1wiOiBmYWxzZScsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgICAnZGVmYXVsdC1lbnYuanMnOiBbXG4gICAgICAgICcvKionLFxuICAgICAgICAnICogRmV0Y2hlcyBgVkNBUF9TRVJWSUNFU2AgZm9yIGEgZ2l2ZW4gQ0YgYXBwbGljYXRpb24gYW5kIHdyaXRlcyBpdCB0byBhIGZpbGUuJyxcbiAgICAgICAgJyAqIEl0IHV0aWxpemVzIHRoZSBDbG91ZCBGb3VuZHJ5IENMSSB0byBkbyBzby4nLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogTWFrZSBzdXJlIHlvdSBhcmUgbG9nZ2VkIGluIHZpYSB0aGUgQ0YgQ0xJIChgY2YgbG9naW5gKSBiZWZvcmUgcnVubmluZyB0aGUnLFxuICAgICAgICAnICogc2NyaXB0LiBZb3UgY2FuIGNoZWNrIHlvdXIgbG9naW4gYW5kIHRoZSBvcmdhbml6YXRpb24gYW5kIHNwYWNlIHlvdSBhcmUnLFxuICAgICAgICAnICogdGFyZ2V0dGluZyBieSB1c2luZyBgY2YgdGFyZ2V0YC4nLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogQWxsb3dzIG9uLXByZW1pc2UgY29ubmVjdGl2aXR5IHByb3h5aW5nIGlmIG5lY2Vzc2FyeScsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBAYXV0aG9yIFNlYmFzdGlhbiBCbGVzc2luZycsXG4gICAgICAgICcgKi8nLFxuICAgICAgICBcImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcIixcbiAgICAgICAgXCJjb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1wiLFxuICAgICAgICBcImNvbnN0IGV4ZWMgPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYyk7XCIsXG4gICAgICAgIFwiY29uc3Qgc3Bhd24gPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuc3Bhd24pO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2FzeW5jIGZ1bmN0aW9uIGdldEFwcEd1aWQoYXBwTmFtZSkgeycsXG4gICAgICAgICcgIGNvbnN0IGNtZCA9IGBjZiBhcHAgJHthcHBOYW1lfSAtLWd1aWRgOycsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGNtZCk7JyxcbiAgICAgICAgJyAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYyhjbWQpOycsXG4gICAgICAgICcgIGlmIChzdGRlcnIpIGNvbnNvbGUubG9nKGBzdGRlcnI6ICR7c3RkZXJyfWApOycsXG4gICAgICAgICcgIHJldHVybiBzdGRvdXQudHJpbSgpOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJycsXG4gICAgICAgICdhc3luYyBmdW5jdGlvbiBnZXREZWZhdWx0RW52KGFwcEd1aWQpIHsnLFxuICAgICAgICAnICBjb25zdCBjbWQgPSBgY2YgY3VybCBcInYzL2FwcHMvJHthcHBHdWlkfS9lbnZcImA7JyxcbiAgICAgICAgJyAgY29uc29sZS5sb2coY21kKTsnLFxuICAgICAgICAnICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKGNtZCk7JyxcbiAgICAgICAgJyAgaWYgKHN0ZGVycikgY29uc29sZS5sb2coYHN0ZGVycjogJHtzdGRlcnJ9YCk7JyxcbiAgICAgICAgJyAgcmV0dXJuIEpTT04ucGFyc2Uoc3Rkb3V0KS5zeXN0ZW1fZW52X2pzb247JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnJyxcbiAgICAgICAgJyhhc3luYyAoKSA9PiB7JyxcbiAgICAgICAgJyAgY29uc3QgbXlBcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpOycsXG4gICAgICAgICcgIGNvbnN0IGFwcE5hbWUgPSBteUFyZ3NbMF07JyxcbiAgICAgICAgJyAgaWYgKCFhcHBOYW1lKSB7JyxcbiAgICAgICAgXCIgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSBDRiBhcHBsaWNhdGlvbiBuYW1lIHRvIGZldGNoIGl0cyBlbnZpcm9ubWVudCEnKTtcIixcbiAgICAgICAgJyAgICByZXR1cm47JyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICcnLFxuICAgICAgICAnICBsZXQgZW52RmlsZU5hbWUgPSBteUFyZ3NbMV07JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBlbnZGaWxlTmFtZSA9IGVudkZpbGVOYW1lID8gZW52RmlsZU5hbWUgOiAnZGVmYXVsdC1lbnYuanNvbic7XCIsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGBXcml0aW5nIGVudmlyb25tZW50IG9mICR7YXBwTmFtZX0gdG8gJHtlbnZGaWxlTmFtZX1gKTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgY29uc3QgZGVmYXVsdEVudiA9IGF3YWl0IGdldERlZmF1bHRFbnYoYXdhaXQgZ2V0QXBwR3VpZChhcHBOYW1lKSk7JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGxldCBiUnVuUHJveHkgPSBmYWxzZTsnLFxuICAgICAgICAnICBsZXQgcHJveHlQb3J0ID0gbnVsbDsnLFxuICAgICAgICAnICBsZXQgcHJveHlIb3N0ID0gbnVsbDsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGlmIChkZWZhdWx0RW52WydWQ0FQX1NFUlZJQ0VTJ11bJ2Nvbm5lY3Rpdml0eSddKSB7XCIsXG4gICAgICAgICcgICAgcHJveHlQb3J0ID0gZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfcG9ydDsnLFxuICAgICAgICAnICAgIHByb3h5SG9zdCA9IGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X2hvc3Q7JyxcbiAgICAgICAgXCIgICAgZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfaG9zdCA9ICdsb2NhbGhvc3QnO1wiLFxuICAgICAgICAnICAgIGJSdW5Qcm94eSA9IHRydWU7JyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgZnMud3JpdGVGaWxlKCdkZWZhdWx0LWVudi5qc29uJywgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEVudiwgbnVsbCwgMiksIGFzeW5jIChlcnIpID0+IHtcIixcbiAgICAgICAgJyAgICBpZiAoZXJyKSB7JyxcbiAgICAgICAgJyAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsnLFxuICAgICAgICAnICAgIH0gZWxzZSBpZiAoYlJ1blByb3h5KSB7JyxcbiAgICAgICAgJyAgICAgIGNvbnNvbGUubG9nKGBjZiBzc2ggJHthcHBOYW1lfSAtTCAke3Byb3h5UG9ydH06JHtwcm94eUhvc3R9OiR7cHJveHlQb3J0fWApOycsXG4gICAgICAgIFwiICAgICAgYXdhaXQgc3Bhd24oJ2NmJywgW2Bzc2ggJHthcHBOYW1lfSAtTCAke3Byb3h5UG9ydH06JHtwcm94eUhvc3R9OiR7cHJveHlQb3J0fWBdLCB7XCIsXG4gICAgICAgICcgICAgICAgIHNoZWxsOiB0cnVlLCcsXG4gICAgICAgIFwiICAgICAgICBzdGRpbzogJ2luaGVyaXQnLFwiLFxuICAgICAgICAnICAgICAgfSk7JyxcbiAgICAgICAgJyAgICB9JyxcbiAgICAgICAgJyAgfSk7JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBjb25zb2xlLmxvZygnRG9uZScpO1wiLFxuICAgICAgICAnfSkoKTsnLFxuICAgICAgXSxcbiAgICAgICdtdGEueWFtbCc6IFtcbiAgICAgICAgXCJfc2NoZW1hLXZlcnNpb246ICczLjEnXCIsXG4gICAgICAgIGBJRDogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICd2ZXJzaW9uOiAwLjAuMScsXG4gICAgICAgIGBkZXNjcmlwdGlvbjogJHt0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb259YCxcbiAgICAgICAgJ3BhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgZW5hYmxlLXBhcmFsbGVsLWRlcGxveW1lbnRzOiB0cnVlJyxcbiAgICAgICAgJ2J1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgYmVmb3JlLWFsbDonLFxuICAgICAgICAnICAgIC0gYnVpbGRlcjogY3VzdG9tJyxcbiAgICAgICAgJyAgICAgIGNvbW1hbmRzOicsXG4gICAgICAgICcgICAgICAgIC0gbnBtIGNpJyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gcnVuIGJ1aWxkJyxcbiAgICAgICAgJyAgICAgICAgLSBucHggQGNhcC1qcy9jZHMtdHlwZXIgXCIqXCIgLS1vdXRwdXREaXJlY3RvcnkgZ2VuL3Nydi9AY2RzLW1vZGVscycsXG4gICAgICAgICdtb2R1bGVzOicsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tc3J2YCxcbiAgICAgICAgJyAgICB0eXBlOiBub2RlanMnLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9zcnYnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkcGFjazogbm9kZWpzX2J1aWxkcGFjaycsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLXR5cGU6IGh0dHAnLFxuICAgICAgICAnICAgICAgcmVhZGluZXNzLWhlYWx0aC1jaGVjay1odHRwLWVuZHBvaW50OiAvaGVhbHRoJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBidWlsZGVyOiBucG0nLFxuICAgICAgICAnICAgIHByb3ZpZGVzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICAnICAgICAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICAgICAgc3J2LXVybDogJHtkZWZhdWx0LXVybH0nLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tY29ubmVjdGl2aXR5YCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uc2AsXG4gICAgICAgICcgICAgdHlwZTogY29tLnNhcC5hcHBsaWNhdGlvbi5jb250ZW50JyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgICAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICAgICAgc2VydmljZS1rZXk6JyxcbiAgICAgICAgYCAgICAgICAgICAgIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYS1rZXlgLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBzcnYtYXBpJyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICAnICAgICAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICAgICAgY29udGVudC10YXJnZXQ6IHRydWUnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGNvbnRlbnQ6JyxcbiAgICAgICAgJyAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICBkZXN0aW5hdGlvbnM6JyxcbiAgICAgICAgJyAgICAgICAgICAgIC0gQXV0aGVudGljYXRpb246IE9BdXRoMlVzZXJUb2tlbkV4Y2hhbmdlJyxcbiAgICAgICAgYCAgICAgICAgICAgICAgTmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tYXBwLXNydmAsXG4gICAgICAgIGAgICAgICAgICAgICAgIFRva2VuU2VydmljZUluc3RhbmNlTmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlS2V5TmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAgICAgICAgIFVSTDogfntzcnYtYXBpL3Nydi11cmx9JyxcbiAgICAgICAgYCAgICAgICAgICAgICAgc2FwLmNsb3VkLnNlcnZpY2U6ICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX1gLFxuICAgICAgICAnICAgICAgICAgIGV4aXN0aW5nX2Rlc3RpbmF0aW9uc19wb2xpY3k6IHVwZGF0ZScsXG4gICAgICAgICcgICAgYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgbm8tc291cmNlOiB0cnVlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYi1kZXBsb3llcmAsXG4gICAgICAgICcgICAgdHlwZTogaGRiJyxcbiAgICAgICAgJyAgICBwYXRoOiBnZW4vZGInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkcGFjazogbm9kZWpzX2J1aWxkcGFjaycsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAncmVzb3VyY2VzOicsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgcGF0aDogLi94cy1zZWN1cml0eS5qc29uJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IHhzdWFhJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogYXBwbGljYXRpb24nLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIHRlbmFudC1tb2RlOiBkZWRpY2F0ZWQnLFxuICAgICAgICBgICAgICAgICB4c2FwcG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9YCxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBjb25uZWN0aXZpdHknLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBsaXRlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGNvbmZpZzonLFxuICAgICAgICAnICAgICAgICBIVE1MNVJ1bnRpbWVfZW5hYmxlZDogdHJ1ZScsXG4gICAgICAgICcgICAgICAgIGluaXRfZGF0YTonLFxuICAgICAgICAnICAgICAgICAgIGluc3RhbmNlOicsXG4gICAgICAgICcgICAgICAgICAgICBkZXN0aW5hdGlvbnM6JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogTm9BdXRoZW50aWNhdGlvbicsXG4gICAgICAgICcgICAgICAgICAgICAgICAgTmFtZTogdWk1JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBQcm94eVR5cGU6IEludGVybmV0JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBUeXBlOiBIVFRQJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBVUkw6IGh0dHBzOi8vdWk1LnNhcC5jb20nLFxuICAgICAgICAnICAgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICAgICAgdmVyc2lvbjogMS4wLjAnLFxuICAgICAgICAnICAgICAgc2VydmljZTogZGVzdGluYXRpb24nLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBsaXRlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgICcgICAgdHlwZTogY29tLnNhcC54cy5oZGktY29udGFpbmVyJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBoYW5hJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogaGRpLXNoYXJlZCcsXG4gICAgICAgICcgICAgcHJvcGVydGllczonLFxuICAgICAgICAnICAgICAgaGRpLXNlcnZpY2UtbmFtZTogJHtzZXJ2aWNlLW5hbWV9JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgYHNydmAgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGBzcnZgIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZVNydlRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFydCBpbmRleC50c1xuICAgICAgJ3Nydi9pbmRleC5jZHMnOiBbYHVzaW5nIGZyb20gJy4vY29udHJvbGxlci9zZXJ2aWNlLTEvc2VydmljZS0xJztgXSxcbiAgICAgIC8vIEVuZCBpbmRleC50c1xuXG4gICAgICAvLyBTdGFydCBFbnRpdHkgaGFuZGxlclxuICAgICAgW2BzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvaGFuZGxlci8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHtcbiAgICAgICAgICBBZnRlclJlYWQsXG4gICAgICAgICAgRW50aXR5SGFuZGxlcixcbiAgICAgICAgICBJbmplY3QsXG4gICAgICAgICAgUmVxLFxuICAgICAgICAgIFJlc3VsdHMsXG4gICAgICAgICAgU2VydmljZSxcbiAgICAgICAgICBDRFNfRElTUEFUQ0hFUixcbiAgICAgICAgICB0eXBlIFR5cGVkUmVxdWVzdCxcbiAgICAgICAgICBVc2UsXG4gICAgICAgIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGltcG9ydCB7IE1pZGRsZXdhcmVBZnRlclJlYWQgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL01pZGRsZXdhcmVBZnRlclJlYWQnO2AsXG4gICAgICAgIGBpbXBvcnQgeyBNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL01pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBARW50aXR5SGFuZGxlcigke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSlgLFxuICAgICAgICBgQFVzZShNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNydjogU2VydmljZTtgLFxuICAgICAgICBgICAvLyBAT25SZWFkLCBAQmVmb3JlUmVhZCwgQEFmdGVyUmVhZCwgQE9uVXBkYXRlIC4uLmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICBAQWZ0ZXJSZWFkKClgLFxuICAgICAgICBgICBAVXNlKE1pZGRsZXdhcmVBZnRlclJlYWQpYCxcbiAgICAgICAgYCAgcHVibGljIGFzeW5jIGFmdGVyUmVhZChAUmVzdWx0cygpIHJlc3VsdHM6ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LCBAUmVxKCkgcmVxOiBUeXBlZFJlcXVlc3Q8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+KTogUHJvbWlzZTwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4ge2AsXG4gICAgICAgIGAgICAgY29uc29sZS5sb2cocmVxKTtgLFxuICAgICAgICBgICAgIHJldHVybiByZXN1bHRzO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kXG5cbiAgICAgIC8vIFN0YXJ0IFVuYm91bmRBY3Rpb25zSGFuZGxlclxuICAgICAgJ3Nydi9jb250cm9sbGVyL3NlcnZpY2UtMS9oYW5kbGVyL1VuYm91bmRBY3Rpb25zSGFuZGxlci50cyc6IFtcbiAgICAgICAgYGltcG9ydCB7IEluamVjdCwgU2VydmljZSwgQ0RTX0RJU1BBVENIRVIsIFVuYm91bmRBY3Rpb25zIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQFVuYm91bmRBY3Rpb25zKClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzIFVuYm91bmRBY3Rpb25zSGFuZGxlciB7YCxcbiAgICAgICAgYCAgQEluamVjdChDRFNfRElTUEFUQ0hFUi5TUlYpIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZTogU2VydmljZTtgLFxuICAgICAgICBgICAvLyBAT25FcnJvciwgQE9uRXZlbnQsIEBPbkFjdGlvbiwgQE9uRnVuY3Rpb25gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFVuYm91bmRBY3Rpb25zSGFuZGxlclxuXG4gICAgICAvLyBTdGFydCBzZXJ2aWNlLTEuY2RzXG4gICAgICAnc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMS5jZHMnOiBbXG4gICAgICAgIGB1c2luZyB7JHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfSBhcyBCYXNlfSBmcm9tICcuLi8uLi8uLi9kYi9zY2hlbWEnO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgc2VydmljZSBTZXJ2aWNlQSB7YCxcbiAgICAgICAgYCAgIEByZWFkb25seWAsXG4gICAgICAgIGAgICBlbnRpdHkgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gYXMgcHJvamVjdGlvbiBvbiBCYXNlLiR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9O2AsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgc2VydmljZS0xLmNkc1xuXG4gICAgICAvLyBTdGFydCBzZXJ2aWNlLTEudHNcbiAgICAgICdzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvc2VydmljZS0xLnRzJzogW1xuICAgICAgICBgaW1wb3J0IHsgQ0RTRGlzcGF0Y2hlciB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyLyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlcic7YCxcbiAgICAgICAgYGltcG9ydCB7IFVuYm91bmRBY3Rpb25zSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlci9VbmJvdW5kQWN0aW9uc0hhbmRsZXInO2AsXG4gICAgICAgICcnLFxuICAgICAgICBgZXhwb3J0ID0gbmV3IENEU0Rpc3BhdGNoZXIoWyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlciwgVW5ib3VuZEFjdGlvbnNIYW5kbGVyXSkuaW5pdGlhbGl6ZSgpO2AsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIHNlcnZpY2UtMS50c1xuXG4gICAgICAvLyBTdGFydCBNaWRkbGV3YXJlXG4gICAgICBbYHNydi9taWRkbGV3YXJlL01pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS50c2BdOiBbXG4gICAgICAgIGBpbXBvcnQgdHlwZSB7IE1pZGRsZXdhcmVJbXBsLCBOZXh0TWlkZGxld2FyZSwgVHlwZWRSZXF1ZXN0IH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBpbXBvcnQgdHlwZSB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnI2Nkcy1tb2RlbHMvU2VydmljZUEnO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzIE1pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSBpbXBsZW1lbnRzIE1pZGRsZXdhcmVJbXBsIHtgLFxuICAgICAgICBgICBwdWJsaWMgYXN5bmMgdXNlKHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiwgbmV4dDogTmV4dE1pZGRsZXdhcmUpOiBQcm9taXNlPHZvaWQ+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlIGVudGl0eSAxIDogRVhFQ1VURUQnKTtgLFxuICAgICAgICBgICAgIGF3YWl0IG5leHQoKTtgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBNaWRkbGV3YXJlXG5cbiAgICAgIC8vIFN0YXJ0IE1pZGRsZXdhcmVBZnRlclJlYWRcbiAgICAgICdzcnYvbWlkZGxld2FyZS9NaWRkbGV3YXJlQWZ0ZXJSZWFkLnRzJzogW1xuICAgICAgICBgaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlSW1wbCwgTmV4dE1pZGRsZXdhcmUsIFR5cGVkUmVxdWVzdCB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHR5cGUgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBNaWRkbGV3YXJlQWZ0ZXJSZWFkIGltcGxlbWVudHMgTWlkZGxld2FyZUltcGwge2AsXG4gICAgICAgIGAgIHB1YmxpYyBhc3luYyB1c2UocmVxOiBUeXBlZFJlcXVlc3Q8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+LCBuZXh0OiBOZXh0TWlkZGxld2FyZSk6IFByb21pc2U8dm9pZD4ge2AsXG4gICAgICAgIGAgICAgY29uc29sZS5sb2coJ01pZGRsZXdhcmUgZW50aXR5IDEgOiBFWEVDVVRFRCcpO2AsXG4gICAgICAgIGAgICAgYXdhaXQgbmV4dCgpO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIE1pZGRsZXdhcmVBZnRlclJlYWRcblxuICAgICAgLy8gU3RhcnQgUmVwb3NpdG9yeVxuICAgICAgW2BzcnYvcmVwb3NpdG9yeS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBpbXBvcnQgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYEBSZXBvc2l0b3J5KClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiB7YCxcbiAgICAgICAgYCAgY29uc3RydWN0b3IoKSB7YCxcbiAgICAgICAgYCAgICBzdXBlcigke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSk7YCxcbiAgICAgICAgYCAgfWAsXG4gICAgICAgIGAgIC8vIC4uLiBkZWZpbmUgY3VzdG9tIENEUy1RTCBhY3Rpb25zIGlmIEJhc2VSZXBvc2l0b3J5IG9uZXMgYXJlIG5vdCBzYXRpc2Z5aW5nIHlvdXIgbmVlZHMgIWAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgUmVwb3NpdG9yeVxuXG4gICAgICAvLyBTdGFydCBTZXJ2aWNlXG4gICAgICBbYHNydi9zZXJ2aWNlLyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZS50c2BdOiBbXG4gICAgICAgIGBpbXBvcnQgeyBJbmplY3QsIFNlcnZpY2UsIFNlcnZpY2VMb2dpYywgQ0RTX0RJU1BBVENIRVIgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBpbXBvcnQgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3J5LyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBAU2VydmljZUxvZ2ljKClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZSB7YCxcbiAgICAgICAgYCAgQEluamVjdChDRFNfRElTUEFUQ0hFUi5TUlYpIHByaXZhdGUgcmVhZG9ubHkgc3J2OiBTZXJ2aWNlO2AsXG4gICAgICAgIGAgIEBJbmplY3QoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5KSBwcml2YXRlIHJlYWRvbmx5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZTogJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5O2AsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgU2VydmljZVxuXG4gICAgICAvLyBTdGFydCBjb25zdGFudHMudHNcbiAgICAgICdzcnYvdXRpbC9jb25zdGFudHMvY29uc3RhbnRzLnRzJzogW1xuICAgICAgICBgY29uc3QgQ29uc3RhbnRzID0ge2AsXG4gICAgICAgIGAgIC8vIEV4YW1wbGVgLFxuICAgICAgICBgICBDT05TVEFOVF8xOiB7YCxcbiAgICAgICAgYCAgICBQUk9QX0NPTlNUQU5UXzE6ICdTT01FVEhJTkcnLGAsXG4gICAgICAgIGAgIH0sYCxcbiAgICAgICAgYH07YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBleHBvcnQgZGVmYXVsdCBDb25zdGFudHM7YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgY29uc3RhbnRzLnRzXG5cbiAgICAgIC8vIFN0YXJ0IHV0aWwudHNcbiAgICAgICdzcnYvdXRpbC9oZWxwZXJzL3V0aWwudHMnOiBbXG4gICAgICAgIGBjb25zdCBVdGlsID0ge2AsXG4gICAgICAgIGAgIC8vIEV4YW1wbGVgLFxuICAgICAgICBgICBhSGVscGVyRnVuY3Rpb24oKSB7YCxcbiAgICAgICAgYCAgICByZXR1cm4gMTtgLFxuICAgICAgICBgICB9LGAsXG4gICAgICAgIGB9O2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGRlZmF1bHQgVXRpbDtgLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCB1dGlsLnRzXG5cbiAgICAgIC8vIFN0YXJ0IHR5cGVzLnRzXG4gICAgICAnc3J2L3V0aWwvdHlwZXMvdHlwZXMudHMnOiBbYC8vIEV4YW1wbGVgLCBgZXhwb3J0IHR5cGUgQVR5cGUgPSBzdHJpbmc7YF0sXG4gICAgICAvLyBFbmQgdHlwZXMudHNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSBkYiBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgZGIgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2RiL3NjaGVtYS5jZHMnOiBbXG4gICAgICAgIFwidXNpbmcgeyBtYW5hZ2VkIH0gZnJvbSAnQHNhcC9jZHMvY29tbW9uJztcIixcbiAgICAgICAgJycsXG4gICAgICAgIGBuYW1lc3BhY2UgJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfTtgLFxuICAgICAgICAnJyxcbiAgICAgICAgYGVudGl0eSAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSA6IG1hbmFnZWQge2AsXG4gICAgICAgICcgIGtleSBJRDogSW50ZWdlcjsnLFxuICAgICAgICAnICBkZXNjcjogbG9jYWxpemVkIFN0cmluZygxMTEpOycsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgZGF0YSBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgZGF0YSBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVEYXRhVGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0uY3N2YDtcbiAgICBjb25zdCBmaWxlUGF0aFRleHRzID0gYHRlc3QvZGF0YS8ke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9LSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LnRleHRzLmNzdmA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgW2ZpbGVQYXRoXTogW1xuICAgICAgICAnSUQsY3JlYXRlZEF0LGNyZWF0ZWRCeSxtb2RpZmllZEF0LG1vZGlmaWVkQnksZGVzY3InLFxuICAgICAgICAnMSwsLCwsRGVzY3JpcHRpb24gMScsXG4gICAgICAgICcyLCwsLCxEZXNjcmlwdGlvbiAyJyxcbiAgICAgICAgJzMsLCwsLERlc2NyaXB0aW9uIDMnLFxuICAgICAgXSxcbiAgICAgIFtmaWxlUGF0aFRleHRzXTogWydsb2NhbGUsSUQsZGVzY3InXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGVzIGZvciB0aGUgc3BlY2lmaWVkIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIHRlbXBsYXRlcyBUaGUgdGVtcGxhdGVzIHRvIGNyZWF0ZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVUZW1wbGF0ZXModGVtcGxhdGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGVtcGxhdGVzKSB7XG4gICAgICBpZiAodGVtcGxhdGVzW3BhdGhdKSB7XG4gICAgICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgcGF0aCwge1xuICAgICAgICAgIGNvbnRlbnRzOiB0ZW1wbGF0ZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGAke2NvbnN0YW50c1snQGNhcC1qcy9jZHMtdHlwZXInXS5OQU1FfUAke2NvbnN0YW50c1snQGNhcC1qcy9jZHMtdHlwZXInXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVzJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVzJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1kayddLk5BTUV9QCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1kayddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMtbHNwJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BzYXAvY2RzLWxzcCddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgYCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSddLk5BTUV9QCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC9jZHMnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAveHNzZWMnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC94c3NlYyddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6ICdjZHMtc2VydmUgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdzdGFydDpsb2NhbCc6ICdjZHMtdHMgc2VydmUnLFxuICAgICAgd2F0Y2g6ICdjZHMtdHMgd2F0Y2gnLFxuICAgICAgJ2J1aWxkOmNkcyc6ICdjZHMtdHMgYnVpbGQgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdidWlsZDpjZHM6bWVzc2FnZSc6ICdlY2hvIFwiQnVpbGQgQ0RTIC4uLlwiJyxcbiAgICAgICdidWlsZDp0cyc6ICd0c2MnLFxuICAgICAgJ2J1aWxkOnRzOm1lc3NhZ2UnOiAnZWNobyBcIlRyYW5zcGlsZSBUUyA9PiBKUyAuLi5cIicsXG4gICAgICAnYnVpbGQ6c3J2OmNsZWFuOnRzJzogJ2ZpbmQgZ2VuL3Nydi9zcnYgLXR5cGUgZiAtbmFtZSBcIioudHNcIiAtZGVsZXRlJyxcbiAgICAgICdidWlsZDpzcnY6Y2xlYW46dHM6bWVzc2FnZSc6ICdlY2hvIFwiQ2xlYW4gVFMgZmlsZXMgZnJvbSBzcnYgZm9sZGVyIC4uLlwiJyxcbiAgICAgIGJ1aWxkOlxuICAgICAgICAncnVuLXMgYnVpbGQ6Y2RzOm1lc3NhZ2UgYnVpbGQ6Y2RzIGJ1aWxkOnRzOm1lc3NhZ2UgYnVpbGQ6dHMgYnVpbGQ6c3J2OmNsZWFuOnRzOm1lc3NhZ2UgYnVpbGQ6c3J2OmNsZWFuOnRzJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBpbXBvcnRzOiB7XG4gICAgICAgICcjY2RzLW1vZGVscy8qJzogJy4vQGNkcy1tb2RlbHMvKi9pbmRleC5qcycsXG4gICAgICAgICcjZGlzcGF0Y2hlcic6ICcuL0BkaXNwYXRjaGVyL2luZGV4LmpzJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkRGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZVNydlRlbXBsYXRlcyk7XG4gIH1cbn1cbiJdfQ==
