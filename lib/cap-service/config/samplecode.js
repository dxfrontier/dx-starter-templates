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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFvQztBQUVwQyxxQ0FBK0Q7QUFFL0Qsb0RBQWlEO0FBRWpEOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSwyQkFBb0I7SUFHbEUsWUFBWSxPQUEwQixFQUFFLE9BQWlDO1FBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywyQkFBMkI7UUFDdkMsT0FBTztZQUNMLGFBQWEsRUFBRTtnQkFDYixHQUFHO2dCQUNILGlCQUFpQjtnQkFDakIsd0JBQXdCO2dCQUN4QixpQkFBaUI7Z0JBQ2pCLDBCQUEwQjtnQkFDMUIsU0FBUztnQkFDVCxRQUFRO2dCQUNSLHVCQUF1QjtnQkFDdkIsaUJBQWlCO2dCQUNqQix5QkFBeUI7Z0JBQ3pCLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZix5QkFBeUI7Z0JBQ3pCLGlDQUFpQztnQkFDakMscUNBQXFDO2dCQUNyQyxTQUFTO2dCQUNULE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixhQUFhO2dCQUNiLDhCQUE4QjtnQkFDOUIsTUFBTTtnQkFDTixZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIsTUFBTTtnQkFDTixpQkFBaUI7Z0JBQ2pCLCtCQUErQjtnQkFDL0IsTUFBTTtnQkFDTixZQUFZO2dCQUNaLHVDQUF1QztnQkFDdkMsTUFBTTtnQkFDTixhQUFhO2dCQUNiLGlDQUFpQztnQkFDakMsS0FBSztnQkFDTCxHQUFHO2FBQ0o7WUFDRCxtQkFBbUIsRUFBRTtnQkFDbkIsR0FBRztnQkFDSCwwQkFBMEI7Z0JBQzFCLDZCQUE2QjtnQkFDN0IsZ0NBQWdDO2dCQUNoQyxpQ0FBaUM7Z0JBQ2pDLHFD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ekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN4RCxDQUFDOztBQWhqQkgsZ0VBaWpCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ2FwU2VydmljZVByb2plY3QsIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4uLy4vcHJvamVjdCc7XG5pbXBvcnQgeyBCYXNlUHJvamVjdCwgU2FtcGxlQ29kZUNvbmZpZ0Jhc2UgfSBmcm9tICcuLi8uLi9iYXNlJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi8uLi91dGlsL2NvbnN0YW50cyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTYW1wbGVDb2RlQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIFNhbXBsZUNvZGVDb25maWdCYXNlIHtcbiAgcHJpdmF0ZSBvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogQ2FwU2VydmljZVByb2plY3QsIG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgcm9vdCBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgcm9vdCBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVSb290VGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuY2RzcmMuanNvbic6IFtcbiAgICAgICAgJ3snLFxuICAgICAgICAnICBcInJlcXVpcmVzXCI6IHsnLFxuICAgICAgICAnICAgIFwiW2RldmVsb3BtZW50XVwiOiB7JyxcbiAgICAgICAgJyAgICAgIFwiYXV0aFwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwibW9ja2VkXCInLFxuICAgICAgICAnICAgICAgfScsXG4gICAgICAgICcgICAgfSwnLFxuICAgICAgICAnICAgIFwiW3Byb2R1Y3Rpb25dXCI6IHsnLFxuICAgICAgICAnICAgICAgXCJhdXRoXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJ4c3VhYVwiJyxcbiAgICAgICAgJyAgICAgIH0sJyxcbiAgICAgICAgJyAgICAgIFwiZGJcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcImhhbmFcIiwnLFxuICAgICAgICAnICAgICAgICBcImltcGxcIjogXCJAY2FwLWpzL2hhbmFcIiwnLFxuICAgICAgICAnICAgICAgICBcImRlcGxveS1mb3JtYXRcIjogXCJoZGJ0YWJsZVwiJyxcbiAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAnICAgIH0nLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiaTE4blwiOiB7JyxcbiAgICAgICAgJyAgICBcImRlZmF1bHRfbGFuZ3VhZ2VcIjogXCJlblwiJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImxvZ1wiOiB7JyxcbiAgICAgICAgJyAgICBcInNlcnZpY2VcIjogdHJ1ZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJmZWF0dXJlc1wiOiB7JyxcbiAgICAgICAgJyAgICBcInByZXNlcnZlX2NvbXB1dGVkXCI6IHRydWUnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwic3FsXCI6IHsnLFxuICAgICAgICAnICAgIFwibmF0aXZlX2hhbmFfYXNzb2NpYXRpb25zXCI6IGZhbHNlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImhhbmFcIjogeycsXG4gICAgICAgICcgICAgXCJkZXBsb3ktZm9ybWF0XCI6IFwiaGRidGFibGVcIicsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgICAgJy5jZHNwcmV0dGllci5qc29uJzogW1xuICAgICAgICAneycsXG4gICAgICAgICcgIFwiYWxpZ25BZnRlcktleVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25QcmVBbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Qb3N0QW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29sb25zSW5Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25WYWx1ZXNJbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvbnNBbmRGdW5jdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uTmFtZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uUmV0dXJuc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luRW50aXRpZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJblNlbGVjdEl0ZW1zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5Vc2luZ1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FeHByZXNzaW9uc0FuZENvbmRpdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXhwckFuZENvbmRXaXRoaW5CbG9ja1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25UeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db2xvbnNCZWZvcmVUeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FcXVhbHNBZnRlclR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblR5cGVzV2l0aGluQmxvY2tcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29tcG9zaXRpb25TdHJ1Y3RUb1JpZ2h0XCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJjcWxLZXl3b3JkQ2FwaXRhbGl6YXRpb25cIjogXCJsb3dlclwiLCcsXG4gICAgICAgICcgIFwia2VlcFByZUFubm90YXRpb25zSW5PcmlnaW5hbExpbmVcIjogXCJrZWVwTGluZVwiLCcsXG4gICAgICAgICcgIFwia2VlcFBvc3RBbm5vdGF0aW9uc0luT3JpZ2luYWxMaW5lXCI6IFwia2VlcExpbmVcIiwnLFxuICAgICAgICAnICBcImtlZXBFbXB0eUJyYWNrZXRzVG9nZXRoZXJcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImtlZXBTaW5nbGVMaW5lZEJsb2Nrc1RvZ2V0aGVyXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJrZWVwT3JpZ2luYWxFbXB0eUxpbmVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJtYXhLZWVwRW1wdHlMaW5lc1wiOiAyLCcsXG4gICAgICAgICcgIFwib3BlbmluZ0JyYWNlSW5OZXdMaW5lXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwic2VsZWN0SW5OZXdMaW5lXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ0YWJTaXplXCI6IDIsJyxcbiAgICAgICAgJyAgXCJmaW5hbE5ld2xpbmVcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImZvcm1hdERvY0NvbW1lbnRzXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwibWF4RG9jQ29tbWVudExpbmVcIjogNjAsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQmVmb3JlQ29sb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VCZWZvcmVDb2xvbkluQW5ub3RhdGlvblwiOiBmYWxzZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbG9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb2xvbkluQW5ub3RhdGlvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29tbWFcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBcm91bmRBbGlnbmVkT3BzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQXJvdW5kQmluYXJ5T3BzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlV2l0aGluQnJhY2tldHNcIjogZmFsc2UnLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgICAgJ2RlZmF1bHQtZW52LmpzJzogW1xuICAgICAgICAnLyoqJyxcbiAgICAgICAgJyAqIEZldGNoZXMgYFZDQVBfU0VSVklDRVNgIGZvciBhIGdpdmVuIENGIGFwcGxpY2F0aW9uIGFuZCB3cml0ZXMgaXQgdG8gYSBmaWxlLicsXG4gICAgICAgICcgKiBJdCB1dGlsaXplcyB0aGUgQ2xvdWQgRm91bmRyeSBDTEkgdG8gZG8gc28uJyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIE1ha2Ugc3VyZSB5b3UgYXJlIGxvZ2dlZCBpbiB2aWEgdGhlIENGIENMSSAoYGNmIGxvZ2luYCkgYmVmb3JlIHJ1bm5pbmcgdGhlJyxcbiAgICAgICAgJyAqIHNjcmlwdC4gWW91IGNhbiBjaGVjayB5b3VyIGxvZ2luIGFuZCB0aGUgb3JnYW5pemF0aW9uIGFuZCBzcGFjZSB5b3UgYXJlJyxcbiAgICAgICAgJyAqIHRhcmdldHRpbmcgYnkgdXNpbmcgYGNmIHRhcmdldGAuJyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIEFsbG93cyBvbi1wcmVtaXNlIGNvbm5lY3Rpdml0eSBwcm94eWluZyBpZiBuZWNlc3NhcnknLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogQGF1dGhvciBTZWJhc3RpYW4gQmxlc3NpbmcnLFxuICAgICAgICAnICovJyxcbiAgICAgICAgXCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XCIsXG4gICAgICAgIFwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcIixcbiAgICAgICAgXCJjb25zdCBleGVjID0gdXRpbC5wcm9taXNpZnkocmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMpO1wiLFxuICAgICAgICBcImNvbnN0IHNwYXduID0gdXRpbC5wcm9taXNpZnkocmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLnNwYXduKTtcIixcbiAgICAgICAgJycsXG4gICAgICAgICdhc3luYyBmdW5jdGlvbiBnZXRBcHBHdWlkKGFwcE5hbWUpIHsnLFxuICAgICAgICAnICBjb25zdCBjbWQgPSBgY2YgYXBwICR7YXBwTmFtZX0gLS1ndWlkYDsnLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhjbWQpOycsXG4gICAgICAgICcgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoY21kKTsnLFxuICAgICAgICAnICBpZiAoc3RkZXJyKSBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTsnLFxuICAgICAgICAnICByZXR1cm4gc3Rkb3V0LnRyaW0oKTsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcnLFxuICAgICAgICAnYXN5bmMgZnVuY3Rpb24gZ2V0RGVmYXVsdEVudihhcHBHdWlkKSB7JyxcbiAgICAgICAgJyAgY29uc3QgY21kID0gYGNmIGN1cmwgXCJ2My9hcHBzLyR7YXBwR3VpZH0vZW52XCJgOycsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGNtZCk7JyxcbiAgICAgICAgJyAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYyhjbWQpOycsXG4gICAgICAgICcgIGlmIChzdGRlcnIpIGNvbnNvbGUubG9nKGBzdGRlcnI6ICR7c3RkZXJyfWApOycsXG4gICAgICAgICcgIHJldHVybiBKU09OLnBhcnNlKHN0ZG91dCkuc3lzdGVtX2Vudl9qc29uOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJycsXG4gICAgICAgICcoYXN5bmMgKCkgPT4geycsXG4gICAgICAgICcgIGNvbnN0IG15QXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTsnLFxuICAgICAgICAnICBjb25zdCBhcHBOYW1lID0gbXlBcmdzWzBdOycsXG4gICAgICAgICcgIGlmICghYXBwTmFtZSkgeycsXG4gICAgICAgIFwiICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgQ0YgYXBwbGljYXRpb24gbmFtZSB0byBmZXRjaCBpdHMgZW52aXJvbm1lbnQhJyk7XCIsXG4gICAgICAgICcgICAgcmV0dXJuOycsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgbGV0IGVudkZpbGVOYW1lID0gbXlBcmdzWzFdOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgZW52RmlsZU5hbWUgPSBlbnZGaWxlTmFtZSA/IGVudkZpbGVOYW1lIDogJ2RlZmF1bHQtZW52Lmpzb24nO1wiLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhgV3JpdGluZyBlbnZpcm9ubWVudCBvZiAke2FwcE5hbWV9IHRvICR7ZW52RmlsZU5hbWV9YCk7JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGNvbnN0IGRlZmF1bHRFbnYgPSBhd2FpdCBnZXREZWZhdWx0RW52KGF3YWl0IGdldEFwcEd1aWQoYXBwTmFtZSkpOycsXG4gICAgICAgICcnLFxuICAgICAgICAnICBsZXQgYlJ1blByb3h5ID0gZmFsc2U7JyxcbiAgICAgICAgJyAgbGV0IHByb3h5UG9ydCA9IG51bGw7JyxcbiAgICAgICAgJyAgbGV0IHByb3h5SG9zdCA9IG51bGw7JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBpZiAoZGVmYXVsdEVudlsnVkNBUF9TRVJWSUNFUyddWydjb25uZWN0aXZpdHknXSkge1wiLFxuICAgICAgICAnICAgIHByb3h5UG9ydCA9IGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X3BvcnQ7JyxcbiAgICAgICAgJyAgICBwcm94eUhvc3QgPSBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9ob3N0OycsXG4gICAgICAgIFwiICAgIGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X2hvc3QgPSAnbG9jYWxob3N0JztcIixcbiAgICAgICAgJyAgICBiUnVuUHJveHkgPSB0cnVlOycsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGZzLndyaXRlRmlsZSgnZGVmYXVsdC1lbnYuanNvbicsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRFbnYsIG51bGwsIDIpLCBhc3luYyAoZXJyKSA9PiB7XCIsXG4gICAgICAgICcgICAgaWYgKGVycikgeycsXG4gICAgICAgICcgICAgICBjb25zb2xlLmVycm9yKGVycik7JyxcbiAgICAgICAgJyAgICB9IGVsc2UgaWYgKGJSdW5Qcm94eSkgeycsXG4gICAgICAgICcgICAgICBjb25zb2xlLmxvZyhgY2Ygc3NoICR7YXBwTmFtZX0gLUwgJHtwcm94eVBvcnR9OiR7cHJveHlIb3N0fToke3Byb3h5UG9ydH1gKTsnLFxuICAgICAgICBcIiAgICAgIGF3YWl0IHNwYXduKCdjZicsIFtgc3NoICR7YXBwTmFtZX0gLUwgJHtwcm94eVBvcnR9OiR7cHJveHlIb3N0fToke3Byb3h5UG9ydH1gXSwge1wiLFxuICAgICAgICAnICAgICAgICBzaGVsbDogdHJ1ZSwnLFxuICAgICAgICBcIiAgICAgICAgc3RkaW86ICdpbmhlcml0JyxcIixcbiAgICAgICAgJyAgICAgIH0pOycsXG4gICAgICAgICcgICAgfScsXG4gICAgICAgICcgIH0pOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgY29uc29sZS5sb2coJ0RvbmUnKTtcIixcbiAgICAgICAgJ30pKCk7JyxcbiAgICAgIF0sXG4gICAgICAnbXRhLnlhbWwnOiBbXG4gICAgICAgIFwiX3NjaGVtYS12ZXJzaW9uOiAnMy4xJ1wiLFxuICAgICAgICBgSUQ6ICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX1gLFxuICAgICAgICAndmVyc2lvbjogMC4wLjEnLFxuICAgICAgICBgZGVzY3JpcHRpb246ICR7dGhpcy5vcHRpb25zLmRlc2NyaXB0aW9ufWAsXG4gICAgICAgICdwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgIGVuYWJsZS1wYXJhbGxlbC1kZXBsb3ltZW50czogdHJ1ZScsXG4gICAgICAgICdidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgIGJlZm9yZS1hbGw6JyxcbiAgICAgICAgJyAgICAtIGJ1aWxkZXI6IGN1c3RvbScsXG4gICAgICAgICcgICAgICBjb21tYW5kczonLFxuICAgICAgICAnICAgICAgICAtIG5wbSBjaScsXG4gICAgICAgICcgICAgICAgIC0gbnBtIHJ1biBidWlsZCcsXG4gICAgICAgICcgICAgICAgIC0gbnB4IEBjYXAtanMvY2RzLXR5cGVyIFwiKlwiIC0tb3V0cHV0RGlyZWN0b3J5IGdlbi9zcnYvQGNkcy1tb2RlbHMnLFxuICAgICAgICAnbW9kdWxlczonLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXNydmAsXG4gICAgICAgICcgICAgdHlwZTogbm9kZWpzJyxcbiAgICAgICAgJyAgICBwYXRoOiBnZW4vc3J2JyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBidWlsZHBhY2s6IG5vZGVqc19idWlsZHBhY2snLFxuICAgICAgICAnICAgICAgcmVhZGluZXNzLWhlYWx0aC1jaGVjay10eXBlOiBodHRwJyxcbiAgICAgICAgJyAgICAgIHJlYWRpbmVzcy1oZWFsdGgtY2hlY2staHR0cC1lbmRwb2ludDogL2hlYWx0aCcsXG4gICAgICAgICcgICAgYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRlcjogbnBtJyxcbiAgICAgICAgJyAgICBwcm92aWRlczonLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBzcnYtYXBpJyxcbiAgICAgICAgJyAgICAgICAgcHJvcGVydGllczonLFxuICAgICAgICAnICAgICAgICAgIHNydi11cmw6ICR7ZGVmYXVsdC11cmx9JyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWNvbm5lY3Rpdml0eWAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbnNgLFxuICAgICAgICAnICAgIHR5cGU6IGNvbS5zYXAuYXBwbGljYXRpb24uY29udGVudCcsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgJyAgICAgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgICAgIHNlcnZpY2Uta2V5OicsXG4gICAgICAgIGAgICAgICAgICAgICBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWEta2V5YCxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogc3J2LWFwaScsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgJyAgICAgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgICAgIGNvbnRlbnQtdGFyZ2V0OiB0cnVlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBjb250ZW50OicsXG4gICAgICAgICcgICAgICAgIGluc3RhbmNlOicsXG4gICAgICAgICcgICAgICAgICAgZGVzdGluYXRpb25zOicsXG4gICAgICAgICcgICAgICAgICAgICAtIEF1dGhlbnRpY2F0aW9uOiBPQXV0aDJVc2VyVG9rZW5FeGNoYW5nZScsXG4gICAgICAgIGAgICAgICAgICAgICAgIE5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWFwcC1zcnZgLFxuICAgICAgICBgICAgICAgICAgICAgICBUb2tlblNlcnZpY2VJbnN0YW5jZU5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgIGAgICAgICAgICAgICAgIFRva2VuU2VydmljZUtleU5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYS1rZXlgLFxuICAgICAgICAnICAgICAgICAgICAgICBVUkw6IH57c3J2LWFwaS9zcnYtdXJsfScsXG4gICAgICAgIGAgICAgICAgICAgICAgIHNhcC5jbG91ZC5zZXJ2aWNlOiAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9YCxcbiAgICAgICAgJyAgICAgICAgICBleGlzdGluZ19kZXN0aW5hdGlvbnNfcG9saWN5OiB1cGRhdGUnLFxuICAgICAgICAnICAgIGJ1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIG5vLXNvdXJjZTogdHJ1ZScsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGItZGVwbG95ZXJgLFxuICAgICAgICAnICAgIHR5cGU6IGhkYicsXG4gICAgICAgICcgICAgcGF0aDogZ2VuL2RiJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBidWlsZHBhY2s6IG5vZGVqc19idWlsZHBhY2snLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgJ3Jlc291cmNlczonLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHBhdGg6IC4veHMtc2VjdXJpdHkuanNvbicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiB4c3VhYScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGFwcGxpY2F0aW9uJyxcbiAgICAgICAgJyAgICAgIGNvbmZpZzonLFxuICAgICAgICAnICAgICAgICB0ZW5hbnQtbW9kZTogZGVkaWNhdGVkJyxcbiAgICAgICAgYCAgICAgICAgeHNhcHBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfWAsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tY29ubmVjdGl2aXR5YCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgc2VydmljZTogY29ubmVjdGl2aXR5JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogbGl0ZScsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBjb25maWc6JyxcbiAgICAgICAgJyAgICAgICAgSFRNTDVSdW50aW1lX2VuYWJsZWQ6IHRydWUnLFxuICAgICAgICAnICAgICAgICBpbml0X2RhdGE6JyxcbiAgICAgICAgJyAgICAgICAgICBpbnN0YW5jZTonLFxuICAgICAgICAnICAgICAgICAgICAgZGVzdGluYXRpb25zOicsXG4gICAgICAgICcgICAgICAgICAgICAgIC0gQXV0aGVudGljYXRpb246IE5vQXV0aGVudGljYXRpb24nLFxuICAgICAgICAnICAgICAgICAgICAgICAgIE5hbWU6IHVpNScsXG4gICAgICAgICcgICAgICAgICAgICAgICAgUHJveHlUeXBlOiBJbnRlcm5ldCcsXG4gICAgICAgICcgICAgICAgICAgICAgICAgVHlwZTogSFRUUCcsXG4gICAgICAgICcgICAgICAgICAgICAgICAgVVJMOiBodHRwczovL3VpNS5zYXAuY29tJyxcbiAgICAgICAgJyAgICAgICAgICAgIGV4aXN0aW5nX2Rlc3RpbmF0aW9uc19wb2xpY3k6IHVwZGF0ZScsXG4gICAgICAgICcgICAgICAgIHZlcnNpb246IDEuMC4wJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGRlc3RpbmF0aW9uJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogbGl0ZScsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICAnICAgIHR5cGU6IGNvbS5zYXAueHMuaGRpLWNvbnRhaW5lcicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgc2VydmljZTogaGFuYScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGhkaS1zaGFyZWQnLFxuICAgICAgICAnICAgIHByb3BlcnRpZXM6JyxcbiAgICAgICAgJyAgICAgIGhkaS1zZXJ2aWNlLW5hbWU6ICR7c2VydmljZS1uYW1lfScsXG4gICAgICBdLFxuICAgICAgJ3hzLXNlY3VyaXR5Lmpzb24nOiBbJ3snLCAnICBcInNjb3Blc1wiOiBbXSwnLCAnICBcImF0dHJpYnV0ZXNcIjogW10sJywgJyAgXCJyb2xlLXRlbXBsYXRlc1wiOiBbXScsICd9J10sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgYHNydmAgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGBzcnZgIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZVNydlRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFydCBpbmRleC50c1xuICAgICAgJ3Nydi9pbmRleC5jZHMnOiBbYHVzaW5nIGZyb20gJy4vY29udHJvbGxlci9zZXJ2aWNlLTEvc2VydmljZS0xJztgXSxcbiAgICAgIC8vIEVuZCBpbmRleC50c1xuXG4gICAgICAvLyBTdGFydCBFbnRpdHkgaGFuZGxlclxuICAgICAgW2BzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvaGFuZGxlci8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHtcbiAgICAgICAgICBBZnRlclJlYWQsXG4gICAgICAgICAgRW50aXR5SGFuZGxlcixcbiAgICAgICAgICBJbmplY3QsXG4gICAgICAgICAgUmVxLFxuICAgICAgICAgIFJlc3VsdHMsXG4gICAgICAgICAgU2VydmljZSxcbiAgICAgICAgICBDRFNfRElTUEFUQ0hFUixcbiAgICAgICAgICB0eXBlIFR5cGVkUmVxdWVzdCxcbiAgICAgICAgICBVc2UsXG4gICAgICAgIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGltcG9ydCB7IE1pZGRsZXdhcmVBZnRlclJlYWQgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL01pZGRsZXdhcmVBZnRlclJlYWQnO2AsXG4gICAgICAgIGBpbXBvcnQgeyBNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL01pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBARW50aXR5SGFuZGxlcigke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSlgLFxuICAgICAgICBgQFVzZShNaWRkbGV3YXJlJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0pYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIge2AsXG4gICAgICAgIGAgIEBJbmplY3QoQ0RTX0RJU1BBVENIRVIuU1JWKSBwcml2YXRlIHJlYWRvbmx5IHNydjogU2VydmljZTtgLFxuICAgICAgICBgICAvLyBAT25SZWFkLCBAQmVmb3JlUmVhZCwgQEFmdGVyUmVhZCwgQE9uVXBkYXRlIC4uLmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgICBAQWZ0ZXJSZWFkKClgLFxuICAgICAgICBgICBAVXNlKE1pZGRsZXdhcmVBZnRlclJlYWQpYCxcbiAgICAgICAgYCAgcHVibGljIGFzeW5jIGFmdGVyUmVhZChAUmVzdWx0cygpIHJlc3VsdHM6ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LCBAUmVxKCkgcmVxOiBUeXBlZFJlcXVlc3Q8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+KTogUHJvbWlzZTwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4ge2AsXG4gICAgICAgIGAgICAgY29uc29sZS5sb2cocmVxKTtgLFxuICAgICAgICBgICAgIHJldHVybiByZXN1bHRzO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kXG5cbiAgICAgIC8vIFN0YXJ0IFVuYm91bmRBY3Rpb25zSGFuZGxlclxuICAgICAgJ3Nydi9jb250cm9sbGVyL3NlcnZpY2UtMS9oYW5kbGVyL1VuYm91bmRBY3Rpb25zSGFuZGxlci50cyc6IFtcbiAgICAgICAgYGltcG9ydCB7IEluamVjdCwgU2VydmljZSwgQ0RTX0RJU1BBVENIRVIsIFVuYm91bmRBY3Rpb25zIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQFVuYm91bmRBY3Rpb25zKClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzIFVuYm91bmRBY3Rpb25zSGFuZGxlciB7YCxcbiAgICAgICAgYCAgQEluamVjdChDRFNfRElTUEFUQ0hFUi5TUlYpIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZTogU2VydmljZTtgLFxuICAgICAgICBgICAvLyBAT25FcnJvciwgQE9uRXZlbnQsIEBPbkFjdGlvbiwgQE9uRnVuY3Rpb25gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIFVuYm91bmRBY3Rpb25zSGFuZGxlclxuXG4gICAgICAvLyBTdGFydCBzZXJ2aWNlLTEuY2RzXG4gICAgICAnc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL3NlcnZpY2UtMS5jZHMnOiBbXG4gICAgICAgIGB1c2luZyB7JHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfSBhcyBCYXNlfSBmcm9tICcuLi8uLi8uLi9kYi9zY2hlbWEnO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgc2VydmljZSBTZXJ2aWNlQSB7YCxcbiAgICAgICAgYCAgIEByZWFkb25seWAsXG4gICAgICAgIGAgICBlbnRpdHkgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gYXMgcHJvamVjdGlvbiBvbiBCYXNlLiR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9O2AsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgc2VydmljZS0xLmNkc1xuXG4gICAgICAvLyBTdGFydCBzZXJ2aWNlLTEudHNcbiAgICAgICdzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvc2VydmljZS0xLnRzJzogW1xuICAgICAgICBgaW1wb3J0IHsgQ0RTRGlzcGF0Y2hlciB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyLyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlcic7YCxcbiAgICAgICAgYGltcG9ydCB7IFVuYm91bmRBY3Rpb25zSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlci9VbmJvdW5kQWN0aW9uc0hhbmRsZXInO2AsXG4gICAgICAgICcnLFxuICAgICAgICBgZXhwb3J0ID0gbmV3IENEU0Rpc3BhdGNoZXIoWyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlciwgVW5ib3VuZEFjdGlvbnNIYW5kbGVyXSkuaW5pdGlhbGl6ZSgpO2AsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIHNlcnZpY2UtMS50c1xuXG4gICAgICAvLyBTdGFydCBNaWRkbGV3YXJlXG4gICAgICBbYHNydi9taWRkbGV3YXJlL01pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS50c2BdOiBbXG4gICAgICAgIGBpbXBvcnQgdHlwZSB7IE1pZGRsZXdhcmVJbXBsLCBOZXh0TWlkZGxld2FyZSwgVHlwZWRSZXF1ZXN0IH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBpbXBvcnQgdHlwZSB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnI2Nkcy1tb2RlbHMvU2VydmljZUEnO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzIE1pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSBpbXBsZW1lbnRzIE1pZGRsZXdhcmVJbXBsIHtgLFxuICAgICAgICBgICBwdWJsaWMgYXN5bmMgdXNlKHJlcTogVHlwZWRSZXF1ZXN0PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiwgbmV4dDogTmV4dE1pZGRsZXdhcmUpOiBQcm9taXNlPHZvaWQ+IHtgLFxuICAgICAgICBgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlIGVudGl0eSAxIDogRVhFQ1VURUQnKTtgLFxuICAgICAgICBgICAgIGF3YWl0IG5leHQoKTtgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBNaWRkbGV3YXJlXG5cbiAgICAgIC8vIFN0YXJ0IE1pZGRsZXdhcmVBZnRlclJlYWRcbiAgICAgICdzcnYvbWlkZGxld2FyZS9NaWRkbGV3YXJlQWZ0ZXJSZWFkLnRzJzogW1xuICAgICAgICBgaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlSW1wbCwgTmV4dE1pZGRsZXdhcmUsIFR5cGVkUmVxdWVzdCB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHR5cGUgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBjbGFzcyBNaWRkbGV3YXJlQWZ0ZXJSZWFkIGltcGxlbWVudHMgTWlkZGxld2FyZUltcGwge2AsXG4gICAgICAgIGAgIHB1YmxpYyBhc3luYyB1c2UocmVxOiBUeXBlZFJlcXVlc3Q8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+LCBuZXh0OiBOZXh0TWlkZGxld2FyZSk6IFByb21pc2U8dm9pZD4ge2AsXG4gICAgICAgIGAgICAgY29uc29sZS5sb2coJ01pZGRsZXdhcmUgZW50aXR5IDEgOiBFWEVDVVRFRCcpO2AsXG4gICAgICAgIGAgICAgYXdhaXQgbmV4dCgpO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIE1pZGRsZXdhcmVBZnRlclJlYWRcblxuICAgICAgLy8gU3RhcnQgUmVwb3NpdG9yeVxuICAgICAgW2BzcnYvcmVwb3NpdG9yeS8ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkudHNgXTogW1xuICAgICAgICBgaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBpbXBvcnQgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYEBSZXBvc2l0b3J5KClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiB7YCxcbiAgICAgICAgYCAgY29uc3RydWN0b3IoKSB7YCxcbiAgICAgICAgYCAgICBzdXBlcigke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSk7YCxcbiAgICAgICAgYCAgfWAsXG4gICAgICAgIGAgIC8vIC4uLiBkZWZpbmUgY3VzdG9tIENEUy1RTCBhY3Rpb25zIGlmIEJhc2VSZXBvc2l0b3J5IG9uZXMgYXJlIG5vdCBzYXRpc2Z5aW5nIHlvdXIgbmVlZHMgIWAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgUmVwb3NpdG9yeVxuXG4gICAgICAvLyBTdGFydCBTZXJ2aWNlXG4gICAgICBbYHNydi9zZXJ2aWNlLyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZS50c2BdOiBbXG4gICAgICAgIGBpbXBvcnQgeyBJbmplY3QsIFNlcnZpY2UsIFNlcnZpY2VMb2dpYywgQ0RTX0RJU1BBVENIRVIgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBpbXBvcnQgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3J5LyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBAU2VydmljZUxvZ2ljKClgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZSB7YCxcbiAgICAgICAgYCAgQEluamVjdChDRFNfRElTUEFUQ0hFUi5TUlYpIHByaXZhdGUgcmVhZG9ubHkgc3J2OiBTZXJ2aWNlO2AsXG4gICAgICAgIGAgIEBJbmplY3QoJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5KSBwcml2YXRlIHJlYWRvbmx5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9U2VydmljZTogJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5O2AsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgU2VydmljZVxuXG4gICAgICAvLyBTdGFydCBjb25zdGFudHMudHNcbiAgICAgICdzcnYvdXRpbC9jb25zdGFudHMvY29uc3RhbnRzLnRzJzogW1xuICAgICAgICBgY29uc3QgQ29uc3RhbnRzID0ge2AsXG4gICAgICAgIGAgIC8vIEV4YW1wbGVgLFxuICAgICAgICBgICBDT05TVEFOVF8xOiB7YCxcbiAgICAgICAgYCAgICBQUk9QX0NPTlNUQU5UXzE6ICdTT01FVEhJTkcnLGAsXG4gICAgICAgIGAgIH0sYCxcbiAgICAgICAgYH07YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBleHBvcnQgZGVmYXVsdCBDb25zdGFudHM7YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgY29uc3RhbnRzLnRzXG5cbiAgICAgIC8vIFN0YXJ0IHV0aWwudHNcbiAgICAgICdzcnYvdXRpbC9oZWxwZXJzL3V0aWwudHMnOiBbXG4gICAgICAgIGBjb25zdCBVdGlsID0ge2AsXG4gICAgICAgIGAgIC8vIEV4YW1wbGVgLFxuICAgICAgICBgICBhSGVscGVyRnVuY3Rpb24oKSB7YCxcbiAgICAgICAgYCAgICByZXR1cm4gMTtgLFxuICAgICAgICBgICB9LGAsXG4gICAgICAgIGB9O2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGRlZmF1bHQgVXRpbDtgLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCB1dGlsLnRzXG5cbiAgICAgIC8vIFN0YXJ0IHR5cGVzLnRzXG4gICAgICAnc3J2L3V0aWwvdHlwZXMvdHlwZXMudHMnOiBbYC8vIEV4YW1wbGVgLCBgZXhwb3J0IHR5cGUgQVR5cGUgPSBzdHJpbmc7YF0sXG4gICAgICAvLyBFbmQgdHlwZXMudHNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSBkYiBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgZGIgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2RiL3NjaGVtYS5jZHMnOiBbXG4gICAgICAgIFwidXNpbmcgeyBtYW5hZ2VkIH0gZnJvbSAnQHNhcC9jZHMvY29tbW9uJztcIixcbiAgICAgICAgJycsXG4gICAgICAgIGBuYW1lc3BhY2UgJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfTtgLFxuICAgICAgICAnJyxcbiAgICAgICAgYGVudGl0eSAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSA6IG1hbmFnZWQge2AsXG4gICAgICAgICcgIGtleSBJRDogSW50ZWdlcjsnLFxuICAgICAgICAnICBkZXNjcjogbG9jYWxpemVkIFN0cmluZygxMTEpOycsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgZGF0YSBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgZGF0YSBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVEYXRhVGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0uY3N2YDtcbiAgICBjb25zdCBmaWxlUGF0aFRleHRzID0gYHRlc3QvZGF0YS8ke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9LSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LnRleHRzLmNzdmA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgW2ZpbGVQYXRoXTogW1xuICAgICAgICAnSUQsY3JlYXRlZEF0LGNyZWF0ZWRCeSxtb2RpZmllZEF0LG1vZGlmaWVkQnksZGVzY3InLFxuICAgICAgICAnMSwsLCwsRGVzY3JpcHRpb24gMScsXG4gICAgICAgICcyLCwsLCxEZXNjcmlwdGlvbiAyJyxcbiAgICAgICAgJzMsLCwsLERlc2NyaXB0aW9uIDMnLFxuICAgICAgXSxcbiAgICAgIFtmaWxlUGF0aFRleHRzXTogWydsb2NhbGUsSUQsZGVzY3InXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGVzIGZvciB0aGUgc3BlY2lmaWVkIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIHRlbXBsYXRlcyBUaGUgdGVtcGxhdGVzIHRvIGNyZWF0ZS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVUZW1wbGF0ZXModGVtcGxhdGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGVtcGxhdGVzKSB7XG4gICAgICBpZiAodGVtcGxhdGVzW3BhdGhdKSB7XG4gICAgICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgcGF0aCwge1xuICAgICAgICAgIGNvbnRlbnRzOiB0ZW1wbGF0ZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGAke2NvbnN0YW50c1snQGNhcC1qcy9jZHMtdHlwZXInXS5OQU1FfUAke2NvbnN0YW50c1snQGNhcC1qcy9jZHMtdHlwZXInXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVzJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BjYXAtanMvY2RzLXR5cGVzJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1kayddLk5BTUV9QCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1kayddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMtbHNwJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BzYXAvY2RzLWxzcCddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgYCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSddLk5BTUV9QCR7Y29uc3RhbnRzWydAZHhmcm9udGllci9jZHMtdHMtcmVwb3NpdG9yeSddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC9jZHMnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC9jZHMnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAveHNzZWMnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC94c3NlYyddLlZFUlNJT059YCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6ICdjZHMtc2VydmUgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdzdGFydDpsb2NhbCc6ICdjZHMtdHMgc2VydmUnLFxuICAgICAgd2F0Y2g6ICdjZHMtdHMgd2F0Y2gnLFxuICAgICAgJ2J1aWxkOmNkcyc6ICdjZHMtdHMgYnVpbGQgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdidWlsZDpjZHM6bWVzc2FnZSc6ICdlY2hvIFwiQnVpbGQgQ0RTIC4uLlwiJyxcbiAgICAgICdidWlsZDp0cyc6ICd0c2MnLFxuICAgICAgJ2J1aWxkOnRzOm1lc3NhZ2UnOiAnZWNobyBcIlRyYW5zcGlsZSBUUyA9PiBKUyAuLi5cIicsXG4gICAgICAnYnVpbGQ6c3J2OmNsZWFuOnRzJzogJ2ZpbmQgZ2VuL3Nydi9zcnYgLXR5cGUgZiAtbmFtZSBcIioudHNcIiAtZGVsZXRlJyxcbiAgICAgICdidWlsZDpzcnY6Y2xlYW46dHM6bWVzc2FnZSc6ICdlY2hvIFwiQ2xlYW4gVFMgZmlsZXMgZnJvbSBzcnYgZm9sZGVyIC4uLlwiJyxcbiAgICAgIGJ1aWxkOlxuICAgICAgICAncnVuLXMgYnVpbGQ6Y2RzOm1lc3NhZ2UgYnVpbGQ6Y2RzIGJ1aWxkOnRzOm1lc3NhZ2UgYnVpbGQ6dHMgYnVpbGQ6c3J2OmNsZWFuOnRzOm1lc3NhZ2UgYnVpbGQ6c3J2OmNsZWFuOnRzJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBpbXBvcnRzOiB7XG4gICAgICAgICcjY2RzLW1vZGVscy8qJzogJy4vQGNkcy1tb2RlbHMvKi9pbmRleC5qcycsXG4gICAgICAgICcjZGlzcGF0Y2hlcic6ICcuL0BkaXNwYXRjaGVyL2luZGV4LmpzJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkRGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlcyk7XG4gICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXModGhpcy5zYW1wbGVDb2RlRmlsZVNydlRlbXBsYXRlcyk7XG4gIH1cbn1cbiJdfQ==