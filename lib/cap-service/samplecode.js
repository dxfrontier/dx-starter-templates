"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../base");
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
    applyConfig() {
        this.createRootTemplates();
        this.createDbTemplates();
        this.createDataTemplates();
    }
}
exports.SampleCodeConfigCapService = SampleCodeConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9zYW1wbGVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW9DO0FBRXBDLGtDQUErQztBQUUvQzs7R0FFRztBQUNILE1BQWEsMEJBQTJCLFNBQVEsMkJBQW9CO0lBR2xFLFlBQVksT0FBMEIsRUFBRSxPQUFpQztRQUN2RSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsMkJBQTJCO1FBQ3ZDLE9BQU87WUFDTCxhQUFhLEVBQUU7Z0JBQ2IsR0FBRztnQkFDSCxpQkFBaUI7Z0JBQ2pCLHdCQUF3QjtnQkFDeEIsaUJBQWlCO2dCQUNqQiwwQkFBMEI7Z0JBQzFCLFNBQVM7Z0JBQ1QsUUFBUTtnQkFDUix1QkFBdUI7Z0JBQ3ZCLGlCQUFpQjtnQkFDakIseUJBQXlCO2dCQUN6QixVQUFVO2dCQUNWLGVBQWU7Z0JBQ2YseUJBQXlCO2dCQUN6QixpQ0FBaUM7Z0JBQ2pDLHFDQUFxQztnQkFDckMsU0FBUztnQkFDVCxPQUFPO2dCQUNQLE1BQU07Z0JBQ04sYUFBYTtnQkFDYiw4QkFBOEI7Z0JBQzlCLE1BQU07Z0JBQ04sWUFBWTtnQkFDWixxQkFBcUI7Z0JBQ3JCLE1BQU07Z0JBQ04saUJBQWlCO2dCQUNqQiwrQkFBK0I7Z0JBQy9CLE1BQU07Z0JBQ04sWUFBWTtnQkFDWix1Q0FBdUM7Z0JBQ3ZDLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixpQ0FBaUM7Z0JBQ2pDLEtBQUs7Z0JBQ0wsR0FBRzthQUNKO1lBQ0QsbUJBQW1CLEVBQUU7Z0JBQ25CLEdBQUc7Z0JBQ0gsMEJBQTBCO2dCQUMxQiw2QkFBNkI7Z0JBQzdCLGdDQUFnQztnQkFDaEMsaUNBQWlDO2dCQUNqQyxxQ0FBcUM7Z0JBQ3JDLHFDQUFxQztnQkFD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Q2FwU2VydmljZVByb2plY3QsIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBTYW1wbGVDb2RlQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIEltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UgZXh0ZW5kcyBTYW1wbGVDb2RlQ29uZmlnQmFzZSB7XG4gIHByaXZhdGUgb3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IENhcFNlcnZpY2VQcm9qZWN0LCBvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIHJvb3QgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIHJvb3QgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmNkc3JjLmpzb24nOiBbXG4gICAgICAgICd7JyxcbiAgICAgICAgJyAgXCJyZXF1aXJlc1wiOiB7JyxcbiAgICAgICAgJyAgICBcIltkZXZlbG9wbWVudF1cIjogeycsXG4gICAgICAgICcgICAgICBcImF1dGhcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcIm1vY2tlZFwiJyxcbiAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAnICAgIH0sJyxcbiAgICAgICAgJyAgICBcIltwcm9kdWN0aW9uXVwiOiB7JyxcbiAgICAgICAgJyAgICAgIFwiYXV0aFwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwieHN1YWFcIicsXG4gICAgICAgICcgICAgICB9LCcsXG4gICAgICAgICcgICAgICBcImRiXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJoYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJpbXBsXCI6IFwiQGNhcC1qcy9oYW5hXCIsJyxcbiAgICAgICAgJyAgICAgICAgXCJkZXBsb3ktZm9ybWF0XCI6IFwiaGRidGFibGVcIicsXG4gICAgICAgICcgICAgICB9JyxcbiAgICAgICAgJyAgICB9JyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImkxOG5cIjogeycsXG4gICAgICAgICcgICAgXCJkZWZhdWx0X2xhbmd1YWdlXCI6IFwiZW5cIicsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJsb2dcIjogeycsXG4gICAgICAgICcgICAgXCJzZXJ2aWNlXCI6IHRydWUnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiZmVhdHVyZXNcIjogeycsXG4gICAgICAgICcgICAgXCJwcmVzZXJ2ZV9jb21wdXRlZFwiOiB0cnVlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcInNxbFwiOiB7JyxcbiAgICAgICAgJyAgICBcIm5hdGl2ZV9oYW5hX2Fzc29jaWF0aW9uc1wiOiBmYWxzZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJoYW5hXCI6IHsnLFxuICAgICAgICAnICAgIFwiZGVwbG95LWZvcm1hdFwiOiBcImhkYnRhYmxlXCInLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgICcuY2RzcHJldHRpZXIuanNvbic6IFtcbiAgICAgICAgJ3snLFxuICAgICAgICAnICBcImFsaWduQWZ0ZXJLZXlcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduUHJlQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduUG9zdEFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbG9uc0luQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVmFsdWVzSW5Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25zQW5kRnVuY3Rpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvbk5hbWVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvblJldHVybnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJbkVudGl0aWVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5TZWxlY3RJdGVtc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luVXNpbmdcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXhwcmVzc2lvbnNBbmRDb25kaXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkV4cHJBbmRDb25kV2l0aGluQmxvY2tcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29sb25zQmVmb3JlVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXF1YWxzQWZ0ZXJUeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25UeXBlc1dpdGhpbkJsb2NrXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbXBvc2l0aW9uU3RydWN0VG9SaWdodFwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiY3FsS2V5d29yZENhcGl0YWxpemF0aW9uXCI6IFwibG93ZXJcIiwnLFxuICAgICAgICAnICBcImtlZXBQcmVBbm5vdGF0aW9uc0luT3JpZ2luYWxMaW5lXCI6IFwia2VlcExpbmVcIiwnLFxuICAgICAgICAnICBcImtlZXBQb3N0QW5ub3RhdGlvbnNJbk9yaWdpbmFsTGluZVwiOiBcImtlZXBMaW5lXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwRW1wdHlCcmFja2V0c1RvZ2V0aGVyXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJrZWVwU2luZ2xlTGluZWRCbG9ja3NUb2dldGhlclwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwia2VlcE9yaWdpbmFsRW1wdHlMaW5lc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwibWF4S2VlcEVtcHR5TGluZXNcIjogMiwnLFxuICAgICAgICAnICBcIm9wZW5pbmdCcmFjZUluTmV3TGluZVwiOiBmYWxzZSwnLFxuICAgICAgICAnICBcInNlbGVjdEluTmV3TGluZVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwidGFiU2l6ZVwiOiAyLCcsXG4gICAgICAgICcgIFwiZmluYWxOZXdsaW5lXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJmb3JtYXREb2NDb21tZW50c1wiOiBmYWxzZSwnLFxuICAgICAgICAnICBcIm1heERvY0NvbW1lbnRMaW5lXCI6IDYwLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUJlZm9yZUNvbG9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQmVmb3JlQ29sb25JbkFubm90YXRpb25cIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb2xvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29sb25JbkFubm90YXRpb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbW1hXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQXJvdW5kQWxpZ25lZE9wc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFyb3VuZEJpbmFyeU9wc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZVdpdGhpbkJyYWNrZXRzXCI6IGZhbHNlJyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICAgICdkZWZhdWx0LWVudi5qcyc6IFtcbiAgICAgICAgJy8qKicsXG4gICAgICAgICcgKiBGZXRjaGVzIGBWQ0FQX1NFUlZJQ0VTYCBmb3IgYSBnaXZlbiBDRiBhcHBsaWNhdGlvbiBhbmQgd3JpdGVzIGl0IHRvIGEgZmlsZS4nLFxuICAgICAgICAnICogSXQgdXRpbGl6ZXMgdGhlIENsb3VkIEZvdW5kcnkgQ0xJIHRvIGRvIHNvLicsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBNYWtlIHN1cmUgeW91IGFyZSBsb2dnZWQgaW4gdmlhIHRoZSBDRiBDTEkgKGBjZiBsb2dpbmApIGJlZm9yZSBydW5uaW5nIHRoZScsXG4gICAgICAgICcgKiBzY3JpcHQuIFlvdSBjYW4gY2hlY2sgeW91ciBsb2dpbiBhbmQgdGhlIG9yZ2FuaXphdGlvbiBhbmQgc3BhY2UgeW91IGFyZScsXG4gICAgICAgICcgKiB0YXJnZXR0aW5nIGJ5IHVzaW5nIGBjZiB0YXJnZXRgLicsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBBbGxvd3Mgb24tcHJlbWlzZSBjb25uZWN0aXZpdHkgcHJveHlpbmcgaWYgbmVjZXNzYXJ5JyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIEBhdXRob3IgU2ViYXN0aWFuIEJsZXNzaW5nJyxcbiAgICAgICAgJyAqLycsXG4gICAgICAgIFwiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1wiLFxuICAgICAgICBcImNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XCIsXG4gICAgICAgIFwiY29uc3QgZXhlYyA9IHV0aWwucHJvbWlzaWZ5KHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjKTtcIixcbiAgICAgICAgXCJjb25zdCBzcGF3biA9IHV0aWwucHJvbWlzaWZ5KHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5zcGF3bik7XCIsXG4gICAgICAgICcnLFxuICAgICAgICAnYXN5bmMgZnVuY3Rpb24gZ2V0QXBwR3VpZChhcHBOYW1lKSB7JyxcbiAgICAgICAgJyAgY29uc3QgY21kID0gYGNmIGFwcCAke2FwcE5hbWV9IC0tZ3VpZGA7JyxcbiAgICAgICAgJyAgY29uc29sZS5sb2coY21kKTsnLFxuICAgICAgICAnICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKGNtZCk7JyxcbiAgICAgICAgJyAgaWYgKHN0ZGVycikgY29uc29sZS5sb2coYHN0ZGVycjogJHtzdGRlcnJ9YCk7JyxcbiAgICAgICAgJyAgcmV0dXJuIHN0ZG91dC50cmltKCk7JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2FzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRFbnYoYXBwR3VpZCkgeycsXG4gICAgICAgICcgIGNvbnN0IGNtZCA9IGBjZiBjdXJsIFwidjMvYXBwcy8ke2FwcEd1aWR9L2VudlwiYDsnLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhjbWQpOycsXG4gICAgICAgICcgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoY21kKTsnLFxuICAgICAgICAnICBpZiAoc3RkZXJyKSBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTsnLFxuICAgICAgICAnICByZXR1cm4gSlNPTi5wYXJzZShzdGRvdXQpLnN5c3RlbV9lbnZfanNvbjsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcnLFxuICAgICAgICAnKGFzeW5jICgpID0+IHsnLFxuICAgICAgICAnICBjb25zdCBteUFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7JyxcbiAgICAgICAgJyAgY29uc3QgYXBwTmFtZSA9IG15QXJnc1swXTsnLFxuICAgICAgICAnICBpZiAoIWFwcE5hbWUpIHsnLFxuICAgICAgICBcIiAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIENGIGFwcGxpY2F0aW9uIG5hbWUgdG8gZmV0Y2ggaXRzIGVudmlyb25tZW50IScpO1wiLFxuICAgICAgICAnICAgIHJldHVybjsnLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGxldCBlbnZGaWxlTmFtZSA9IG15QXJnc1sxXTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGVudkZpbGVOYW1lID0gZW52RmlsZU5hbWUgPyBlbnZGaWxlTmFtZSA6ICdkZWZhdWx0LWVudi5qc29uJztcIixcbiAgICAgICAgJyAgY29uc29sZS5sb2coYFdyaXRpbmcgZW52aXJvbm1lbnQgb2YgJHthcHBOYW1lfSB0byAke2VudkZpbGVOYW1lfWApOycsXG4gICAgICAgICcnLFxuICAgICAgICAnICBjb25zdCBkZWZhdWx0RW52ID0gYXdhaXQgZ2V0RGVmYXVsdEVudihhd2FpdCBnZXRBcHBHdWlkKGFwcE5hbWUpKTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgbGV0IGJSdW5Qcm94eSA9IGZhbHNlOycsXG4gICAgICAgICcgIGxldCBwcm94eVBvcnQgPSBudWxsOycsXG4gICAgICAgICcgIGxldCBwcm94eUhvc3QgPSBudWxsOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgaWYgKGRlZmF1bHRFbnZbJ1ZDQVBfU0VSVklDRVMnXVsnY29ubmVjdGl2aXR5J10pIHtcIixcbiAgICAgICAgJyAgICBwcm94eVBvcnQgPSBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9wb3J0OycsXG4gICAgICAgICcgICAgcHJveHlIb3N0ID0gZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfaG9zdDsnLFxuICAgICAgICBcIiAgICBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9ob3N0ID0gJ2xvY2FsaG9zdCc7XCIsXG4gICAgICAgICcgICAgYlJ1blByb3h5ID0gdHJ1ZTsnLFxuICAgICAgICAnICB9JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBmcy53cml0ZUZpbGUoJ2RlZmF1bHQtZW52Lmpzb24nLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0RW52LCBudWxsLCAyKSwgYXN5bmMgKGVycikgPT4ge1wiLFxuICAgICAgICAnICAgIGlmIChlcnIpIHsnLFxuICAgICAgICAnICAgICAgY29uc29sZS5lcnJvcihlcnIpOycsXG4gICAgICAgICcgICAgfSBlbHNlIGlmIChiUnVuUHJveHkpIHsnLFxuICAgICAgICAnICAgICAgY29uc29sZS5sb2coYGNmIHNzaCAke2FwcE5hbWV9IC1MICR7cHJveHlQb3J0fToke3Byb3h5SG9zdH06JHtwcm94eVBvcnR9YCk7JyxcbiAgICAgICAgXCIgICAgICBhd2FpdCBzcGF3bignY2YnLCBbYHNzaCAke2FwcE5hbWV9IC1MICR7cHJveHlQb3J0fToke3Byb3h5SG9zdH06JHtwcm94eVBvcnR9YF0sIHtcIixcbiAgICAgICAgJyAgICAgICAgc2hlbGw6IHRydWUsJyxcbiAgICAgICAgXCIgICAgICAgIHN0ZGlvOiAnaW5oZXJpdCcsXCIsXG4gICAgICAgICcgICAgICB9KTsnLFxuICAgICAgICAnICAgIH0nLFxuICAgICAgICAnICB9KTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGNvbnNvbGUubG9nKCdEb25lJyk7XCIsXG4gICAgICAgICd9KSgpOycsXG4gICAgICBdLFxuICAgICAgJ210YS55YW1sJzogW1xuICAgICAgICBcIl9zY2hlbWEtdmVyc2lvbjogJzMuMSdcIixcbiAgICAgICAgYElEOiAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9YCxcbiAgICAgICAgJ3ZlcnNpb246IDAuMC4xJyxcbiAgICAgICAgYGRlc2NyaXB0aW9uOiAke3RoaXMub3B0aW9ucy5kZXNjcmlwdGlvbn1gLFxuICAgICAgICAncGFyYW1ldGVyczonLFxuICAgICAgICAnICBlbmFibGUtcGFyYWxsZWwtZGVwbG95bWVudHM6IHRydWUnLFxuICAgICAgICAnYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICBiZWZvcmUtYWxsOicsXG4gICAgICAgICcgICAgLSBidWlsZGVyOiBjdXN0b20nLFxuICAgICAgICAnICAgICAgY29tbWFuZHM6JyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gY2knLFxuICAgICAgICAnICAgICAgICAtIG5wbSBydW4gYnVpbGQnLFxuICAgICAgICAnICAgICAgICAtIG5weCBAY2FwLWpzL2Nkcy10eXBlciBcIipcIiAtLW91dHB1dERpcmVjdG9yeSBnZW4vc3J2L0BjZHMtbW9kZWxzJyxcbiAgICAgICAgJ21vZHVsZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1zcnZgLFxuICAgICAgICAnICAgIHR5cGU6IG5vZGVqcycsXG4gICAgICAgICcgICAgcGF0aDogZ2VuL3NydicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICAgIHJlYWRpbmVzcy1oZWFsdGgtY2hlY2stdHlwZTogaHR0cCcsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLWh0dHAtZW5kcG9pbnQ6IC9oZWFsdGgnLFxuICAgICAgICAnICAgIGJ1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkZXI6IG5wbScsXG4gICAgICAgICcgICAgcHJvdmlkZXM6JyxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogc3J2LWFwaScsXG4gICAgICAgICcgICAgICAgIHByb3BlcnRpZXM6JyxcbiAgICAgICAgJyAgICAgICAgICBzcnYtdXJsOiAke2RlZmF1bHQtdXJsfScsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25zYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLmFwcGxpY2F0aW9uLmNvbnRlbnQnLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBzZXJ2aWNlLWtleTonLFxuICAgICAgICBgICAgICAgICAgICAgbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgICAgICBjb250ZW50LXRhcmdldDogdHJ1ZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29udGVudDonLFxuICAgICAgICAnICAgICAgICBpbnN0YW5jZTonLFxuICAgICAgICAnICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogT0F1dGgyVXNlclRva2VuRXhjaGFuZ2UnLFxuICAgICAgICBgICAgICAgICAgICAgICBOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1hcHAtc3J2YCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlSW5zdGFuY2VOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICBgICAgICAgICAgICAgICBUb2tlblNlcnZpY2VLZXlOYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWEta2V5YCxcbiAgICAgICAgJyAgICAgICAgICAgICAgVVJMOiB+e3Nydi1hcGkvc3J2LXVybH0nLFxuICAgICAgICBgICAgICAgICAgICAgICBzYXAuY2xvdWQuc2VydmljZTogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICcgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBuby1zb3VyY2U6IHRydWUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiLWRlcGxveWVyYCxcbiAgICAgICAgJyAgICB0eXBlOiBoZGInLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9kYicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRwYWNrOiBub2RlanNfYnVpbGRwYWNrJyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICdyZXNvdXJjZXM6JyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBwYXRoOiAuL3hzLXNlY3VyaXR5Lmpzb24nLFxuICAgICAgICAnICAgICAgc2VydmljZTogeHN1YWEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBhcHBsaWNhdGlvbicsXG4gICAgICAgICcgICAgICBjb25maWc6JyxcbiAgICAgICAgJyAgICAgICAgdGVuYW50LW1vZGU6IGRlZGljYXRlZCcsXG4gICAgICAgIGAgICAgICAgIHhzYXBwbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX1gLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWNvbm5lY3Rpdml0eWAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGNvbm5lY3Rpdml0eScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIEhUTUw1UnVudGltZV9lbmFibGVkOiB0cnVlJyxcbiAgICAgICAgJyAgICAgICAgaW5pdF9kYXRhOicsXG4gICAgICAgICcgICAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICAgIGRlc3RpbmF0aW9uczonLFxuICAgICAgICAnICAgICAgICAgICAgICAtIEF1dGhlbnRpY2F0aW9uOiBOb0F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBOYW1lOiB1aTUnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFByb3h5VHlwZTogSW50ZXJuZXQnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFR5cGU6IEhUVFAnLFxuICAgICAgICAnICAgICAgICAgICAgICAgIFVSTDogaHR0cHM6Ly91aTUuc2FwLmNvbScsXG4gICAgICAgICcgICAgICAgICAgICBleGlzdGluZ19kZXN0aW5hdGlvbnNfcG9saWN5OiB1cGRhdGUnLFxuICAgICAgICAnICAgICAgICB2ZXJzaW9uOiAxLjAuMCcsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBkZXN0aW5hdGlvbicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGxpdGUnLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgJyAgICB0eXBlOiBjb20uc2FwLnhzLmhkaS1jb250YWluZXInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGhhbmEnLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBoZGktc2hhcmVkJyxcbiAgICAgICAgJyAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICBoZGktc2VydmljZS1uYW1lOiAke3NlcnZpY2UtbmFtZX0nLFxuICAgICAgXSxcbiAgICAgICd4cy1zZWN1cml0eS5qc29uJzogWyd7JywgJyAgXCJzY29wZXNcIjogW10sJywgJyAgXCJhdHRyaWJ1dGVzXCI6IFtdLCcsICcgIFwicm9sZS10ZW1wbGF0ZXNcIjogW10nLCAnfSddLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGRiIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBkYiBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVEYlRlbXBsYXRlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZGIvc2NoZW1hLmNkcyc6IFtcbiAgICAgICAgXCJ1c2luZyB7IG1hbmFnZWQgfSBmcm9tICdAc2FwL2Nkcy9jb21tb24nO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgYG5hbWVzcGFjZSAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9O2AsXG4gICAgICAgICcnLFxuICAgICAgICBgZW50aXR5ICR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9IDogbWFuYWdlZCB7YCxcbiAgICAgICAgJyAga2V5IElEOiBJbnRlZ2VyOycsXG4gICAgICAgICcgIGRlc2NyOiBsb2NhbGl6ZWQgU3RyaW5nKDExMSk7JyxcbiAgICAgICAgJ30nLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSBkYXRhIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBkYXRhIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGB0ZXN0L2RhdGEvJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfS0ke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfS5jc3ZgO1xuICAgIGNvbnN0IGZpbGVQYXRoVGV4dHMgPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0udGV4dHMuY3N2YDtcblxuICAgIHJldHVybiB7XG4gICAgICBbZmlsZVBhdGhdOiBbXG4gICAgICAgICdJRCxjcmVhdGVkQXQsY3JlYXRlZEJ5LG1vZGlmaWVkQXQsbW9kaWZpZWRCeSxkZXNjcicsXG4gICAgICAgICcxLCwsLCxEZXNjcmlwdGlvbiAxJyxcbiAgICAgICAgJzIsLCwsLERlc2NyaXB0aW9uIDInLFxuICAgICAgICAnMywsLCwsRGVzY3JpcHRpb24gMycsXG4gICAgICBdLFxuICAgICAgW2ZpbGVQYXRoVGV4dHNdOiBbJ2xvY2FsZSxJRCxkZXNjciddLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgdGVtcGxhdGUgZmlsZXMgZm9yIHRoZSByb290IGRpcmVjdG9yeS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVSb290VGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGF0aCBpbiB0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlcykge1xuICAgICAgaWYgKHRoaXMuc2FtcGxlQ29kZUZpbGVSb290VGVtcGxhdGVzW3BhdGhdKSB7XG4gICAgICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgcGF0aCwge1xuICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlc1twYXRoXS5qb2luKCdcXG4nKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGVzIGZvciB0aGUgZGIgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZURiVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGF0aCBpbiB0aGlzLnNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXMpIHtcbiAgICAgIGlmICh0aGlzLnNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXNbcGF0aF0pIHtcbiAgICAgICAgbmV3IFNhbXBsZUZpbGUodGhpcy5wcm9qZWN0LCBwYXRoLCB7XG4gICAgICAgICAgY29udGVudHM6IHRoaXMuc2FtcGxlQ29kZUZpbGVEYlRlbXBsYXRlc1twYXRoXS5qb2luKCdcXG4nKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGVzIGZvciB0aGUgZGF0YSBkaXJlY3RvcnkuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlRGF0YVRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGhpcy5zYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXMpIHtcbiAgICAgIGlmICh0aGlzLnNhbXBsZUNvZGVGaWxlRGF0YVRlbXBsYXRlc1twYXRoXSkge1xuICAgICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHBhdGgsIHtcbiAgICAgICAgICBjb250ZW50czogdGhpcy5zYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVJvb3RUZW1wbGF0ZXMoKTtcbiAgICB0aGlzLmNyZWF0ZURiVGVtcGxhdGVzKCk7XG4gICAgdGhpcy5jcmVhdGVEYXRhVGVtcGxhdGVzKCk7XG4gIH1cbn1cbiJdfQ==