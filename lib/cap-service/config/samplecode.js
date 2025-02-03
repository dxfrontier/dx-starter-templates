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
            'xs-security.json': ['{', '  "scopes": [],', '  "attributes": [],', '  "role-templates": []', '}'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFvQztBQUVwQyxxQ0FBK0Q7QUFFL0Qsb0RBQWlEO0FBRWpEOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSwyQkFBb0I7SUFHbEUsWUFBWSxPQUEwQixFQUFFLE9BQWlDO1FBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywyQkFBMkI7UUFDdkMsT0FBTztZQUNMLGtCQUFrQjtZQUNsQixXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDeEIsRUFBRTtnQkFDRixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUM3QixFQUFFO2dCQUNGLHFCQUFxQjtnQkFDckIsRUFBRTtnQkFDRixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHO2dCQUNqRCwyQ0FBMkM7Z0JBQzNDLHFDQUFxQztnQkFDckMscUNBQXFDO2dCQUNyQyx1QkFBdUI7Z0JBQ3ZCLHVDQUF1QztnQkFDdkMsdUNBQXVDO2dCQUN2QywyREFBMkQ7Z0JBQzNELCtDQUErQztnQkFDL0MsaUZBQWlGO2dCQUNqRixpRUFBaUU7Z0JBQ2pFLDZCQUE2QjtnQkFDN0IseUJBQXlCO2dCQUN6QixtQ0FBbUM7Z0JBQ25DLG1DQUFtQztnQkFDbkMsdUJBQXVCO2dCQUN2Qix5QkFBeUI7Z0JBQ3pCLEVBQUU7Z0JBQ0Ysa0JBQWtCO2dCQUNsQixFQUFFO2dCQUNGLCtLQUErSztnQkFDL0ssRUFBRTtnQkFDRixTQUFTO2dCQUNULCtD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SyxFQUNILDJHQUEyRztTQUM5RyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLGVBQWUsRUFBRSwwQkFBMEI7Z0JBQzNDLGFBQWEsRUFBRSx3QkFBd0I7YUFDeEM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLGtCQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN4RCxDQUFDOztBQXh1QkgsZ0VBeXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ2FwU2VydmljZVByb2plY3QsIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4uLy4vcHJvamVjdCc7XG5pbXBvcnQgeyBCYXNlUHJvamVjdCwgU2FtcGxlQ29kZUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi8uLi91dGlsL2NvbnN0YW50cyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTYW1wbGVDb2RlQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIFNhbXBsZUNvZGVDb25maWdCYXNlIHtcbiAgcHJpdmF0ZSBvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogQ2FwU2VydmljZVByb2plY3QsIG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgcm9vdCBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgcm9vdCBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVSb290VGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YXJ0IFJFQURNRS5tZFxuICAgICAgJ1JFQURNRS5tZCc6IFtcbiAgICAgICAgYCMgJHt0aGlzLm9wdGlvbnMubmFtZX1gLFxuICAgICAgICAnJyxcbiAgICAgICAgYCR7dGhpcy5vcHRpb25zLmRlc2NyaXB0aW9ufWAsXG4gICAgICAgICcnLFxuICAgICAgICAnIyBUYWJsZSBvZiBDb250ZW50cycsXG4gICAgICAgICcnLFxuICAgICAgICBgLSBbJHt0aGlzLm9wdGlvbnMubmFtZX1dKCMke3RoaXMub3B0aW9ucy5uYW1lfSlgLFxuICAgICAgICAnLSBbVGFibGUgb2YgQ29udGVudHNdKCN0YWJsZS1vZi1jb250ZW50cyknLFxuICAgICAgICAnICAtIFtQcmVyZXF1aXNpdGVzXSgjcHJlcmVxdWlzaXRlcyknLFxuICAgICAgICAnICAtIFtgSW5zdGFsbGF0aW9uYF0oI2luc3RhbGxhdGlvbiknLFxuICAgICAgICAnICAtIFtgVXNhZ2VgXSgjdXNhZ2UpJyxcbiAgICAgICAgJyAgICAtIFtTdGFydCBsb2NhbGx5XSgjc3RhcnQtbG9jYWxseSknLFxuICAgICAgICAnICAgIC0gW0RlYnVnIGxvY2FsbHldKCNkZWJ1Zy1sb2NhbGx5KScsXG4gICAgICAgICcgICAgLSBbRGVwbG95IChgREVWYCwgYFFBYCwgYFBST0RgKV0oI2RlcGxveS1kZXYtcWEtcHJvZCknLFxuICAgICAgICAnICAgICAgLSBbRGVwbG95bWVudCBzdGVwc10oI2RlcGxveW1lbnQtc3RlcHMpJyxcbiAgICAgICAgJyAgICAgIC0gW2BCcmFuY2gtU3BlY2lmaWNgIGRlcGxveW1lbnQgcnVsZXNdKCNicmFuY2gtc3BlY2lmaWMtZGVwbG95bWVudC1ydWxlcyknLFxuICAgICAgICAnICAtIFtQcm9qZWN0IHRvb2xzIGFuZCB1dGlsaXRpZXNdKCNwcm9qZWN0LXRvb2xzLWFuZC11dGlsaXRpZXMpJyxcbiAgICAgICAgJyAgICAtIFtQcmV0dGllcl0oI3ByZXR0aWVyKScsXG4gICAgICAgICcgICAgLSBbRVNMaW50XSgjZXNsaW50KScsXG4gICAgICAgICcgICAgLSBbTGludC1zdGFnZWRdKCNsaW50LXN0YWdlZCknLFxuICAgICAgICAnICAgIC0gW0NvbW1pdC1MaW50XSgjY29tbWl0LWxpbnQpJyxcbiAgICAgICAgJyAgICAtIFtIdXNreV0oI2h1c2t5KScsXG4gICAgICAgICcgIC0gW0F1dGhvcnNdKCNhdXRob3JzKScsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMgUHJlcmVxdWlzaXRlcycsXG4gICAgICAgICcnLFxuICAgICAgICAnSW5zdGFsbCBbKipAc2FwL2Nkcy1kayoqXShodHRwczovL2NhcC5jbG91ZC5zYXAvZG9jcy9nZXQtc3RhcnRlZC8pLCBbdHlwZXNjcmlwdF0oaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyksIFt0cy1ub2RlXShodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS90cy1ub2RlKSBnbG9iYWxseTonLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2BgYGJhc2gnLFxuICAgICAgICAnbnBtIGluc3RhbGwgLWcgQHNhcC9jZHMtZGsgdHlwZXNjcmlwdCB0cy1ub2RlJyxcbiAgICAgICAgJ2BgYCcsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMgYEluc3RhbGxhdGlvbmAnLFxuICAgICAgICAnJyxcbiAgICAgICAgJzEuIEFmdGVyIGdlbmVyYXRpbmcgdGhlIHByb2plY3QgdXNpbmcgYHByb2plbmAsIGluc3RhbGwgdGhlIHJlcXVpcmVkIGRlcGVuZGVuY2llcyBieSBydW5uaW5nOicsXG4gICAgICAgICcnLFxuICAgICAgICAnYGBgYmFzaCcsXG4gICAgICAgICducG0gaW5zdGFsbCcsXG4gICAgICAgICdgYGAnLFxuICAgICAgICAnJyxcbiAgICAgICAgJzIuIENyZWF0ZSB0aGUgZm9sbG93aW5nIHRocmVlIGxhYmVscyBpbiB5b3VyIHJlcG9zaXRvcnkgYnkgbmF2aWdhdGluZyB0byBgUHVsbCBSZXF1ZXN0c2AgPiBgTGFiZWxzYCA+IGBOZXcgTGFiZWxgOicsXG4gICAgICAgICcnLFxuICAgICAgICAnICAgLSAqKnBhdGNoKionLFxuICAgICAgICAnICAgLSAqKm1pbm9yKionLFxuICAgICAgICAnICAgLSAqKm1ham9yKionLFxuICAgICAgICAnJyxcbiAgICAgICAgJz4gWyFUSVBdJyxcbiAgICAgICAgJz4gRm9yIG1vcmUgaW5mbyBhYm91dCBgU2VtVmVyIChNQUpPUi5NSU5PUi5QQVRDSClgLCB2aXNpdCBbU2VtVmVyLm9yZ10oaHR0cHM6Ly9zZW12ZXIub3JnLyknLFxuICAgICAgICAnJyxcbiAgICAgICAgJzMuIFRoZSBmb2xsb3dpbmcgc2VjcmV0cyBtdXN0IGJlIGNyZWF0ZWQgaW4geW91ciBHaXRIdWIgcmVwb3NpdG9yeSB0byBlbmFibGUgdGhlIGF1dG9tYXRpYyBkZXBsb3ltZW50IHByb2Nlc3M6JyxcbiAgICAgICAgJycsXG4gICAgICAgICd8IFBhcmFtZXRlciAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwnLFxuICAgICAgICAnfCAtLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8JyxcbiAgICAgICAgJ3wgYENGX0lBU19PUklHSU5gIHwgVGhlIG9yaWdpbiB1c2VkIGZvciBJQVMgYXV0aGVudGljYXRpb24gd2hlbiBsb2dnaW5nIGludG8gQ2xvdWQgRm91bmRyeS4gfCcsXG4gICAgICAgICd8IGBDRl9BUElfREVWYCB8IFRoZSBBUEkgZW5kcG9pbnQgZm9yIHRoZSBkZXZlbG9wbWVudCBDbG91ZCBGb3VuZHJ5IGVudmlyb25tZW50LiB8JyxcbiAgICAgICAgJ3wgYENGX09SR19ERVZgIHwgVGhlIG9yZ2FuaXphdGlvbiBmb3IgdGhlIGRldmVsb3BtZW50IGVudmlyb25tZW50IGluIENsb3VkIEZvdW5kcnkuIHwnLFxuICAgICAgICAnfCBgQ0ZfU1BBQ0VfREVWYCB8IFRoZSBzcGFjZSB3aXRoaW4gdGhlIGRldmVsb3BtZW50IG9yZ2FuaXphdGlvbiBpbiBDbG91ZCBGb3VuZHJ5LiB8JyxcbiAgICAgICAgJ3wgYENGX1VTRVJOQU1FX0RFVmAgfCBUaGUgdXNlcm5hbWUgZm9yIGxvZ2dpbmcgaW50byB0aGUgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgaW4gQ2xvdWQgRm91bmRyeS4gfCcsXG4gICAgICAgICd8IGBDRl9QQVNTV09SRF9ERVZgIHwgVGhlIHBhc3N3b3JkIGZvciBsb2dnaW5nIGludG8gdGhlIGRldmVsb3BtZW50IGVudmlyb25tZW50IGluIENsb3VkIEZvdW5kcnkuIHwnLFxuICAgICAgICAnfCBgQ0ZfQVBJX1BST0RgIHwgVGhlIEFQSSBlbmRwb2ludCBmb3IgdGhlIHByb2R1Y3Rpb24gQ2xvdWQgRm91bmRyeSBlbnZpcm9ubWVudC4gfCcsXG4gICAgICAgICd8IGBDRl9PUkdfUFJPRGAgfCBUaGUgb3JnYW5pemF0aW9uIGZvciB0aGUgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCBpbiBDbG91ZCBGb3VuZHJ5LiB8JyxcbiAgICAgICAgJ3wgYENGX1NQQUNFX1BST0RgIHwgVGhlIHNwYWNlIHdpdGhpbiB0aGUgcHJvZHVjdGlvbiBvcmdhbml6YXRpb24gaW4gQ2xvdWQgRm91bmRyeS4gfCcsXG4gICAgICAgICd8IGBDRl9VU0VSTkFNRV9QUk9EYCB8IFRoZSB1c2VybmFtZSBmb3IgbG9nZ2luZyBpbnRvIHRoZSBwcm9kdWN0aW9uIGVudmlyb25tZW50IGluIENsb3VkIEZvdW5kcnkuIHwnLFxuICAgICAgICAnfCBgQ0ZfUEFTU1dPUkRfUFJPRGAgfCBUaGUgcGFzc3dvcmQgZm9yIGxvZ2dpbmcgaW50byB0aGUgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCBpbiBDbG91ZCBGb3VuZHJ5LiB8JyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyBgVXNhZ2VgJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgU3RhcnQgbG9jYWxseScsXG4gICAgICAgICcnLFxuICAgICAgICAnU3RhcnQgdGhlIENBUCBzZXJ2ZXIgaW4gd2F0Y2ggbW9kZSAoaG90LXJlbG9hZCk6JyxcbiAgICAgICAgJycsXG4gICAgICAgICdgYGBiYXNoJyxcbiAgICAgICAgJ25wbSBydW4gd2F0Y2gnLFxuICAgICAgICAnYGBgJyxcbiAgICAgICAgJycsXG4gICAgICAgICc+IFshVElQXScsXG4gICAgICAgICc+IEFjY2VzcyB0aGUgc2VydmljZSBhdCBodHRwOi8vbG9jYWxob3N0OjQwMDQnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyMjIyBEZWJ1ZyBsb2NhbGx5JyxcbiAgICAgICAgJycsXG4gICAgICAgICcxLiBBZGQgYnJlYWtwb2ludHMgaW4geW91ciBgLnRzYCBmaWxlcy4nLFxuICAgICAgICAnMi4gU3RhcnQgdGhlIENBUCBzZXJ2ZXIgaW4gZGVidWcgbW9kZTonLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2BgYGJhc2gnLFxuICAgICAgICAnbnBtIHJ1biB3YXRjaCcsXG4gICAgICAgICdgYGAnLFxuICAgICAgICAnJyxcbiAgICAgICAgJzMuIFJlZnJlc2ggdGhlIHNlcnZpY2UuJyxcbiAgICAgICAgJzQuIFRoZSBkZWJ1Z2dlciBzaG91bGQgc3RvcCBhdCB0aGUgYnJlYWtwb2ludCBsaW5lLicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIERlcGxveSAoYERFVmAsIGBRQWAsIGBQUk9EYCknLFxuICAgICAgICAnJyxcbiAgICAgICAgJ1RoZSBkZXBsb3ltZW50IHByb2Nlc3MgaXMgYXV0b21hdGljYWxseSB0cmlnZ2VyZWQgd2hlbiBhIGBQVUxMIFJFUVVFU1RgIGlzIG1lcmdlZCBpbnRvIHRoZSBgbWFpbmAgYnJhbmNoLicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIyBEZXBsb3ltZW50IHN0ZXBzJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIGBWZXJzaW9uIEJ1bXBgOiBUaGUgYHBhY2thZ2UuanNvbmAgdmVyc2lvbiBpcyBpbmNyZW1lbnRlZCBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgbGFiZWwgKGBwYXRjaGAsIGBtaW5vcmAsIG9yIGBtYWpvcmApLicsXG4gICAgICAgICctIGBHaXRIdWIgVGFnc2A6IEEgbmV3IHRhZyBpcyBjcmVhdGVkIHRvIG1hcmsgdGhlIHJlbGVhc2UuJyxcbiAgICAgICAgJy0gYEdpdEh1YiBSZWxlYXNlYDogQSByZWxlYXNlIGlzIHB1Ymxpc2hlZCBpbiB0aGUgcmVwb3NpdG9yeSwgc3VtbWFyaXppbmcgdGhlIGNoYW5nZXMuJyxcbiAgICAgICAgJy0gYENoYW5nZWxvZyBVcGRhdGVgOiBUaGUgYENIQU5HRUxPRy5tZGAgZmlsZSBpcyB1cGRhdGVkIHdpdGggdGhlIGxhdGVzdCBjb21taXQgbWVzc2FnZXMuJyxcbiAgICAgICAgJycsXG4gICAgICAgICc+IFshQ0FVVElPTl0nLFxuICAgICAgICAnPiBTZWNyZXRzIGZyb20gaW5zdGFsbGF0aW9uIHByb2Nlc3MgYXJlIHJlcXVpcmVkIGZvciBhdXRvbWF0aWMgZGVwbG95bWVudC4gU2VlICoqW2luc3RhbGxhdGlvbl0oI2luc3RhbGxhdGlvbikqKi4nLFxuICAgICAgICAnJyxcbiAgICAgICAgJz4gWyFDQVVUSU9OXScsXG4gICAgICAgICc+IEV2ZXJ5IGBQVUxMIFJFUVVFU1RgIG1lcmdlZCBpbnRvIGBtYWluYCBtdXN0IGhhdmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgbGFiZWxzOicsXG4gICAgICAgICc+IC0gYHBhdGNoYCAqKigwLjAueCkqKicsXG4gICAgICAgICc+IC0gYG1pbm9yYCAqKigwLnguMCkqKicsXG4gICAgICAgICc+IC0gYG1ham9yYCAqKih4LjAuMCkqKicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIyBgQnJhbmNoLVNwZWNpZmljYCBkZXBsb3ltZW50IHJ1bGVzJyxcbiAgICAgICAgJycsXG4gICAgICAgICctIGBEZXZlbG9wbWVudCAoREVWKWA6IENoYW5nZXMgbWVyZ2VkIGludG8gdGhlIGBkZXZgIGJyYW5jaCB0cmlnZ2VyIGRlcGxveW1lbnQgdG8gdGhlIGRldmVsb3BtZW50IGVudmlyb25tZW50LicsXG4gICAgICAgICctIGBRdWFsaXR5IEFzc3VyYW5jZSAoUUEpYDogTWVyZ2luZyBjaGFuZ2VzIGludG8gYHFhYCB0cmlnZ2VycyBkZXBsb3ltZW50IHRvIHRoZSBRQSBlbnZpcm9ubWVudC4nLFxuICAgICAgICAnLSBgUHJvZHVjdGlvbiAoUFJPRClgOiBNZXJnaW5nIGNoYW5nZXMgaW50byBgcHJvZGAgZGVwbG95cyB0byBwcm9kdWN0aW9uLicsXG4gICAgICAgICcnLFxuICAgICAgICAnPiBbIVRJUF0nLFxuICAgICAgICAnPiBUbyBkZXBsb3kgYWxsIGVudmlyb25tZW50cyAoYERFVmAsIGBRQWAsIGBQUk9EYCksIG1haW50YWluIGBkZXZgLCBgcWFgLCBhbmQgYHByb2RgIGJyYW5jaGVzIGFuZCBtZXJnZSBjaGFuZ2VzIGFjY29yZGluZ2x5LicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMgUHJvamVjdCB0b29scyBhbmQgdXRpbGl0aWVzJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgUHJldHRpZXInLFxuICAgICAgICAnJyxcbiAgICAgICAgJ0EgY29kZSBmb3JtYXR0ZXIgZW5mb3JjaW5nIGNvbnNpc3RlbnQgc3R5bGUuJyxcbiAgICAgICAgJycsXG4gICAgICAgICc+IFshTk9URV0nLFxuICAgICAgICAnPiBQcmV0dGllciBydW5zIGF1dG9tYXRpY2FsbHkgb24gY29tbWl0LicsXG4gICAgICAgICcnLFxuICAgICAgICAnPiBbIVRJUF0nLFxuICAgICAgICAnPiBNYW51YWxseSBydW4gUHJldHRpZXI6JyxcbiAgICAgICAgJz4gYGBgYmFzaCcsXG4gICAgICAgICc+IG5wbSBydW4gcHJldHRpZXI6Zml4JyxcbiAgICAgICAgJz4gYGBgJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgRVNMaW50JyxcbiAgICAgICAgJycsXG4gICAgICAgICdBIGxpbnRlciBlbmZvcmNpbmcgVHlwZVNjcmlwdCBjb2Rpbmcgc3RhbmRhcmRzLicsXG4gICAgICAgICcnLFxuICAgICAgICAnPiBbIU5PVEVdJyxcbiAgICAgICAgJz4gRVNMaW50IHJ1bnMgYXV0b21hdGljYWxseSBvbiBjb21taXQuJyxcbiAgICAgICAgJycsXG4gICAgICAgICc+IFshVElQXScsXG4gICAgICAgICc+IE1hbnVhbGx5IHJ1biBFU0xpbnQ6JyxcbiAgICAgICAgJz4gYGBgYmFzaCcsXG4gICAgICAgICc+IG5wbSBydW4gZXNsaW50OmZpeCcsXG4gICAgICAgICc+IGBgYCcsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMjIExpbnQtc3RhZ2VkJyxcbiAgICAgICAgJycsXG4gICAgICAgICdSdW5zIGxpbnRlcnMgb25seSBvbiBzdGFnZWQgZmlsZXMgYmVmb3JlIGNvbW1pdHRpbmcuJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgQ29tbWl0LUxpbnQnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ0Vuc3VyZXMgY29tbWl0IG1lc3NhZ2VzIGZvbGxvdyBhIGNvbnZlbnRpb25hbCBmb3JtYXQuJyxcbiAgICAgICAgJycsXG4gICAgICAgICcjIyMgSHVza3knLFxuICAgICAgICAnJyxcbiAgICAgICAgJ01hbmFnZXMgR2l0IGhvb2tzIGZvciBhdXRvbWF0ZWQgdGFza3MgKGUuZy4sIHJ1bm5pbmcgdGVzdHMsIGxpbnRlcnMpLicsXG4gICAgICAgICcnLFxuICAgICAgICAnIyMgQXV0aG9ycycsXG4gICAgICAgICcnLFxuICAgICAgICAnLSBbQEF1dGhvcjFdKCNsaW5rMSknLFxuICAgICAgICAnLSBbQEF1dGhvcjJdKCNsaW5rMiknLFxuICAgICAgICAnJyxcbiAgICAgICAgJzxwIGFsaWduPVwicmlnaHRcIj4oPGEgaHJlZj1cIiN0YWJsZS1vZi1jb250ZW50c1wiPmJhY2sgdG8gdG9wPC9hPik8L3A+JyxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgUkVBRE1FLm1kXG5cbiAgICAgIC8vIFN0YXJ0IC5jZHNyYy5qc29uXG4gICAgICAnLmNkc3JjLmpzb24nOiBbXG4gICAgICAgICd7JyxcbiAgICAgICAgJyAgXCJyZXF1aXJlc1wiOiB7JyxcbiAgICAgICAgJyAgICBcIltkZXZlbG9wbWVudF1cIjogeycsXG4gICAgICAgICcgICAgICBcImF1dGhcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcIm1vY2tlZFwiJyxcbiAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAnICAgIH0sJyxcbiAgICAgICAgJyAgICBcIltwcm9kdWN0aW9uXVwiOiB7JyxcbiAgICAgICAgJyAgICAgIFwiYXV0aFwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwieHN1YWFcIicsXG4gICAgICAgICcgICAgICB9LCcsXG4gICAgICAgICcgICAgICBcImRiXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJoYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJpbXBsXCI6IFwiQGNhcC1qcy9oYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJkZXBsb3ktZm9ybWF0XCI6IFwiaGRidGFibGVcIicsXG4gICAgICAgICcgICAgICB9JyxcbiAgICAgICAgJyAgICB9JyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImkxOG5cIjogeycsXG4gICAgICAgICcgICAgXCJkZWZhdWx0X2xhbmd1YWdlXCI6IFwiZW5cIicsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJsb2dcIjogeycsXG4gICAgICAgICcgICAgXCJzZXJ2aWNlXCI6IHRydWUnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiZmVhdHVyZXNcIjogeycsXG4gICAgICAgICcgICAgXCJwcmVzZXJ2ZV9jb21wdXRlZFwiOiB0cnVlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcInNxbFwiOiB7JyxcbiAgICAgICAgJyAgICBcIm5hdGl2ZV9oYW5hX2Fzc29jaWF0aW9uc1wiOiBmYWxzZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJoYW5hXCI6IHsnLFxuICAgICAgICAnICAgIFwiZGVwbG95LWZvcm1hdFwiOiBcImhkYnRhYmxlXCInLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCAuY2RzcmMuanNvblxuXG4gICAgICAvLyBTdGFydCAuY2RzcHJldHRpZXIuanNvblxuICAgICAgJy5jZHNwcmV0dGllci5qc29uJzogW1xuICAgICAgICAneycsXG4gICAgICAgICcgIFwiYWxpZ25BZnRlcktleVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25QcmVBbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Qb3N0QW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29sb25zSW5Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25WYWx1ZXNJbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvbnNBbmRGdW5jdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uTmFtZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uUmV0dXJuc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luRW50aXRpZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJblNlbGVjdEl0ZW1zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5Vc2luZ1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FeHByZXNzaW9uc0FuZENvbmRpdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXhwckFuZENvbmRXaXRoaW5CbG9ja1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25UeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db2xvbnNCZWZvcmVUeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FcXVhbHNBZnRlclR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblR5cGVzV2l0aGluQmxvY2tcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29tcG9zaXRpb25TdHJ1Y3RUb1JpZ2h0XCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJjcWxLZXl3b3JkQ2FwaXRhbGl6YXRpb25cIjogXCJsb3dlclwiLCcsXG4gICAgICAgICcgIFwia2VlcFByZUFubm90YXRpb25zSW5PcmlnaW5hbExpbmVcIjogXCJrZWVwTGluZVwiLCcsXG4gICAgICAgICcgIFwia2VlcFBvc3RBbm5vdGF0aW9uc0luT3JpZ2luYWxMaW5lXCI6IFwia2VlcExpbmVcIiwnLFxuICAgICAgICAnICBcImtlZXBFbXB0eUJyYWNrZXRzVG9nZXRoZXJcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImtlZXBTaW5nbGVMaW5lZEJsb2Nrc1RvZ2V0aGVyXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJrZWVwT3JpZ2luYWxFbXB0eUxpbmVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJtYXhLZWVwRW1wdHlMaW5lc1wiOiAyLCcsXG4gICAgICAgICcgIFwib3BlbmluZ0JyYWNlSW5OZXdMaW5lXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwic2VsZWN0SW5OZXdMaW5lXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ0YWJTaXplXCI6IDIsJyxcbiAgICAgICAgJyAgXCJmaW5hbE5ld2xpbmVcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImZvcm1hdERvY0NvbW1lbnRzXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwibWF4RG9jQ29tbWVudExpbmVcIjogNjAsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQmVmb3JlQ29sb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VCZWZvcmVDb2xvbkluQW5ub3RhdGlvblwiOiBmYWxzZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbG9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb2xvbkluQW5ub3RhdGlvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29tbWFcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBcm91bmRBbGlnbmVkT3BzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQXJvdW5kQmluYXJ5T3BzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlV2l0aGluQnJhY2tldHNcIjogZmFsc2UnLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuXG4gICAgICAvLyBFbmQgLmNkc3ByZXR0aWVyLmpzb25cblxuICAgICAgLy8gU3RhcnQgLmVzbGludHJjLmpzb25cbiAgICAgICdkZWZhdWx0LWVudi5qcyc6IFtcbiAgICAgICAgJy8qKicsXG4gICAgICAgICcgKiBGZXRjaGVzIGBWQ0FQX1NFUlZJQ0VTYCBmb3IgYSBnaXZlbiBDRiBhcHBsaWNhdGlvbiBhbmQgd3JpdGVzIGl0IHRvIGEgZmlsZS4nLFxuICAgICAgICAnICogSXQgdXRpbGl6ZXMgdGhlIENsb3VkIEZvdW5kcnkgQ0xJIHRvIGRvIHNvLicsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBNYWtlIHN1cmUgeW91IGFyZSBsb2dnZWQgaW4gdmlhIHRoZSBDRiBDTEkgKGBjZiBsb2dpbmApIGJlZm9yZSBydW5uaW5nIHRoZScsXG4gICAgICAgICcgKiBzY3JpcHQuIFlvdSBjYW4gY2hlY2sgeW91ciBsb2dpbiBhbmQgdGhlIG9yZ2FuaXphdGlvbiBhbmQgc3BhY2UgeW91IGFyZScsXG4gICAgICAgICcgKiB0YXJnZXR0aW5nIGJ5IHVzaW5nIGBjZiB0YXJnZXRgLicsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBBbGxvd3Mgb24tcHJlbWlzZSBjb25uZWN0aXZpdHkgcHJveHlpbmcgaWYgbmVjZXNzYXJ5JyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIEBhdXRob3IgU2ViYXN0aWFuIEJsZXNzaW5nJyxcbiAgICAgICAgJyAqLycsXG4gICAgICAgIFwiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1wiLFxuICAgICAgICBcImNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XCIsXG4gICAgICAgIFwiY29uc3QgZXhlYyA9IHV0aWwucHJvbWlzaWZ5KHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjKTtcIixcbiAgICAgICAgXCJjb25zdCBzcGF3biA9IHV0aWwucHJvbWlzaWZ5KHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5zcGF3bik7XCIsXG4gICAgICAgICcnLFxuICAgICAgICAnYXN5bmMgZnVuY3Rpb24gZ2V0QXBwR3VpZChhcHBOYW1lKSB7JyxcbiAgICAgICAgJyAgY29uc3QgY21kID0gYGNmIGFwcCAke2FwcE5hbWV9IC0tZ3VpZGA7JyxcbiAgICAgICAgJyAgY29uc29sZS5sb2coY21kKTsnLFxuICAgICAgICAnICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKGNtZCk7JyxcbiAgICAgICAgJyAgaWYgKHN0ZGVycikgY29uc29sZS5sb2coYHN0ZGVycjogJHtzdGRlcnJ9YCk7JyxcbiAgICAgICAgJyAgcmV0dXJuIHN0ZG91dC50cmltKCk7JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2FzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRFbnYoYXBwR3VpZCkgeycsXG4gICAgICAgICcgIGNvbnN0IGNtZCA9IGBjZiBjdXJsIFwidjMvYXBwcy8ke2FwcEd1aWR9L2VudlwiYDsnLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhjbWQpOycsXG4gICAgICAgICcgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoY21kKTsnLFxuICAgICAgICAnICBpZiAoc3RkZXJyKSBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTsnLFxuICAgICAgICAnICByZXR1cm4gSlNPTi5wYXJzZShzdGRvdXQpLnN5c3RlbV9lbnZfanNvbjsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcnLFxuICAgICAgICAnKGFzeW5jICgpID0+IHsnLFxuICAgICAgICAnICBjb25zdCBteUFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7JyxcbiAgICAgICAgJyAgY29uc3QgYXBwTmFtZSA9IG15QXJnc1swXTsnLFxuICAgICAgICAnICBpZiAoIWFwcE5hbWUpIHsnLFxuICAgICAgICBcIiAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIENGIGFwcGxpY2F0aW9uIG5hbWUgdG8gZmV0Y2ggaXRzIGVudmlyb25tZW50IScpO1wiLFxuICAgICAgICAnICAgIHJldHVybjsnLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGxldCBlbnZGaWxlTmFtZSA9IG15QXJnc1sxXTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGVudkZpbGVOYW1lID0gZW52RmlsZU5hbWUgPyBlbnZGaWxlTmFtZSA6ICdkZWZhdWx0LWVudi5qc29uJztcIixcbiAgICAgICAgJyAgY29uc29sZS5sb2coYFdyaXRpbmcgZW52aXJvbm1lbnQgb2YgJHthcHBOYW1lfSB0byAke2VudkZpbGVOYW1lfWApOycsXG4gICAgICAgICcnLFxuICAgICAgICAnICBjb25zdCBkZWZhdWx0RW52ID0gYXdhaXQgZ2V0RGVmYXVsdEVudihhd2FpdCBnZXRBcHBHdWlkKGFwcE5hbWUpKTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgbGV0IGJSdW5Qcm94eSA9IGZhbHNlOycsXG4gICAgICAgICcgIGxldCBwcm94eVBvcnQgPSBudWxsOycsXG4gICAgICAgICcgIGxldCBwcm94eUhvc3QgPSBudWxsOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgaWYgKGRlZmF1bHRFbnZbJ1ZDQVBfU0VSVklDRVMnXVsnY29ubmVjdGl2aXR5J10pIHtcIixcbiAgICAgICAgJyAgICBwcm94eVBvcnQgPSBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9wb3J0OycsXG4gICAgICAgICcgICAgcHJveHlIb3N0ID0gZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfaG9zdDsnLFxuICAgICAgICBcIiAgICBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9ob3N0ID0gJ2xvY2FsaG9zdCc7XCIsXG4gICAgICAgICcgICAgYlJ1blByb3h5ID0gdHJ1ZTsnLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBmcy53cml0ZUZpbGUoJ2RlZmF1bHQtZW52Lmpzb24nLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0RW52LCBudWxsLCAyKSwgYXN5bmMgKGVycikgPT4ge1wiLFxuICAgICAgICAnICAgIGlmIChlcnIpIHsnLFxuICAgICAgICAnICAgICAgY29uc29sZS5lcnJvcihlcnIpOycsXG4gICAgICAgICcgICAgfSBlbHNlIGlmIChiUnVuUHJveHkpIHsnLFxuICAgICAgICAnICAgICAgY29uc29sZS5sb2coYGNmIHNzaCAke2FwcE5hbWV9IC1MICR7cHJveHlQb3J0fToke3Byb3h5SG9zdH06JHtwcm94eVBvcnR9YCk7JyxcbiAgICAgICAgXCIgICAgICBhd2FpdCBzcGF3bignY2YnLCBbYHNzaCAke2FwcE5hbWV9IC1MICR7cHJveHlQb3J0fToke3Byb3h5SG9zdH06JHtwcm94eVBvcnR9YF0sIHtcIixcbiAgICAgICAgJyAgICAgICAgc2hlbGw6IHRydWUsJyxcbiAgICAgICAgXCIgICAgICAgIHN0ZGlvOiAnaW5oZXJpdCcsXCIsXG4gICAgICAgICcgICAgICB9KTsnLFxuICAgICAgICAnICAgIH0nLFxuICAgICAgICAnICB9KTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGNvbnNvbGUubG9nKCdEb25lJyk7XCIsXG4gICAgICAgICd9KSgpOycsXG4gICAgICBdLFxuXG4gICAgICAvLyBFbmQgLmVzbGludHJjLmpzb25cblxuICAgICAgLy8gU3RhcnQgLmVzbGludHJjLmpzb25cbiAgICAgICdtdGEueWFtbCc6IFtcbiAgICAgICAgXCJfc2NoZW1hLXZlcnNpb246ICczLjEnXCIsXG4gICAgICAgIGBJRDogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICd2ZXJzaW9uOiAwLjAuMScsXG4gICAgICAgIGBkZXNjcmlwdGlvbjogJHt0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb259YCxcbiAgICAgICAgJ3BhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgZW5hYmxlLXBhcmFsbGVsLWRlcGxveW1lbnRzOiB0cnVlJyxcbiAgICAgICAgJ2J1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgYmVmb3JlLWFsbDonLFxuICAgICAgICAnICAgIC0gYnVpbGRlcjogY3VzdG9tJyxcbiAgICAgICAgJyAgICAgIGNvbW1hbmRzOicsXG4gICAgICAgICcgICAgICAgIC0gbnBtIGNpJyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gcnVuIGJ1aWxkJyxcbiAgICAgICAgJyAgICAgICAgLSBucHggQGNhcC1qcy9jZHMtdHlwZXIgXCIqXCIgLS1vdXRwdXREaXJlY3RvcnkgZ2VuL3Nydi9AY2RzLW1vZGVscycsXG4gICAgICAgICdtb2R1bGVzOicsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tc3J2YCxcbiAgICAgICAgJyAgICB0eXBlOiBub2RlanMnLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9zcnYnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkcGFjazogbm9kZWpzX2J1aWxkcGFjaycsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLXR5cGU6IGh0dHAnLFxuICAgICAgICAnICAgICAgcmVhZGluZXNzLWhlYWx0aC1jaGVjay1odHRwLWVuZHBvaW50OiAvaGVhbHRoJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBidWlsZGVyOiBucG0nLFxuICAgICAgICAnICAgIHByb3ZpZGVzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICAnICAgICAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICAgICAgc3J2LXVybDogJHtkZWZhdWx0LXVybH0nLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tY29ubmVjdGl2aXR5YCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uc2AsXG4gICAgICAgICcgICAgdHlwZTogY29tLnNhcC5hcHBsaWNhdGlvbi5jb250ZW50JyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgICAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICAgICAgc2VydmljZS1rZXk6JyxcbiAgICAgICAgYCAgICAgICAgICAgIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYS1rZXlgLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBzcnYtYXBpJyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICAnICAgICAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICAgICAgY29udGVudC10YXJnZXQ6IHRydWUnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGNvbnRlbnQ6JyxcbiAgICAgICAgJyAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICBkZXN0aW5hdGlvbnM6JyxcbiAgICAgICAgJyAgICAgICAgICAgIC0gQXV0aGVudGljYXRpb246IE9BdXRoMlVzZXJUb2tlbkV4Y2hhbmdlJyxcbiAgICAgICAgYCAgICAgICAgICAgICAgTmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tYXBwLXNydmAsXG4gICAgICAgIGAgICAgICAgICAgICAgIFRva2VuU2VydmljZUluc3RhbmNlTmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlS2V5TmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAgICAgICAgIFVSTDogfntzcnYtYXBpL3Nydi11cmx9JyxcbiAgICAgICAgYCAgICAgICAgICAgICAgc2FwLmNsb3VkLnNlcnZpY2U6ICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX1gLFxuICAgICAgICAnICAgICAgICAgIGV4aXN0aW5nX2Rlc3RpbmF0aW9uc19wb2xpY3k6IHVwZGF0ZScsXG4gICAgICAgICcgICAgYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgbm8tc291cmNlOiB0cnVlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYi1kZXBsb3llcmAsXG4gICAgICAgICcgICAgdHlwZTogaGRiJyxcbiAgICAgICAgJyAgICBwYXRoOiBnZW4vZGInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkcGFjazogbm9kZWpzX2J1aWxkcGFjaycsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAncmVzb3VyY2VzOicsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgcGF0aDogLi94cy1zZWN1cml0eS5qc29uJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IHhzdWFhJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogYXBwbGljYXRpb24nLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIHRlbmFudC1tb2RlOiBkZWRpY2F0ZWQnLFxuICAgICAgICBgICAgICAgICB4c2FwcG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9YCxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBjb25uZWN0aXZpdHknLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBsaXRlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGNvbmZpZzonLFxuICAgICAgICAnICAgICAgICBIVE1MNVJ1bnRpbWVfZW5hYmxlZDogdHJ1ZScsXG4gICAgICAgICcgICAgICAgIGluaXRfZGF0YTonLFxuICAgICAgICAnICAgICAgICAgIGluc3RhbmNlOicsXG4gICAgICAgICcgICAgICAgICAgICBkZXN0aW5hdGlvbnM6JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogTm9BdXRoZW50aWNhdGlvbicsXG4gICAgICAgICcgICAgICAgICAgICAgICAgTmFtZTogdWk1JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBQcm94eVR5cGU6IEludGVybmV0JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBUeXBlOiBIVFRQJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBVUkw6IGh0dHBzOi8vdWk1LnNhcC5jb20nLFxuICAgICAgICAnICAgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICAgICAgdmVyc2lvbjogMS4wLjAnLFxuICAgICAgICAnICAgICAgc2VydmljZTogZGVzdGluYXRpb24nLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBsaXRlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgICcgICAgdHlwZTogY29tLnNhcC54cy5oZGktY29udGFpbmVyJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBoYW5hJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogaGRpLXNoYXJlZCcsXG4gICAgICAgICcgICAgcHJvcGVydGllczonLFxuICAgICAgICAnICAgICAgaGRpLXNlcnZpY2UtbmFtZTogJHtzZXJ2aWNlLW5hbWV9JyxcbiAgICAgIF0sXG5cbiAgICAgIC8vIEVuZCAuZXNsaW50cmMuanNvblxuICAgICAgJ3hzLXNlY3VyaXR5Lmpzb24nOiBbJ3snLCAnICBcInNjb3Blc1wiOiBbXSwnLCAnICBcImF0dHJpYnV0ZXNcIjogW10sJywgJyAgXCJyb2xlLXRlbXBsYXRlc1wiOiBbXScsICd9J10sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgYHNydmAgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGBzcnZgIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZVNydlRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFydCBpbmRleC50c1xuICAgICAgJ3Nydi9pbmRleC5jZHMnOiBbYHVzaW5nIGZyb20gJy4vY29udHJvbGxlci9zZXJ2aWNlLTEvc2VydmljZS0xJztgXSxcbiAgICAgIC8vIEVuZCBpbmRleC50c1xuXG4gICAgICAvLyBTdGFydCBFbnRpdHkgaGFuZGxlclxuICAgICAgW2BzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvaGFuZGxlci8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHtcbiAgICAgICAgICBBZnRlclJlYWQsXG4gICAgICAgICAgRW50aXR5SGFuZGxlcixcbiAgICAgICAgICBJbmplY3QsXG4gICAgICAgICAgUmVxLFxuICAgICAgICAgIFJlc3VsdHMsXG4gICAgICAgICAgU2VydmljZSxcbiAgICAgICAgICBDRFNfRElTUEFUQ0hFUixcbiAgICAgICAgICB0eXBlIFR5cGVkUmVxdWVzdCxcbiAgICAgICAgICBVc2UsXG4gICAgICAgIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGltcG9ydCB7IE1pZGRsZXdhcmVBZnRlclJlYWQgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL01pZGRsZXdhcmVBZnRlclJlYWQnO2AsXG4gICAgICAgIGBpbXBvcnQgeyBNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL01pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBARW50aXR5SGFuZGxlcigke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSlgLFxuICAgICAgICBgQFVzZShNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNydjogU2VydmljZTtgLFxuICAgICAgICBgICAvLyBAT25SZWFkLCBAQmVmb3JlUmVhZCwgQEFmdGVyUmVhZCwgQE9uVXBkYXRlIC4uLmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICBAQWZ0ZXJSZWFkKClgLFxuICAgICAgICBgICBAVXNlKE1pZGRsZXdhcmVBZnRlclJlYWQpYCxcbiAgICAgICAgYCAgcHVibGljIGFzeW5jIGFmdGVyUmVhZChAUmVzdWx0cygpIHJlc3VsdHM6ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LCBAUmVxKCkgcmVxOiBUeXBlZFJlcXVlc3Q8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+KTogUHJvbWlzZTwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4ge2AsXG4gICAgICAgIGAgICAgY29uc29sZS5sb2cocmVxKTtgLFxuICAgICAgICBgICAgIHJldHVybiByZXN1bHRzO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kXG5cbiAgICAgIC8vIFN0YXJ0IFVuYm91bmRBY3Rpb25zSGFuZGxlclxuICAgICAgJ3Nydi9jb250cm9sbGVyL3NlcnZpY2UtMS9oYW5kbGVyL1VuYm91bmRBY3Rpb25zSGFuZGxlci50cyc6IFtcbiAgICAgICAgYGltcG9ydCB7IEluamVjdCwgU2VydmljZSwgQ0RTX0RJU1BBVENIRVIsIFVuYm91bmRBY3Rpb25zIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQFVuYm91bmRBY3Rpb25zKClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzIFVuYm91bmRBY3Rpb25zSGFuZGxlciB7YCxcbiAgICAgICAgYCAgQEluamVjdChDRFNfRElTUEFUQ0hFUi5TUlYpIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZTogU2VydmljZTtgLFxuICAgICAgICBgICAvLyBAT25FcnJvciwgQE9uRXZlbnQsIEBPbkFjdGlvbiwgQE9uRnVuY3Rpb25gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFVuYm91bmRBY3Rpb25zSGFuZGxlclxuXG4gICAgICAvLyBTdGFydCBzZXJ2aWNlLTEuY2RzXG4gICAgICAnc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMS5jZHMnOiBbXG4gICAgICAgIGB1c2luZyB7JHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfSBhcyBCYXNlfSBmcm9tICcuLi8uLi8uLi9kYi9zY2hlbWEnO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgc2VydmljZSBTZXJ2aWNlQSB7YCxcbiAgICAgICAgYCAgIEByZWFkb25seWAsXG4gICAgICAgIGAgICBlbnRpdHkgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gYXMgcHJvamVjdGlvbiBvbiBCYXNlLiR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9O2AsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgc2VydmljZS0xLmNkc1xuXG4gICAgICAvLyBTdGFydCBzZXJ2aWNlLTEudHNcbiAgICAgICdzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvc2VydmljZS0xLnRzJzogW1xuICAgICAgICBgaW1wb3J0IHsgQ0RTRGlzcGF0Y2hlciB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyLyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlcic7YCxcbiAgICAgICAgYGltcG9ydCB7IFVuYm91bmRBY3Rpb25zSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlci9VbmJvdW5kQWN0aW9uc0hhbmRsZXInO2AsXG4gICAgICAgICcnLFxuICAgICAgICBgZXhwb3J0ID0gbmV3IENEU0Rpc3BhdGNoZXIoWyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlciwgVW5ib3VuZEFjdGlvbnNIYW5kbGVyXSkuaW5pdGlhbGl6ZSgpO2AsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIHNlcnZpY2UtMS50c1xuXG4gICAgICAvLyBTdGFydCBNaWRkbGV3YXJlXG4gICAgICBbYHNydi9taWRkbGV3YXJlL01pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS50c2BdOiBbXG4gICAgICAgIGBpbXBvcnQgdHlwZSB7IE1pZGRsZXdhcmVJbXBsLCBOZXh0TWlkZGxld2FyZSwgVHlwZWRSZXF1ZXN0IH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBpbXBvcnQgdHlwZSB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnI2Nkcy1tb2RlbHMvU2VydmljZUEnO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzIE1pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSBpbXBsZW1lbnRzIE1pZGRsZXdhcmVJbXBsIHtgLFxuICAgICAgICBgICBwdWJsaWMgYXN5bmMgdXNlKHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiwgbmV4dDogTmV4dE1pZGRsZXdhcmUpOiBQcm9taXNlPHZvaWQ+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlIGVudGl0eSAxIDogRVhFQ1VURUQnKTtgLFxuICAgICAgICBgICAgIGF3YWl0IG5leHQoKTtgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBNaWRkbGV3YXJlXG5cbiAgICAgIC8vIFN0YXJ0IE1pZGRsZXdhcmVBZnRlclJlYWRcbiAgICAgICdzcnYvbWlkZGxld2FyZS9NaWRkbGV3YXJlQWZ0ZXJSZWFkLnRzJzogW1xuICAgICAgICBgaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlSW1wbCwgTmV4dE1pZGRsZXdhcmUsIFR5cGVkUmVxdWVzdCB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHR5cGUgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBNaWRkbGV3YXJlQWZ0ZXJSZWFkIGltcGxlbWVudHMgTWlkZGxld2FyZUltcGwge2AsXG4gICAgICAgIGAgIHB1YmxpYyBhc3luYyB1c2UocmVxOiBUeXBlZFJlcXVlc3Q8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+LCBuZXh0OiBOZXh0TWlkZGxld2FyZSk6IFByb21pc2U8dm9pZD4ge2AsXG4gICAgICAgIGAgICAgY29uc29sZS5sb2coJ01pZGRsZXdhcmUgZW50aXR5IDEgOiBFWEVDVVRFRCcpO2AsXG4gICAgICAgIGAgICAgYXdhaXQgbmV4dCgpO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIE1pZGRsZXdhcmVBZnRlclJlYWRcblxuICAgICAgLy8gU3RhcnQgUmVwb3NpdG9yeVxuICAgICAgW2BzcnYvcmVwb3NpdG9yeS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBpbXBvcnQgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYEBSZXBvc2l0b3J5KClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiB7YCxcbiAgICAgICAgYCAgY29uc3RydWN0b3IoKSB7YCxcbiAgICAgICAgYCAgICBzdXBlcigke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSk7YCxcbiAgICAgICAgYCAgfWAsXG4gICAgICAgIGAgIC8vIC4uLiBkZWZpbmUgY3VzdG9tIENEUy1RTCBhY3Rpb25zIGlmIEJhc2VSZXBvc2l0b3J5IG9uZXMgYXJlIG5vdCBzYXRpc2Z5aW5nIHlvdXIgbmVlZHMgIWAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgUmVwb3NpdG9yeVxuXG4gICAgICAvLyBTdGFydCBTZXJ2aWNlXG4gICAgICBbYHNydi9zZXJ2aWNlLyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZS50c2BdOiBbXG4gICAgICAgIGBpbXBvcnQgeyBJbmplY3QsIFNlcnZpY2UsIFNlcnZpY2VMb2dpYywgQ0RTX0RJU1BBVENIRVIgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBpbXBvcnQgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3J5LyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBAU2VydmljZUxvZ2ljKClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZSB7YCxcbiAgICAgICAgYCAgQEluamVjdChDRFNfRElTUEFUQ0hFUi5TUlYpIHByaXZhdGUgcmVhZG9ubHkgc3J2OiBTZXJ2aWNlO2AsXG4gICAgICAgIGAgIEBJbmplY3QoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5KSBwcml2YXRlIHJlYWRvbmx5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZTogJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5O2AsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgU2VydmljZVxuXG4gICAgICAvLyBTdGFydCBjb25zdGFudHMudHNcbiAgICAgICdzcnYvdXRpbC9jb25zdGFudHMvY29uc3RhbnRzLnRzJzogW1xuICAgICAgICBgY29uc3QgQ29uc3RhbnRzID0ge2AsXG4gICAgICAgIGAgIC8vIEV4YW1wbGVgLFxuICAgICAgICBgICBDT05TVEFOVF8xOiB7YCxcbiAgICAgICAgYCAgICBQUk9QX0NPTlNUQU5UXzE6ICdTT01FVEhJTkcnLGAsXG4gICAgICAgIGAgIH0sYCxcbiAgICAgICAgYH07YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBleHBvcnQgZGVmYXVsdCBDb25zdGFudHM7YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgY29uc3RhbnRzLnRzXG5cbiAgICAgIC8vIFN0YXJ0IHV0aWwudHNcbiAgICAgICdzcnYvdXRpbC9oZWxwZXJzL3V0aWwudHMnOiBbXG4gICAgICAgIGBjb25zdCBVdGlsID0ge2AsXG4gICAgICAgIGAgIC8vIEV4YW1wbGVgLFxuICAgICAgICBgICBhSGVscGVyRnVuY3Rpb24oKSB7YCxcbiAgICAgICAgYCAgICByZXR1cm4gMTtgLFxuICAgICAgICBgICB9LGAsXG4gICAgICAgIGB9O2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGRlZmF1bHQgVXRpbDtgLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCB1dGlsLnRzXG5cbiAgICAgIC8vIFN0YXJ0IHR5cGVzLnRzXG4gICAgICAnc3J2L3V0aWwvdHlwZXMvdHlwZXMudHMnOiBbYC8vIEV4YW1wbGVgLCBgZXhwb3J0IHR5cGUgQVR5cGUgPSBzdHJpbmc7YF0sXG4gICAgICAvLyBFbmQgdHlwZXMudHNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSBkYiBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgZGIgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2RiL3NjaGVtYS5jZHMnOiBbXG4gICAgICAgIFwidXNpbmcgeyBtYW5hZ2VkIH0gZnJvbSAnQHNhcC9jZHMvY29tbW9uJztcIixcbiAgICAgICAgJycsXG4gICAgICAgIGBuYW1lc3BhY2UgJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfTtgLFxuICAgICAgICAnJyxcbiAgICAgICAgYGVudGl0eSAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSA6IG1hbmFnZWQge2AsXG4gICAgICAgICcgIGtleSBJRDogSW50ZWdlcjsnLFxuICAgICAgICAnICBkZXNjcjogbG9jYWxpemVkIFN0cmluZygxMTEpOycsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgZGF0YSBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgZGF0YSBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVEYXRhVGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0uY3N2YDtcbiAgICBjb25zdCBmaWxlUGF0aFRleHRzID0gYHRlc3QvZGF0YS8ke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9LSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LnRleHRzLmNzdmA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgW2ZpbGVQYXRoXTogW1xuICAgICAgICAnSUQsY3JlYXRlZEF0LGNyZWF0ZWRCeSxtb2RpZmllZEF0LG1vZGlmaWVkQnksZGVzY3InLFxuICAgICAgICAnMSwsLCwsRGVzY3JpcHRpb24gMScsXG4gICAgICAgICcyLCwsLCxEZXNjcmlwdGlvbiAyJyxcbiAgICAgICAgJzMsLCwsLERlc2NyaXB0aW9uIDMnLFxuICAgICAgXSxcbiAgICAgIFtmaWxlUGF0aFRleHRzXTogWydsb2NhbGUsSUQsZGVzY3InXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGVzIGZvciB0aGUgc3BlY2lmaWVkIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIHRlbXBsYXRlcyBUaGUgdGVtcGxhdGVzIHRvIGNyZWF0ZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVUZW1wbGF0ZXModGVtcGxhdGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGVtcGxhdGVzKSB7XG4gICAgICBpZiAodGVtcGxhdGVzW3BhdGhdKSB7XG4gICAgICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgcGF0aCwge1xuICAgICAgICAgIGNvbnRlbnRzOiB0ZW1wbGF0ZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGAke2NvbnN0YW50c1snQGNhcC1qcy9jZHMtdHlwZXInXS5OQU1FfUAke2NvbnN0YW50c1snQGNhcC1qcy9jZHMtdHlwZXInXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVzJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVzJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1kayddLk5BTUV9QCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1kayddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMtbHNwJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BzYXAvY2RzLWxzcCddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgYCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSddLk5BTUV9QCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC9jZHMnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAveHNzZWMnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC94c3NlYyddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6ICdjZHMtc2VydmUgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdzdGFydDpsb2NhbCc6ICdjZHMtdHMgc2VydmUnLFxuICAgICAgd2F0Y2g6ICdjZHMtdHMgd2F0Y2gnLFxuICAgICAgJ2J1aWxkOmNkcyc6ICdjZHMtdHMgYnVpbGQgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdidWlsZDpjZHM6bWVzc2FnZSc6ICdlY2hvIFwiQnVpbGQgQ0RTIC4uLlwiJyxcbiAgICAgICdidWlsZDp0cyc6ICd0c2MnLFxuICAgICAgJ2J1aWxkOnRzOm1lc3NhZ2UnOiAnZWNobyBcIlRyYW5zcGlsZSBUUyA9PiBKUyAuLi5cIicsXG4gICAgICAnYnVpbGQ6c3J2OmNsZWFuOnRzJzogJ2ZpbmQgZ2VuL3Nydi9zcnYgLXR5cGUgZiAtbmFtZSBcIioudHNcIiAtZGVsZXRlJyxcbiAgICAgICdidWlsZDpzcnY6Y2xlYW46dHM6bWVzc2FnZSc6ICdlY2hvIFwiQ2xlYW4gVFMgZmlsZXMgZnJvbSBzcnYgZm9sZGVyIC4uLlwiJyxcbiAgICAgIGJ1aWxkOlxuICAgICAgICAncnVuLXMgYnVpbGQ6Y2RzOm1lc3NhZ2UgYnVpbGQ6Y2RzIGJ1aWxkOnRzOm1lc3NhZ2UgYnVpbGQ6dHMgYnVpbGQ6c3J2OmNsZWFuOnRzOm1lc3NhZ2UgYnVpbGQ6c3J2OmNsZWFuOnRzJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBpbXBvcnRzOiB7XG4gICAgICAgICcjY2RzLW1vZGVscy8qJzogJy4vQGNkcy1tb2RlbHMvKi9pbmRleC5qcycsXG4gICAgICAgICcjZGlzcGF0Y2hlcic6ICcuL0BkaXNwYXRjaGVyL2luZGV4LmpzJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkRGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZVNydlRlbXBsYXRlcyk7XG4gIH1cbn1cbiJdfQ==