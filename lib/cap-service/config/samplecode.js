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
            '@dxfrontier/cds-ts-dispatcher@^3.2.7',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFvQztBQUVwQyxxQ0FBK0Q7QUFFL0Qsb0RBQWlEO0FBRWpEOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSwyQkFBb0I7SUFHbEUsWUFBWSxPQUEwQixFQUFFLE9BQWlDO1FBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywyQkFBMkI7UUFDdkMsT0FBTztZQUNMLGFBQWEsRUFBRTtnQkFDYixHQUFHO2dCQUNILGlCQUFpQjtnQkFDakIsd0JBQXdCO2dCQUN4QixpQkFBaUI7Z0JBQ2pCLDBCQUEwQjtnQkFDMUIsU0FBUztnQkFDVCxRQUFRO2dCQUNSLHVCQUF1QjtnQkFDdkIsaUJBQWlCO2dCQUNqQix5QkFBeUI7Z0JBQ3pCLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZix5QkFBeUI7Z0JBQ3pCLGlDQUFpQztnQkFDakMscUNBQXFDO2dCQUNyQyxTQUFTO2dCQUNULE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixhQUFhO2dCQUNiLDhCQUE4QjtnQkFDOUIsTUFBTTtnQkFDTixZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIsTUFBTTtnQkFDTixpQkFBaUI7Z0JBQ2pCLCtCQUErQjtnQkFDL0IsTUFBTTtnQkFDTixZQUFZO2dCQUNaLHVDQUF1QztnQkFDdkMsTUFBTTtnQkFDTixhQUFhO2dCQUNiLGlDQUFpQztnQkFDakMsS0FBSztnQkFDTCxHQUFHO2FBQ0o7WUFDRCxtQkFBbUIsRUFBRTtnQkFDbkIsR0FBRztnQkFDSCwwQkFBMEI7Z0JBQzFCLDZCQUE2QjtnQkFDN0IsZ0NBQWdDO2dCQUNoQyxpQ0FBaUM7Z0JBQ2pDLHFD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SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7QUFqakJILGdFQWtqQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENhcFNlcnZpY2VQcm9qZWN0LCBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgfSBmcm9tICcuLi8uL3Byb2plY3QnO1xuaW1wb3J0IHsgQmFzZVByb2plY3QsIFNhbXBsZUNvZGVDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBTYW1wbGVDb2RlQ29uZmlnQmFzZSB7XG4gIHByaXZhdGUgb3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IENhcFNlcnZpY2VQcm9qZWN0LCBvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIHJvb3QgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIHJvb3QgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmNkc3JjLmpzb24nOiBbXG4gICAgICAgICd7JyxcbiAgICAgICAgJyAgXCJyZXF1aXJlc1wiOiB7JyxcbiAgICAgICAgJyAgICBcIltkZXZlbG9wbWVudF1cIjogeycsXG4gICAgICAgICcgICAgICBcImF1dGhcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcIm1vY2tlZFwiJyxcbiAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAnICAgIH0sJyxcbiAgICAgICAgJyAgICBcIltwcm9kdWN0aW9uXVwiOiB7JyxcbiAgICAgICAgJyAgICAgIFwiYXV0aFwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwieHN1YWFcIicsXG4gICAgICAgICcgICAgICB9LCcsXG4gICAgICAgICcgICAgICBcImRiXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJoYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJpbXBsXCI6IFwiQGNhcC1qcy9oYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJkZXBsb3ktZm9ybWF0XCI6IFwiaGRidGFibGVcIicsXG4gICAgICAgICcgICAgICB9JyxcbiAgICAgICAgJyAgICB9JyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImkxOG5cIjogeycsXG4gICAgICAgICcgICAgXCJkZWZhdWx0X2xhbmd1YWdlXCI6IFwiZW5cIicsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJsb2dcIjogeycsXG4gICAgICAgICcgICAgXCJzZXJ2aWNlXCI6IHRydWUnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiZmVhdHVyZXNcIjogeycsXG4gICAgICAgICcgICAgXCJwcmVzZXJ2ZV9jb21wdXRlZFwiOiB0cnVlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcInNxbFwiOiB7JyxcbiAgICAgICAgJyAgICBcIm5hdGl2ZV9oYW5hX2Fzc29jaWF0aW9uc1wiOiBmYWxzZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJoYW5hXCI6IHsnLFxuICAgICAgICAnICAgIFwiZGVwbG95LWZvcm1hdFwiOiBcImhkYnRhYmxlXCInLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgICcuY2RzcHJldHRpZXIuanNvbic6IFtcbiAgICAgICAgJ3snLFxuICAgICAgICAnICBcImFsaWduQWZ0ZXJLZXlcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduUHJlQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduUG9zdEFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbG9uc0luQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVmFsdWVzSW5Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25zQW5kRnVuY3Rpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvbk5hbWVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvblJldHVybnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJbkVudGl0aWVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5TZWxlY3RJdGVtc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luVXNpbmdcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXhwcmVzc2lvbnNBbmRDb25kaXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkV4cHJBbmRDb25kV2l0aGluQmxvY2tcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29sb25zQmVmb3JlVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXF1YWxzQWZ0ZXJUeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25UeXBlc1dpdGhpbkJsb2NrXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbXBvc2l0aW9uU3RydWN0VG9SaWdodFwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiY3FsS2V5d29yZENhcGl0YWxpemF0aW9uXCI6IFwibG93ZXJcIiwnLFxuICAgICAgICAnICBcImtlZXBQcmVBbm5vdGF0aW9uc0luT3JpZ2luYWxMaW5lXCI6IFwia2VlcExpbmVcIiwnLFxuICAgICAgICAnICBcImtlZXBQb3N0QW5ub3RhdGlvbnNJbk9yaWdpbmFsTGluZVwiOiBcImtlZXBMaW5lXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwRW1wdHlCcmFja2V0c1RvZ2V0aGVyXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJrZWVwU2luZ2xlTGluZWRCbG9ja3NUb2dldGhlclwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwia2VlcE9yaWdpbmFsRW1wdHlMaW5lc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwibWF4S2VlcEVtcHR5TGluZXNcIjogMiwnLFxuICAgICAgICAnICBcIm9wZW5pbmdCcmFjZUluTmV3TGluZVwiOiBmYWxzZSwnLFxuICAgICAgICAnICBcInNlbGVjdEluTmV3TGluZVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwidGFiU2l6ZVwiOiAyLCcsXG4gICAgICAgICcgIFwiZmluYWxOZXdsaW5lXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJmb3JtYXREb2NDb21tZW50c1wiOiBmYWxzZSwnLFxuICAgICAgICAnICBcIm1heERvY0NvbW1lbnRMaW5lXCI6IDYwLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUJlZm9yZUNvbG9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQmVmb3JlQ29sb25JbkFubm90YXRpb25cIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb2xvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29sb25JbkFubm90YXRpb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbW1hXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQXJvdW5kQWxpZ25lZE9wc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFyb3VuZEJpbmFyeU9wc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZVdpdGhpbkJyYWNrZXRzXCI6IGZhbHNlJyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgICdkZWZhdWx0LWVudi5qcyc6IFtcbiAgICAgICAgJy8qKicsXG4gICAgICAgICcgKiBGZXRjaGVzIGBWQ0FQX1NFUlZJQ0VTYCBmb3IgYSBnaXZlbiBDRiBhcHBsaWNhdGlvbiBhbmQgd3JpdGVzIGl0IHRvIGEgZmlsZS4nLFxuICAgICAgICAnICogSXQgdXRpbGl6ZXMgdGhlIENsb3VkIEZvdW5kcnkgQ0xJIHRvIGRvIHNvLicsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBNYWtlIHN1cmUgeW91IGFyZSBsb2dnZWQgaW4gdmlhIHRoZSBDRiBDTEkgKGBjZiBsb2dpbmApIGJlZm9yZSBydW5uaW5nIHRoZScsXG4gICAgICAgICcgKiBzY3JpcHQuIFlvdSBjYW4gY2hlY2sgeW91ciBsb2dpbiBhbmQgdGhlIG9yZ2FuaXphdGlvbiBhbmQgc3BhY2UgeW91IGFyZScsXG4gICAgICAgICcgKiB0YXJnZXR0aW5nIGJ5IHVzaW5nIGBjZiB0YXJnZXRgLicsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBBbGxvd3Mgb24tcHJlbWlzZSBjb25uZWN0aXZpdHkgcHJveHlpbmcgaWYgbmVjZXNzYXJ5JyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIEBhdXRob3IgU2ViYXN0aWFuIEJsZXNzaW5nJyxcbiAgICAgICAgJyAqLycsXG4gICAgICAgIFwiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1wiLFxuICAgICAgICBcImNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XCIsXG4gICAgICAgIFwiY29uc3QgZXhlYyA9IHV0aWwucHJvbWlzaWZ5KHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjKTtcIixcbiAgICAgICAgXCJjb25zdCBzcGF3biA9IHV0aWwucHJvbWlzaWZ5KHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5zcGF3bik7XCIsXG4gICAgICAgICcnLFxuICAgICAgICAnYXN5bmMgZnVuY3Rpb24gZ2V0QXBwR3VpZChhcHBOYW1lKSB7JyxcbiAgICAgICAgJyAgY29uc3QgY21kID0gYGNmIGFwcCAke2FwcE5hbWV9IC0tZ3VpZGA7JyxcbiAgICAgICAgJyAgY29uc29sZS5sb2coY21kKTsnLFxuICAgICAgICAnICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKGNtZCk7JyxcbiAgICAgICAgJyAgaWYgKHN0ZGVycikgY29uc29sZS5sb2coYHN0ZGVycjogJHtzdGRlcnJ9YCk7JyxcbiAgICAgICAgJyAgcmV0dXJuIHN0ZG91dC50cmltKCk7JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2FzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRFbnYoYXBwR3VpZCkgeycsXG4gICAgICAgICcgIGNvbnN0IGNtZCA9IGBjZiBjdXJsIFwidjMvYXBwcy8ke2FwcEd1aWR9L2VudlwiYDsnLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhjbWQpOycsXG4gICAgICAgICcgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoY21kKTsnLFxuICAgICAgICAnICBpZiAoc3RkZXJyKSBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTsnLFxuICAgICAgICAnICByZXR1cm4gSlNPTi5wYXJzZShzdGRvdXQpLnN5c3RlbV9lbnZfanNvbjsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcnLFxuICAgICAgICAnKGFzeW5jICgpID0+IHsnLFxuICAgICAgICAnICBjb25zdCBteUFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7JyxcbiAgICAgICAgJyAgY29uc3QgYXBwTmFtZSA9IG15QXJnc1swXTsnLFxuICAgICAgICAnICBpZiAoIWFwcE5hbWUpIHsnLFxuICAgICAgICBcIiAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIENGIGFwcGxpY2F0aW9uIG5hbWUgdG8gZmV0Y2ggaXRzIGVudmlyb25tZW50IScpO1wiLFxuICAgICAgICAnICAgIHJldHVybjsnLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGxldCBlbnZGaWxlTmFtZSA9IG15QXJnc1sxXTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGVudkZpbGVOYW1lID0gZW52RmlsZU5hbWUgPyBlbnZGaWxlTmFtZSA6ICdkZWZhdWx0LWVudi5qc29uJztcIixcbiAgICAgICAgJyAgY29uc29sZS5sb2coYFdyaXRpbmcgZW52aXJvbm1lbnQgb2YgJHthcHBOYW1lfSB0byAke2VudkZpbGVOYW1lfWApOycsXG4gICAgICAgICcnLFxuICAgICAgICAnICBjb25zdCBkZWZhdWx0RW52ID0gYXdhaXQgZ2V0RGVmYXVsdEVudihhd2FpdCBnZXRBcHBHdWlkKGFwcE5hbWUpKTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgbGV0IGJSdW5Qcm94eSA9IGZhbHNlOycsXG4gICAgICAgICcgIGxldCBwcm94eVBvcnQgPSBudWxsOycsXG4gICAgICAgICcgIGxldCBwcm94eUhvc3QgPSBudWxsOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgaWYgKGRlZmF1bHRFbnZbJ1ZDQVBfU0VSVklDRVMnXVsnY29ubmVjdGl2aXR5J10pIHtcIixcbiAgICAgICAgJyAgICBwcm94eVBvcnQgPSBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9wb3J0OycsXG4gICAgICAgICcgICAgcHJveHlIb3N0ID0gZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfaG9zdDsnLFxuICAgICAgICBcIiAgICBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9ob3N0ID0gJ2xvY2FsaG9zdCc7XCIsXG4gICAgICAgICcgICAgYlJ1blByb3h5ID0gdHJ1ZTsnLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBmcy53cml0ZUZpbGUoJ2RlZmF1bHQtZW52Lmpzb24nLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0RW52LCBudWxsLCAyKSwgYXN5bmMgKGVycikgPT4ge1wiLFxuICAgICAgICAnICAgIGlmIChlcnIpIHsnLFxuICAgICAgICAnICAgICAgY29uc29sZS5lcnJvcihlcnIpOycsXG4gICAgICAgICcgICAgfSBlbHNlIGlmIChiUnVuUHJveHkpIHsnLFxuICAgICAgICAnICAgICAgY29uc29sZS5sb2coYGNmIHNzaCAke2FwcE5hbWV9IC1MICR7cHJveHlQb3J0fToke3Byb3h5SG9zdH06JHtwcm94eVBvcnR9YCk7JyxcbiAgICAgICAgXCIgICAgICBhd2FpdCBzcGF3bignY2YnLCBbYHNzaCAke2FwcE5hbWV9IC1MICR7cHJveHlQb3J0fToke3Byb3h5SG9zdH06JHtwcm94eVBvcnR9YF0sIHtcIixcbiAgICAgICAgJyAgICAgICAgc2hlbGw6IHRydWUsJyxcbiAgICAgICAgXCIgICAgICAgIHN0ZGlvOiAnaW5oZXJpdCcsXCIsXG4gICAgICAgICcgICAgICB9KTsnLFxuICAgICAgICAnICAgIH0nLFxuICAgICAgICAnICB9KTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGNvbnNvbGUubG9nKCdEb25lJyk7XCIsXG4gICAgICAgICd9KSgpOycsXG4gICAgICBdLFxuICAgICAgJ210YS55YW1sJzogW1xuICAgICAgICBcIl9zY2hlbWEtdmVyc2lvbjogJzMuMSdcIixcbiAgICAgICAgYElEOiAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9YCxcbiAgICAgICAgJ3ZlcnNpb246IDAuMC4xJyxcbiAgICAgICAgYGRlc2NyaXB0aW9uOiAke3RoaXMub3B0aW9ucy5kZXNjcmlwdGlvbn1gLFxuICAgICAgICAncGFyYW1ldGVyczonLFxuICAgICAgICAnICBlbmFibGUtcGFyYWxsZWwtZGVwbG95bWVudHM6IHRydWUnLFxuICAgICAgICAnYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICBiZWZvcmUtYWxsOicsXG4gICAgICAgICcgICAgLSBidWlsZGVyOiBjdXN0b20nLFxuICAgICAgICAnICAgICAgY29tbWFuZHM6JyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gY2knLFxuICAgICAgICAnICAgICAgICAtIG5wbSBydW4gYnVpbGQnLFxuICAgICAgICAnICAgICAgICAtIG5weCBAY2FwLWpzL2Nkcy10eXBlciBcIipcIiAtLW91dHB1dERpcmVjdG9yeSBnZW4vc3J2L0BjZHMtbW9kZWxzJyxcbiAgICAgICAgJ21vZHVsZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1zcnZgLFxuICAgICAgICAnICAgIHR5cGU6IG5vZGVqcycsXG4gICAgICAgICcgICAgcGF0aDogZ2VuL3NydicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICAgIHJlYWRpbmVzcy1oZWFsdGgtY2hlY2stdHlwZTogaHR0cCcsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLWh0dHAtZW5kcG9pbnQ6IC9oZWFsdGgnLFxuICAgICAgICAnICAgIGJ1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkZXI6IG5wbScsXG4gICAgICAgICcgICAgcHJvdmlkZXM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogc3J2LWFwaScsXG4gICAgICAgICcgICAgICAgIHByb3BlcnRpZXM6JyxcbiAgICAgICAgJyAgICAgICAgICBzcnYtdXJsOiAke2RlZmF1bHQtdXJsfScsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25zYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLmFwcGxpY2F0aW9uLmNvbnRlbnQnLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBzZXJ2aWNlLWtleTonLFxuICAgICAgICBgICAgICAgICAgICAgbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBjb250ZW50LXRhcmdldDogdHJ1ZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29udGVudDonLFxuICAgICAgICAnICAgICAgICBpbnN0YW5jZTonLFxuICAgICAgICAnICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogT0F1dGgyVXNlclRva2VuRXhjaGFuZ2UnLFxuICAgICAgICBgICAgICAgICAgICAgICBOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1hcHAtc3J2YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlSW5zdGFuY2VOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICBgICAgICAgICAgICAgICBUb2tlblNlcnZpY2VLZXlOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWEta2V5YCxcbiAgICAgICAgJyAgICAgICAgICAgICAgVVJMOiB+e3Nydi1hcGkvc3J2LXVybH0nLFxuICAgICAgICBgICAgICAgICAgICAgICBzYXAuY2xvdWQuc2VydmljZTogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICcgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBuby1zb3VyY2U6IHRydWUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiLWRlcGxveWVyYCxcbiAgICAgICAgJyAgICB0eXBlOiBoZGInLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9kYicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICdyZXNvdXJjZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBwYXRoOiAuL3hzLXNlY3VyaXR5Lmpzb24nLFxuICAgICAgICAnICAgICAgc2VydmljZTogeHN1YWEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBhcHBsaWNhdGlvbicsXG4gICAgICAgICcgICAgICBjb25maWc6JyxcbiAgICAgICAgJyAgICAgICAgdGVuYW50LW1vZGU6IGRlZGljYXRlZCcsXG4gICAgICAgIGAgICAgICAgIHhzYXBwbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX1gLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWNvbm5lY3Rpdml0eWAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGNvbm5lY3Rpdml0eScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIEhUTUw1UnVudGltZV9lbmFibGVkOiB0cnVlJyxcbiAgICAgICAgJyAgICAgICAgaW5pdF9kYXRhOicsXG4gICAgICAgICcgICAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgICAtIEF1dGhlbnRpY2F0aW9uOiBOb0F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBOYW1lOiB1aTUnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFByb3h5VHlwZTogSW50ZXJuZXQnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFR5cGU6IEhUVFAnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFVSTDogaHR0cHM6Ly91aTUuc2FwLmNvbScsXG4gICAgICAgICcgICAgICAgICAgICBleGlzdGluZ19kZXN0aW5hdGlvbnNfcG9saWN5OiB1cGRhdGUnLFxuICAgICAgICAnICAgICAgICB2ZXJzaW9uOiAxLjAuMCcsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBkZXN0aW5hdGlvbicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLnhzLmhkaS1jb250YWluZXInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGhhbmEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBoZGktc2hhcmVkJyxcbiAgICAgICAgJyAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICBoZGktc2VydmljZS1uYW1lOiAke3NlcnZpY2UtbmFtZX0nLFxuICAgICAgXSxcbiAgICAgICd4cy1zZWN1cml0eS5qc29uJzogWyd7JywgJyAgXCJzY29wZXNcIjogW10sJywgJyAgXCJhdHRyaWJ1dGVzXCI6IFtdLCcsICcgIFwicm9sZS10ZW1wbGF0ZXNcIjogW10nLCAnfSddLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGBzcnZgIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBgc3J2YCBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVTcnZUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhcnQgaW5kZXgudHNcbiAgICAgICdzcnYvaW5kZXguY2RzJzogW2B1c2luZyBmcm9tICcuL2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMSc7YF0sXG4gICAgICAvLyBFbmQgaW5kZXgudHNcblxuICAgICAgLy8gU3RhcnQgRW50aXR5IGhhbmRsZXJcbiAgICAgIFtgc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL2hhbmRsZXIvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyLnRzYF06IFtcbiAgICAgICAgYGltcG9ydCB7XG4gICAgICAgICAgQWZ0ZXJSZWFkLFxuICAgICAgICAgIEVudGl0eUhhbmRsZXIsXG4gICAgICAgICAgSW5qZWN0LFxuICAgICAgICAgIFJlcSxcbiAgICAgICAgICBSZXN1bHRzLFxuICAgICAgICAgIFNlcnZpY2UsXG4gICAgICAgICAgQ0RTX0RJU1BBVENIRVIsXG4gICAgICAgICAgdHlwZSBUeXBlZFJlcXVlc3QsXG4gICAgICAgICAgVXNlLFxuICAgICAgICB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnI2Nkcy1tb2RlbHMvU2VydmljZUEnO2AsXG4gICAgICAgIGBpbXBvcnQgeyBNaWRkbGV3YXJlQWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9NaWRkbGV3YXJlQWZ0ZXJSZWFkJztgLFxuICAgICAgICBgaW1wb3J0IHsgTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9NaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0nO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQEVudGl0eUhhbmRsZXIoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pYCxcbiAgICAgICAgYEBVc2UoTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9KWAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyIHtgLFxuICAgICAgICBgICBASW5qZWN0KENEU19ESVNQQVRDSEVSLlNSVikgcHJpdmF0ZSByZWFkb25seSBzcnY6IFNlcnZpY2U7YCxcbiAgICAgICAgYCAgLy8gQE9uUmVhZCwgQEJlZm9yZVJlYWQsIEBBZnRlclJlYWQsIEBPblVwZGF0ZSAuLi5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYCAgQEFmdGVyUmVhZCgpYCxcbiAgICAgICAgYCAgQFVzZShNaWRkbGV3YXJlQWZ0ZXJSZWFkKWAsXG4gICAgICAgIGAgIHB1YmxpYyBhc3luYyBhZnRlclJlYWQoQFJlc3VsdHMoKSByZXN1bHRzOiAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSwgQFJlcSgpIHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9Pik6IFByb21pc2U8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKHJlcSk7YCxcbiAgICAgICAgYCAgICByZXR1cm4gcmVzdWx0cztgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZFxuXG4gICAgICAvLyBTdGFydCBVbmJvdW5kQWN0aW9uc0hhbmRsZXJcbiAgICAgICdzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvaGFuZGxlci9VbmJvdW5kQWN0aW9uc0hhbmRsZXIudHMnOiBbXG4gICAgICAgIGBpbXBvcnQgeyBJbmplY3QsIFNlcnZpY2UsIENEU19ESVNQQVRDSEVSLCBVbmJvdW5kQWN0aW9ucyB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYEBVbmJvdW5kQWN0aW9ucygpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBVbmJvdW5kQWN0aW9uc0hhbmRsZXIge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2U6IFNlcnZpY2U7YCxcbiAgICAgICAgYCAgLy8gQE9uRXJyb3IsIEBPbkV2ZW50LCBAT25BY3Rpb24sIEBPbkZ1bmN0aW9uYCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBVbmJvdW5kQWN0aW9uc0hhbmRsZXJcblxuICAgICAgLy8gU3RhcnQgc2VydmljZS0xLmNkc1xuICAgICAgJ3Nydi9jb250cm9sbGVyL3NlcnZpY2UtMS9zZXJ2aWNlLTEuY2RzJzogW1xuICAgICAgICBgdXNpbmcgeyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0gYXMgQmFzZX0gZnJvbSAnLi4vLi4vLi4vZGIvc2NoZW1hJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYHNlcnZpY2UgU2VydmljZUEge2AsXG4gICAgICAgIGAgICBAcmVhZG9ubHlgLFxuICAgICAgICBgICAgZW50aXR5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IGFzIHByb2plY3Rpb24gb24gQmFzZS4ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfTtgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIHNlcnZpY2UtMS5jZHNcblxuICAgICAgLy8gU3RhcnQgc2VydmljZS0xLnRzXG4gICAgICAnc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMS50cyc6IFtcbiAgICAgICAgYGltcG9ydCB7IENEU0Rpc3BhdGNoZXIgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlci8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXInO2AsXG4gICAgICAgIGBpbXBvcnQgeyBVbmJvdW5kQWN0aW9uc0hhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXIvVW5ib3VuZEFjdGlvbnNIYW5kbGVyJztgLFxuICAgICAgICAnJyxcbiAgICAgICAgYGV4cG9ydCA9IG5ldyBDRFNEaXNwYXRjaGVyKFske3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIsIFVuYm91bmRBY3Rpb25zSGFuZGxlcl0pLmluaXRpYWxpemUoKTtgLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBzZXJ2aWNlLTEudHNcblxuICAgICAgLy8gU3RhcnQgTWlkZGxld2FyZVxuICAgICAgW2BzcnYvbWlkZGxld2FyZS9NaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0udHNgXTogW1xuICAgICAgICBgaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlSW1wbCwgTmV4dE1pZGRsZXdhcmUsIFR5cGVkUmVxdWVzdCB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHR5cGUgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gaW1wbGVtZW50cyBNaWRkbGV3YXJlSW1wbCB7YCxcbiAgICAgICAgYCAgcHVibGljIGFzeW5jIHVzZShyZXE6IFR5cGVkUmVxdWVzdDwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4sIG5leHQ6IE5leHRNaWRkbGV3YXJlKTogUHJvbWlzZTx2b2lkPiB7YCxcbiAgICAgICAgYCAgICBjb25zb2xlLmxvZygnTWlkZGxld2FyZSBlbnRpdHkgMSA6IEVYRUNVVEVEJyk7YCxcbiAgICAgICAgYCAgICBhd2FpdCBuZXh0KCk7YCxcbiAgICAgICAgYCAgfWAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgTWlkZGxld2FyZVxuXG4gICAgICAvLyBTdGFydCBNaWRkbGV3YXJlQWZ0ZXJSZWFkXG4gICAgICAnc3J2L21pZGRsZXdhcmUvTWlkZGxld2FyZUFmdGVyUmVhZC50cyc6IFtcbiAgICAgICAgYGltcG9ydCB0eXBlIHsgTWlkZGxld2FyZUltcGwsIE5leHRNaWRkbGV3YXJlLCBUeXBlZFJlcXVlc3QgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB0eXBlIHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgTWlkZGxld2FyZUFmdGVyUmVhZCBpbXBsZW1lbnRzIE1pZGRsZXdhcmVJbXBsIHtgLFxuICAgICAgICBgICBwdWJsaWMgYXN5bmMgdXNlKHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiwgbmV4dDogTmV4dE1pZGRsZXdhcmUpOiBQcm9taXNlPHZvaWQ+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlIGVudGl0eSAxIDogRVhFQ1VURUQnKTtgLFxuICAgICAgICBgICAgIGF3YWl0IG5leHQoKTtgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBNaWRkbGV3YXJlQWZ0ZXJSZWFkXG5cbiAgICAgIC8vIFN0YXJ0IFJlcG9zaXRvcnlcbiAgICAgIFtgc3J2L3JlcG9zaXRvcnkvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5LnRzYF06IFtcbiAgICAgICAgYGltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLXJlcG9zaXRvcnknO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBAUmVwb3NpdG9yeSgpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4ge2AsXG4gICAgICAgIGAgIGNvbnN0cnVjdG9yKCkge2AsXG4gICAgICAgIGAgICAgc3VwZXIoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgICAvLyAuLi4gZGVmaW5lIGN1c3RvbSBDRFMtUUwgYWN0aW9ucyBpZiBCYXNlUmVwb3NpdG9yeSBvbmVzIGFyZSBub3Qgc2F0aXNmeWluZyB5b3VyIG5lZWRzICFgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFJlcG9zaXRvcnlcblxuICAgICAgLy8gU3RhcnQgU2VydmljZVxuICAgICAgW2BzcnYvc2VydmljZS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2UudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHsgSW5qZWN0LCBTZXJ2aWNlLCBTZXJ2aWNlTG9naWMsIENEU19ESVNQQVRDSEVSIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnknO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQFNlcnZpY2VMb2dpYygpYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2Uge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNydjogU2VydmljZTtgLFxuICAgICAgICBgICBASW5qZWN0KCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSkgcHJpdmF0ZSByZWFkb25seSAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVNlcnZpY2U6ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeTtgLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFNlcnZpY2VcblxuICAgICAgLy8gU3RhcnQgY29uc3RhbnRzLnRzXG4gICAgICAnc3J2L3V0aWwvY29uc3RhbnRzL2NvbnN0YW50cy50cyc6IFtcbiAgICAgICAgYGNvbnN0IENvbnN0YW50cyA9IHtgLFxuICAgICAgICBgICAvLyBFeGFtcGxlYCxcbiAgICAgICAgYCAgQ09OU1RBTlRfMToge2AsXG4gICAgICAgIGAgICAgUFJPUF9DT05TVEFOVF8xOiAnU09NRVRISU5HJyxgLFxuICAgICAgICBgICB9LGAsXG4gICAgICAgIGB9O2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzO2AsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIGNvbnN0YW50cy50c1xuXG4gICAgICAvLyBTdGFydCB1dGlsLnRzXG4gICAgICAnc3J2L3V0aWwvaGVscGVycy91dGlsLnRzJzogW1xuICAgICAgICBgY29uc3QgVXRpbCA9IHtgLFxuICAgICAgICBgICAvLyBFeGFtcGxlYCxcbiAgICAgICAgYCAgYUhlbHBlckZ1bmN0aW9uKCkge2AsXG4gICAgICAgIGAgICAgcmV0dXJuIDE7YCxcbiAgICAgICAgYCAgfSxgLFxuICAgICAgICBgfTtgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBkZWZhdWx0IFV0aWw7YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgdXRpbC50c1xuXG4gICAgICAvLyBTdGFydCB0eXBlcy50c1xuICAgICAgJ3Nydi91dGlsL3R5cGVzL3R5cGVzLnRzJzogW2AvLyBFeGFtcGxlYCwgYGV4cG9ydCB0eXBlIEFUeXBlID0gc3RyaW5nO2BdLFxuICAgICAgLy8gRW5kIHR5cGVzLnRzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgZGIgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGRiIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkYi9zY2hlbWEuY2RzJzogW1xuICAgICAgICBcInVzaW5nIHsgbWFuYWdlZCB9IGZyb20gJ0BzYXAvY2RzL2NvbW1vbic7XCIsXG4gICAgICAgICcnLFxuICAgICAgICBgbmFtZXNwYWNlICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX07YCxcbiAgICAgICAgJycsXG4gICAgICAgIGBlbnRpdHkgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gOiBtYW5hZ2VkIHtgLFxuICAgICAgICAnICBrZXkgSUQ6IEludGVnZXI7JyxcbiAgICAgICAgJyAgZGVzY3I6IGxvY2FsaXplZCBTdHJpbmcoMTExKTsnLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGRhdGEgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGRhdGEgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYHRlc3QvZGF0YS8ke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9LSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LmNzdmA7XG4gICAgY29uc3QgZmlsZVBhdGhUZXh0cyA9IGB0ZXN0L2RhdGEvJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfS0ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS50ZXh0cy5jc3ZgO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFtmaWxlUGF0aF06IFtcbiAgICAgICAgJ0lELGNyZWF0ZWRBdCxjcmVhdGVkQnksbW9kaWZpZWRBdCxtb2RpZmllZEJ5LGRlc2NyJyxcbiAgICAgICAgJzEsLCwsLERlc2NyaXB0aW9uIDEnLFxuICAgICAgICAnMiwsLCwsRGVzY3JpcHRpb24gMicsXG4gICAgICAgICczLCwsLCxEZXNjcmlwdGlvbiAzJyxcbiAgICAgIF0sXG4gICAgICBbZmlsZVBhdGhUZXh0c106IFsnbG9jYWxlLElELGRlc2NyJ10sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlcyBmb3IgdGhlIHNwZWNpZmllZCBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZXMgVGhlIHRlbXBsYXRlcyB0byBjcmVhdGUuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlVGVtcGxhdGVzKHRlbXBsYXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwYXRoIGluIHRlbXBsYXRlcykge1xuICAgICAgaWYgKHRlbXBsYXRlc1twYXRoXSkge1xuICAgICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHBhdGgsIHtcbiAgICAgICAgICBjb250ZW50czogdGVtcGxhdGVzW3BhdGhdLmpvaW4oJ1xcbicpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVyJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVyJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAY2FwLWpzL2Nkcy10eXBlcyddLk5BTUV9QCR7Y29uc3RhbnRzWydAY2FwLWpzL2Nkcy10eXBlcyddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMtZGsnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC9jZHMtZGsnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAvY2RzLWxzcCddLk5BTUV9QCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1sc3AnXS5WRVJTSU9OfWAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlckBeMy4yLjcnLFxuICAgICAgYCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSddLk5BTUV9QCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC9jZHMnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAveHNzZWMnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC94c3NlYyddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6ICdjZHMtc2VydmUgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdzdGFydDpsb2NhbCc6ICdjZHMtdHMgc2VydmUnLFxuICAgICAgd2F0Y2g6ICdjZHMtdHMgd2F0Y2gnLFxuICAgICAgJ2J1aWxkOmNkcyc6ICdjZHMtdHMgYnVpbGQgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdidWlsZDpjZHM6bWVzc2FnZSc6ICdlY2hvIFwiQnVpbGQgQ0RTIC4uLlwiJyxcbiAgICAgICdidWlsZDp0cyc6ICd0c2MnLFxuICAgICAgJ2J1aWxkOnRzOm1lc3NhZ2UnOiAnZWNobyBcIlRyYW5zcGlsZSBUUyA9PiBKUyAuLi5cIicsXG4gICAgICAnYnVpbGQ6c3J2OmNsZWFuOnRzJzogJ2ZpbmQgZ2VuL3Nydi9zcnYgLXR5cGUgZiAtbmFtZSBcIioudHNcIiAtZGVsZXRlJyxcbiAgICAgICdidWlsZDpzcnY6Y2xlYW46dHM6bWVzc2FnZSc6ICdlY2hvIFwiQ2xlYW4gVFMgZmlsZXMgZnJvbSBzcnYgZm9sZGVyIC4uLlwiJyxcbiAgICAgIGJ1aWxkOlxuICAgICAgICAncnVuLXMgYnVpbGQ6Y2RzOm1lc3NhZ2UgYnVpbGQ6Y2RzIGJ1aWxkOnRzOm1lc3NhZ2UgYnVpbGQ6dHMgYnVpbGQ6c3J2OmNsZWFuOnRzOm1lc3NhZ2UgYnVpbGQ6c3J2OmNsZWFuOnRzJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBpbXBvcnRzOiB7XG4gICAgICAgICcjY2RzLW1vZGVscy8qJzogJy4vQGNkcy1tb2RlbHMvKi9pbmRleC5qcycsXG4gICAgICAgICcjZGlzcGF0Y2hlcic6ICcuL0BkaXNwYXRjaGVyL2luZGV4LmpzJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkRGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZVNydlRlbXBsYXRlcyk7XG4gIH1cbn1cbiJdfQ==
