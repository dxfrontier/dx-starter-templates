"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigCapService = void 0;
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
    }
}
exports.SampleCodeConfigCapService = SampleCodeConfigCapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBb0M7QUFFcEMscUNBQStEO0FBRS9ELG9EQUFpRDtBQUVqRDs7R0FFRztBQUNILE1BQWEsMEJBQTJCLFNBQVEsMkJBQW9CO0lBR2xFLFlBQVksT0FBMEIsRUFBRSxPQUFpQztRQUN2RSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsMkJBQTJCO1FBQ3ZDLE9BQU87WUFDTCxvQkFBb0I7WUFDcEIsYUFBYSxFQUFFO2dCQUNiLEdBQUc7Z0JBQ0gsaUJBQWlCO2dCQUNqQix3QkFBd0I7Z0JBQ3hCLGlCQUFpQjtnQkFDakIsMEJBQTBCO2dCQUMxQixTQUFTO2dCQUNULFFBQVE7Z0JBQ1IsdUJBQXVCO2dCQUN2QixpQkFBaUI7Z0JBQ2pCLHlCQUF5QjtnQkFDekIsVUFBVTtnQkFDVixlQUFlO2dCQUNmLHlCQUF5QjtnQkFDekIsaUNBQWlDO2dCQUNqQyxxQ0FBcUM7Z0JBQ3JDLFNBQVM7Z0JBQ1QsT0FBTztnQkFDUCxNQUFNO2dCQUNOLGFBQWE7Z0JBQ2IsOEJBQThCO2dCQUM5QixNQUFNO2dCQUNOLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQUNyQixNQUFNO2dCQUNOLGlCQUFpQjtnQkFDakIsK0JBQStCO2dCQUMvQixNQUFNO2dCQUNOLFlBQVk7Z0JBQ1osdUNBQXVDO2dCQUN2QyxNQUFNO2dCQUNOLGFBQWE7Z0JBQ2IsaUNBQWlDO2dCQUNqQyxLQUFLO2dCQUNMLEdBQUc7YUFDSjtZQUNELGtCQUFrQjtZQUVsQiwwQkFBMEI7WUFDMUIsbUJBQW1CLEVBQUU7Z0JBQ25CLEdBQUc7Z0JBQ0gsMEJBQTBCO2dCQUMxQiw2QkFBNkI7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SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQTNqQkQsZ0VBMmpCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ2FwU2VydmljZVByb2plY3QsIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4uLy4vcHJvamVjdCc7XG5pbXBvcnQgeyBCYXNlUHJvamVjdCwgU2FtcGxlQ29kZUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi8uLi91dGlsL2NvbnN0YW50cyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTYW1wbGVDb2RlQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIFNhbXBsZUNvZGVDb25maWdCYXNlIHtcbiAgcHJpdmF0ZSBvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogQ2FwU2VydmljZVByb2plY3QsIG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgcm9vdCBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgcm9vdCBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVSb290VGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YXJ0IC5jZHNyYy5qc29uXG4gICAgICAnLmNkc3JjLmpzb24nOiBbXG4gICAgICAgICd7JyxcbiAgICAgICAgJyAgXCJyZXF1aXJlc1wiOiB7JyxcbiAgICAgICAgJyAgICBcIltkZXZlbG9wbWVudF1cIjogeycsXG4gICAgICAgICcgICAgICBcImF1dGhcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcIm1vY2tlZFwiJyxcbiAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAnICAgIH0sJyxcbiAgICAgICAgJyAgICBcIltwcm9kdWN0aW9uXVwiOiB7JyxcbiAgICAgICAgJyAgICAgIFwiYXV0aFwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwieHN1YWFcIicsXG4gICAgICAgICcgICAgICB9LCcsXG4gICAgICAgICcgICAgICBcImRiXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJoYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJpbXBsXCI6IFwiQGNhcC1qcy9oYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJkZXBsb3ktZm9ybWF0XCI6IFwiaGRidGFibGVcIicsXG4gICAgICAgICcgICAgICB9JyxcbiAgICAgICAgJyAgICB9JyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImkxOG5cIjogeycsXG4gICAgICAgICcgICAgXCJkZWZhdWx0X2xhbmd1YWdlXCI6IFwiZW5cIicsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJsb2dcIjogeycsXG4gICAgICAgICcgICAgXCJzZXJ2aWNlXCI6IHRydWUnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiZmVhdHVyZXNcIjogeycsXG4gICAgICAgICcgICAgXCJwcmVzZXJ2ZV9jb21wdXRlZFwiOiB0cnVlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcInNxbFwiOiB7JyxcbiAgICAgICAgJyAgICBcIm5hdGl2ZV9oYW5hX2Fzc29jaWF0aW9uc1wiOiBmYWxzZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJoYW5hXCI6IHsnLFxuICAgICAgICAnICAgIFwiZGVwbG95LWZvcm1hdFwiOiBcImhkYnRhYmxlXCInLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCAuY2RzcmMuanNvblxuXG4gICAgICAvLyBTdGFydCAuY2RzcHJldHRpZXIuanNvblxuICAgICAgJy5jZHNwcmV0dGllci5qc29uJzogW1xuICAgICAgICAneycsXG4gICAgICAgICcgIFwiYWxpZ25BZnRlcktleVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25QcmVBbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Qb3N0QW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29sb25zSW5Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25WYWx1ZXNJbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvbnNBbmRGdW5jdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uTmFtZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uUmV0dXJuc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luRW50aXRpZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJblNlbGVjdEl0ZW1zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5Vc2luZ1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FeHByZXNzaW9uc0FuZENvbmRpdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXhwckFuZENvbmRXaXRoaW5CbG9ja1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25UeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db2xvbnNCZWZvcmVUeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FcXVhbHNBZnRlclR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblR5cGVzV2l0aGluQmxvY2tcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29tcG9zaXRpb25TdHJ1Y3RUb1JpZ2h0XCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJjcWxLZXl3b3JkQ2FwaXRhbGl6YXRpb25cIjogXCJsb3dlclwiLCcsXG4gICAgICAgICcgIFwia2VlcFByZUFubm90YXRpb25zSW5PcmlnaW5hbExpbmVcIjogXCJrZWVwTGluZVwiLCcsXG4gICAgICAgICcgIFwia2VlcFBvc3RBbm5vdGF0aW9uc0luT3JpZ2luYWxMaW5lXCI6IFwia2VlcExpbmVcIiwnLFxuICAgICAgICAnICBcImtlZXBFbXB0eUJyYWNrZXRzVG9nZXRoZXJcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImtlZXBTaW5nbGVMaW5lZEJsb2Nrc1RvZ2V0aGVyXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJrZWVwT3JpZ2luYWxFbXB0eUxpbmVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJtYXhLZWVwRW1wdHlMaW5lc1wiOiAyLCcsXG4gICAgICAgICcgIFwib3BlbmluZ0JyYWNlSW5OZXdMaW5lXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwic2VsZWN0SW5OZXdMaW5lXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ0YWJTaXplXCI6IDIsJyxcbiAgICAgICAgJyAgXCJmaW5hbE5ld2xpbmVcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImZvcm1hdERvY0NvbW1lbnRzXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwibWF4RG9jQ29tbWVudExpbmVcIjogNjAsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQmVmb3JlQ29sb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VCZWZvcmVDb2xvbkluQW5ub3RhdGlvblwiOiBmYWxzZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbG9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb2xvbkluQW5ub3RhdGlvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29tbWFcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBcm91bmRBbGlnbmVkT3BzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQXJvdW5kQmluYXJ5T3BzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlV2l0aGluQnJhY2tldHNcIjogZmFsc2UnLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIC5jZHNwcmV0dGllci5qc29uXG5cbiAgICAgIC8vIFN0YXJ0IC5lc2xpbnRyYy5qc29uXG4gICAgICAnZGVmYXVsdC1lbnYuanMnOiBbXG4gICAgICAgICcvKionLFxuICAgICAgICAnICogRmV0Y2hlcyBgVkNBUF9TRVJWSUNFU2AgZm9yIGEgZ2l2ZW4gQ0YgYXBwbGljYXRpb24gYW5kIHdyaXRlcyBpdCB0byBhIGZpbGUuJyxcbiAgICAgICAgJyAqIEl0IHV0aWxpemVzIHRoZSBDbG91ZCBGb3VuZHJ5IENMSSB0byBkbyBzby4nLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogTWFrZSBzdXJlIHlvdSBhcmUgbG9nZ2VkIGluIHZpYSB0aGUgQ0YgQ0xJIChgY2YgbG9naW5gKSBiZWZvcmUgcnVubmluZyB0aGUnLFxuICAgICAgICAnICogc2NyaXB0LiBZb3UgY2FuIGNoZWNrIHlvdXIgbG9naW4gYW5kIHRoZSBvcmdhbml6YXRpb24gYW5kIHNwYWNlIHlvdSBhcmUnLFxuICAgICAgICAnICogdGFyZ2V0dGluZyBieSB1c2luZyBgY2YgdGFyZ2V0YC4nLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogQWxsb3dzIG9uLXByZW1pc2UgY29ubmVjdGl2aXR5IHByb3h5aW5nIGlmIG5lY2Vzc2FyeScsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBAYXV0aG9yIFNlYmFzdGlhbiBCbGVzc2luZycsXG4gICAgICAgICcgKi8nLFxuICAgICAgICBcImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcIixcbiAgICAgICAgXCJjb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1wiLFxuICAgICAgICBcImNvbnN0IGV4ZWMgPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYyk7XCIsXG4gICAgICAgIFwiY29uc3Qgc3Bhd24gPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuc3Bhd24pO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2FzeW5jIGZ1bmN0aW9uIGdldEFwcEd1aWQoYXBwTmFtZSkgeycsXG4gICAgICAgICcgIGNvbnN0IGNtZCA9IGBjZiBhcHAgJHthcHBOYW1lfSAtLWd1aWRgOycsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGNtZCk7JyxcbiAgICAgICAgJyAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYyhjbWQpOycsXG4gICAgICAgICcgIGlmIChzdGRlcnIpIGNvbnNvbGUubG9nKGBzdGRlcnI6ICR7c3RkZXJyfWApOycsXG4gICAgICAgICcgIHJldHVybiBzdGRvdXQudHJpbSgpOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJycsXG4gICAgICAgICdhc3luYyBmdW5jdGlvbiBnZXREZWZhdWx0RW52KGFwcEd1aWQpIHsnLFxuICAgICAgICAnICBjb25zdCBjbWQgPSBgY2YgY3VybCBcInYzL2FwcHMvJHthcHBHdWlkfS9lbnZcImA7JyxcbiAgICAgICAgJyAgY29uc29sZS5sb2coY21kKTsnLFxuICAgICAgICAnICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKGNtZCk7JyxcbiAgICAgICAgJyAgaWYgKHN0ZGVycikgY29uc29sZS5sb2coYHN0ZGVycjogJHtzdGRlcnJ9YCk7JyxcbiAgICAgICAgJyAgcmV0dXJuIEpTT04ucGFyc2Uoc3Rkb3V0KS5zeXN0ZW1fZW52X2pzb247JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnJyxcbiAgICAgICAgJyhhc3luYyAoKSA9PiB7JyxcbiAgICAgICAgJyAgY29uc3QgbXlBcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpOycsXG4gICAgICAgICcgIGNvbnN0IGFwcE5hbWUgPSBteUFyZ3NbMF07JyxcbiAgICAgICAgJyAgaWYgKCFhcHBOYW1lKSB7JyxcbiAgICAgICAgXCIgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSBDRiBhcHBsaWNhdGlvbiBuYW1lIHRvIGZldGNoIGl0cyBlbnZpcm9ubWVudCEnKTtcIixcbiAgICAgICAgJyAgICByZXR1cm47JyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICcnLFxuICAgICAgICAnICBsZXQgZW52RmlsZU5hbWUgPSBteUFyZ3NbMV07JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBlbnZGaWxlTmFtZSA9IGVudkZpbGVOYW1lID8gZW52RmlsZU5hbWUgOiAnZGVmYXVsdC1lbnYuanNvbic7XCIsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGBXcml0aW5nIGVudmlyb25tZW50IG9mICR7YXBwTmFtZX0gdG8gJHtlbnZGaWxlTmFtZX1gKTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgY29uc3QgZGVmYXVsdEVudiA9IGF3YWl0IGdldERlZmF1bHRFbnYoYXdhaXQgZ2V0QXBwR3VpZChhcHBOYW1lKSk7JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGxldCBiUnVuUHJveHkgPSBmYWxzZTsnLFxuICAgICAgICAnICBsZXQgcHJveHlQb3J0ID0gbnVsbDsnLFxuICAgICAgICAnICBsZXQgcHJveHlIb3N0ID0gbnVsbDsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGlmIChkZWZhdWx0RW52WydWQ0FQX1NFUlZJQ0VTJ11bJ2Nvbm5lY3Rpdml0eSddKSB7XCIsXG4gICAgICAgICcgICAgcHJveHlQb3J0ID0gZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfcG9ydDsnLFxuICAgICAgICAnICAgIHByb3h5SG9zdCA9IGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X2hvc3Q7JyxcbiAgICAgICAgXCIgICAgZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfaG9zdCA9ICdsb2NhbGhvc3QnO1wiLFxuICAgICAgICAnICAgIGJSdW5Qcm94eSA9IHRydWU7JyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgZnMud3JpdGVGaWxlKCdkZWZhdWx0LWVudi5qc29uJywgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEVudiwgbnVsbCwgMiksIGFzeW5jIChlcnIpID0+IHtcIixcbiAgICAgICAgJyAgICBpZiAoZXJyKSB7JyxcbiAgICAgICAgJyAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsnLFxuICAgICAgICAnICAgIH0gZWxzZSBpZiAoYlJ1blByb3h5KSB7JyxcbiAgICAgICAgJyAgICAgIGNvbnNvbGUubG9nKGBjZiBzc2ggJHthcHBOYW1lfSAtTCAke3Byb3h5UG9ydH06JHtwcm94eUhvc3R9OiR7cHJveHlQb3J0fWApOycsXG4gICAgICAgIFwiICAgICAgYXdhaXQgc3Bhd24oJ2NmJywgW2Bzc2ggJHthcHBOYW1lfSAtTCAke3Byb3h5UG9ydH06JHtwcm94eUhvc3R9OiR7cHJveHlQb3J0fWBdLCB7XCIsXG4gICAgICAgICcgICAgICAgIHNoZWxsOiB0cnVlLCcsXG4gICAgICAgIFwiICAgICAgICBzdGRpbzogJ2luaGVyaXQnLFwiLFxuICAgICAgICAnICAgICAgfSk7JyxcbiAgICAgICAgJyAgICB9JyxcbiAgICAgICAgJyAgfSk7JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBjb25zb2xlLmxvZygnRG9uZScpO1wiLFxuICAgICAgICAnfSkoKTsnLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCAuZXNsaW50cmMuanNvblxuXG4gICAgICAvLyBTdGFydCAuZXNsaW50cmMuanNvblxuICAgICAgJ210YS55YW1sJzogW1xuICAgICAgICBcIl9zY2hlbWEtdmVyc2lvbjogJzMuMSdcIixcbiAgICAgICAgYElEOiAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9YCxcbiAgICAgICAgJ3ZlcnNpb246IDAuMC4xJyxcbiAgICAgICAgYGRlc2NyaXB0aW9uOiAke3RoaXMub3B0aW9ucy5kZXNjcmlwdGlvbn1gLFxuICAgICAgICAncGFyYW1ldGVyczonLFxuICAgICAgICAnICBlbmFibGUtcGFyYWxsZWwtZGVwbG95bWVudHM6IHRydWUnLFxuICAgICAgICAnYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICBiZWZvcmUtYWxsOicsXG4gICAgICAgICcgICAgLSBidWlsZGVyOiBjdXN0b20nLFxuICAgICAgICAnICAgICAgY29tbWFuZHM6JyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gY2knLFxuICAgICAgICAnICAgICAgICAtIG5wbSBydW4gYnVpbGQnLFxuICAgICAgICAnICAgICAgICAtIG5weCBAY2FwLWpzL2Nkcy10eXBlciBcIipcIiAtLW91dHB1dERpcmVjdG9yeSBnZW4vc3J2L0BjZHMtbW9kZWxzJyxcbiAgICAgICAgJ21vZHVsZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1zcnZgLFxuICAgICAgICAnICAgIHR5cGU6IG5vZGVqcycsXG4gICAgICAgICcgICAgcGF0aDogZ2VuL3NydicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICAgIHJlYWRpbmVzcy1oZWFsdGgtY2hlY2stdHlwZTogaHR0cCcsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLWh0dHAtZW5kcG9pbnQ6IC9oZWFsdGgnLFxuICAgICAgICAnICAgIGJ1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkZXI6IG5wbScsXG4gICAgICAgICcgICAgcHJvdmlkZXM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogc3J2LWFwaScsXG4gICAgICAgICcgICAgICAgIHByb3BlcnRpZXM6JyxcbiAgICAgICAgJyAgICAgICAgICBzcnYtdXJsOiAke2RlZmF1bHQtdXJsfScsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25zYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLmFwcGxpY2F0aW9uLmNvbnRlbnQnLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBzZXJ2aWNlLWtleTonLFxuICAgICAgICBgICAgICAgICAgICAgbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBjb250ZW50LXRhcmdldDogdHJ1ZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29udGVudDonLFxuICAgICAgICAnICAgICAgICBpbnN0YW5jZTonLFxuICAgICAgICAnICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogT0F1dGgyVXNlclRva2VuRXhjaGFuZ2UnLFxuICAgICAgICBgICAgICAgICAgICAgICBOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1hcHAtc3J2YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlSW5zdGFuY2VOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICBgICAgICAgICAgICAgICBUb2tlblNlcnZpY2VLZXlOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWEta2V5YCxcbiAgICAgICAgJyAgICAgICAgICAgICAgVVJMOiB+e3Nydi1hcGkvc3J2LXVybH0nLFxuICAgICAgICBgICAgICAgICAgICAgICBzYXAuY2xvdWQuc2VydmljZTogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICcgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBuby1zb3VyY2U6IHRydWUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiLWRlcGxveWVyYCxcbiAgICAgICAgJyAgICB0eXBlOiBoZGInLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9kYicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICdyZXNvdXJjZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBwYXRoOiAuL3hzLXNlY3VyaXR5Lmpzb24nLFxuICAgICAgICAnICAgICAgc2VydmljZTogeHN1YWEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBhcHBsaWNhdGlvbicsXG4gICAgICAgICcgICAgICBjb25maWc6JyxcbiAgICAgICAgJyAgICAgICAgdGVuYW50LW1vZGU6IGRlZGljYXRlZCcsXG4gICAgICAgIGAgICAgICAgIHhzYXBwbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX1gLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWNvbm5lY3Rpdml0eWAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGNvbm5lY3Rpdml0eScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIEhUTUw1UnVudGltZV9lbmFibGVkOiB0cnVlJyxcbiAgICAgICAgJyAgICAgICAgaW5pdF9kYXRhOicsXG4gICAgICAgICcgICAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgICAtIEF1dGhlbnRpY2F0aW9uOiBOb0F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBOYW1lOiB1aTUnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFByb3h5VHlwZTogSW50ZXJuZXQnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFR5cGU6IEhUVFAnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFVSTDogaHR0cHM6Ly91aTUuc2FwLmNvbScsXG4gICAgICAgICcgICAgICAgICAgICBleGlzdGluZ19kZXN0aW5hdGlvbnNfcG9saWN5OiB1cGRhdGUnLFxuICAgICAgICAnICAgICAgICB2ZXJzaW9uOiAxLjAuMCcsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBkZXN0aW5hdGlvbicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLnhzLmhkaS1jb250YWluZXInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGhhbmEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBoZGktc2hhcmVkJyxcbiAgICAgICAgJyAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICBoZGktc2VydmljZS1uYW1lOiAke3NlcnZpY2UtbmFtZX0nLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCAuZXNsaW50cmMuanNvblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGBzcnZgIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBgc3J2YCBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVTcnZUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhcnQgaW5kZXgudHNcbiAgICAgICdzcnYvaW5kZXguY2RzJzogW2B1c2luZyBmcm9tICcuL2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMSc7YF0sXG4gICAgICAvLyBFbmQgaW5kZXgudHNcblxuICAgICAgLy8gU3RhcnQgRW50aXR5IGhhbmRsZXJcbiAgICAgIFtgc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL2hhbmRsZXIvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyLnRzYF06IFtcbiAgICAgICAgYGltcG9ydCB7XG4gICAgICAgICAgQWZ0ZXJSZWFkLFxuICAgICAgICAgIEVudGl0eUhhbmRsZXIsXG4gICAgICAgICAgSW5qZWN0LFxuICAgICAgICAgIFJlcSxcbiAgICAgICAgICBSZXN1bHRzLFxuICAgICAgICAgIFNlcnZpY2UsXG4gICAgICAgICAgQ0RTX0RJU1BBVENIRVIsXG4gICAgICAgICAgdHlwZSBUeXBlZFJlcXVlc3QsXG4gICAgICAgICAgVXNlLFxuICAgICAgICB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnI2Nkcy1tb2RlbHMvU2VydmljZUEnO2AsXG4gICAgICAgIGBpbXBvcnQgeyBNaWRkbGV3YXJlQWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9NaWRkbGV3YXJlQWZ0ZXJSZWFkJztgLFxuICAgICAgICBgaW1wb3J0IHsgTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9NaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0nO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQEVudGl0eUhhbmRsZXIoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pYCxcbiAgICAgICAgYEBVc2UoTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9KWAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyIHtgLFxuICAgICAgICBgICBASW5qZWN0KENEU19ESVNQQVRDSEVSLlNSVikgcHJpdmF0ZSByZWFkb25seSBzcnY6IFNlcnZpY2U7YCxcbiAgICAgICAgYCAgLy8gQE9uUmVhZCwgQEJlZm9yZVJlYWQsIEBBZnRlclJlYWQsIEBPblVwZGF0ZSAuLi5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgQEFmdGVyUmVhZCgpYCxcbiAgICAgICAgYCAgQFVzZShNaWRkbGV3YXJlQWZ0ZXJSZWFkKWAsXG4gICAgICAgIGAgIHB1YmxpYyBhc3luYyBhZnRlclJlYWQoQFJlc3VsdHMoKSByZXN1bHRzOiAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSwgQFJlcSgpIHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9Pik6IFByb21pc2U8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKHJlcSk7YCxcbiAgICAgICAgYCAgICByZXR1cm4gcmVzdWx0cztgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZFxuXG4gICAgICAvLyBTdGFydCBVbmJvdW5kQWN0aW9uc0hhbmRsZXJcbiAgICAgICdzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvaGFuZGxlci9VbmJvdW5kQWN0aW9uc0hhbmRsZXIudHMnOiBbXG4gICAgICAgIGBpbXBvcnQgeyBJbmplY3QsIFNlcnZpY2UsIENEU19ESVNQQVRDSEVSLCBVbmJvdW5kQWN0aW9ucyB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYEBVbmJvdW5kQWN0aW9ucygpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBVbmJvdW5kQWN0aW9uc0hhbmRsZXIge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2U6IFNlcnZpY2U7YCxcbiAgICAgICAgYCAgLy8gQE9uRXJyb3IsIEBPbkV2ZW50LCBAT25BY3Rpb24sIEBPbkZ1bmN0aW9uYCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBVbmJvdW5kQWN0aW9uc0hhbmRsZXJcblxuICAgICAgLy8gU3RhcnQgc2VydmljZS0xLmNkc1xuICAgICAgJ3Nydi9jb250cm9sbGVyL3NlcnZpY2UtMS9zZXJ2aWNlLTEuY2RzJzogW1xuICAgICAgICBgdXNpbmcgeyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0gYXMgQmFzZX0gZnJvbSAnLi4vLi4vLi4vZGIvc2NoZW1hJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYHNlcnZpY2UgU2VydmljZUEge2AsXG4gICAgICAgIGAgICBAcmVhZG9ubHlgLFxuICAgICAgICBgICAgZW50aXR5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IGFzIHByb2plY3Rpb24gb24gQmFzZS4ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfTtgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIHNlcnZpY2UtMS5jZHNcblxuICAgICAgLy8gU3RhcnQgc2VydmljZS0xLnRzXG4gICAgICAnc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMS50cyc6IFtcbiAgICAgICAgYGltcG9ydCB7IENEU0Rpc3BhdGNoZXIgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlci8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXInO2AsXG4gICAgICAgIGBpbXBvcnQgeyBVbmJvdW5kQWN0aW9uc0hhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXIvVW5ib3VuZEFjdGlvbnNIYW5kbGVyJztgLFxuICAgICAgICAnJyxcbiAgICAgICAgYGV4cG9ydCA9IG5ldyBDRFNEaXNwYXRjaGVyKFske3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIsIFVuYm91bmRBY3Rpb25zSGFuZGxlcl0pLmluaXRpYWxpemUoKTtgLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBzZXJ2aWNlLTEudHNcblxuICAgICAgLy8gU3RhcnQgTWlkZGxld2FyZVxuICAgICAgW2BzcnYvbWlkZGxld2FyZS9NaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0udHNgXTogW1xuICAgICAgICBgaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlSW1wbCwgTmV4dE1pZGRsZXdhcmUsIFR5cGVkUmVxdWVzdCB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHR5cGUgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gaW1wbGVtZW50cyBNaWRkbGV3YXJlSW1wbCB7YCxcbiAgICAgICAgYCAgcHVibGljIGFzeW5jIHVzZShyZXE6IFR5cGVkUmVxdWVzdDwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4sIG5leHQ6IE5leHRNaWRkbGV3YXJlKTogUHJvbWlzZTx2b2lkPiB7YCxcbiAgICAgICAgYCAgICBjb25zb2xlLmxvZygnTWlkZGxld2FyZSBlbnRpdHkgMSA6IEVYRUNVVEVEJyk7YCxcbiAgICAgICAgYCAgICBhd2FpdCBuZXh0KCk7YCxcbiAgICAgICAgYCAgfWAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgTWlkZGxld2FyZVxuXG4gICAgICAvLyBTdGFydCBNaWRkbGV3YXJlQWZ0ZXJSZWFkXG4gICAgICAnc3J2L21pZGRsZXdhcmUvTWlkZGxld2FyZUFmdGVyUmVhZC50cyc6IFtcbiAgICAgICAgYGltcG9ydCB0eXBlIHsgTWlkZGxld2FyZUltcGwsIE5leHRNaWRkbGV3YXJlLCBUeXBlZFJlcXVlc3QgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB0eXBlIHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgTWlkZGxld2FyZUFmdGVyUmVhZCBpbXBsZW1lbnRzIE1pZGRsZXdhcmVJbXBsIHtgLFxuICAgICAgICBgICBwdWJsaWMgYXN5bmMgdXNlKHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiwgbmV4dDogTmV4dE1pZGRsZXdhcmUpOiBQcm9taXNlPHZvaWQ+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlIGVudGl0eSAxIDogRVhFQ1VURUQnKTtgLFxuICAgICAgICBgICAgIGF3YWl0IG5leHQoKTtgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBNaWRkbGV3YXJlQWZ0ZXJSZWFkXG5cbiAgICAgIC8vIFN0YXJ0IFJlcG9zaXRvcnlcbiAgICAgIFtgc3J2L3JlcG9zaXRvcnkvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5LnRzYF06IFtcbiAgICAgICAgYGltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLXJlcG9zaXRvcnknO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBAUmVwb3NpdG9yeSgpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4ge2AsXG4gICAgICAgIGAgIGNvbnN0cnVjdG9yKCkge2AsXG4gICAgICAgIGAgICAgc3VwZXIoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgICAvLyAuLi4gZGVmaW5lIGN1c3RvbSBDRFMtUUwgYWN0aW9ucyBpZiBCYXNlUmVwb3NpdG9yeSBvbmVzIGFyZSBub3Qgc2F0aXNmeWluZyB5b3VyIG5lZWRzICFgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFJlcG9zaXRvcnlcblxuICAgICAgLy8gU3RhcnQgU2VydmljZVxuICAgICAgW2BzcnYvc2VydmljZS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2UudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHsgSW5qZWN0LCBTZXJ2aWNlLCBTZXJ2aWNlTG9naWMsIENEU19ESVNQQVRDSEVSIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnknO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQFNlcnZpY2VMb2dpYygpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2Uge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNydjogU2VydmljZTtgLFxuICAgICAgICBgICBASW5qZWN0KCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSkgcHJpdmF0ZSByZWFkb25seSAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2U6ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeTtgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFNlcnZpY2VcblxuICAgICAgLy8gU3RhcnQgY29uc3RhbnRzLnRzXG4gICAgICAnc3J2L3V0aWwvY29uc3RhbnRzL2NvbnN0YW50cy50cyc6IFtcbiAgICAgICAgYGNvbnN0IENvbnN0YW50cyA9IHtgLFxuICAgICAgICBgICAvLyBFeGFtcGxlYCxcbiAgICAgICAgYCAgQ09OU1RBTlRfMToge2AsXG4gICAgICAgIGAgICAgUFJPUF9DT05TVEFOVF8xOiAnU09NRVRISU5HJyxgLFxuICAgICAgICBgICB9LGAsXG4gICAgICAgIGB9O2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzO2AsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIGNvbnN0YW50cy50c1xuXG4gICAgICAvLyBTdGFydCB1dGlsLnRzXG4gICAgICAnc3J2L3V0aWwvaGVscGVycy91dGlsLnRzJzogW1xuICAgICAgICBgY29uc3QgVXRpbCA9IHtgLFxuICAgICAgICBgICAvLyBFeGFtcGxlYCxcbiAgICAgICAgYCAgYUhlbHBlckZ1bmN0aW9uKCkge2AsXG4gICAgICAgIGAgICAgcmV0dXJuIDE7YCxcbiAgICAgICAgYCAgfSxgLFxuICAgICAgICBgfTtgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBkZWZhdWx0IFV0aWw7YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgdXRpbC50c1xuXG4gICAgICAvLyBTdGFydCB0eXBlcy50c1xuICAgICAgJ3Nydi91dGlsL3R5cGVzL3R5cGVzLnRzJzogW2AvLyBFeGFtcGxlYCwgYGV4cG9ydCB0eXBlIEFUeXBlID0gc3RyaW5nO2BdLFxuICAgICAgLy8gRW5kIHR5cGVzLnRzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgZGIgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGRiIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkYi9zY2hlbWEuY2RzJzogW1xuICAgICAgICBcInVzaW5nIHsgbWFuYWdlZCB9IGZyb20gJ0BzYXAvY2RzL2NvbW1vbic7XCIsXG4gICAgICAgICcnLFxuICAgICAgICBgbmFtZXNwYWNlICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX07YCxcbiAgICAgICAgJycsXG4gICAgICAgIGBlbnRpdHkgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gOiBtYW5hZ2VkIHtgLFxuICAgICAgICAnICBrZXkgSUQ6IEludGVnZXI7JyxcbiAgICAgICAgJyAgZGVzY3I6IGxvY2FsaXplZCBTdHJpbmcoMTExKTsnLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGRhdGEgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGRhdGEgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYHRlc3QvZGF0YS8ke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9LSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LmNzdmA7XG4gICAgY29uc3QgZmlsZVBhdGhUZXh0cyA9IGB0ZXN0L2RhdGEvJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfS0ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS50ZXh0cy5jc3ZgO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFtmaWxlUGF0aF06IFtcbiAgICAgICAgJ0lELGNyZWF0ZWRBdCxjcmVhdGVkQnksbW9kaWZpZWRBdCxtb2RpZmllZEJ5LGRlc2NyJyxcbiAgICAgICAgJzEsLCwsLERlc2NyaXB0aW9uIDEnLFxuICAgICAgICAnMiwsLCwsRGVzY3JpcHRpb24gMicsXG4gICAgICAgICczLCwsLCxEZXNjcmlwdGlvbiAzJyxcbiAgICAgIF0sXG4gICAgICBbZmlsZVBhdGhUZXh0c106IFsnbG9jYWxlLElELGRlc2NyJ10sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlcyBmb3IgdGhlIHNwZWNpZmllZCBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZXMgVGhlIHRlbXBsYXRlcyB0byBjcmVhdGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlVGVtcGxhdGVzKHRlbXBsYXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwYXRoIGluIHRlbXBsYXRlcykge1xuICAgICAgaWYgKHRlbXBsYXRlc1twYXRoXSkge1xuICAgICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHBhdGgsIHtcbiAgICAgICAgICBjb250ZW50czogdGVtcGxhdGVzW3BhdGhdLmpvaW4oJ1xcbicpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVyJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVyJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAY2FwLWpzL2Nkcy10eXBlcyddLk5BTUV9QCR7Y29uc3RhbnRzWydAY2FwLWpzL2Nkcy10eXBlcyddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMtZGsnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC9jZHMtZGsnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAvY2RzLWxzcCddLk5BTUV9QCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1sc3AnXS5WRVJTSU9OfWAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGAke2NvbnN0YW50c1snQGR4ZnJvbnRpZXIvY2RzLXRzLXJlcG9zaXRvcnknXS5OQU1FfUAke2NvbnN0YW50c1snQGR4ZnJvbnRpZXIvY2RzLXRzLXJlcG9zaXRvcnknXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAvY2RzJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BzYXAvY2RzJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAc2FwL3hzc2VjJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BzYXAveHNzZWMnXS5WRVJTSU9OfWAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNjcmlwdHMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiAnY2RzLXNlcnZlIC0tcHJvZHVjdGlvbicsXG4gICAgICAnc3RhcnQ6bG9jYWwnOiAnY2RzLXRzIHNlcnZlJyxcbiAgICAgIHdhdGNoOiAnY2RzLXRzIHdhdGNoJyxcbiAgICAgICdidWlsZDpjZHMnOiAnY2RzLXRzIGJ1aWxkIC0tcHJvZHVjdGlvbicsXG4gICAgICAnYnVpbGQ6Y2RzOm1lc3NhZ2UnOiAnZWNobyBcIkJ1aWxkIENEUyAuLi5cIicsXG4gICAgICAnYnVpbGQ6dHMnOiAndHNjJyxcbiAgICAgICdidWlsZDp0czptZXNzYWdlJzogJ2VjaG8gXCJUcmFuc3BpbGUgVFMgPT4gSlMgLi4uXCInLFxuICAgICAgJ2J1aWxkOnNydjpjbGVhbjp0cyc6ICdmaW5kIGdlbi9zcnYvc3J2IC10eXBlIGYgLW5hbWUgXCIqLnRzXCIgLWRlbGV0ZScsXG4gICAgICAnYnVpbGQ6c3J2OmNsZWFuOnRzOm1lc3NhZ2UnOiAnZWNobyBcIkNsZWFuIFRTIGZpbGVzIGZyb20gc3J2IGZvbGRlciAuLi5cIicsXG4gICAgICBidWlsZDpcbiAgICAgICAgJ3J1bi1zIGJ1aWxkOmNkczptZXNzYWdlIGJ1aWxkOmNkcyBidWlsZDp0czptZXNzYWdlIGJ1aWxkOnRzIGJ1aWxkOnNydjpjbGVhbjp0czptZXNzYWdlIGJ1aWxkOnNydjpjbGVhbjp0cycsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW1wb3J0czoge1xuICAgICAgICAnI2Nkcy1tb2RlbHMvKic6ICcuL0BjZHMtbW9kZWxzLyovaW5kZXguanMnLFxuICAgICAgICAnI2Rpc3BhdGNoZXInOiAnLi9AZGlzcGF0Y2hlci9pbmRleC5qcycsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0KSB7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGREZXZEZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZERlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZFNldHRpbmdzKHRoaXMuYWRkaXRpb25hbFNldHRpbmdzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYXBwbHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZVJvb3RUZW1wbGF0ZXMpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVzKHRoaXMuc2FtcGxlQ29kZUZpbGVEYlRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXMpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVzKHRoaXMuc2FtcGxlQ29kZUZpbGVTcnZUZW1wbGF0ZXMpO1xuICB9XG59XG4iXX0=