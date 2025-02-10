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
    }
}
exports.SampleCodeConfigCapService = SampleCodeConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigCapService", version: "0.5.4" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFvQztBQUVwQyxxQ0FBK0Q7QUFFL0Qsb0RBQWlEO0FBRWpEOztHQUVHO0FBQ0gsTUFBYSwwQkFBMkIsU0FBUSwyQkFBb0I7SUFHbEUsWUFBWSxPQUEwQixFQUFFLE9BQWlDO1FBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYywyQkFBMkI7UUFDdkMsT0FBTztZQUNMLG9CQUFvQjtZQUNwQixhQUFhLEVBQUU7Z0JBQ2IsR0FBRztnQkFDSCxpQkFBaUI7Z0JBQ2pCLHdCQUF3QjtnQkFDeEIsaUJBQWlCO2dCQUNqQiwwQkFBMEI7Z0JBQzFCLFNBQVM7Z0JBQ1QsUUFBUTtnQkFDUix1QkFBdUI7Z0JBQ3ZCLGlCQUFpQjtnQkFDakIseUJBQXlCO2dCQUN6QixVQUFVO2dCQUNWLGVBQWU7Z0JBQ2YseUJBQXlCO2dCQUN6QixpQ0FBaUM7Z0JBQ2pDLHFDQUFxQztnQkFDckMsU0FBUztnQkFDVCxPQUFPO2dCQUNQLE1BQU07Z0JBQ04sYUFBYTtnQkFDYiw4QkFBOEI7Z0JBQzlCLE1BQU07Z0JBQ04sWUFBWTtnQkFDWixxQkFBcUI7Z0JBQ3JCLE1BQU07Z0JBQ04saUJBQWlCO2dCQUNqQiwrQkFBK0I7Z0JBQy9CLE1BQU07Z0JBQ04sWUFBWTtnQkFDWix1Q0FBdUM7Z0JBQ3ZDLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixpQ0FBaUM7Z0JBQ2pDLEtBQUs7Z0JBQ0wsR0FBRzthQUNKO1lBQ0Qsa0JBQWtCO1lBRWxCLDBCQUEwQjtZQUMxQixtQkFBbUIsRUFBRTtnQkFDbkIsR0FBRztnQkFDSCwwQkFBMEI7Z0JBQzFCLDZCQUE2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QztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7QUExakJILGdFQTJqQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENhcFNlcnZpY2VQcm9qZWN0LCBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgfSBmcm9tICcuLi8uL3Byb2plY3QnO1xuaW1wb3J0IHsgQmFzZVByb2plY3QsIFNhbXBsZUNvZGVDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBTYW1wbGVDb2RlQ29uZmlnQmFzZSB7XG4gIHByaXZhdGUgb3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IENhcFNlcnZpY2VQcm9qZWN0LCBvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIHJvb3QgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIHJvb3QgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFydCAuY2RzcmMuanNvblxuICAgICAgJy5jZHNyYy5qc29uJzogW1xuICAgICAgICAneycsXG4gICAgICAgICcgIFwicmVxdWlyZXNcIjogeycsXG4gICAgICAgICcgICAgXCJbZGV2ZWxvcG1lbnRdXCI6IHsnLFxuICAgICAgICAnICAgICAgXCJhdXRoXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJtb2NrZWRcIicsXG4gICAgICAgICcgICAgICB9JyxcbiAgICAgICAgJyAgICB9LCcsXG4gICAgICAgICcgICAgXCJbcHJvZHVjdGlvbl1cIjogeycsXG4gICAgICAgICcgICAgICBcImF1dGhcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcInhzdWFhXCInLFxuICAgICAgICAnICAgICAgfSwnLFxuICAgICAgICAnICAgICAgXCJkYlwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwiaGFuYVwiLCcsXG4gICAgICAgICcgICAgICAgIFwiaW1wbFwiOiBcIkBjYXAtanMvaGFuYVwiLCcsXG4gICAgICAgICcgICAgICAgIFwiZGVwbG95LWZvcm1hdFwiOiBcImhkYnRhYmxlXCInLFxuICAgICAgICAnICAgICAgfScsXG4gICAgICAgICcgICAgfScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJpMThuXCI6IHsnLFxuICAgICAgICAnICAgIFwiZGVmYXVsdF9sYW5ndWFnZVwiOiBcImVuXCInLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwibG9nXCI6IHsnLFxuICAgICAgICAnICAgIFwic2VydmljZVwiOiB0cnVlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImZlYXR1cmVzXCI6IHsnLFxuICAgICAgICAnICAgIFwicHJlc2VydmVfY29tcHV0ZWRcIjogdHJ1ZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJzcWxcIjogeycsXG4gICAgICAgICcgICAgXCJuYXRpdmVfaGFuYV9hc3NvY2lhdGlvbnNcIjogZmFsc2UnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiaGFuYVwiOiB7JyxcbiAgICAgICAgJyAgICBcImRlcGxveS1mb3JtYXRcIjogXCJoZGJ0YWJsZVwiJyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgLmNkc3JjLmpzb25cblxuICAgICAgLy8gU3RhcnQgLmNkc3ByZXR0aWVyLmpzb25cbiAgICAgICcuY2RzcHJldHRpZXIuanNvbic6IFtcbiAgICAgICAgJ3snLFxuICAgICAgICAnICBcImFsaWduQWZ0ZXJLZXlcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduUHJlQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduUG9zdEFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbG9uc0luQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVmFsdWVzSW5Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25zQW5kRnVuY3Rpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvbk5hbWVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvblJldHVybnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJbkVudGl0aWVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5TZWxlY3RJdGVtc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luVXNpbmdcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXhwcmVzc2lvbnNBbmRDb25kaXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkV4cHJBbmRDb25kV2l0aGluQmxvY2tcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29sb25zQmVmb3JlVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXF1YWxzQWZ0ZXJUeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25UeXBlc1dpdGhpbkJsb2NrXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbXBvc2l0aW9uU3RydWN0VG9SaWdodFwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiY3FsS2V5d29yZENhcGl0YWxpemF0aW9uXCI6IFwibG93ZXJcIiwnLFxuICAgICAgICAnICBcImtlZXBQcmVBbm5vdGF0aW9uc0luT3JpZ2luYWxMaW5lXCI6IFwia2VlcExpbmVcIiwnLFxuICAgICAgICAnICBcImtlZXBQb3N0QW5ub3RhdGlvbnNJbk9yaWdpbmFsTGluZVwiOiBcImtlZXBMaW5lXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwRW1wdHlCcmFja2V0c1RvZ2V0aGVyXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJrZWVwU2luZ2xlTGluZWRCbG9ja3NUb2dldGhlclwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwia2VlcE9yaWdpbmFsRW1wdHlMaW5lc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwibWF4S2VlcEVtcHR5TGluZXNcIjogMiwnLFxuICAgICAgICAnICBcIm9wZW5pbmdCcmFjZUluTmV3TGluZVwiOiBmYWxzZSwnLFxuICAgICAgICAnICBcInNlbGVjdEluTmV3TGluZVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwidGFiU2l6ZVwiOiAyLCcsXG4gICAgICAgICcgIFwiZmluYWxOZXdsaW5lXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJmb3JtYXREb2NDb21tZW50c1wiOiBmYWxzZSwnLFxuICAgICAgICAnICBcIm1heERvY0NvbW1lbnRMaW5lXCI6IDYwLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUJlZm9yZUNvbG9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQmVmb3JlQ29sb25JbkFubm90YXRpb25cIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb2xvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29sb25JbkFubm90YXRpb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbW1hXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQXJvdW5kQWxpZ25lZE9wc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFyb3VuZEJpbmFyeU9wc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZVdpdGhpbkJyYWNrZXRzXCI6IGZhbHNlJyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCAuY2RzcHJldHRpZXIuanNvblxuXG4gICAgICAvLyBTdGFydCAuZXNsaW50cmMuanNvblxuICAgICAgJ2RlZmF1bHQtZW52LmpzJzogW1xuICAgICAgICAnLyoqJyxcbiAgICAgICAgJyAqIEZldGNoZXMgYFZDQVBfU0VSVklDRVNgIGZvciBhIGdpdmVuIENGIGFwcGxpY2F0aW9uIGFuZCB3cml0ZXMgaXQgdG8gYSBmaWxlLicsXG4gICAgICAgICcgKiBJdCB1dGlsaXplcyB0aGUgQ2xvdWQgRm91bmRyeSBDTEkgdG8gZG8gc28uJyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIE1ha2Ugc3VyZSB5b3UgYXJlIGxvZ2dlZCBpbiB2aWEgdGhlIENGIENMSSAoYGNmIGxvZ2luYCkgYmVmb3JlIHJ1bm5pbmcgdGhlJyxcbiAgICAgICAgJyAqIHNjcmlwdC4gWW91IGNhbiBjaGVjayB5b3VyIGxvZ2luIGFuZCB0aGUgb3JnYW5pemF0aW9uIGFuZCBzcGFjZSB5b3UgYXJlJyxcbiAgICAgICAgJyAqIHRhcmdldHRpbmcgYnkgdXNpbmcgYGNmIHRhcmdldGAuJyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIEFsbG93cyBvbi1wcmVtaXNlIGNvbm5lY3Rpdml0eSBwcm94eWluZyBpZiBuZWNlc3NhcnknLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogQGF1dGhvciBTZWJhc3RpYW4gQmxlc3NpbmcnLFxuICAgICAgICAnICovJyxcbiAgICAgICAgXCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XCIsXG4gICAgICAgIFwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcIixcbiAgICAgICAgXCJjb25zdCBleGVjID0gdXRpbC5wcm9taXNpZnkocmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMpO1wiLFxuICAgICAgICBcImNvbnN0IHNwYXduID0gdXRpbC5wcm9taXNpZnkocmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLnNwYXduKTtcIixcbiAgICAgICAgJycsXG4gICAgICAgICdhc3luYyBmdW5jdGlvbiBnZXRBcHBHdWlkKGFwcE5hbWUpIHsnLFxuICAgICAgICAnICBjb25zdCBjbWQgPSBgY2YgYXBwICR7YXBwTmFtZX0gLS1ndWlkYDsnLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhjbWQpOycsXG4gICAgICAgICcgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoY21kKTsnLFxuICAgICAgICAnICBpZiAoc3RkZXJyKSBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTsnLFxuICAgICAgICAnICByZXR1cm4gc3Rkb3V0LnRyaW0oKTsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcnLFxuICAgICAgICAnYXN5bmMgZnVuY3Rpb24gZ2V0RGVmYXVsdEVudihhcHBHdWlkKSB7JyxcbiAgICAgICAgJyAgY29uc3QgY21kID0gYGNmIGN1cmwgXCJ2My9hcHBzLyR7YXBwR3VpZH0vZW52XCJgOycsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGNtZCk7JyxcbiAgICAgICAgJyAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYyhjbWQpOycsXG4gICAgICAgICcgIGlmIChzdGRlcnIpIGNvbnNvbGUubG9nKGBzdGRlcnI6ICR7c3RkZXJyfWApOycsXG4gICAgICAgICcgIHJldHVybiBKU09OLnBhcnNlKHN0ZG91dCkuc3lzdGVtX2Vudl9qc29uOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJycsXG4gICAgICAgICcoYXN5bmMgKCkgPT4geycsXG4gICAgICAgICcgIGNvbnN0IG15QXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTsnLFxuICAgICAgICAnICBjb25zdCBhcHBOYW1lID0gbXlBcmdzWzBdOycsXG4gICAgICAgICcgIGlmICghYXBwTmFtZSkgeycsXG4gICAgICAgIFwiICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgQ0YgYXBwbGljYXRpb24gbmFtZSB0byBmZXRjaCBpdHMgZW52aXJvbm1lbnQhJyk7XCIsXG4gICAgICAgICcgICAgcmV0dXJuOycsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgbGV0IGVudkZpbGVOYW1lID0gbXlBcmdzWzFdOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgZW52RmlsZU5hbWUgPSBlbnZGaWxlTmFtZSA/IGVudkZpbGVOYW1lIDogJ2RlZmF1bHQtZW52Lmpzb24nO1wiLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhgV3JpdGluZyBlbnZpcm9ubWVudCBvZiAke2FwcE5hbWV9IHRvICR7ZW52RmlsZU5hbWV9YCk7JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGNvbnN0IGRlZmF1bHRFbnYgPSBhd2FpdCBnZXREZWZhdWx0RW52KGF3YWl0IGdldEFwcEd1aWQoYXBwTmFtZSkpOycsXG4gICAgICAgICcnLFxuICAgICAgICAnICBsZXQgYlJ1blByb3h5ID0gZmFsc2U7JyxcbiAgICAgICAgJyAgbGV0IHByb3h5UG9ydCA9IG51bGw7JyxcbiAgICAgICAgJyAgbGV0IHByb3h5SG9zdCA9IG51bGw7JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBpZiAoZGVmYXVsdEVudlsnVkNBUF9TRVJWSUNFUyddWydjb25uZWN0aXZpdHknXSkge1wiLFxuICAgICAgICAnICAgIHByb3h5UG9ydCA9IGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X3BvcnQ7JyxcbiAgICAgICAgJyAgICBwcm94eUhvc3QgPSBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9ob3N0OycsXG4gICAgICAgIFwiICAgIGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X2hvc3QgPSAnbG9jYWxob3N0JztcIixcbiAgICAgICAgJyAgICBiUnVuUHJveHkgPSB0cnVlOycsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGZzLndyaXRlRmlsZSgnZGVmYXVsdC1lbnYuanNvbicsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRFbnYsIG51bGwsIDIpLCBhc3luYyAoZXJyKSA9PiB7XCIsXG4gICAgICAgICcgICAgaWYgKGVycikgeycsXG4gICAgICAgICcgICAgICBjb25zb2xlLmVycm9yKGVycik7JyxcbiAgICAgICAgJyAgICB9IGVsc2UgaWYgKGJSdW5Qcm94eSkgeycsXG4gICAgICAgICcgICAgICBjb25zb2xlLmxvZyhgY2Ygc3NoICR7YXBwTmFtZX0gLUwgJHtwcm94eVBvcnR9OiR7cHJveHlIb3N0fToke3Byb3h5UG9ydH1gKTsnLFxuICAgICAgICBcIiAgICAgIGF3YWl0IHNwYXduKCdjZicsIFtgc3NoICR7YXBwTmFtZX0gLUwgJHtwcm94eVBvcnR9OiR7cHJveHlIb3N0fToke3Byb3h5UG9ydH1gXSwge1wiLFxuICAgICAgICAnICAgICAgICBzaGVsbDogdHJ1ZSwnLFxuICAgICAgICBcIiAgICAgICAgc3RkaW86ICdpbmhlcml0JyxcIixcbiAgICAgICAgJyAgICAgIH0pOycsXG4gICAgICAgICcgICAgfScsXG4gICAgICAgICcgIH0pOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgY29uc29sZS5sb2coJ0RvbmUnKTtcIixcbiAgICAgICAgJ30pKCk7JyxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgLmVzbGludHJjLmpzb25cblxuICAgICAgLy8gU3RhcnQgLmVzbGludHJjLmpzb25cbiAgICAgICdtdGEueWFtbCc6IFtcbiAgICAgICAgXCJfc2NoZW1hLXZlcnNpb246ICczLjEnXCIsXG4gICAgICAgIGBJRDogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICd2ZXJzaW9uOiAwLjAuMScsXG4gICAgICAgIGBkZXNjcmlwdGlvbjogJHt0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb259YCxcbiAgICAgICAgJ3BhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgZW5hYmxlLXBhcmFsbGVsLWRlcGxveW1lbnRzOiB0cnVlJyxcbiAgICAgICAgJ2J1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgYmVmb3JlLWFsbDonLFxuICAgICAgICAnICAgIC0gYnVpbGRlcjogY3VzdG9tJyxcbiAgICAgICAgJyAgICAgIGNvbW1hbmRzOicsXG4gICAgICAgICcgICAgICAgIC0gbnBtIGNpJyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gcnVuIGJ1aWxkJyxcbiAgICAgICAgJyAgICAgICAgLSBucHggQGNhcC1qcy9jZHMtdHlwZXIgXCIqXCIgLS1vdXRwdXREaXJlY3RvcnkgZ2VuL3Nydi9AY2RzLW1vZGVscycsXG4gICAgICAgICdtb2R1bGVzOicsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tc3J2YCxcbiAgICAgICAgJyAgICB0eXBlOiBub2RlanMnLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9zcnYnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkcGFjazogbm9kZWpzX2J1aWxkcGFjaycsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLXR5cGU6IGh0dHAnLFxuICAgICAgICAnICAgICAgcmVhZGluZXNzLWhlYWx0aC1jaGVjay1odHRwLWVuZHBvaW50OiAvaGVhbHRoJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBidWlsZGVyOiBucG0nLFxuICAgICAgICAnICAgIHByb3ZpZGVzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICAnICAgICAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICAgICAgc3J2LXVybDogJHtkZWZhdWx0LXVybH0nLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tY29ubmVjdGl2aXR5YCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uc2AsXG4gICAgICAgICcgICAgdHlwZTogY29tLnNhcC5hcHBsaWNhdGlvbi5jb250ZW50JyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgICAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICAgICAgc2VydmljZS1rZXk6JyxcbiAgICAgICAgYCAgICAgICAgICAgIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYS1rZXlgLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBzcnYtYXBpJyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICAnICAgICAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICAgICAgY29udGVudC10YXJnZXQ6IHRydWUnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGNvbnRlbnQ6JyxcbiAgICAgICAgJyAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICBkZXN0aW5hdGlvbnM6JyxcbiAgICAgICAgJyAgICAgICAgICAgIC0gQXV0aGVudGljYXRpb246IE9BdXRoMlVzZXJUb2tlbkV4Y2hhbmdlJyxcbiAgICAgICAgYCAgICAgICAgICAgICAgTmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tYXBwLXNydmAsXG4gICAgICAgIGAgICAgICAgICAgICAgIFRva2VuU2VydmljZUluc3RhbmNlTmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlS2V5TmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAgICAgICAgIFVSTDogfntzcnYtYXBpL3Nydi11cmx9JyxcbiAgICAgICAgYCAgICAgICAgICAgICAgc2FwLmNsb3VkLnNlcnZpY2U6ICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX1gLFxuICAgICAgICAnICAgICAgICAgIGV4aXN0aW5nX2Rlc3RpbmF0aW9uc19wb2xpY3k6IHVwZGF0ZScsXG4gICAgICAgICcgICAgYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgbm8tc291cmNlOiB0cnVlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYi1kZXBsb3llcmAsXG4gICAgICAgICcgICAgdHlwZTogaGRiJyxcbiAgICAgICAgJyAgICBwYXRoOiBnZW4vZGInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkcGFjazogbm9kZWpzX2J1aWxkcGFjaycsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAncmVzb3VyY2VzOicsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgcGF0aDogLi94cy1zZWN1cml0eS5qc29uJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IHhzdWFhJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogYXBwbGljYXRpb24nLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIHRlbmFudC1tb2RlOiBkZWRpY2F0ZWQnLFxuICAgICAgICBgICAgICAgICB4c2FwcG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9YCxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBjb25uZWN0aXZpdHknLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBsaXRlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGNvbmZpZzonLFxuICAgICAgICAnICAgICAgICBIVE1MNVJ1bnRpbWVfZW5hYmxlZDogdHJ1ZScsXG4gICAgICAgICcgICAgICAgIGluaXRfZGF0YTonLFxuICAgICAgICAnICAgICAgICAgIGluc3RhbmNlOicsXG4gICAgICAgICcgICAgICAgICAgICBkZXN0aW5hdGlvbnM6JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogTm9BdXRoZW50aWNhdGlvbicsXG4gICAgICAgICcgICAgICAgICAgICAgICAgTmFtZTogdWk1JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBQcm94eVR5cGU6IEludGVybmV0JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBUeXBlOiBIVFRQJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBVUkw6IGh0dHBzOi8vdWk1LnNhcC5jb20nLFxuICAgICAgICAnICAgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICAgICAgdmVyc2lvbjogMS4wLjAnLFxuICAgICAgICAnICAgICAgc2VydmljZTogZGVzdGluYXRpb24nLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBsaXRlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgICcgICAgdHlwZTogY29tLnNhcC54cy5oZGktY29udGFpbmVyJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBoYW5hJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogaGRpLXNoYXJlZCcsXG4gICAgICAgICcgICAgcHJvcGVydGllczonLFxuICAgICAgICAnICAgICAgaGRpLXNlcnZpY2UtbmFtZTogJHtzZXJ2aWNlLW5hbWV9JyxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgLmVzbGludHJjLmpzb25cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSBgc3J2YCBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgYHNydmAgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlU3J2VGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YXJ0IGluZGV4LnRzXG4gICAgICAnc3J2L2luZGV4LmNkcyc6IFtgdXNpbmcgZnJvbSAnLi9jb250cm9sbGVyL3NlcnZpY2UtMS9zZXJ2aWNlLTEnO2BdLFxuICAgICAgLy8gRW5kIGluZGV4LnRzXG5cbiAgICAgIC8vIFN0YXJ0IEVudGl0eSBoYW5kbGVyXG4gICAgICBbYHNydi9jb250cm9sbGVyL3NlcnZpY2UtMS9oYW5kbGVyLyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlci50c2BdOiBbXG4gICAgICAgIGBpbXBvcnQge1xuICAgICAgICAgIEFmdGVyUmVhZCxcbiAgICAgICAgICBFbnRpdHlIYW5kbGVyLFxuICAgICAgICAgIEluamVjdCxcbiAgICAgICAgICBSZXEsXG4gICAgICAgICAgUmVzdWx0cyxcbiAgICAgICAgICBTZXJ2aWNlLFxuICAgICAgICAgIENEU19ESVNQQVRDSEVSLFxuICAgICAgICAgIHR5cGUgVHlwZWRSZXF1ZXN0LFxuICAgICAgICAgIFVzZSxcbiAgICAgICAgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBpbXBvcnQgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJyNjZHMtbW9kZWxzL1NlcnZpY2VBJztgLFxuICAgICAgICBgaW1wb3J0IHsgTWlkZGxld2FyZUFmdGVyUmVhZCB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvTWlkZGxld2FyZUFmdGVyUmVhZCc7YCxcbiAgICAgICAgYGltcG9ydCB7IE1pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9JztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYEBFbnRpdHlIYW5kbGVyKCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9KWAsXG4gICAgICAgIGBAVXNlKE1pZGRsZXdhcmUke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSlgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9SGFuZGxlciB7YCxcbiAgICAgICAgYCAgQEluamVjdChDRFNfRElTUEFUQ0hFUi5TUlYpIHByaXZhdGUgcmVhZG9ubHkgc3J2OiBTZXJ2aWNlO2AsXG4gICAgICAgIGAgIC8vIEBPblJlYWQsIEBCZWZvcmVSZWFkLCBAQWZ0ZXJSZWFkLCBAT25VcGRhdGUgLi4uYCxcbiAgICAgICAgYGAsXG4gICAgICAgIGAgIEBBZnRlclJlYWQoKWAsXG4gICAgICAgIGAgIEBVc2UoTWlkZGxld2FyZUFmdGVyUmVhZClgLFxuICAgICAgICBgICBwdWJsaWMgYXN5bmMgYWZ0ZXJSZWFkKEBSZXN1bHRzKCkgcmVzdWx0czogJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0sIEBSZXEoKSByZXE6IFR5cGVkUmVxdWVzdDwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4pOiBQcm9taXNlPCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9PiB7YCxcbiAgICAgICAgYCAgICBjb25zb2xlLmxvZyhyZXEpO2AsXG4gICAgICAgIGAgICAgcmV0dXJuIHJlc3VsdHM7YCxcbiAgICAgICAgYCAgfWAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmRcblxuICAgICAgLy8gU3RhcnQgVW5ib3VuZEFjdGlvbnNIYW5kbGVyXG4gICAgICAnc3J2L2NvbnRyb2xsZXIvc2VydmljZS0xL2hhbmRsZXIvVW5ib3VuZEFjdGlvbnNIYW5kbGVyLnRzJzogW1xuICAgICAgICBgaW1wb3J0IHsgSW5qZWN0LCBTZXJ2aWNlLCBDRFNfRElTUEFUQ0hFUiwgVW5ib3VuZEFjdGlvbnMgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBAVW5ib3VuZEFjdGlvbnMoKWAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgVW5ib3VuZEFjdGlvbnNIYW5kbGVyIHtgLFxuICAgICAgICBgICBASW5qZWN0KENEU19ESVNQQVRDSEVSLlNSVikgcHJpdmF0ZSByZWFkb25seSBzZXJ2aWNlOiBTZXJ2aWNlO2AsXG4gICAgICAgIGAgIC8vIEBPbkVycm9yLCBAT25FdmVudCwgQE9uQWN0aW9uLCBAT25GdW5jdGlvbmAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgVW5ib3VuZEFjdGlvbnNIYW5kbGVyXG5cbiAgICAgIC8vIFN0YXJ0IHNlcnZpY2UtMS5jZHNcbiAgICAgICdzcnYvY29udHJvbGxlci9zZXJ2aWNlLTEvc2VydmljZS0xLmNkcyc6IFtcbiAgICAgICAgYHVzaW5nIHske3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9IGFzIEJhc2V9IGZyb20gJy4uLy4uLy4uL2RiL3NjaGVtYSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBzZXJ2aWNlIFNlcnZpY2VBIHtgLFxuICAgICAgICBgICAgQHJlYWRvbmx5YCxcbiAgICAgICAgYCAgIGVudGl0eSAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSBhcyBwcm9qZWN0aW9uIG9uIEJhc2UuJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX07YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBzZXJ2aWNlLTEuY2RzXG5cbiAgICAgIC8vIFN0YXJ0IHNlcnZpY2UtMS50c1xuICAgICAgJ3Nydi9jb250cm9sbGVyL3NlcnZpY2UtMS9zZXJ2aWNlLTEudHMnOiBbXG4gICAgICAgIGBpbXBvcnQgeyBDRFNEaXNwYXRjaGVyIH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBpbXBvcnQgeyAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfUhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXIvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyJztgLFxuICAgICAgICBgaW1wb3J0IHsgVW5ib3VuZEFjdGlvbnNIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVyL1VuYm91bmRBY3Rpb25zSGFuZGxlcic7YCxcbiAgICAgICAgJycsXG4gICAgICAgIGBleHBvcnQgPSBuZXcgQ0RTRGlzcGF0Y2hlcihbJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1IYW5kbGVyLCBVbmJvdW5kQWN0aW9uc0hhbmRsZXJdKS5pbml0aWFsaXplKCk7YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgc2VydmljZS0xLnRzXG5cbiAgICAgIC8vIFN0YXJ0IE1pZGRsZXdhcmVcbiAgICAgIFtgc3J2L21pZGRsZXdhcmUvTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LnRzYF06IFtcbiAgICAgICAgYGltcG9ydCB0eXBlIHsgTWlkZGxld2FyZUltcGwsIE5leHRNaWRkbGV3YXJlLCBUeXBlZFJlcXVlc3QgfSBmcm9tICdAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlcic7YCxcbiAgICAgICAgYGltcG9ydCB0eXBlIHsgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gfSBmcm9tICcjY2RzLW1vZGVscy9TZXJ2aWNlQSc7YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgTWlkZGxld2FyZSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IGltcGxlbWVudHMgTWlkZGxld2FyZUltcGwge2AsXG4gICAgICAgIGAgIHB1YmxpYyBhc3luYyB1c2UocmVxOiBUeXBlZFJlcXVlc3Q8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+LCBuZXh0OiBOZXh0TWlkZGxld2FyZSk6IFByb21pc2U8dm9pZD4ge2AsXG4gICAgICAgIGAgICAgY29uc29sZS5sb2coJ01pZGRsZXdhcmUgZW50aXR5IDEgOiBFWEVDVVRFRCcpO2AsXG4gICAgICAgIGAgICAgYXdhaXQgbmV4dCgpO2AsXG4gICAgICAgIGAgIH1gLFxuICAgICAgICBgfWAsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIE1pZGRsZXdhcmVcblxuICAgICAgLy8gU3RhcnQgTWlkZGxld2FyZUFmdGVyUmVhZFxuICAgICAgJ3Nydi9taWRkbGV3YXJlL01pZGRsZXdhcmVBZnRlclJlYWQudHMnOiBbXG4gICAgICAgIGBpbXBvcnQgdHlwZSB7IE1pZGRsZXdhcmVJbXBsLCBOZXh0TWlkZGxld2FyZSwgVHlwZWRSZXF1ZXN0IH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBpbXBvcnQgdHlwZSB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnI2Nkcy1tb2RlbHMvU2VydmljZUEnO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgZXhwb3J0IGNsYXNzIE1pZGRsZXdhcmVBZnRlclJlYWQgaW1wbGVtZW50cyBNaWRkbGV3YXJlSW1wbCB7YCxcbiAgICAgICAgYCAgcHVibGljIGFzeW5jIHVzZShyZXE6IFR5cGVkUmVxdWVzdDwke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfT4sIG5leHQ6IE5leHRNaWRkbGV3YXJlKTogUHJvbWlzZTx2b2lkPiB7YCxcbiAgICAgICAgYCAgICBjb25zb2xlLmxvZygnTWlkZGxld2FyZSBlbnRpdHkgMSA6IEVYRUNVVEVEJyk7YCxcbiAgICAgICAgYCAgICBhd2FpdCBuZXh0KCk7YCxcbiAgICAgICAgYCAgfWAsXG4gICAgICAgIGB9YCxcbiAgICAgIF0sXG4gICAgICAvLyBFbmQgTWlkZGxld2FyZUFmdGVyUmVhZFxuXG4gICAgICAvLyBTdGFydCBSZXBvc2l0b3J5XG4gICAgICBbYHNydi9yZXBvc2l0b3J5LyR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeS50c2BdOiBbXG4gICAgICAgIGBpbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXInO2AsXG4gICAgICAgIGBpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1yZXBvc2l0b3J5JztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IH0gZnJvbSAnI2Nkcy1tb2RlbHMvU2VydmljZUEnO2AsXG4gICAgICAgIGBgLFxuICAgICAgICBgQFJlcG9zaXRvcnkoKWAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8JHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0+IHtgLFxuICAgICAgICBgICBjb25zdHJ1Y3RvcigpIHtgLFxuICAgICAgICBgICAgIHN1cGVyKCR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9KTtgLFxuICAgICAgICBgICB9YCxcbiAgICAgICAgYCAgLy8gLi4uIGRlZmluZSBjdXN0b20gQ0RTLVFMIGFjdGlvbnMgaWYgQmFzZVJlcG9zaXRvcnkgb25lcyBhcmUgbm90IHNhdGlzZnlpbmcgeW91ciBuZWVkcyAhYCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBSZXBvc2l0b3J5XG5cbiAgICAgIC8vIFN0YXJ0IFNlcnZpY2VcbiAgICAgIFtgc3J2L3NlcnZpY2UvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1TZXJ2aWNlLnRzYF06IFtcbiAgICAgICAgYGltcG9ydCB7IEluamVjdCwgU2VydmljZSwgU2VydmljZUxvZ2ljLCBDRFNfRElTUEFUQ0hFUiB9IGZyb20gJ0BkeGZyb250aWVyL2Nkcy10cy1kaXNwYXRjaGVyJztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGltcG9ydCB7ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9UmVwb3NpdG9yeSB9IGZyb20gJy4uL3JlcG9zaXRvcnkvJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1SZXBvc2l0b3J5JztgLFxuICAgICAgICBgYCxcbiAgICAgICAgYEBTZXJ2aWNlTG9naWMoKWAsXG4gICAgICAgIGBleHBvcnQgY2xhc3MgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1TZXJ2aWNlIHtgLFxuICAgICAgICBgICBASW5qZWN0KENEU19ESVNQQVRDSEVSLlNSVikgcHJpdmF0ZSByZWFkb25seSBzcnY6IFNlcnZpY2U7YCxcbiAgICAgICAgYCAgQEluamVjdCgke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnkpIHByaXZhdGUgcmVhZG9ubHkgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX1TZXJ2aWNlOiAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfVJlcG9zaXRvcnk7YCxcbiAgICAgICAgYH1gLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBTZXJ2aWNlXG5cbiAgICAgIC8vIFN0YXJ0IGNvbnN0YW50cy50c1xuICAgICAgJ3Nydi91dGlsL2NvbnN0YW50cy9jb25zdGFudHMudHMnOiBbXG4gICAgICAgIGBjb25zdCBDb25zdGFudHMgPSB7YCxcbiAgICAgICAgYCAgLy8gRXhhbXBsZWAsXG4gICAgICAgIGAgIENPTlNUQU5UXzE6IHtgLFxuICAgICAgICBgICAgIFBST1BfQ09OU1RBTlRfMTogJ1NPTUVUSElORycsYCxcbiAgICAgICAgYCAgfSxgLFxuICAgICAgICBgfTtgLFxuICAgICAgICBgYCxcbiAgICAgICAgYGV4cG9ydCBkZWZhdWx0IENvbnN0YW50cztgLFxuICAgICAgXSxcbiAgICAgIC8vIEVuZCBjb25zdGFudHMudHNcblxuICAgICAgLy8gU3RhcnQgdXRpbC50c1xuICAgICAgJ3Nydi91dGlsL2hlbHBlcnMvdXRpbC50cyc6IFtcbiAgICAgICAgYGNvbnN0IFV0aWwgPSB7YCxcbiAgICAgICAgYCAgLy8gRXhhbXBsZWAsXG4gICAgICAgIGAgIGFIZWxwZXJGdW5jdGlvbigpIHtgLFxuICAgICAgICBgICAgIHJldHVybiAxO2AsXG4gICAgICAgIGAgIH0sYCxcbiAgICAgICAgYH07YCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBleHBvcnQgZGVmYXVsdCBVdGlsO2AsXG4gICAgICBdLFxuICAgICAgLy8gRW5kIHV0aWwudHNcblxuICAgICAgLy8gU3RhcnQgdHlwZXMudHNcbiAgICAgICdzcnYvdXRpbC90eXBlcy90eXBlcy50cyc6IFtgLy8gRXhhbXBsZWAsIGBleHBvcnQgdHlwZSBBVHlwZSA9IHN0cmluZztgXSxcbiAgICAgIC8vIEVuZCB0eXBlcy50c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGRiIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBkYiBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVEYlRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZGIvc2NoZW1hLmNkcyc6IFtcbiAgICAgICAgXCJ1c2luZyB7IG1hbmFnZWQgfSBmcm9tICdAc2FwL2Nkcy9jb21tb24nO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgYG5hbWVzcGFjZSAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9O2AsXG4gICAgICAgICcnLFxuICAgICAgICBgZW50aXR5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IDogbWFuYWdlZCB7YCxcbiAgICAgICAgJyAga2V5IElEOiBJbnRlZ2VyOycsXG4gICAgICAgICcgIGRlc2NyOiBsb2NhbGl6ZWQgU3RyaW5nKDExMSk7JyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSBkYXRhIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBkYXRhIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGB0ZXN0L2RhdGEvJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfS0ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS5jc3ZgO1xuICAgIGNvbnN0IGZpbGVQYXRoVGV4dHMgPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0udGV4dHMuY3N2YDtcblxuICAgIHJldHVybiB7XG4gICAgICBbZmlsZVBhdGhdOiBbXG4gICAgICAgICdJRCxjcmVhdGVkQXQsY3JlYXRlZEJ5LG1vZGlmaWVkQXQsbW9kaWZpZWRCeSxkZXNjcicsXG4gICAgICAgICcxLCwsLCxEZXNjcmlwdGlvbiAxJyxcbiAgICAgICAgJzIsLCwsLERlc2NyaXB0aW9uIDInLFxuICAgICAgICAnMywsLCwsRGVzY3JpcHRpb24gMycsXG4gICAgICBdLFxuICAgICAgW2ZpbGVQYXRoVGV4dHNdOiBbJ2xvY2FsZSxJRCxkZXNjciddLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgdGVtcGxhdGUgZmlsZXMgZm9yIHRoZSBzcGVjaWZpZWQgZGlyZWN0b3J5LlxuICAgKiBAcGFyYW0gdGVtcGxhdGVzIFRoZSB0ZW1wbGF0ZXMgdG8gY3JlYXRlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVRlbXBsYXRlcyh0ZW1wbGF0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGF0aCBpbiB0ZW1wbGF0ZXMpIHtcbiAgICAgIGlmICh0ZW1wbGF0ZXNbcGF0aF0pIHtcbiAgICAgICAgbmV3IFNhbXBsZUZpbGUodGhpcy5wcm9qZWN0LCBwYXRoLCB7XG4gICAgICAgICAgY29udGVudHM6IHRlbXBsYXRlc1twYXRoXS5qb2luKCdcXG4nKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgYCR7Y29uc3RhbnRzWydAY2FwLWpzL2Nkcy10eXBlciddLk5BTUV9QCR7Y29uc3RhbnRzWydAY2FwLWpzL2Nkcy10eXBlciddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQGNhcC1qcy9jZHMtdHlwZXMnXS5OQU1FfUAke2NvbnN0YW50c1snQGNhcC1qcy9jZHMtdHlwZXMnXS5WRVJTSU9OfWAsXG4gICAgICBgJHtjb25zdGFudHNbJ0BzYXAvY2RzLWRrJ10uTkFNRX1AJHtjb25zdGFudHNbJ0BzYXAvY2RzLWRrJ10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAc2FwL2Nkcy1sc3AnXS5OQU1FfUAke2NvbnN0YW50c1snQHNhcC9jZHMtbHNwJ10uVkVSU0lPTn1gLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtjb25zdGFudHNbJ0BkeGZyb250aWVyL2Nkcy10cy1yZXBvc2l0b3J5J10uTkFNRX1AJHtjb25zdGFudHNbJ0BkeGZyb250aWVyL2Nkcy10cy1yZXBvc2l0b3J5J10uVkVSU0lPTn1gLFxuICAgICAgYCR7Y29uc3RhbnRzWydAc2FwL2NkcyddLk5BTUV9QCR7Y29uc3RhbnRzWydAc2FwL2NkcyddLlZFUlNJT059YCxcbiAgICAgIGAke2NvbnN0YW50c1snQHNhcC94c3NlYyddLk5BTUV9QCR7Y29uc3RhbnRzWydAc2FwL3hzc2VjJ10uVkVSU0lPTn1gLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogJ2Nkcy1zZXJ2ZSAtLXByb2R1Y3Rpb24nLFxuICAgICAgJ3N0YXJ0OmxvY2FsJzogJ2Nkcy10cyBzZXJ2ZScsXG4gICAgICB3YXRjaDogJ2Nkcy10cyB3YXRjaCcsXG4gICAgICAnYnVpbGQ6Y2RzJzogJ2Nkcy10cyBidWlsZCAtLXByb2R1Y3Rpb24nLFxuICAgICAgJ2J1aWxkOmNkczptZXNzYWdlJzogJ2VjaG8gXCJCdWlsZCBDRFMgLi4uXCInLFxuICAgICAgJ2J1aWxkOnRzJzogJ3RzYycsXG4gICAgICAnYnVpbGQ6dHM6bWVzc2FnZSc6ICdlY2hvIFwiVHJhbnNwaWxlIFRTID0+IEpTIC4uLlwiJyxcbiAgICAgICdidWlsZDpzcnY6Y2xlYW46dHMnOiAnZmluZCBnZW4vc3J2L3NydiAtdHlwZSBmIC1uYW1lIFwiKi50c1wiIC1kZWxldGUnLFxuICAgICAgJ2J1aWxkOnNydjpjbGVhbjp0czptZXNzYWdlJzogJ2VjaG8gXCJDbGVhbiBUUyBmaWxlcyBmcm9tIHNydiBmb2xkZXIgLi4uXCInLFxuICAgICAgYnVpbGQ6XG4gICAgICAgICdydW4tcyBidWlsZDpjZHM6bWVzc2FnZSBidWlsZDpjZHMgYnVpbGQ6dHM6bWVzc2FnZSBidWlsZDp0cyBidWlsZDpzcnY6Y2xlYW46dHM6bWVzc2FnZSBidWlsZDpzcnY6Y2xlYW46dHMnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGltcG9ydHM6IHtcbiAgICAgICAgJyNjZHMtbW9kZWxzLyonOiAnLi9AY2RzLW1vZGVscy8qL2luZGV4LmpzJyxcbiAgICAgICAgJyNkaXNwYXRjaGVyJzogJy4vQGRpc3BhdGNoZXIvaW5kZXguanMnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHJlZ2lzdGVyQ29uZmlnKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2plY3QgaW5zdGFuY2VvZiBCYXNlUHJvamVjdCkge1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkRGV2RGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERldkRlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGREZXBlbmRlbmNpZXModGhpcy5hZGRpdGlvbmFsRGVwZW5kZW5jaWVzKTtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZFNjcmlwdHModGhpcy5hZGRpdGlvbmFsU2NyaXB0cyk7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGRTZXR0aW5ncyh0aGlzLmFkZGl0aW9uYWxTZXR0aW5ncyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVzKHRoaXMuc2FtcGxlQ29kZUZpbGVSb290VGVtcGxhdGVzKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXMpO1xuICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVzKHRoaXMuc2FtcGxlQ29kZUZpbGVEYXRhVGVtcGxhdGVzKTtcbiAgICB0aGlzLmNyZWF0ZVRlbXBsYXRlcyh0aGlzLnNhbXBsZUNvZGVGaWxlU3J2VGVtcGxhdGVzKTtcbiAgfVxufVxuIl19