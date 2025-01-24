"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../../base");
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
     * Creates the template files for the root directory.
     */
    createRootTemplates() {
        for (const path in this.sampleCodeFileRootTemplates) {
            if (this.sampleCodeFileRootTemplates[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.sampleCodeFileRootTemplates[path].join('\n'),
                });
            }
        }
    }
    /**
     * Creates the template files for the db directory.
     */
    createDbTemplates() {
        for (const path in this.sampleCodeFileDbTemplates) {
            if (this.sampleCodeFileDbTemplates[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.sampleCodeFileDbTemplates[path].join('\n'),
                });
            }
        }
    }
    /**
     * Creates the template files for the data directory.
     */
    createDataTemplates() {
        for (const path in this.sampleCodeFileDataTemplates) {
            if (this.sampleCodeFileDataTemplates[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.sampleCodeFileDataTemplates[path].join('\n'),
                });
            }
        }
    }
    get additionalDevDependencies() {
        return ['@cap-js/cds-typer@^0.32.0', '@cap-js/cds-types@^0.9.0', '@sap/cds-dk@^8.6.1', '@sap/cds-lsp@^8.5.1'];
    }
    get additionalDependencies() {
        return ['@dxfrontier/cds-ts-dispatcher@^3.2.7', '@sap/cds@^8.6.1', '@sap/xssec@^4.2.8'];
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
        this.createRootTemplates();
        this.createDbTemplates();
        this.createDataTemplates();
    }
}
exports.SampleCodeConfigCapService = SampleCodeConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFvQztBQUVwQyxxQ0FBK0Q7QUFHL0Q7O0dBRUc7QUFDSCxNQUFhLDBCQUEyQixTQUFRLDJCQUFvQjtJQUdsRSxZQUFZLE9BQTBCLEVBQUUsT0FBaUM7UUFDdkUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLDJCQUEyQjtRQUN2QyxPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLEdBQUc7Z0JBQ0gsaUJBQWlCO2dCQUNqQix3QkFBd0I7Z0JBQ3hCLGlCQUFpQjtnQkFDakIsMEJBQTBCO2dCQUMxQixTQUFTO2dCQUNULFFBQVE7Z0JBQ1IsdUJBQXVCO2dCQUN2QixpQkFBaUI7Z0JBQ2pCLHlCQUF5QjtnQkFDekIsVUFBVTtnQkFDVixlQUFlO2dCQUNmLHlCQUF5QjtnQkFDekIsaUNBQWlDO2dCQUNqQyxxQ0FBcUM7Z0JBQ3JDLFNBQVM7Z0JBQ1QsT0FBTztnQkFDUCxNQUFNO2dCQUNOLGFBQWE7Z0JBQ2IsOEJBQThCO2dCQUM5QixNQUFNO2dCQUNOLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQUNyQixNQUFNO2dCQUNOLGlCQUFpQjtnQkFDakIsK0JBQStCO2dCQUMvQixNQUFNO2dCQUNOLFlBQVk7Z0JBQ1osdUNBQXVDO2dCQUN2QyxNQUFNO2dCQUNOLGFBQWE7Z0JBQ2IsaUNBQWlDO2dCQUNqQyxLQUFLO2dCQUNMLEdBQUc7YUFDSjtZQUNELG1CQUFtQixFQUFFO2dCQUNuQixHQUFHO2dCQUNILDBCQUEwQjtnQkFDMUIsNkJBQTZCO2dCQUM3QixnQ0FBZ0M7Z0JBQ2hDLGlDQUFpQztnQkFDakMscUNBQXFDO2dCQUNyQyxx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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENhcFNlcnZpY2VQcm9qZWN0LCBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgfSBmcm9tICcuLi8uL3Byb2plY3QnO1xuaW1wb3J0IHsgQmFzZVByb2plY3QsIFNhbXBsZUNvZGVDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBTYW1wbGVDb2RlQ29uZmlnQmFzZSB7XG4gIHByaXZhdGUgb3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IENhcFNlcnZpY2VQcm9qZWN0LCBvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIHJvb3QgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIHJvb3QgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmNkc3JjLmpzb24nOiBbXG4gICAgICAgICd7JyxcbiAgICAgICAgJyAgXCJyZXF1aXJlc1wiOiB7JyxcbiAgICAgICAgJyAgICBcIltkZXZlbG9wbWVudF1cIjogeycsXG4gICAgICAgICcgICAgICBcImF1dGhcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcIm1vY2tlZFwiJyxcbiAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAnICAgIH0sJyxcbiAgICAgICAgJyAgICBcIltwcm9kdWN0aW9uXVwiOiB7JyxcbiAgICAgICAgJyAgICAgIFwiYXV0aFwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwieHN1YWFcIicsXG4gICAgICAgICcgICAgICB9LCcsXG4gICAgICAgICcgICAgICBcImRiXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJoYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJpbXBsXCI6IFwiQGNhcC1qcy9oYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJkZXBsb3ktZm9ybWF0XCI6IFwiaGRidGFibGVcIicsXG4gICAgICAgICcgICAgICB9JyxcbiAgICAgICAgJyAgICB9JyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImkxOG5cIjogeycsXG4gICAgICAgICcgICAgXCJkZWZhdWx0X2xhbmd1YWdlXCI6IFwiZW5cIicsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJsb2dcIjogeycsXG4gICAgICAgICcgICAgXCJzZXJ2aWNlXCI6IHRydWUnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiZmVhdHVyZXNcIjogeycsXG4gICAgICAgICcgICAgXCJwcmVzZXJ2ZV9jb21wdXRlZFwiOiB0cnVlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcInNxbFwiOiB7JyxcbiAgICAgICAgJyAgICBcIm5hdGl2ZV9oYW5hX2Fzc29jaWF0aW9uc1wiOiBmYWxzZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJoYW5hXCI6IHsnLFxuICAgICAgICAnICAgIFwiZGVwbG95LWZvcm1hdFwiOiBcImhkYnRhYmxlXCInLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgICcuY2RzcHJldHRpZXIuanNvbic6IFtcbiAgICAgICAgJ3snLFxuICAgICAgICAnICBcImFsaWduQWZ0ZXJLZXlcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduUHJlQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduUG9zdEFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbG9uc0luQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVmFsdWVzSW5Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25zQW5kRnVuY3Rpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvbk5hbWVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvblJldHVybnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJbkVudGl0aWVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5TZWxlY3RJdGVtc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luVXNpbmdcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXhwcmVzc2lvbnNBbmRDb25kaXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkV4cHJBbmRDb25kV2l0aGluQmxvY2tcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29sb25zQmVmb3JlVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXF1YWxzQWZ0ZXJUeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25UeXBlc1dpdGhpbkJsb2NrXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbXBvc2l0aW9uU3RydWN0VG9SaWdodFwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiY3FsS2V5d29yZENhcGl0YWxpemF0aW9uXCI6IFwibG93ZXJcIiwnLFxuICAgICAgICAnICBcImtlZXBQcmVBbm5vdGF0aW9uc0luT3JpZ2luYWxMaW5lXCI6IFwia2VlcExpbmVcIiwnLFxuICAgICAgICAnICBcImtlZXBQb3N0QW5ub3RhdGlvbnNJbk9yaWdpbmFsTGluZVwiOiBcImtlZXBMaW5lXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwRW1wdHlCcmFja2V0c1RvZ2V0aGVyXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJrZWVwU2luZ2xlTGluZWRCbG9ja3NUb2dldGhlclwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwia2VlcE9yaWdpbmFsRW1wdHlMaW5lc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwibWF4S2VlcEVtcHR5TGluZXNcIjogMiwnLFxuICAgICAgICAnICBcIm9wZW5pbmdCcmFjZUluTmV3TGluZVwiOiBmYWxzZSwnLFxuICAgICAgICAnICBcInNlbGVjdEluTmV3TGluZVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwidGFiU2l6ZVwiOiAyLCcsXG4gICAgICAgICcgIFwiZmluYWxOZXdsaW5lXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJmb3JtYXREb2NDb21tZW50c1wiOiBmYWxzZSwnLFxuICAgICAgICAnICBcIm1heERvY0NvbW1lbnRMaW5lXCI6IDYwLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUJlZm9yZUNvbG9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQmVmb3JlQ29sb25JbkFubm90YXRpb25cIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb2xvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29sb25JbkFubm90YXRpb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbW1hXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQXJvdW5kQWxpZ25lZE9wc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFyb3VuZEJpbmFyeU9wc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZVdpdGhpbkJyYWNrZXRzXCI6IGZhbHNlJyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgICdkZWZhdWx0LWVudi5qcyc6IFtcbiAgICAgICAgJy8qKicsXG4gICAgICAgICcgKiBGZXRjaGVzIGBWQ0FQX1NFUlZJQ0VTYCBmb3IgYSBnaXZlbiBDRiBhcHBsaWNhdGlvbiBhbmQgd3JpdGVzIGl0IHRvIGEgZmlsZS4nLFxuICAgICAgICAnICogSXQgdXRpbGl6ZXMgdGhlIENsb3VkIEZvdW5kcnkgQ0xJIHRvIGRvIHNvLicsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBNYWtlIHN1cmUgeW91IGFyZSBsb2dnZWQgaW4gdmlhIHRoZSBDRiBDTEkgKGBjZiBsb2dpbmApIGJlZm9yZSBydW5uaW5nIHRoZScsXG4gICAgICAgICcgKiBzY3JpcHQuIFlvdSBjYW4gY2hlY2sgeW91ciBsb2dpbiBhbmQgdGhlIG9yZ2FuaXphdGlvbiBhbmQgc3BhY2UgeW91IGFyZScsXG4gICAgICAgICcgKiB0YXJnZXR0aW5nIGJ5IHVzaW5nIGBjZiB0YXJnZXRgLicsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBBbGxvd3Mgb24tcHJlbWlzZSBjb25uZWN0aXZpdHkgcHJveHlpbmcgaWYgbmVjZXNzYXJ5JyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIEBhdXRob3IgU2ViYXN0aWFuIEJsZXNzaW5nJyxcbiAgICAgICAgJyAqLycsXG4gICAgICAgIFwiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1wiLFxuICAgICAgICBcImNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XCIsXG4gICAgICAgIFwiY29uc3QgZXhlYyA9IHV0aWwucHJvbWlzaWZ5KHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjKTtcIixcbiAgICAgICAgXCJjb25zdCBzcGF3biA9IHV0aWwucHJvbWlzaWZ5KHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5zcGF3bik7XCIsXG4gICAgICAgICcnLFxuICAgICAgICAnYXN5bmMgZnVuY3Rpb24gZ2V0QXBwR3VpZChhcHBOYW1lKSB7JyxcbiAgICAgICAgJyAgY29uc3QgY21kID0gYGNmIGFwcCAke2FwcE5hbWV9IC0tZ3VpZGA7JyxcbiAgICAgICAgJyAgY29uc29sZS5sb2coY21kKTsnLFxuICAgICAgICAnICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKGNtZCk7JyxcbiAgICAgICAgJyAgaWYgKHN0ZGVycikgY29uc29sZS5sb2coYHN0ZGVycjogJHtzdGRlcnJ9YCk7JyxcbiAgICAgICAgJyAgcmV0dXJuIHN0ZG91dC50cmltKCk7JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2FzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRFbnYoYXBwR3VpZCkgeycsXG4gICAgICAgICcgIGNvbnN0IGNtZCA9IGBjZiBjdXJsIFwidjMvYXBwcy8ke2FwcEd1aWR9L2VudlwiYDsnLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhjbWQpOycsXG4gICAgICAgICcgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoY21kKTsnLFxuICAgICAgICAnICBpZiAoc3RkZXJyKSBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTsnLFxuICAgICAgICAnICByZXR1cm4gSlNPTi5wYXJzZShzdGRvdXQpLnN5c3RlbV9lbnZfanNvbjsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcnLFxuICAgICAgICAnKGFzeW5jICgpID0+IHsnLFxuICAgICAgICAnICBjb25zdCBteUFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7JyxcbiAgICAgICAgJyAgY29uc3QgYXBwTmFtZSA9IG15QXJnc1swXTsnLFxuICAgICAgICAnICBpZiAoIWFwcE5hbWUpIHsnLFxuICAgICAgICBcIiAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIENGIGFwcGxpY2F0aW9uIG5hbWUgdG8gZmV0Y2ggaXRzIGVudmlyb25tZW50IScpO1wiLFxuICAgICAgICAnICAgIHJldHVybjsnLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGxldCBlbnZGaWxlTmFtZSA9IG15QXJnc1sxXTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGVudkZpbGVOYW1lID0gZW52RmlsZU5hbWUgPyBlbnZGaWxlTmFtZSA6ICdkZWZhdWx0LWVudi5qc29uJztcIixcbiAgICAgICAgJyAgY29uc29sZS5sb2coYFdyaXRpbmcgZW52aXJvbm1lbnQgb2YgJHthcHBOYW1lfSB0byAke2VudkZpbGVOYW1lfWApOycsXG4gICAgICAgICcnLFxuICAgICAgICAnICBjb25zdCBkZWZhdWx0RW52ID0gYXdhaXQgZ2V0RGVmYXVsdEVudihhd2FpdCBnZXRBcHBHdWlkKGFwcE5hbWUpKTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgbGV0IGJSdW5Qcm94eSA9IGZhbHNlOycsXG4gICAgICAgICcgIGxldCBwcm94eVBvcnQgPSBudWxsOycsXG4gICAgICAgICcgIGxldCBwcm94eUhvc3QgPSBudWxsOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgaWYgKGRlZmF1bHRFbnZbJ1ZDQVBfU0VSVklDRVMnXVsnY29ubmVjdGl2aXR5J10pIHtcIixcbiAgICAgICAgJyAgICBwcm94eVBvcnQgPSBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9wb3J0OycsXG4gICAgICAgICcgICAgcHJveHlIb3N0ID0gZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfaG9zdDsnLFxuICAgICAgICBcIiAgICBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9ob3N0ID0gJ2xvY2FsaG9zdCc7XCIsXG4gICAgICAgICcgICAgYlJ1blByb3h5ID0gdHJ1ZTsnLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBmcy53cml0ZUZpbGUoJ2RlZmF1bHQtZW52Lmpzb24nLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0RW52LCBudWxsLCAyKSwgYXN5bmMgKGVycikgPT4ge1wiLFxuICAgICAgICAnICAgIGlmIChlcnIpIHsnLFxuICAgICAgICAnICAgICAgY29uc29sZS5lcnJvcihlcnIpOycsXG4gICAgICAgICcgICAgfSBlbHNlIGlmIChiUnVuUHJveHkpIHsnLFxuICAgICAgICAnICAgICAgY29uc29sZS5sb2coYGNmIHNzaCAke2FwcE5hbWV9IC1MICR7cHJveHlQb3J0fToke3Byb3h5SG9zdH06JHtwcm94eVBvcnR9YCk7JyxcbiAgICAgICAgXCIgICAgICBhd2FpdCBzcGF3bignY2YnLCBbYHNzaCAke2FwcE5hbWV9IC1MICR7cHJveHlQb3J0fToke3Byb3h5SG9zdH06JHtwcm94eVBvcnR9YF0sIHtcIixcbiAgICAgICAgJyAgICAgICAgc2hlbGw6IHRydWUsJyxcbiAgICAgICAgXCIgICAgICAgIHN0ZGlvOiAnaW5oZXJpdCcsXCIsXG4gICAgICAgICcgICAgICB9KTsnLFxuICAgICAgICAnICAgIH0nLFxuICAgICAgICAnICB9KTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGNvbnNvbGUubG9nKCdEb25lJyk7XCIsXG4gICAgICAgICd9KSgpOycsXG4gICAgICBdLFxuICAgICAgJ210YS55YW1sJzogW1xuICAgICAgICBcIl9zY2hlbWEtdmVyc2lvbjogJzMuMSdcIixcbiAgICAgICAgYElEOiAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9YCxcbiAgICAgICAgJ3ZlcnNpb246IDAuMC4xJyxcbiAgICAgICAgYGRlc2NyaXB0aW9uOiAke3RoaXMub3B0aW9ucy5kZXNjcmlwdGlvbn1gLFxuICAgICAgICAncGFyYW1ldGVyczonLFxuICAgICAgICAnICBlbmFibGUtcGFyYWxsZWwtZGVwbG95bWVudHM6IHRydWUnLFxuICAgICAgICAnYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICBiZWZvcmUtYWxsOicsXG4gICAgICAgICcgICAgLSBidWlsZGVyOiBjdXN0b20nLFxuICAgICAgICAnICAgICAgY29tbWFuZHM6JyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gY2knLFxuICAgICAgICAnICAgICAgICAtIG5wbSBydW4gYnVpbGQnLFxuICAgICAgICAnICAgICAgICAtIG5weCBAY2FwLWpzL2Nkcy10eXBlciBcIipcIiAtLW91dHB1dERpcmVjdG9yeSBnZW4vc3J2L0BjZHMtbW9kZWxzJyxcbiAgICAgICAgJ21vZHVsZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1zcnZgLFxuICAgICAgICAnICAgIHR5cGU6IG5vZGVqcycsXG4gICAgICAgICcgICAgcGF0aDogZ2VuL3NydicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICAgIHJlYWRpbmVzcy1oZWFsdGgtY2hlY2stdHlwZTogaHR0cCcsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLWh0dHAtZW5kcG9pbnQ6IC9oZWFsdGgnLFxuICAgICAgICAnICAgIGJ1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkZXI6IG5wbScsXG4gICAgICAgICcgICAgcHJvdmlkZXM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogc3J2LWFwaScsXG4gICAgICAgICcgICAgICAgIHByb3BlcnRpZXM6JyxcbiAgICAgICAgJyAgICAgICAgICBzcnYtdXJsOiAke2RlZmF1bHQtdXJsfScsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25zYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLmFwcGxpY2F0aW9uLmNvbnRlbnQnLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBzZXJ2aWNlLWtleTonLFxuICAgICAgICBgICAgICAgICAgICAgbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBjb250ZW50LXRhcmdldDogdHJ1ZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29udGVudDonLFxuICAgICAgICAnICAgICAgICBpbnN0YW5jZTonLFxuICAgICAgICAnICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogT0F1dGgyVXNlclRva2VuRXhjaGFuZ2UnLFxuICAgICAgICBgICAgICAgICAgICAgICBOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1hcHAtc3J2YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlSW5zdGFuY2VOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICBgICAgICAgICAgICAgICBUb2tlblNlcnZpY2VLZXlOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWEta2V5YCxcbiAgICAgICAgJyAgICAgICAgICAgICAgVVJMOiB+e3Nydi1hcGkvc3J2LXVybH0nLFxuICAgICAgICBgICAgICAgICAgICAgICBzYXAuY2xvdWQuc2VydmljZTogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICcgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBuby1zb3VyY2U6IHRydWUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiLWRlcGxveWVyYCxcbiAgICAgICAgJyAgICB0eXBlOiBoZGInLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9kYicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICdyZXNvdXJjZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBwYXRoOiAuL3hzLXNlY3VyaXR5Lmpzb24nLFxuICAgICAgICAnICAgICAgc2VydmljZTogeHN1YWEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBhcHBsaWNhdGlvbicsXG4gICAgICAgICcgICAgICBjb25maWc6JyxcbiAgICAgICAgJyAgICAgICAgdGVuYW50LW1vZGU6IGRlZGljYXRlZCcsXG4gICAgICAgIGAgICAgICAgIHhzYXBwbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX1gLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWNvbm5lY3Rpdml0eWAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGNvbm5lY3Rpdml0eScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIEhUTUw1UnVudGltZV9lbmFibGVkOiB0cnVlJyxcbiAgICAgICAgJyAgICAgICAgaW5pdF9kYXRhOicsXG4gICAgICAgICcgICAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgICAtIEF1dGhlbnRpY2F0aW9uOiBOb0F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBOYW1lOiB1aTUnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFByb3h5VHlwZTogSW50ZXJuZXQnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFR5cGU6IEhUVFAnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFVSTDogaHR0cHM6Ly91aTUuc2FwLmNvbScsXG4gICAgICAgICcgICAgICAgICAgICBleGlzdGluZ19kZXN0aW5hdGlvbnNfcG9saWN5OiB1cGRhdGUnLFxuICAgICAgICAnICAgICAgICB2ZXJzaW9uOiAxLjAuMCcsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBkZXN0aW5hdGlvbicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLnhzLmhkaS1jb250YWluZXInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGhhbmEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBoZGktc2hhcmVkJyxcbiAgICAgICAgJyAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICBoZGktc2VydmljZS1uYW1lOiAke3NlcnZpY2UtbmFtZX0nLFxuICAgICAgXSxcbiAgICAgICd4cy1zZWN1cml0eS5qc29uJzogWyd7JywgJyAgXCJzY29wZXNcIjogW10sJywgJyAgXCJhdHRyaWJ1dGVzXCI6IFtdLCcsICcgIFwicm9sZS10ZW1wbGF0ZXNcIjogW10nLCAnfSddLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGRiIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBkYiBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVEYlRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZGIvc2NoZW1hLmNkcyc6IFtcbiAgICAgICAgXCJ1c2luZyB7IG1hbmFnZWQgfSBmcm9tICdAc2FwL2Nkcy9jb21tb24nO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgYG5hbWVzcGFjZSAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9O2AsXG4gICAgICAgICcnLFxuICAgICAgICBgZW50aXR5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IDogbWFuYWdlZCB7YCxcbiAgICAgICAgJyAga2V5IElEOiBJbnRlZ2VyOycsXG4gICAgICAgICcgIGRlc2NyOiBsb2NhbGl6ZWQgU3RyaW5nKDExMSk7JyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSBkYXRhIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBkYXRhIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGB0ZXN0L2RhdGEvJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfS0ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS5jc3ZgO1xuICAgIGNvbnN0IGZpbGVQYXRoVGV4dHMgPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0udGV4dHMuY3N2YDtcblxuICAgIHJldHVybiB7XG4gICAgICBbZmlsZVBhdGhdOiBbXG4gICAgICAgICdJRCxjcmVhdGVkQXQsY3JlYXRlZEJ5LG1vZGlmaWVkQXQsbW9kaWZpZWRCeSxkZXNjcicsXG4gICAgICAgICcxLCwsLCxEZXNjcmlwdGlvbiAxJyxcbiAgICAgICAgJzIsLCwsLERlc2NyaXB0aW9uIDInLFxuICAgICAgICAnMywsLCwsRGVzY3JpcHRpb24gMycsXG4gICAgICBdLFxuICAgICAgW2ZpbGVQYXRoVGV4dHNdOiBbJ2xvY2FsZSxJRCxkZXNjciddLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgdGVtcGxhdGUgZmlsZXMgZm9yIHRoZSByb290IGRpcmVjdG9yeS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVSb290VGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGF0aCBpbiB0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcykge1xuICAgICAgaWYgKHRoaXMuc2FtcGxlQ29kZUZpbGVSb290VGVtcGxhdGVzW3BhdGhdKSB7XG4gICAgICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgcGF0aCwge1xuICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlc1twYXRoXS5qb2luKCdcXG4nKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGVzIGZvciB0aGUgZGIgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZURiVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGF0aCBpbiB0aGlzLnNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXMpIHtcbiAgICAgIGlmICh0aGlzLnNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXNbcGF0aF0pIHtcbiAgICAgICAgbmV3IFNhbXBsZUZpbGUodGhpcy5wcm9qZWN0LCBwYXRoLCB7XG4gICAgICAgICAgY29udGVudHM6IHRoaXMuc2FtcGxlQ29kZUZpbGVEYlRlbXBsYXRlc1twYXRoXS5qb2luKCdcXG4nKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGVzIGZvciB0aGUgZGF0YSBkaXJlY3RvcnkuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlRGF0YVRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGhpcy5zYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXMpIHtcbiAgICAgIGlmICh0aGlzLnNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlc1twYXRoXSkge1xuICAgICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHBhdGgsIHtcbiAgICAgICAgICBjb250ZW50czogdGhpcy5zYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnQGNhcC1qcy9jZHMtdHlwZXJAXjAuMzIuMCcsICdAY2FwLWpzL2Nkcy10eXBlc0BeMC45LjAnLCAnQHNhcC9jZHMtZGtAXjguNi4xJywgJ0BzYXAvY2RzLWxzcEBeOC41LjEnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXJAXjMuMi43JywgJ0BzYXAvY2RzQF44LjYuMScsICdAc2FwL3hzc2VjQF40LjIuOCddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6ICdjZHMtc2VydmUgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdzdGFydDpsb2NhbCc6ICdjZHMtdHMgc2VydmUnLFxuICAgICAgd2F0Y2g6ICdjZHMtdHMgd2F0Y2gnLFxuICAgICAgJ2J1aWxkOmNkcyc6ICdjZHMtdHMgYnVpbGQgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdidWlsZDpjZHM6bWVzc2FnZSc6ICdlY2hvIFwiQnVpbGQgQ0RTIC4uLlwiJyxcbiAgICAgICdidWlsZDp0cyc6ICd0c2MnLFxuICAgICAgJ2J1aWxkOnRzOm1lc3NhZ2UnOiAnZWNobyBcIlRyYW5zcGlsZSBUUyA9PiBKUyAuLi5cIicsXG4gICAgICAnYnVpbGQ6c3J2OmNsZWFuOnRzJzogJ2ZpbmQgZ2VuL3Nydi9zcnYgLXR5cGUgZiAtbmFtZSBcIioudHNcIiAtZGVsZXRlJyxcbiAgICAgICdidWlsZDpzcnY6Y2xlYW46dHM6bWVzc2FnZSc6ICdlY2hvIFwiQ2xlYW4gVFMgZmlsZXMgZnJvbSBzcnYgZm9sZGVyIC4uLlwiJyxcbiAgICAgIGJ1aWxkOlxuICAgICAgICAncnVuLXMgYnVpbGQ6Y2RzOm1lc3NhZ2UgYnVpbGQ6Y2RzIGJ1aWxkOnRzOm1lc3NhZ2UgYnVpbGQ6dHMgYnVpbGQ6c3J2OmNsZWFuOnRzOm1lc3NhZ2UgYnVpbGQ6c3J2OmNsZWFuOnRzJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBpbXBvcnRzOiB7XG4gICAgICAgICcjY2RzLW1vZGVscy8qJzogJy4vQGNkcy1tb2RlbHMvKi9pbmRleC5qcycsXG4gICAgICAgICcjZGlzcGF0Y2hlcic6ICcuL0BkaXNwYXRjaGVyL2luZGV4LmpzJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkRGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVJvb3RUZW1wbGF0ZXMoKTtcbiAgICB0aGlzLmNyZWF0ZURiVGVtcGxhdGVzKCk7XG4gICAgdGhpcy5jcmVhdGVEYXRhVGVtcGxhdGVzKCk7XG4gIH1cbn1cbiJdfQ==