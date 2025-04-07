# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseProject <a name="BaseProject" id="@dxfrontier/dx-starter-templates.BaseProject"></a>

- *Implements:* <a href="#@dxfrontier/dx-starter-templates.IProjectKind">IProjectKind</a>

Base class for managing project configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.BaseProject.Initializer"></a>

```typescript
import { BaseProject } from '@dxfrontier/dx-starter-templates'

new BaseProject(options: BaseProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions">BaseProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/dx-starter-templates.BaseProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions">BaseProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.BaseProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/dx-starter-templates.BaseProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/dx-starter-templates.BaseProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/dx-starter-templates.BaseProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/dx-starter-templates.BaseProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/dx-starter-templates.BaseProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/dx-starter-templates.BaseProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/dx-starter-templates.BaseProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.BaseProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/dx-starter-templates.BaseProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/dx-starter-templates.BaseProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/dx-starter-templates.BaseProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/dx-starter-templates.BaseProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/dx-starter-templates.BaseProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.BaseProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.BaseProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/dx-starter-templates.BaseProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.BaseProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/dx-starter-templates.BaseProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/dx-starter-templates.BaseProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/dx-starter-templates.BaseProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/dx-starter-templates.BaseProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.BaseProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/dx-starter-templates.BaseProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.BaseProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/dx-starter-templates.BaseProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.BaseProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/dx-starter-templates.BaseProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.BaseProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/dx-starter-templates.BaseProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/dx-starter-templates.BaseProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/dx-starter-templates.BaseProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.BaseProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/dx-starter-templates.BaseProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/dx-starter-templates.BaseProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/dx-starter-templates.BaseProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.BaseProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/dx-starter-templates.BaseProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.BaseProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/dx-starter-templates.BaseProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/dx-starter-templates.BaseProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/dx-starter-templates.BaseProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/dx-starter-templates.BaseProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/dx-starter-templates.BaseProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.BaseProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/dx-starter-templates.BaseProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.BaseProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/dx-starter-templates.BaseProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/dx-starter-templates.BaseProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/dx-starter-templates.BaseProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.BaseProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/dx-starter-templates.BaseProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.BaseProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/dx-starter-templates.BaseProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/dx-starter-templates.BaseProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/dx-starter-templates.BaseProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.BaseProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/dx-starter-templates.BaseProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.BaseProject.isConstruct"></a>

```typescript
import { BaseProject } from '@dxfrontier/dx-starter-templates'

BaseProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.BaseProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/dx-starter-templates.BaseProject.isProject"></a>

```typescript
import { BaseProject } from '@dxfrontier/dx-starter-templates'

BaseProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.BaseProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/dx-starter-templates.BaseProject.of"></a>

```typescript
import { BaseProject } from '@dxfrontier/dx-starter-templates'

BaseProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/dx-starter-templates.BaseProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.commitlintConfig">commitlintConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase">CommitLintConfigBase</a></code> | Configuration for commitlint settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.devContainerConfig">devContainerConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase">DevContainerConfigBase</a></code> | Configuration for development container settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.eslintConfig">eslintConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase">EsLintConfigBase</a></code> | Configuration for ESLint settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.gitConfig">gitConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase">GitConfigBase</a></code> | Configuration for Git settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.githubConfig">githubConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase">GitHubConfigBase</a></code> | Configuration for GitHub settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.huskyConfig">huskyConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase">HuskyConfigBase</a></code> | Configuration for Husky settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.issuesConfig">issuesConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase">IssuesConfigBase</a></code> | Configuration for Githug issues in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.jestConfig">jestConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase">JestConfigBase</a></code> | Configuration for Jest settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.npmConfig">npmConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase">NpmConfigBase</a></code> | Configuration for NPM settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.prettierConfig">prettierConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase">PrettierConfigBase</a></code> | Configuration for Prettier settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.sampleCodeConfig">sampleCodeConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase">SampleCodeConfigBase</a></code> | Configuration for Sample Code in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.typescript">typescript</a></code> | <code>boolean</code> | This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.typescriptConfig">typescriptConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase">TypeScriptConfigBase</a></code> | Configuration for TypeScript settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.vscodeConfig">vscodeConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase">VsCodeConfigBase</a></code> | Configuration for VS Code settings in the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.BaseProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/dx-starter-templates.BaseProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/dx-starter-templates.BaseProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/dx-starter-templates.BaseProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/dx-starter-templates.BaseProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.BaseProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/dx-starter-templates.BaseProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/dx-starter-templates.BaseProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/dx-starter-templates.BaseProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/dx-starter-templates.BaseProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/dx-starter-templates.BaseProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.BaseProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/dx-starter-templates.BaseProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/dx-starter-templates.BaseProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/dx-starter-templates.BaseProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/dx-starter-templates.BaseProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/dx-starter-templates.BaseProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/dx-starter-templates.BaseProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/dx-starter-templates.BaseProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/dx-starter-templates.BaseProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/dx-starter-templates.BaseProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/dx-starter-templates.BaseProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/dx-starter-templates.BaseProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/dx-starter-templates.BaseProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/dx-starter-templates.BaseProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/dx-starter-templates.BaseProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/dx-starter-templates.BaseProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/dx-starter-templates.BaseProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/dx-starter-templates.BaseProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/dx-starter-templates.BaseProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/dx-starter-templates.BaseProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/dx-starter-templates.BaseProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/dx-starter-templates.BaseProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/dx-starter-templates.BaseProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/dx-starter-templates.BaseProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/dx-starter-templates.BaseProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/dx-starter-templates.BaseProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/dx-starter-templates.BaseProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/dx-starter-templates.BaseProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/dx-starter-templates.BaseProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/dx-starter-templates.BaseProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/dx-starter-templates.BaseProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/dx-starter-templates.BaseProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/dx-starter-templates.BaseProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/dx-starter-templates.BaseProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/dx-starter-templates.BaseProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/dx-starter-templates.BaseProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/dx-starter-templates.BaseProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/dx-starter-templates.BaseProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/dx-starter-templates.BaseProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/dx-starter-templates.BaseProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/dx-starter-templates.BaseProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/dx-starter-templates.BaseProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/dx-starter-templates.BaseProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/dx-starter-templates.BaseProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/dx-starter-templates.BaseProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/dx-starter-templates.BaseProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/dx-starter-templates.BaseProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/dx-starter-templates.BaseProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/dx-starter-templates.BaseProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/dx-starter-templates.BaseProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/dx-starter-templates.BaseProject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

##### `commitlintConfig`<sup>Optional</sup> <a name="commitlintConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.commitlintConfig"></a>

```typescript
public readonly commitlintConfig: CommitLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase">CommitLintConfigBase</a>

Configuration for commitlint settings in the project.

This property is initialized if `commitlintEnabled` option is provided during project creation.

---

##### `devContainerConfig`<sup>Optional</sup> <a name="devContainerConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.devContainerConfig"></a>

```typescript
public readonly devContainerConfig: DevContainerConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase">DevContainerConfigBase</a>

Configuration for development container settings in the project.

This property is initialized if `devContainerEnabled` option is provided during project creation.

---

##### `eslintConfig`<sup>Optional</sup> <a name="eslintConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.eslintConfig"></a>

```typescript
public readonly eslintConfig: EsLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase">EsLintConfigBase</a>

Configuration for ESLint settings in the project.

This property is initialized if `eslintEnabled` option is provided during project creation.

---

##### `gitConfig`<sup>Optional</sup> <a name="gitConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.gitConfig"></a>

```typescript
public readonly gitConfig: GitConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitConfigBase">GitConfigBase</a>

Configuration for Git settings in the project.

This property is always initialized as `gitConfig` when the project is created.

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.githubConfig"></a>

```typescript
public readonly githubConfig: GitHubConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase">GitHubConfigBase</a>

Configuration for GitHub settings in the project.

This property is initialized if `githubEnabled` option is provided during project creation.

---

##### `huskyConfig`<sup>Optional</sup> <a name="huskyConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.huskyConfig"></a>

```typescript
public readonly huskyConfig: HuskyConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase">HuskyConfigBase</a>

Configuration for Husky settings in the project.

This property is initialized if `huskyEnabled` option is provided during project creation.

---

##### `issuesConfig`<sup>Optional</sup> <a name="issuesConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.issuesConfig"></a>

```typescript
public readonly issuesConfig: IssuesConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase">IssuesConfigBase</a>

Configuration for Githug issues in the project.

This property is initialized if `issuesEnabled` option is provided during project creation.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.JestConfigBase">JestConfigBase</a>

Configuration for Jest settings in the project.

This property is initialized if `jestEnabled` option is provided during project creation.

---

##### `npmConfig`<sup>Optional</sup> <a name="npmConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.npmConfig"></a>

```typescript
public readonly npmConfig: NpmConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.NpmConfigBase">NpmConfigBase</a>

Configuration for NPM settings in the project.

This property is always initialized as `npmConfig` when the project is created.

---

##### `prettierConfig`<sup>Optional</sup> <a name="prettierConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.prettierConfig"></a>

```typescript
public readonly prettierConfig: PrettierConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase">PrettierConfigBase</a>

Configuration for Prettier settings in the project.

This property is initialized if `prettierEnabled` option is provided during project creation.

---

##### `sampleCodeConfig`<sup>Optional</sup> <a name="sampleCodeConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.sampleCodeConfig"></a>

```typescript
public readonly sampleCodeConfig: SampleCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase">SampleCodeConfigBase</a>

Configuration for Sample Code in the project.

This property is initialized if `sampleCodeEnabled` option is provided during project creation.

---

##### `typescript`<sup>Optional</sup> <a name="typescript" id="@dxfrontier/dx-starter-templates.BaseProject.property.typescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* boolean

This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="typescriptConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.typescriptConfig"></a>

```typescript
public readonly typescriptConfig: TypeScriptConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase">TypeScriptConfigBase</a>

Configuration for TypeScript settings in the project.

This property is always initialized as `typescriptConfig` when the project is created.

---

##### `vscodeConfig`<sup>Optional</sup> <a name="vscodeConfig" id="@dxfrontier/dx-starter-templates.BaseProject.property.vscodeConfig"></a>

```typescript
public readonly vscodeConfig: VsCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase">VsCodeConfigBase</a>

Configuration for VS Code settings in the project.

This property is initialized if `vscodeEnabled` option is provided during project creation.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/dx-starter-templates.BaseProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/dx-starter-templates.BaseProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### CapServiceProject <a name="CapServiceProject" id="@dxfrontier/dx-starter-templates.CapServiceProject"></a>

Base class for managing project CapService configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.CapServiceProject.Initializer"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/dx-starter-templates'

new CapServiceProject(options: CapServiceProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions">CapServiceProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/dx-starter-templates.CapServiceProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions">CapServiceProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.CapServiceProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/dx-starter-templates.CapServiceProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/dx-starter-templates.CapServiceProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/dx-starter-templates.CapServiceProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/dx-starter-templates.CapServiceProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/dx-starter-templates.CapServiceProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/dx-starter-templates.CapServiceProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.CapServiceProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/dx-starter-templates.CapServiceProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/dx-starter-templates.CapServiceProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/dx-starter-templates.CapServiceProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/dx-starter-templates.CapServiceProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/dx-starter-templates.CapServiceProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.CapServiceProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.CapServiceProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.CapServiceProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/dx-starter-templates.CapServiceProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/dx-starter-templates.CapServiceProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/dx-starter-templates.CapServiceProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/dx-starter-templates.CapServiceProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.CapServiceProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/dx-starter-templates.CapServiceProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.CapServiceProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/dx-starter-templates.CapServiceProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.CapServiceProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/dx-starter-templates.CapServiceProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.CapServiceProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/dx-starter-templates.CapServiceProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/dx-starter-templates.CapServiceProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/dx-starter-templates.CapServiceProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.CapServiceProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/dx-starter-templates.CapServiceProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/dx-starter-templates.CapServiceProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/dx-starter-templates.CapServiceProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.CapServiceProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/dx-starter-templates.CapServiceProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.CapServiceProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/dx-starter-templates.CapServiceProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/dx-starter-templates.CapServiceProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/dx-starter-templates.CapServiceProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/dx-starter-templates.CapServiceProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/dx-starter-templates.CapServiceProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.CapServiceProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/dx-starter-templates.CapServiceProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.CapServiceProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/dx-starter-templates.CapServiceProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/dx-starter-templates.CapServiceProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/dx-starter-templates.CapServiceProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.CapServiceProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/dx-starter-templates.CapServiceProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.CapServiceProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/dx-starter-templates.CapServiceProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/dx-starter-templates.CapServiceProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/dx-starter-templates.CapServiceProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.CapServiceProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/dx-starter-templates.CapServiceProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.CapServiceProject.isConstruct"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/dx-starter-templates'

CapServiceProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.CapServiceProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/dx-starter-templates.CapServiceProject.isProject"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/dx-starter-templates'

CapServiceProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.CapServiceProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/dx-starter-templates.CapServiceProject.of"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/dx-starter-templates'

CapServiceProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/dx-starter-templates.CapServiceProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.commitlintConfig">commitlintConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase">CommitLintConfigBase</a></code> | Configuration for commitlint settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.devContainerConfig">devContainerConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase">DevContainerConfigBase</a></code> | Configuration for development container settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.eslintConfig">eslintConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase">EsLintConfigBase</a></code> | Configuration for ESLint settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.gitConfig">gitConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase">GitConfigBase</a></code> | Configuration for Git settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.githubConfig">githubConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase">GitHubConfigBase</a></code> | Configuration for GitHub settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.huskyConfig">huskyConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase">HuskyConfigBase</a></code> | Configuration for Husky settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.issuesConfig">issuesConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase">IssuesConfigBase</a></code> | Configuration for Githug issues in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.jestConfig">jestConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase">JestConfigBase</a></code> | Configuration for Jest settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.npmConfig">npmConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase">NpmConfigBase</a></code> | Configuration for NPM settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.prettierConfig">prettierConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase">PrettierConfigBase</a></code> | Configuration for Prettier settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.sampleCodeConfig">sampleCodeConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase">SampleCodeConfigBase</a></code> | Configuration for Sample Code in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.typescript">typescript</a></code> | <code>boolean</code> | This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.typescriptConfig">typescriptConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase">TypeScriptConfigBase</a></code> | Configuration for TypeScript settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.vscodeConfig">vscodeConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase">VsCodeConfigBase</a></code> | Configuration for VS Code settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.cleanCommand">cleanCommand</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

##### `commitlintConfig`<sup>Optional</sup> <a name="commitlintConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.commitlintConfig"></a>

```typescript
public readonly commitlintConfig: CommitLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase">CommitLintConfigBase</a>

Configuration for commitlint settings in the project.

This property is initialized if `commitlintEnabled` option is provided during project creation.

---

##### `devContainerConfig`<sup>Optional</sup> <a name="devContainerConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.devContainerConfig"></a>

```typescript
public readonly devContainerConfig: DevContainerConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase">DevContainerConfigBase</a>

Configuration for development container settings in the project.

This property is initialized if `devContainerEnabled` option is provided during project creation.

---

##### `eslintConfig`<sup>Optional</sup> <a name="eslintConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.eslintConfig"></a>

```typescript
public readonly eslintConfig: EsLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase">EsLintConfigBase</a>

Configuration for ESLint settings in the project.

This property is initialized if `eslintEnabled` option is provided during project creation.

---

##### `gitConfig`<sup>Optional</sup> <a name="gitConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.gitConfig"></a>

```typescript
public readonly gitConfig: GitConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitConfigBase">GitConfigBase</a>

Configuration for Git settings in the project.

This property is always initialized as `gitConfig` when the project is created.

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.githubConfig"></a>

```typescript
public readonly githubConfig: GitHubConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase">GitHubConfigBase</a>

Configuration for GitHub settings in the project.

This property is initialized if `githubEnabled` option is provided during project creation.

---

##### `huskyConfig`<sup>Optional</sup> <a name="huskyConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.huskyConfig"></a>

```typescript
public readonly huskyConfig: HuskyConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase">HuskyConfigBase</a>

Configuration for Husky settings in the project.

This property is initialized if `huskyEnabled` option is provided during project creation.

---

##### `issuesConfig`<sup>Optional</sup> <a name="issuesConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.issuesConfig"></a>

```typescript
public readonly issuesConfig: IssuesConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase">IssuesConfigBase</a>

Configuration for Githug issues in the project.

This property is initialized if `issuesEnabled` option is provided during project creation.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.JestConfigBase">JestConfigBase</a>

Configuration for Jest settings in the project.

This property is initialized if `jestEnabled` option is provided during project creation.

---

##### `npmConfig`<sup>Optional</sup> <a name="npmConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.npmConfig"></a>

```typescript
public readonly npmConfig: NpmConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.NpmConfigBase">NpmConfigBase</a>

Configuration for NPM settings in the project.

This property is always initialized as `npmConfig` when the project is created.

---

##### `prettierConfig`<sup>Optional</sup> <a name="prettierConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.prettierConfig"></a>

```typescript
public readonly prettierConfig: PrettierConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase">PrettierConfigBase</a>

Configuration for Prettier settings in the project.

This property is initialized if `prettierEnabled` option is provided during project creation.

---

##### `sampleCodeConfig`<sup>Optional</sup> <a name="sampleCodeConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.sampleCodeConfig"></a>

```typescript
public readonly sampleCodeConfig: SampleCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase">SampleCodeConfigBase</a>

Configuration for Sample Code in the project.

This property is initialized if `sampleCodeEnabled` option is provided during project creation.

---

##### `typescript`<sup>Optional</sup> <a name="typescript" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.typescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* boolean

This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="typescriptConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.typescriptConfig"></a>

```typescript
public readonly typescriptConfig: TypeScriptConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase">TypeScriptConfigBase</a>

Configuration for TypeScript settings in the project.

This property is always initialized as `typescriptConfig` when the project is created.

---

##### `vscodeConfig`<sup>Optional</sup> <a name="vscodeConfig" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.vscodeConfig"></a>

```typescript
public readonly vscodeConfig: VsCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase">VsCodeConfigBase</a>

Configuration for VS Code settings in the project.

This property is initialized if `vscodeEnabled` option is provided during project creation.

---

##### `cleanCommand`<sup>Required</sup> <a name="cleanCommand" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.cleanCommand"></a>

```typescript
public readonly cleanCommand: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/dx-starter-templates.CapServiceProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### CommitLintConfigBase <a name="CommitLintConfigBase" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase"></a>

Base class for implementing all relevant CommitLint configuration.

This class acts as a base for handling CommitLint configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.Initializer"></a>

```typescript
import { CommitLintConfigBase } from '@dxfrontier/dx-starter-templates'

new CommitLintConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.isConstruct"></a>

```typescript
import { CommitLintConfigBase } from '@dxfrontier/dx-starter-templates'

CommitLintConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.isComponent"></a>

```typescript
import { CommitLintConfigBase } from '@dxfrontier/dx-starter-templates'

CommitLintConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.CommitLintConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### CommitLintConfigCapService <a name="CommitLintConfigCapService" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService"></a>

Implementing all relevant CommitLint configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.Initializer"></a>

```typescript
import { CommitLintConfigCapService } from '@dxfrontier/dx-starter-templates'

new CommitLintConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.isConstruct"></a>

```typescript
import { CommitLintConfigCapService } from '@dxfrontier/dx-starter-templates'

CommitLintConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.isComponent"></a>

```typescript
import { CommitLintConfigCapService } from '@dxfrontier/dx-starter-templates'

CommitLintConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.CommitLintConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### CommitLintConfigGitHubAction <a name="CommitLintConfigGitHubAction" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction"></a>

Implementing all relevant CommitLint configuration for the GitHubAction project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.Initializer"></a>

```typescript
import { CommitLintConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

new CommitLintConfigGitHubAction(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.isConstruct"></a>

```typescript
import { CommitLintConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

CommitLintConfigGitHubAction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.isComponent"></a>

```typescript
import { CommitLintConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

CommitLintConfigGitHubAction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.CommitLintConfigGitHubAction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Config <a name="Config" id="@dxfrontier/dx-starter-templates.Config"></a>

Base class for creating and managing project configurations.

This class allows configuring a project using different strategies.
It requires the project to be either a `BaseProject` or `JsiiProject`.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.Config.Initializer"></a>

```typescript
import { Config } from '@dxfrontier/dx-starter-templates'

new Config(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.Config.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.Config.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.Config.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.Config.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.Config.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.Config.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.Config.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.Config.isConstruct"></a>

```typescript
import { Config } from '@dxfrontier/dx-starter-templates'

Config.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.Config.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.Config.isComponent"></a>

```typescript
import { Config } from '@dxfrontier/dx-starter-templates'

Config.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.Config.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.Config.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.Config.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.Config.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### DevContainerConfigBase <a name="DevContainerConfigBase" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase"></a>

Base class for implementing all relevant DevContainer configuration.

This class acts as a base for handling DevContainer configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.Initializer"></a>

```typescript
import { DevContainerConfigBase } from '@dxfrontier/dx-starter-templates'

new DevContainerConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.isConstruct"></a>

```typescript
import { DevContainerConfigBase } from '@dxfrontier/dx-starter-templates'

DevContainerConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.isComponent"></a>

```typescript
import { DevContainerConfigBase } from '@dxfrontier/dx-starter-templates'

DevContainerConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.DevContainerConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### DevContainerConfigCapService <a name="DevContainerConfigCapService" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService"></a>

Implementing all relevant DevContainer configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.Initializer"></a>

```typescript
import { DevContainerConfigCapService } from '@dxfrontier/dx-starter-templates'

new DevContainerConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.isConstruct"></a>

```typescript
import { DevContainerConfigCapService } from '@dxfrontier/dx-starter-templates'

DevContainerConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.isComponent"></a>

```typescript
import { DevContainerConfigCapService } from '@dxfrontier/dx-starter-templates'

DevContainerConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.DevContainerConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### EsLintConfigBase <a name="EsLintConfigBase" id="@dxfrontier/dx-starter-templates.EsLintConfigBase"></a>

Base class for implementing all relevant EsLint configuration.

This class acts as a base for handling EsLint configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.Initializer"></a>

```typescript
import { EsLintConfigBase } from '@dxfrontier/dx-starter-templates'

new EsLintConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.addRules">addRules</a></code> | Adds custom linting rules to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

##### `addRules` <a name="addRules" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.addRules"></a>

```typescript
public addRules(rules: {[ key: string ]: string}): void
```

Adds custom linting rules to the project's configuration.

###### `rules`<sup>Required</sup> <a name="rules" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.addRules.parameter.rules"></a>

- *Type:* {[ key: string ]: string}

A record of rule names and their corresponding configurations.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.isConstruct"></a>

```typescript
import { EsLintConfigBase } from '@dxfrontier/dx-starter-templates'

EsLintConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.isComponent"></a>

```typescript
import { EsLintConfigBase } from '@dxfrontier/dx-starter-templates'

EsLintConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.EsLintConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### EsLintConfigCapService <a name="EsLintConfigCapService" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService"></a>

Implementing all relevant EsLint configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.Initializer"></a>

```typescript
import { EsLintConfigCapService } from '@dxfrontier/dx-starter-templates'

new EsLintConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.addRules">addRules</a></code> | Adds custom linting rules to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

##### `addRules` <a name="addRules" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.addRules"></a>

```typescript
public addRules(rules: {[ key: string ]: string}): void
```

Adds custom linting rules to the project's configuration.

###### `rules`<sup>Required</sup> <a name="rules" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.addRules.parameter.rules"></a>

- *Type:* {[ key: string ]: string}

A record of rule names and their corresponding configurations.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.isConstruct"></a>

```typescript
import { EsLintConfigCapService } from '@dxfrontier/dx-starter-templates'

EsLintConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.isComponent"></a>

```typescript
import { EsLintConfigCapService } from '@dxfrontier/dx-starter-templates'

EsLintConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.EsLintConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitConfigBase <a name="GitConfigBase" id="@dxfrontier/dx-starter-templates.GitConfigBase"></a>

Base class for implementing all relevant Git configuration.

This class acts as a base for handling Git configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.GitConfigBase.Initializer"></a>

```typescript
import { GitConfigBase } from '@dxfrontier/dx-starter-templates'

new GitConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.GitConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.GitConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.GitConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.GitConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.GitConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.GitConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.GitConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/dx-starter-templates.GitConfigBase.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/dx-starter-templates.GitConfigBase.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.GitConfigBase.isConstruct"></a>

```typescript
import { GitConfigBase } from '@dxfrontier/dx-starter-templates'

GitConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.GitConfigBase.isComponent"></a>

```typescript
import { GitConfigBase } from '@dxfrontier/dx-starter-templates'

GitConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.GitConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.GitConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitConfigCapService <a name="GitConfigCapService" id="@dxfrontier/dx-starter-templates.GitConfigCapService"></a>

Implementing all relevant Git configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.GitConfigCapService.Initializer"></a>

```typescript
import { GitConfigCapService } from '@dxfrontier/dx-starter-templates'

new GitConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.GitConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.GitConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.GitConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.GitConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.GitConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.GitConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.GitConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/dx-starter-templates.GitConfigCapService.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/dx-starter-templates.GitConfigCapService.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.GitConfigCapService.isConstruct"></a>

```typescript
import { GitConfigCapService } from '@dxfrontier/dx-starter-templates'

GitConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.GitConfigCapService.isComponent"></a>

```typescript
import { GitConfigCapService } from '@dxfrontier/dx-starter-templates'

GitConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.GitConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.GitConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitHubActionProject <a name="GitHubActionProject" id="@dxfrontier/dx-starter-templates.GitHubActionProject"></a>

Base class for managing project GitHubAction configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.GitHubActionProject.Initializer"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/dx-starter-templates'

new GitHubActionProject(options: GitHubActionProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions">GitHubActionProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/dx-starter-templates.GitHubActionProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions">GitHubActionProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.GitHubActionProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/dx-starter-templates.GitHubActionProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/dx-starter-templates.GitHubActionProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.GitHubActionProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.GitHubActionProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.GitHubActionProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/dx-starter-templates.GitHubActionProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/dx-starter-templates.GitHubActionProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/dx-starter-templates.GitHubActionProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.GitHubActionProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/dx-starter-templates.GitHubActionProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.GitHubActionProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/dx-starter-templates.GitHubActionProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/dx-starter-templates.GitHubActionProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.GitHubActionProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/dx-starter-templates.GitHubActionProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.GitHubActionProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/dx-starter-templates.GitHubActionProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/dx-starter-templates.GitHubActionProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/dx-starter-templates.GitHubActionProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.GitHubActionProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/dx-starter-templates.GitHubActionProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.GitHubActionProject.isConstruct"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/dx-starter-templates'

GitHubActionProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitHubActionProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/dx-starter-templates.GitHubActionProject.isProject"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/dx-starter-templates'

GitHubActionProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitHubActionProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/dx-starter-templates.GitHubActionProject.of"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/dx-starter-templates'

GitHubActionProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/dx-starter-templates.GitHubActionProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.commitlintConfig">commitlintConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase">CommitLintConfigBase</a></code> | Configuration for commitlint settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.devContainerConfig">devContainerConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase">DevContainerConfigBase</a></code> | Configuration for development container settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.eslintConfig">eslintConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase">EsLintConfigBase</a></code> | Configuration for ESLint settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.gitConfig">gitConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase">GitConfigBase</a></code> | Configuration for Git settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.githubConfig">githubConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase">GitHubConfigBase</a></code> | Configuration for GitHub settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.huskyConfig">huskyConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase">HuskyConfigBase</a></code> | Configuration for Husky settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.issuesConfig">issuesConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase">IssuesConfigBase</a></code> | Configuration for Githug issues in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.jestConfig">jestConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase">JestConfigBase</a></code> | Configuration for Jest settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.npmConfig">npmConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase">NpmConfigBase</a></code> | Configuration for NPM settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.prettierConfig">prettierConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase">PrettierConfigBase</a></code> | Configuration for Prettier settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.sampleCodeConfig">sampleCodeConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase">SampleCodeConfigBase</a></code> | Configuration for Sample Code in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.typescript">typescript</a></code> | <code>boolean</code> | This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.typescriptConfig">typescriptConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase">TypeScriptConfigBase</a></code> | Configuration for TypeScript settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.vscodeConfig">vscodeConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase">VsCodeConfigBase</a></code> | Configuration for VS Code settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.cleanCommand">cleanCommand</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

##### `commitlintConfig`<sup>Optional</sup> <a name="commitlintConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.commitlintConfig"></a>

```typescript
public readonly commitlintConfig: CommitLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase">CommitLintConfigBase</a>

Configuration for commitlint settings in the project.

This property is initialized if `commitlintEnabled` option is provided during project creation.

---

##### `devContainerConfig`<sup>Optional</sup> <a name="devContainerConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.devContainerConfig"></a>

```typescript
public readonly devContainerConfig: DevContainerConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase">DevContainerConfigBase</a>

Configuration for development container settings in the project.

This property is initialized if `devContainerEnabled` option is provided during project creation.

---

##### `eslintConfig`<sup>Optional</sup> <a name="eslintConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.eslintConfig"></a>

```typescript
public readonly eslintConfig: EsLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase">EsLintConfigBase</a>

Configuration for ESLint settings in the project.

This property is initialized if `eslintEnabled` option is provided during project creation.

---

##### `gitConfig`<sup>Optional</sup> <a name="gitConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.gitConfig"></a>

```typescript
public readonly gitConfig: GitConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitConfigBase">GitConfigBase</a>

Configuration for Git settings in the project.

This property is always initialized as `gitConfig` when the project is created.

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.githubConfig"></a>

```typescript
public readonly githubConfig: GitHubConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase">GitHubConfigBase</a>

Configuration for GitHub settings in the project.

This property is initialized if `githubEnabled` option is provided during project creation.

---

##### `huskyConfig`<sup>Optional</sup> <a name="huskyConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.huskyConfig"></a>

```typescript
public readonly huskyConfig: HuskyConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase">HuskyConfigBase</a>

Configuration for Husky settings in the project.

This property is initialized if `huskyEnabled` option is provided during project creation.

---

##### `issuesConfig`<sup>Optional</sup> <a name="issuesConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.issuesConfig"></a>

```typescript
public readonly issuesConfig: IssuesConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase">IssuesConfigBase</a>

Configuration for Githug issues in the project.

This property is initialized if `issuesEnabled` option is provided during project creation.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.JestConfigBase">JestConfigBase</a>

Configuration for Jest settings in the project.

This property is initialized if `jestEnabled` option is provided during project creation.

---

##### `npmConfig`<sup>Optional</sup> <a name="npmConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.npmConfig"></a>

```typescript
public readonly npmConfig: NpmConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.NpmConfigBase">NpmConfigBase</a>

Configuration for NPM settings in the project.

This property is always initialized as `npmConfig` when the project is created.

---

##### `prettierConfig`<sup>Optional</sup> <a name="prettierConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.prettierConfig"></a>

```typescript
public readonly prettierConfig: PrettierConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase">PrettierConfigBase</a>

Configuration for Prettier settings in the project.

This property is initialized if `prettierEnabled` option is provided during project creation.

---

##### `sampleCodeConfig`<sup>Optional</sup> <a name="sampleCodeConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.sampleCodeConfig"></a>

```typescript
public readonly sampleCodeConfig: SampleCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase">SampleCodeConfigBase</a>

Configuration for Sample Code in the project.

This property is initialized if `sampleCodeEnabled` option is provided during project creation.

---

##### `typescript`<sup>Optional</sup> <a name="typescript" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.typescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* boolean

This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="typescriptConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.typescriptConfig"></a>

```typescript
public readonly typescriptConfig: TypeScriptConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase">TypeScriptConfigBase</a>

Configuration for TypeScript settings in the project.

This property is always initialized as `typescriptConfig` when the project is created.

---

##### `vscodeConfig`<sup>Optional</sup> <a name="vscodeConfig" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.vscodeConfig"></a>

```typescript
public readonly vscodeConfig: VsCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase">VsCodeConfigBase</a>

Configuration for VS Code settings in the project.

This property is initialized if `vscodeEnabled` option is provided during project creation.

---

##### `cleanCommand`<sup>Required</sup> <a name="cleanCommand" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.cleanCommand"></a>

```typescript
public readonly cleanCommand: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/dx-starter-templates.GitHubActionProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### GitHubConfigBase <a name="GitHubConfigBase" id="@dxfrontier/dx-starter-templates.GitHubConfigBase"></a>

Base class for implementing all relevant GitHub configuration.

This class acts as a base for handling GitHub configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.Initializer"></a>

```typescript
import { GitHubConfigBase } from '@dxfrontier/dx-starter-templates'

new GitHubConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.addAttributePatterns">addAttributePatterns</a></code> | Adds custom attributes patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addAttributePatterns` <a name="addAttributePatterns" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.addAttributePatterns"></a>

```typescript
public addAttributePatterns(patterns: string[]): void
```

Adds custom attributes patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.addAttributePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be added as attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.isConstruct"></a>

```typescript
import { GitHubConfigBase } from '@dxfrontier/dx-starter-templates'

GitHubConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.isComponent"></a>

```typescript
import { GitHubConfigBase } from '@dxfrontier/dx-starter-templates'

GitHubConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.GitHubConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitHubConfigCapService <a name="GitHubConfigCapService" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService"></a>

Implementing all relevant GitHub configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.Initializer"></a>

```typescript
import { GitHubConfigCapService } from '@dxfrontier/dx-starter-templates'

new GitHubConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.addAttributePatterns">addAttributePatterns</a></code> | Adds custom attributes patterns to the project's configuration. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.createDeploymentWorkflow">createDeploymentWorkflow</a></code> | Creates a deployment workflow template file. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addAttributePatterns` <a name="addAttributePatterns" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.addAttributePatterns"></a>

```typescript
public addAttributePatterns(patterns: string[]): void
```

Adds custom attributes patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.addAttributePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be added as attributes.

---

##### `createDeploymentWorkflow` <a name="createDeploymentWorkflow" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.createDeploymentWorkflow"></a>

```typescript
public createDeploymentWorkflow(): void
```

Creates a deployment workflow template file.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.isConstruct"></a>

```typescript
import { GitHubConfigCapService } from '@dxfrontier/dx-starter-templates'

GitHubConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.isComponent"></a>

```typescript
import { GitHubConfigCapService } from '@dxfrontier/dx-starter-templates'

GitHubConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.GitHubConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### HuskyConfigBase <a name="HuskyConfigBase" id="@dxfrontier/dx-starter-templates.HuskyConfigBase"></a>

Base class for implementing all relevant Husky configuration.

This class acts as a base for handling Husky configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.Initializer"></a>

```typescript
import { HuskyConfigBase } from '@dxfrontier/dx-starter-templates'

new HuskyConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.isConstruct"></a>

```typescript
import { HuskyConfigBase } from '@dxfrontier/dx-starter-templates'

HuskyConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.isComponent"></a>

```typescript
import { HuskyConfigBase } from '@dxfrontier/dx-starter-templates'

HuskyConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.HuskyConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### HuskyConfigCapService <a name="HuskyConfigCapService" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService"></a>

Implementing all relevant Husky configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.Initializer"></a>

```typescript
import { HuskyConfigCapService } from '@dxfrontier/dx-starter-templates'

new HuskyConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.isConstruct"></a>

```typescript
import { HuskyConfigCapService } from '@dxfrontier/dx-starter-templates'

HuskyConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.isComponent"></a>

```typescript
import { HuskyConfigCapService } from '@dxfrontier/dx-starter-templates'

HuskyConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.HuskyConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### HuskyConfigJsii <a name="HuskyConfigJsii" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii"></a>

Implementing all relevant Husky configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.Initializer"></a>

```typescript
import { HuskyConfigJsii } from '@dxfrontier/dx-starter-templates'

new HuskyConfigJsii(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.isConstruct"></a>

```typescript
import { HuskyConfigJsii } from '@dxfrontier/dx-starter-templates'

HuskyConfigJsii.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.isComponent"></a>

```typescript
import { HuskyConfigJsii } from '@dxfrontier/dx-starter-templates'

HuskyConfigJsii.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigJsii.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.HuskyConfigJsii.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### IssuesConfigBase <a name="IssuesConfigBase" id="@dxfrontier/dx-starter-templates.IssuesConfigBase"></a>

Base class for implementing all relevant GitHub configuration.

This class acts as a base for handling GitHub configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.Initializer"></a>

```typescript
import { IssuesConfigBase } from '@dxfrontier/dx-starter-templates'

new IssuesConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.isConstruct"></a>

```typescript
import { IssuesConfigBase } from '@dxfrontier/dx-starter-templates'

IssuesConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.isComponent"></a>

```typescript
import { IssuesConfigBase } from '@dxfrontier/dx-starter-templates'

IssuesConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.IssuesConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### JestConfigBase <a name="JestConfigBase" id="@dxfrontier/dx-starter-templates.JestConfigBase"></a>

Base class for implementing all relevant Jest configuration.

This class acts as a base for handling Jest configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.JestConfigBase.Initializer"></a>

```typescript
import { JestConfigBase } from '@dxfrontier/dx-starter-templates'

new JestConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.JestConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.JestConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.JestConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.JestConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.JestConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.JestConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.JestConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.JestConfigBase.isConstruct"></a>

```typescript
import { JestConfigBase } from '@dxfrontier/dx-starter-templates'

JestConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.JestConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.JestConfigBase.isComponent"></a>

```typescript
import { JestConfigBase } from '@dxfrontier/dx-starter-templates'

JestConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.JestConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.JestConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.JestConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### JestConfigCapService <a name="JestConfigCapService" id="@dxfrontier/dx-starter-templates.JestConfigCapService"></a>

Implementing all relevant Jest configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.JestConfigCapService.Initializer"></a>

```typescript
import { JestConfigCapService } from '@dxfrontier/dx-starter-templates'

new JestConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.JestConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.JestConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.JestConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.JestConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.JestConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.JestConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.JestConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.JestConfigCapService.isConstruct"></a>

```typescript
import { JestConfigCapService } from '@dxfrontier/dx-starter-templates'

JestConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.JestConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.JestConfigCapService.isComponent"></a>

```typescript
import { JestConfigCapService } from '@dxfrontier/dx-starter-templates'

JestConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.JestConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.JestConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.JestConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.JestConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### JsiiProject <a name="JsiiProject" id="@dxfrontier/dx-starter-templates.JsiiProject"></a>

- *Implements:* <a href="#@dxfrontier/dx-starter-templates.IProjectKind">IProjectKind</a>

Base class for managing project Jsii configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.JsiiProject.Initializer"></a>

```typescript
import { JsiiProject } from '@dxfrontier/dx-starter-templates'

new JsiiProject(options: JsiiProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions">JsiiProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/dx-starter-templates.JsiiProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions">JsiiProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.JsiiProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/dx-starter-templates.JsiiProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/dx-starter-templates.JsiiProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/dx-starter-templates.JsiiProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/dx-starter-templates.JsiiProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/dx-starter-templates.JsiiProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/dx-starter-templates.JsiiProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/dx-starter-templates.JsiiProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.JsiiProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/dx-starter-templates.JsiiProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/dx-starter-templates.JsiiProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/dx-starter-templates.JsiiProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/dx-starter-templates.JsiiProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/dx-starter-templates.JsiiProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.JsiiProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.JsiiProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/dx-starter-templates.JsiiProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.JsiiProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/dx-starter-templates.JsiiProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/dx-starter-templates.JsiiProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/dx-starter-templates.JsiiProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/dx-starter-templates.JsiiProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.JsiiProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/dx-starter-templates.JsiiProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.JsiiProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/dx-starter-templates.JsiiProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.JsiiProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/dx-starter-templates.JsiiProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/dx-starter-templates.JsiiProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/dx-starter-templates.JsiiProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/dx-starter-templates.JsiiProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/dx-starter-templates.JsiiProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.JsiiProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/dx-starter-templates.JsiiProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/dx-starter-templates.JsiiProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/dx-starter-templates.JsiiProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.JsiiProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/dx-starter-templates.JsiiProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.JsiiProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/dx-starter-templates.JsiiProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/dx-starter-templates.JsiiProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/dx-starter-templates.JsiiProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/dx-starter-templates.JsiiProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/dx-starter-templates.JsiiProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.JsiiProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/dx-starter-templates.JsiiProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.JsiiProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/dx-starter-templates.JsiiProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/dx-starter-templates.JsiiProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/dx-starter-templates.JsiiProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.JsiiProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/dx-starter-templates.JsiiProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.JsiiProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/dx-starter-templates.JsiiProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/dx-starter-templates.JsiiProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/dx-starter-templates.JsiiProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.JsiiProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/dx-starter-templates.JsiiProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.JsiiProject.isConstruct"></a>

```typescript
import { JsiiProject } from '@dxfrontier/dx-starter-templates'

JsiiProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.JsiiProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/dx-starter-templates.JsiiProject.isProject"></a>

```typescript
import { JsiiProject } from '@dxfrontier/dx-starter-templates'

JsiiProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.JsiiProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/dx-starter-templates.JsiiProject.of"></a>

```typescript
import { JsiiProject } from '@dxfrontier/dx-starter-templates'

JsiiProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/dx-starter-templates.JsiiProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.commitlintConfig">commitlintConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase">CommitLintConfigBase</a></code> | Configuration for commitlint settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.devContainerConfig">devContainerConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase">DevContainerConfigBase</a></code> | Configuration for development container settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.eslintConfig">eslintConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase">EsLintConfigBase</a></code> | Configuration for ESLint settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.githubConfig">githubConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase">GitHubConfigBase</a></code> | Configuration for GitHub settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.huskyConfig">huskyConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase">HuskyConfigBase</a></code> | Configuration for Husky settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.jestConfig">jestConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.JestConfigBase">JestConfigBase</a></code> | Configuration for Jest settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.npmConfig">npmConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii">NpmConfigJsii</a></code> | Configuration for NPM settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.prettierConfig">prettierConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase">PrettierConfigBase</a></code> | Configuration for Prettier settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.vscodeConfig">vscodeConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase">VsCodeConfigBase</a></code> | Configuration for VS Code settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.gitConfig">gitConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.GitConfigBase">GitConfigBase</a></code> | Configuration for Git settings in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.issuesConfig">issuesConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase">IssuesConfigBase</a></code> | Configuration for Githug issues in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.typescript">typescript</a></code> | <code>boolean</code> | This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.typescriptConfig">typescriptConfig</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase">TypeScriptConfigBase</a></code> | Configuration for TypeScript settings in the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.JsiiProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/dx-starter-templates.JsiiProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/dx-starter-templates.JsiiProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/dx-starter-templates.JsiiProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/dx-starter-templates.JsiiProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.JsiiProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/dx-starter-templates.JsiiProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/dx-starter-templates.JsiiProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/dx-starter-templates.JsiiProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/dx-starter-templates.JsiiProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/dx-starter-templates.JsiiProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.JsiiProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/dx-starter-templates.JsiiProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/dx-starter-templates.JsiiProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/dx-starter-templates.JsiiProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/dx-starter-templates.JsiiProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/dx-starter-templates.JsiiProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/dx-starter-templates.JsiiProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/dx-starter-templates.JsiiProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/dx-starter-templates.JsiiProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/dx-starter-templates.JsiiProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/dx-starter-templates.JsiiProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/dx-starter-templates.JsiiProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/dx-starter-templates.JsiiProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/dx-starter-templates.JsiiProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/dx-starter-templates.JsiiProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/dx-starter-templates.JsiiProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/dx-starter-templates.JsiiProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/dx-starter-templates.JsiiProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/dx-starter-templates.JsiiProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/dx-starter-templates.JsiiProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/dx-starter-templates.JsiiProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/dx-starter-templates.JsiiProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/dx-starter-templates.JsiiProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/dx-starter-templates.JsiiProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/dx-starter-templates.JsiiProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/dx-starter-templates.JsiiProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/dx-starter-templates.JsiiProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/dx-starter-templates.JsiiProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/dx-starter-templates.JsiiProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/dx-starter-templates.JsiiProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/dx-starter-templates.JsiiProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/dx-starter-templates.JsiiProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/dx-starter-templates.JsiiProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/dx-starter-templates.JsiiProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/dx-starter-templates.JsiiProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/dx-starter-templates.JsiiProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/dx-starter-templates.JsiiProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/dx-starter-templates.JsiiProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/dx-starter-templates.JsiiProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/dx-starter-templates.JsiiProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/dx-starter-templates.JsiiProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/dx-starter-templates.JsiiProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/dx-starter-templates.JsiiProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/dx-starter-templates.JsiiProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/dx-starter-templates.JsiiProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/dx-starter-templates.JsiiProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/dx-starter-templates.JsiiProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/dx-starter-templates.JsiiProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/dx-starter-templates.JsiiProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/dx-starter-templates.JsiiProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `commitlintConfig`<sup>Optional</sup> <a name="commitlintConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.commitlintConfig"></a>

```typescript
public readonly commitlintConfig: CommitLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.CommitLintConfigBase">CommitLintConfigBase</a>

Configuration for commitlint settings in the project.

This property is initialized if `commitlintEnabled` option is provided during project creation.

---

##### `devContainerConfig`<sup>Optional</sup> <a name="devContainerConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.devContainerConfig"></a>

```typescript
public readonly devContainerConfig: DevContainerConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.DevContainerConfigBase">DevContainerConfigBase</a>

Configuration for development container settings in the project.

This property is initialized if `devContainerEnabled` option is provided during project creation.

---

##### `eslintConfig`<sup>Optional</sup> <a name="eslintConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.eslintConfig"></a>

```typescript
public readonly eslintConfig: EsLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.EsLintConfigBase">EsLintConfigBase</a>

Configuration for ESLint settings in the project.

This property is initialized if `eslintEnabled` option is provided during project creation.

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.githubConfig"></a>

```typescript
public readonly githubConfig: GitHubConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitHubConfigBase">GitHubConfigBase</a>

Configuration for GitHub settings in the project.

This property is initialized if `githubEnabled` option is provided during project creation.

---

##### `huskyConfig`<sup>Optional</sup> <a name="huskyConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.huskyConfig"></a>

```typescript
public readonly huskyConfig: HuskyConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.HuskyConfigBase">HuskyConfigBase</a>

Configuration for Husky settings in the project.

This property is initialized if `huskyEnabled` option is provided during project creation.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.JestConfigBase">JestConfigBase</a>

Configuration for Jest settings in the project.

This property is initialized if `jestEnabled` option is provided during project creation.

---

##### `npmConfig`<sup>Optional</sup> <a name="npmConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.npmConfig"></a>

```typescript
public readonly npmConfig: NpmConfigJsii;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii">NpmConfigJsii</a>

Configuration for NPM settings in the project.

This property is always initialized as `npmConfig` when the project is created.

---

##### `prettierConfig`<sup>Optional</sup> <a name="prettierConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.prettierConfig"></a>

```typescript
public readonly prettierConfig: PrettierConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase">PrettierConfigBase</a>

Configuration for Prettier settings in the project.

This property is initialized if `prettierEnabled` option is provided during project creation.

---

##### `vscodeConfig`<sup>Optional</sup> <a name="vscodeConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.vscodeConfig"></a>

```typescript
public readonly vscodeConfig: VsCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase">VsCodeConfigBase</a>

Configuration for VS Code settings in the project.

This property is initialized if `vscodeEnabled` option is provided during project creation.

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/dx-starter-templates.JsiiProject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

##### `gitConfig`<sup>Optional</sup> <a name="gitConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.gitConfig"></a>

```typescript
public readonly gitConfig: GitConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.GitConfigBase">GitConfigBase</a>

Configuration for Git settings in the project.

This property is always initialized as `gitConfig` when the project is created.

---

##### `issuesConfig`<sup>Optional</sup> <a name="issuesConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.issuesConfig"></a>

```typescript
public readonly issuesConfig: IssuesConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.IssuesConfigBase">IssuesConfigBase</a>

Configuration for Githug issues in the project.

This property is initialized if `issuesEnabled` option is provided during project creation.

---

##### `typescript`<sup>Optional</sup> <a name="typescript" id="@dxfrontier/dx-starter-templates.JsiiProject.property.typescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* boolean

This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="typescriptConfig" id="@dxfrontier/dx-starter-templates.JsiiProject.property.typescriptConfig"></a>

```typescript
public readonly typescriptConfig: TypeScriptConfigBase;
```

- *Type:* <a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase">TypeScriptConfigBase</a>

Configuration for TypeScript settings in the project.

This property is always initialized as `typescriptConfig` when the project is created.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/dx-starter-templates.JsiiProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/dx-starter-templates.JsiiProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### NpmConfigBase <a name="NpmConfigBase" id="@dxfrontier/dx-starter-templates.NpmConfigBase"></a>

Base class for implementing all relevant NPM configuration.

This class acts as a base for handling NPM configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.NpmConfigBase.Initializer"></a>

```typescript
import { NpmConfigBase } from '@dxfrontier/dx-starter-templates'

new NpmConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.NpmConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.addDependencies">addDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.addDevDependencies">addDevDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.addPeerDependencies">addPeerDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.addScripts">addScripts</a></code> | Adds custom npm scripts to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.addSettings">addSettings</a></code> | Adds custom settings to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.patchDevDependencyRemove">patchDevDependencyRemove</a></code> | Patches devDependencies in the `package.json` file. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.patchScriptsAdd">patchScriptsAdd</a></code> | Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.removeScriptsOnInit">removeScriptsOnInit</a></code> | Removes the NPM Package scripts associated with Projen NPM Package initialization. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.NpmConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.NpmConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.NpmConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.NpmConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.NpmConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.NpmConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addDependencies` <a name="addDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addDependencies"></a>

```typescript
public addDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of dependencies to add.

---

##### `addDevDependencies` <a name="addDevDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addDevDependencies"></a>

```typescript
public addDevDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addDevDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of devDependencies to add.

---

##### `addPeerDependencies` <a name="addPeerDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addPeerDependencies"></a>

```typescript
public addPeerDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addPeerDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of peerDependencies to add.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Adds custom npm scripts to the project.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands.

---

##### `addSettings` <a name="addSettings" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addSettings"></a>

```typescript
public addSettings(settings: {[ key: string ]: any}): void
```

Adds custom settings to the project.

###### `settings`<sup>Required</sup> <a name="settings" id="@dxfrontier/dx-starter-templates.NpmConfigBase.addSettings.parameter.settings"></a>

- *Type:* {[ key: string ]: any}

Record of settings to add.

---

##### `patchDevDependencyRemove` <a name="patchDevDependencyRemove" id="@dxfrontier/dx-starter-templates.NpmConfigBase.patchDevDependencyRemove"></a>

```typescript
public patchDevDependencyRemove(devDependencies: string[]): void
```

Patches devDependencies in the `package.json` file.

###### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigBase.patchDevDependencyRemove.parameter.devDependencies"></a>

- *Type:* string[]

A list of development dependencies to patch.

---

##### `patchScriptsAdd` <a name="patchScriptsAdd" id="@dxfrontier/dx-starter-templates.NpmConfigBase.patchScriptsAdd"></a>

```typescript
public patchScriptsAdd(scripts: {[ key: string ]: string}): void
```

Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigBase.patchScriptsAdd.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands to patch.

---

##### `removeScriptsOnInit` <a name="removeScriptsOnInit" id="@dxfrontier/dx-starter-templates.NpmConfigBase.removeScriptsOnInit"></a>

```typescript
public removeScriptsOnInit(scripts: string[]): void
```

Removes the NPM Package scripts associated with Projen NPM Package initialization.

Overwrite this method if you want to keep the projen standard scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigBase.removeScriptsOnInit.parameter.scripts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.NpmConfigBase.isConstruct"></a>

```typescript
import { NpmConfigBase } from '@dxfrontier/dx-starter-templates'

NpmConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.NpmConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.NpmConfigBase.isComponent"></a>

```typescript
import { NpmConfigBase } from '@dxfrontier/dx-starter-templates'

NpmConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.NpmConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.NpmConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.NpmConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### NpmConfigCapService <a name="NpmConfigCapService" id="@dxfrontier/dx-starter-templates.NpmConfigCapService"></a>

Implementing all relevant NPM configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.Initializer"></a>

```typescript
import { NpmConfigCapService } from '@dxfrontier/dx-starter-templates'

new NpmConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.addDependencies">addDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.addDevDependencies">addDevDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.addPeerDependencies">addPeerDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.addScripts">addScripts</a></code> | Adds custom npm scripts to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.addSettings">addSettings</a></code> | Adds custom settings to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.patchDevDependencyRemove">patchDevDependencyRemove</a></code> | Patches devDependencies in the `package.json` file. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.patchScriptsAdd">patchScriptsAdd</a></code> | Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.removeScriptsOnInit">removeScriptsOnInit</a></code> | Removes the NPM Package scripts associated with Projen NPM Package initialization. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addDependencies` <a name="addDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addDependencies"></a>

```typescript
public addDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of dependencies to add.

---

##### `addDevDependencies` <a name="addDevDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addDevDependencies"></a>

```typescript
public addDevDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addDevDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of devDependencies to add.

---

##### `addPeerDependencies` <a name="addPeerDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addPeerDependencies"></a>

```typescript
public addPeerDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addPeerDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of peerDependencies to add.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Adds custom npm scripts to the project.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands.

---

##### `addSettings` <a name="addSettings" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addSettings"></a>

```typescript
public addSettings(settings: {[ key: string ]: any}): void
```

Adds custom settings to the project.

###### `settings`<sup>Required</sup> <a name="settings" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.addSettings.parameter.settings"></a>

- *Type:* {[ key: string ]: any}

Record of settings to add.

---

##### `patchDevDependencyRemove` <a name="patchDevDependencyRemove" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.patchDevDependencyRemove"></a>

```typescript
public patchDevDependencyRemove(devDependencies: string[]): void
```

Patches devDependencies in the `package.json` file.

###### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.patchDevDependencyRemove.parameter.devDependencies"></a>

- *Type:* string[]

A list of development dependencies to patch.

---

##### `patchScriptsAdd` <a name="patchScriptsAdd" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.patchScriptsAdd"></a>

```typescript
public patchScriptsAdd(scripts: {[ key: string ]: string}): void
```

Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.patchScriptsAdd.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands to patch.

---

##### `removeScriptsOnInit` <a name="removeScriptsOnInit" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.removeScriptsOnInit"></a>

```typescript
public removeScriptsOnInit(scripts: string[]): void
```

Removes the NPM Package scripts associated with Projen NPM Package initialization.

Overwrite this method if you want to keep the projen standard scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.removeScriptsOnInit.parameter.scripts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.isConstruct"></a>

```typescript
import { NpmConfigCapService } from '@dxfrontier/dx-starter-templates'

NpmConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.isComponent"></a>

```typescript
import { NpmConfigCapService } from '@dxfrontier/dx-starter-templates'

NpmConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.NpmConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### NpmConfigGitHubAction <a name="NpmConfigGitHubAction" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction"></a>

Implementing all relevant NPM configuration for the GitHubAction project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.Initializer"></a>

```typescript
import { NpmConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

new NpmConfigGitHubAction(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addDependencies">addDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addDevDependencies">addDevDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addPeerDependencies">addPeerDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addScripts">addScripts</a></code> | Adds custom npm scripts to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addSettings">addSettings</a></code> | Adds custom settings to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.patchDevDependencyRemove">patchDevDependencyRemove</a></code> | Patches devDependencies in the `package.json` file. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.patchScriptsAdd">patchScriptsAdd</a></code> | Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.removeScriptsOnInit">removeScriptsOnInit</a></code> | Removes the NPM Package scripts associated with Projen NPM Package initialization. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addDependencies` <a name="addDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addDependencies"></a>

```typescript
public addDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of dependencies to add.

---

##### `addDevDependencies` <a name="addDevDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addDevDependencies"></a>

```typescript
public addDevDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addDevDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of devDependencies to add.

---

##### `addPeerDependencies` <a name="addPeerDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addPeerDependencies"></a>

```typescript
public addPeerDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addPeerDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of peerDependencies to add.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Adds custom npm scripts to the project.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands.

---

##### `addSettings` <a name="addSettings" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addSettings"></a>

```typescript
public addSettings(settings: {[ key: string ]: any}): void
```

Adds custom settings to the project.

###### `settings`<sup>Required</sup> <a name="settings" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.addSettings.parameter.settings"></a>

- *Type:* {[ key: string ]: any}

Record of settings to add.

---

##### `patchDevDependencyRemove` <a name="patchDevDependencyRemove" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.patchDevDependencyRemove"></a>

```typescript
public patchDevDependencyRemove(devDependencies: string[]): void
```

Patches devDependencies in the `package.json` file.

###### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.patchDevDependencyRemove.parameter.devDependencies"></a>

- *Type:* string[]

A list of development dependencies to patch.

---

##### `patchScriptsAdd` <a name="patchScriptsAdd" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.patchScriptsAdd"></a>

```typescript
public patchScriptsAdd(scripts: {[ key: string ]: string}): void
```

Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.patchScriptsAdd.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands to patch.

---

##### `removeScriptsOnInit` <a name="removeScriptsOnInit" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.removeScriptsOnInit"></a>

```typescript
public removeScriptsOnInit(scripts: string[]): void
```

Removes the NPM Package scripts associated with Projen NPM Package initialization.

Overwrite this method if you want to keep the projen standard scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.removeScriptsOnInit.parameter.scripts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.isConstruct"></a>

```typescript
import { NpmConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

NpmConfigGitHubAction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.isComponent"></a>

```typescript
import { NpmConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

NpmConfigGitHubAction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.NpmConfigGitHubAction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### NpmConfigJsii <a name="NpmConfigJsii" id="@dxfrontier/dx-starter-templates.NpmConfigJsii"></a>

Implementing all relevant NPM configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.Initializer"></a>

```typescript
import { NpmConfigJsii } from '@dxfrontier/dx-starter-templates'

new NpmConfigJsii(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.addDependencies">addDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.addDevDependencies">addDevDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.addPeerDependencies">addPeerDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.addScripts">addScripts</a></code> | Adds custom npm scripts to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.addSettings">addSettings</a></code> | Adds custom settings to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.patchDevDependencyRemove">patchDevDependencyRemove</a></code> | Patches devDependencies in the `package.json` file. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.patchScriptsAdd">patchScriptsAdd</a></code> | Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.removeScriptsOnInit">removeScriptsOnInit</a></code> | Removes the NPM Package scripts associated with Projen NPM Package initialization. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addDependencies` <a name="addDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addDependencies"></a>

```typescript
public addDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of dependencies to add.

---

##### `addDevDependencies` <a name="addDevDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addDevDependencies"></a>

```typescript
public addDevDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addDevDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of devDependencies to add.

---

##### `addPeerDependencies` <a name="addPeerDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addPeerDependencies"></a>

```typescript
public addPeerDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addPeerDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of peerDependencies to add.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Adds custom npm scripts to the project.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands.

---

##### `addSettings` <a name="addSettings" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addSettings"></a>

```typescript
public addSettings(settings: {[ key: string ]: any}): void
```

Adds custom settings to the project.

###### `settings`<sup>Required</sup> <a name="settings" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.addSettings.parameter.settings"></a>

- *Type:* {[ key: string ]: any}

Record of settings to add.

---

##### `patchDevDependencyRemove` <a name="patchDevDependencyRemove" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.patchDevDependencyRemove"></a>

```typescript
public patchDevDependencyRemove(devDependencies: string[]): void
```

Patches devDependencies in the `package.json` file.

###### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.patchDevDependencyRemove.parameter.devDependencies"></a>

- *Type:* string[]

A list of development dependencies to patch.

---

##### `patchScriptsAdd` <a name="patchScriptsAdd" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.patchScriptsAdd"></a>

```typescript
public patchScriptsAdd(scripts: {[ key: string ]: string}): void
```

Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.patchScriptsAdd.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands to patch.

---

##### `removeScriptsOnInit` <a name="removeScriptsOnInit" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.removeScriptsOnInit"></a>

```typescript
public removeScriptsOnInit(scripts: string[]): void
```

Removes the NPM Package scripts associated with Projen NPM Package initialization.

Overwrite this method if you want to keep the projen standard scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.removeScriptsOnInit.parameter.scripts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.isConstruct"></a>

```typescript
import { NpmConfigJsii } from '@dxfrontier/dx-starter-templates'

NpmConfigJsii.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.isComponent"></a>

```typescript
import { NpmConfigJsii } from '@dxfrontier/dx-starter-templates'

NpmConfigJsii.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.NpmConfigJsii.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.NpmConfigJsii.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PrettierConfigBase <a name="PrettierConfigBase" id="@dxfrontier/dx-starter-templates.PrettierConfigBase"></a>

Base class for implementing all relevant Prettier configuration.

This class acts as a base for handling Prettier configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.Initializer"></a>

```typescript
import { PrettierConfigBase } from '@dxfrontier/dx-starter-templates'

new PrettierConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.isConstruct"></a>

```typescript
import { PrettierConfigBase } from '@dxfrontier/dx-starter-templates'

PrettierConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.isComponent"></a>

```typescript
import { PrettierConfigBase } from '@dxfrontier/dx-starter-templates'

PrettierConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.PrettierConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PrettierConfigCapService <a name="PrettierConfigCapService" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService"></a>

Implementing all relevant Prettier configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.Initializer"></a>

```typescript
import { PrettierConfigCapService } from '@dxfrontier/dx-starter-templates'

new PrettierConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a> | <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.isConstruct"></a>

```typescript
import { PrettierConfigCapService } from '@dxfrontier/dx-starter-templates'

PrettierConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.isComponent"></a>

```typescript
import { PrettierConfigCapService } from '@dxfrontier/dx-starter-templates'

PrettierConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.PrettierConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.PrettierConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### SampleCodeConfigBase <a name="SampleCodeConfigBase" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase"></a>

Base class for implementing all relevant sample code configuration.

This class acts as a base for handling sample code configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.Initializer"></a>

```typescript
import { SampleCodeConfigBase } from '@dxfrontier/dx-starter-templates'

new SampleCodeConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.isConstruct"></a>

```typescript
import { SampleCodeConfigBase } from '@dxfrontier/dx-starter-templates'

SampleCodeConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.isComponent"></a>

```typescript
import { SampleCodeConfigBase } from '@dxfrontier/dx-starter-templates'

SampleCodeConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.SampleCodeConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### SampleCodeConfigCapService <a name="SampleCodeConfigCapService" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService"></a>

Implementing all relevant SampleCode configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.Initializer"></a>

```typescript
import { SampleCodeConfigCapService } from '@dxfrontier/dx-starter-templates'

new SampleCodeConfigCapService(project: CapServiceProject, options: CapServiceProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject">CapServiceProject</a></code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions">CapServiceProjectOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.CapServiceProject">CapServiceProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions">CapServiceProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.createTemplates">createTemplates</a></code> | Creates the template files for the specified directory. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `createTemplates` <a name="createTemplates" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.createTemplates"></a>

```typescript
public createTemplates(templates: {[ key: string ]: string[]}): void
```

Creates the template files for the specified directory.

###### `templates`<sup>Required</sup> <a name="templates" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.createTemplates.parameter.templates"></a>

- *Type:* {[ key: string ]: string[]}

The templates to create.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.isConstruct"></a>

```typescript
import { SampleCodeConfigCapService } from '@dxfrontier/dx-starter-templates'

SampleCodeConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.isComponent"></a>

```typescript
import { SampleCodeConfigCapService } from '@dxfrontier/dx-starter-templates'

SampleCodeConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.SampleCodeConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### SampleCodeConfigGitHubAction <a name="SampleCodeConfigGitHubAction" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction"></a>

Implementing all relevant SampleCode configuration for the GitHubAction project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.Initializer"></a>

```typescript
import { SampleCodeConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

new SampleCodeConfigGitHubAction(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.isConstruct"></a>

```typescript
import { SampleCodeConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

SampleCodeConfigGitHubAction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.isComponent"></a>

```typescript
import { SampleCodeConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

SampleCodeConfigGitHubAction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.SampleCodeConfigGitHubAction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### TypeScriptConfigBase <a name="TypeScriptConfigBase" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase"></a>

Base class for implementing all relevant TypeScript configuration.

This class acts as a base for handling TypeScript configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.Initializer"></a>

```typescript
import { TypeScriptConfigBase } from '@dxfrontier/dx-starter-templates'

new TypeScriptConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.isConstruct"></a>

```typescript
import { TypeScriptConfigBase } from '@dxfrontier/dx-starter-templates'

TypeScriptConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.isComponent"></a>

```typescript
import { TypeScriptConfigBase } from '@dxfrontier/dx-starter-templates'

TypeScriptConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigBase.property.configFileName">configFileName</a></code> | <code>string</code> | Retrieves the name to the TypeScript config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `configFileName`<sup>Required</sup> <a name="configFileName" id="@dxfrontier/dx-starter-templates.TypeScriptConfigBase.property.configFileName"></a>

```typescript
public readonly configFileName: string;
```

- *Type:* string

Retrieves the name to the TypeScript config file.

---


### TypeScriptConfigCapService <a name="TypeScriptConfigCapService" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService"></a>

Implementing all relevant TypeScript configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.Initializer"></a>

```typescript
import { TypeScriptConfigCapService } from '@dxfrontier/dx-starter-templates'

new TypeScriptConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.isConstruct"></a>

```typescript
import { TypeScriptConfigCapService } from '@dxfrontier/dx-starter-templates'

TypeScriptConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.isComponent"></a>

```typescript
import { TypeScriptConfigCapService } from '@dxfrontier/dx-starter-templates'

TypeScriptConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.property.configFileName">configFileName</a></code> | <code>string</code> | Retrieves the name to the TypeScript config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `configFileName`<sup>Required</sup> <a name="configFileName" id="@dxfrontier/dx-starter-templates.TypeScriptConfigCapService.property.configFileName"></a>

```typescript
public readonly configFileName: string;
```

- *Type:* string

Retrieves the name to the TypeScript config file.

---


### TypeScriptConfigGitHubAction <a name="TypeScriptConfigGitHubAction" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction"></a>

Implementing all relevant TypeScript configuration for the GitHubAction project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.Initializer"></a>

```typescript
import { TypeScriptConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

new TypeScriptConfigGitHubAction(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.isConstruct"></a>

```typescript
import { TypeScriptConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

TypeScriptConfigGitHubAction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.isComponent"></a>

```typescript
import { TypeScriptConfigGitHubAction } from '@dxfrontier/dx-starter-templates'

TypeScriptConfigGitHubAction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.property.configFileName">configFileName</a></code> | <code>string</code> | Retrieves the name to the TypeScript config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `configFileName`<sup>Required</sup> <a name="configFileName" id="@dxfrontier/dx-starter-templates.TypeScriptConfigGitHubAction.property.configFileName"></a>

```typescript
public readonly configFileName: string;
```

- *Type:* string

Retrieves the name to the TypeScript config file.

---


### TypeScriptConfigJsii <a name="TypeScriptConfigJsii" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii"></a>

Implementing all relevant TypeScript configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.Initializer"></a>

```typescript
import { TypeScriptConfigJsii } from '@dxfrontier/dx-starter-templates'

new TypeScriptConfigJsii(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.isConstruct"></a>

```typescript
import { TypeScriptConfigJsii } from '@dxfrontier/dx-starter-templates'

TypeScriptConfigJsii.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.isComponent"></a>

```typescript
import { TypeScriptConfigJsii } from '@dxfrontier/dx-starter-templates'

TypeScriptConfigJsii.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.property.configFileName">configFileName</a></code> | <code>string</code> | Retrieves the name to the TypeScript config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `configFileName`<sup>Required</sup> <a name="configFileName" id="@dxfrontier/dx-starter-templates.TypeScriptConfigJsii.property.configFileName"></a>

```typescript
public readonly configFileName: string;
```

- *Type:* string

Retrieves the name to the TypeScript config file.

---


### VsCodeConfigBase <a name="VsCodeConfigBase" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase"></a>

Base class for implementing all relevant VS Code configuration.

This class acts as a base for handling VS Code configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.Initializer"></a>

```typescript
import { VsCodeConfigBase } from '@dxfrontier/dx-starter-templates'

new VsCodeConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.isConstruct"></a>

```typescript
import { VsCodeConfigBase } from '@dxfrontier/dx-starter-templates'

VsCodeConfigBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.isComponent"></a>

```typescript
import { VsCodeConfigBase } from '@dxfrontier/dx-starter-templates'

VsCodeConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.VsCodeConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### VsCodeConfigCapService <a name="VsCodeConfigCapService" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService"></a>

Implementing all relevant VsCode configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.Initializer"></a>

```typescript
import { VsCodeConfigCapService } from '@dxfrontier/dx-starter-templates'

new VsCodeConfigCapService(project: CapServiceProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProject">CapServiceProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.CapServiceProject">CapServiceProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.createConfigLaunch">createConfigLaunch</a></code> | Creates the launch configuration file in the project directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.createConfigTasks">createConfigTasks</a></code> | Creates the tasks configuration file in the project directory. |

---

##### `toString` <a name="toString" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `createConfigLaunch` <a name="createConfigLaunch" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.createConfigLaunch"></a>

```typescript
public createConfigLaunch(): void
```

Creates the launch configuration file in the project directory.

##### `createConfigTasks` <a name="createConfigTasks" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.createConfigTasks"></a>

```typescript
public createConfigTasks(): void
```

Creates the tasks configuration file in the project directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.isConstruct"></a>

```typescript
import { VsCodeConfigCapService } from '@dxfrontier/dx-starter-templates'

VsCodeConfigCapService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.isComponent"></a>

```typescript
import { VsCodeConfigCapService } from '@dxfrontier/dx-starter-templates'

VsCodeConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/dx-starter-templates.VsCodeConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/dx-starter-templates.VsCodeConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### BaseProjectOptions <a name="BaseProjectOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.Initializer"></a>

```typescript
import { BaseProjectOptions } from '@dxfrontier/dx-starter-templates'

const baseProjectOptions: BaseProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.commitlintEnabled">commitlintEnabled</a></code> | <code>boolean</code> | Whether to enable the commitlint configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.devContainerEnabled">devContainerEnabled</a></code> | <code>boolean</code> | Whether to enable the dev container configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.eslintEnabled">eslintEnabled</a></code> | <code>boolean</code> | Whether to enable the ESLint configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.githubEnabled">githubEnabled</a></code> | <code>boolean</code> | Whether to enable the GitHub configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.huskyEnabled">huskyEnabled</a></code> | <code>boolean</code> | Whether to enable the Husky configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.issuesEnabled">issuesEnabled</a></code> | <code>boolean</code> | Whether to include Github issues in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.jestEnabled">jestEnabled</a></code> | <code>boolean</code> | Whether to enable the Jest configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.prettierEnabled">prettierEnabled</a></code> | <code>boolean</code> | Whether to enable the Prettier configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.sampleCodeEnabled">sampleCodeEnabled</a></code> | <code>boolean</code> | Whether to include sample code in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.typescriptEnabled">typescriptEnabled</a></code> | <code>boolean</code> | Whether to enable the TypeScript configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions.property.vscodeEnabled">vscodeEnabled</a></code> | <code>boolean</code> | Whether to enable the VS Code configuration for the project. |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `commitlintEnabled`<sup>Optional</sup> <a name="commitlintEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.commitlintEnabled"></a>

```typescript
public readonly commitlintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the commitlint configuration for the project.

If set to `true`, commitlint configuration will be enabled.

---

##### `devContainerEnabled`<sup>Optional</sup> <a name="devContainerEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.devContainerEnabled"></a>

```typescript
public readonly devContainerEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the dev container configuration for the project.

If set to `true`, dev container configuration will be enabled.

---

##### `eslintEnabled`<sup>Optional</sup> <a name="eslintEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.eslintEnabled"></a>

```typescript
public readonly eslintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the ESLint configuration for the project.

If set to `true`, ESLint configuration will be enabled.

---

##### `githubEnabled`<sup>Optional</sup> <a name="githubEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.githubEnabled"></a>

```typescript
public readonly githubEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the GitHub configuration for the project.

If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).

---

##### `huskyEnabled`<sup>Optional</sup> <a name="huskyEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.huskyEnabled"></a>

```typescript
public readonly huskyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Husky configuration for the project.

If set to `true`, Husky hooks will be enabled to enforce code quality checks.

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include Github issues in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `jestEnabled`<sup>Optional</sup> <a name="jestEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.jestEnabled"></a>

```typescript
public readonly jestEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Jest configuration for the project.

If set to `true`, Jest testing framework will be configured for the project.

---

##### `prettierEnabled`<sup>Optional</sup> <a name="prettierEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.prettierEnabled"></a>

```typescript
public readonly prettierEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Prettier configuration for the project.

If set to `true`, Prettier code formatting configuration will be enabled.

---

##### `sampleCodeEnabled`<sup>Optional</sup> <a name="sampleCodeEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.sampleCodeEnabled"></a>

```typescript
public readonly sampleCodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include sample code in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `typescriptEnabled`<sup>Optional</sup> <a name="typescriptEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.typescriptEnabled"></a>

```typescript
public readonly typescriptEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the TypeScript configuration for the project.

If set to `true`, TypeScript-specific settings will be configured for the project.
If set to `false` TypeScript will be completely removed from the project as
Projen projects used in this context are always relying on TypeScript.

---

##### `vscodeEnabled`<sup>Optional</sup> <a name="vscodeEnabled" id="@dxfrontier/dx-starter-templates.BaseProjectOptions.property.vscodeEnabled"></a>

```typescript
public readonly vscodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the VS Code configuration for the project.

If set to `true`, VS Code settings will be applied for the project.

---

### CapServiceProjectOptions <a name="CapServiceProjectOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.Initializer"></a>

```typescript
import { CapServiceProjectOptions } from '@dxfrontier/dx-starter-templates'

const capServiceProjectOptions: CapServiceProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.commitlintEnabled">commitlintEnabled</a></code> | <code>boolean</code> | Whether to enable the commitlint configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.devContainerEnabled">devContainerEnabled</a></code> | <code>boolean</code> | Whether to enable the dev container configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.eslintEnabled">eslintEnabled</a></code> | <code>boolean</code> | Whether to enable the ESLint configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.githubEnabled">githubEnabled</a></code> | <code>boolean</code> | Whether to enable the GitHub configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.huskyEnabled">huskyEnabled</a></code> | <code>boolean</code> | Whether to enable the Husky configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.issuesEnabled">issuesEnabled</a></code> | <code>boolean</code> | Whether to include Github issues in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.jestEnabled">jestEnabled</a></code> | <code>boolean</code> | Whether to enable the Jest configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.prettierEnabled">prettierEnabled</a></code> | <code>boolean</code> | Whether to enable the Prettier configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.sampleCodeEnabled">sampleCodeEnabled</a></code> | <code>boolean</code> | Whether to include sample code in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.typescriptEnabled">typescriptEnabled</a></code> | <code>boolean</code> | Whether to enable the TypeScript configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.vscodeEnabled">vscodeEnabled</a></code> | <code>boolean</code> | Whether to enable the VS Code configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `commitlintEnabled`<sup>Optional</sup> <a name="commitlintEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.commitlintEnabled"></a>

```typescript
public readonly commitlintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the commitlint configuration for the project.

If set to `true`, commitlint configuration will be enabled.

---

##### `devContainerEnabled`<sup>Optional</sup> <a name="devContainerEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.devContainerEnabled"></a>

```typescript
public readonly devContainerEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the dev container configuration for the project.

If set to `true`, dev container configuration will be enabled.

---

##### `eslintEnabled`<sup>Optional</sup> <a name="eslintEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.eslintEnabled"></a>

```typescript
public readonly eslintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the ESLint configuration for the project.

If set to `true`, ESLint configuration will be enabled.

---

##### `githubEnabled`<sup>Optional</sup> <a name="githubEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.githubEnabled"></a>

```typescript
public readonly githubEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the GitHub configuration for the project.

If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).

---

##### `huskyEnabled`<sup>Optional</sup> <a name="huskyEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.huskyEnabled"></a>

```typescript
public readonly huskyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Husky configuration for the project.

If set to `true`, Husky hooks will be enabled to enforce code quality checks.

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include Github issues in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `jestEnabled`<sup>Optional</sup> <a name="jestEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.jestEnabled"></a>

```typescript
public readonly jestEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Jest configuration for the project.

If set to `true`, Jest testing framework will be configured for the project.

---

##### `prettierEnabled`<sup>Optional</sup> <a name="prettierEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.prettierEnabled"></a>

```typescript
public readonly prettierEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Prettier configuration for the project.

If set to `true`, Prettier code formatting configuration will be enabled.

---

##### `sampleCodeEnabled`<sup>Optional</sup> <a name="sampleCodeEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.sampleCodeEnabled"></a>

```typescript
public readonly sampleCodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include sample code in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `typescriptEnabled`<sup>Optional</sup> <a name="typescriptEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.typescriptEnabled"></a>

```typescript
public readonly typescriptEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the TypeScript configuration for the project.

If set to `true`, TypeScript-specific settings will be configured for the project.
If set to `false` TypeScript will be completely removed from the project as
Projen projects used in this context are always relying on TypeScript.

---

##### `vscodeEnabled`<sup>Optional</sup> <a name="vscodeEnabled" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.vscodeEnabled"></a>

```typescript
public readonly vscodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the VS Code configuration for the project.

If set to `true`, VS Code settings will be applied for the project.

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@dxfrontier/dx-starter-templates.CapServiceProjectOptions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### GitHubActionProjectOptions <a name="GitHubActionProjectOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.Initializer"></a>

```typescript
import { GitHubActionProjectOptions } from '@dxfrontier/dx-starter-templates'

const gitHubActionProjectOptions: GitHubActionProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.commitlintEnabled">commitlintEnabled</a></code> | <code>boolean</code> | Whether to enable the commitlint configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.devContainerEnabled">devContainerEnabled</a></code> | <code>boolean</code> | Whether to enable the dev container configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.eslintEnabled">eslintEnabled</a></code> | <code>boolean</code> | Whether to enable the ESLint configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.githubEnabled">githubEnabled</a></code> | <code>boolean</code> | Whether to enable the GitHub configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.huskyEnabled">huskyEnabled</a></code> | <code>boolean</code> | Whether to enable the Husky configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.issuesEnabled">issuesEnabled</a></code> | <code>boolean</code> | Whether to include Github issues in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.jestEnabled">jestEnabled</a></code> | <code>boolean</code> | Whether to enable the Jest configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.prettierEnabled">prettierEnabled</a></code> | <code>boolean</code> | Whether to enable the Prettier configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.sampleCodeEnabled">sampleCodeEnabled</a></code> | <code>boolean</code> | Whether to include sample code in the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.typescriptEnabled">typescriptEnabled</a></code> | <code>boolean</code> | Whether to enable the TypeScript configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.vscodeEnabled">vscodeEnabled</a></code> | <code>boolean</code> | Whether to enable the VS Code configuration for the project. |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `commitlintEnabled`<sup>Optional</sup> <a name="commitlintEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.commitlintEnabled"></a>

```typescript
public readonly commitlintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the commitlint configuration for the project.

If set to `true`, commitlint configuration will be enabled.

---

##### `devContainerEnabled`<sup>Optional</sup> <a name="devContainerEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.devContainerEnabled"></a>

```typescript
public readonly devContainerEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the dev container configuration for the project.

If set to `true`, dev container configuration will be enabled.

---

##### `eslintEnabled`<sup>Optional</sup> <a name="eslintEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.eslintEnabled"></a>

```typescript
public readonly eslintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the ESLint configuration for the project.

If set to `true`, ESLint configuration will be enabled.

---

##### `githubEnabled`<sup>Optional</sup> <a name="githubEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.githubEnabled"></a>

```typescript
public readonly githubEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the GitHub configuration for the project.

If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).

---

##### `huskyEnabled`<sup>Optional</sup> <a name="huskyEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.huskyEnabled"></a>

```typescript
public readonly huskyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Husky configuration for the project.

If set to `true`, Husky hooks will be enabled to enforce code quality checks.

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include Github issues in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `jestEnabled`<sup>Optional</sup> <a name="jestEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.jestEnabled"></a>

```typescript
public readonly jestEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Jest configuration for the project.

If set to `true`, Jest testing framework will be configured for the project.

---

##### `prettierEnabled`<sup>Optional</sup> <a name="prettierEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.prettierEnabled"></a>

```typescript
public readonly prettierEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Prettier configuration for the project.

If set to `true`, Prettier code formatting configuration will be enabled.

---

##### `sampleCodeEnabled`<sup>Optional</sup> <a name="sampleCodeEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.sampleCodeEnabled"></a>

```typescript
public readonly sampleCodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include sample code in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `typescriptEnabled`<sup>Optional</sup> <a name="typescriptEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.typescriptEnabled"></a>

```typescript
public readonly typescriptEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the TypeScript configuration for the project.

If set to `true`, TypeScript-specific settings will be configured for the project.
If set to `false` TypeScript will be completely removed from the project as
Projen projects used in this context are always relying on TypeScript.

---

##### `vscodeEnabled`<sup>Optional</sup> <a name="vscodeEnabled" id="@dxfrontier/dx-starter-templates.GitHubActionProjectOptions.property.vscodeEnabled"></a>

```typescript
public readonly vscodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the VS Code configuration for the project.

If set to `true`, VS Code settings will be applied for the project.

---

### JsiiProjectOptions <a name="JsiiProjectOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.Initializer"></a>

```typescript
import { JsiiProjectOptions } from '@dxfrontier/dx-starter-templates'

const jsiiProjectOptions: JsiiProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.commitlintEnabled">commitlintEnabled</a></code> | <code>boolean</code> | Whether to enable the commitlint configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.devContainerEnabled">devContainerEnabled</a></code> | <code>boolean</code> | Whether to enable the dev container configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.eslintEnabled">eslintEnabled</a></code> | <code>boolean</code> | Whether to enable the ESLint configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.githubEnabled">githubEnabled</a></code> | <code>boolean</code> | Whether to enable the GitHub configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.huskyEnabled">huskyEnabled</a></code> | <code>boolean</code> | Whether to enable the Husky configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jestEnabled">jestEnabled</a></code> | <code>boolean</code> | Whether to enable the Jest configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.prettierEnabled">prettierEnabled</a></code> | <code>boolean</code> | Whether to enable the Prettier configuration for the project. |
| <code><a href="#@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.vscodeEnabled">vscodeEnabled</a></code> | <code>boolean</code> | Whether to enable the VS Code configuration for the project. |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns.

Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jsiiVersion"></a>

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "~5.6.0"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `commitlintEnabled`<sup>Optional</sup> <a name="commitlintEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.commitlintEnabled"></a>

```typescript
public readonly commitlintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the commitlint configuration for the project.

If set to `true`, commitlint configuration will be enabled.

---

##### `devContainerEnabled`<sup>Optional</sup> <a name="devContainerEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.devContainerEnabled"></a>

```typescript
public readonly devContainerEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the dev container configuration for the project.

If set to `true`, dev container configuration will be enabled.

---

##### `eslintEnabled`<sup>Optional</sup> <a name="eslintEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.eslintEnabled"></a>

```typescript
public readonly eslintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the ESLint configuration for the project.

If set to `true`, ESLint configuration will be enabled.

---

##### `githubEnabled`<sup>Optional</sup> <a name="githubEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.githubEnabled"></a>

```typescript
public readonly githubEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the GitHub configuration for the project.

If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).

---

##### `huskyEnabled`<sup>Optional</sup> <a name="huskyEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.huskyEnabled"></a>

```typescript
public readonly huskyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Husky configuration for the project.

If set to `true`, Husky hooks will be enabled to enforce code quality checks.

---

##### `jestEnabled`<sup>Optional</sup> <a name="jestEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.jestEnabled"></a>

```typescript
public readonly jestEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Jest configuration for the project.

If set to `true`, Jest testing framework will be configured for the project.

---

##### `prettierEnabled`<sup>Optional</sup> <a name="prettierEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.prettierEnabled"></a>

```typescript
public readonly prettierEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Prettier configuration for the project.

If set to `true`, Prettier code formatting configuration will be enabled.

---

##### `vscodeEnabled`<sup>Optional</sup> <a name="vscodeEnabled" id="@dxfrontier/dx-starter-templates.JsiiProjectOptions.property.vscodeEnabled"></a>

```typescript
public readonly vscodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the VS Code configuration for the project.

If set to `true`, VS Code settings will be applied for the project.

---

## Classes <a name="Classes" id="Classes"></a>

### BaseOptions <a name="BaseOptions" id="@dxfrontier/dx-starter-templates.BaseOptions"></a>

Utility for shared options.

#### Initializers <a name="Initializers" id="@dxfrontier/dx-starter-templates.BaseOptions.Initializer"></a>

```typescript
import { BaseOptions } from '@dxfrontier/dx-starter-templates'

new BaseOptions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.BaseOptions.sharedStandardOptions">sharedStandardOptions</a></code> | Merges shared defaults with provided options. |

---

##### `sharedStandardOptions` <a name="sharedStandardOptions" id="@dxfrontier/dx-starter-templates.BaseOptions.sharedStandardOptions"></a>

```typescript
import { BaseOptions } from '@dxfrontier/dx-starter-templates'

BaseOptions.sharedStandardOptions(options: BaseProjectOptions)
```

Merges shared defaults with provided options.

###### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/dx-starter-templates.BaseOptions.sharedStandardOptions.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/dx-starter-templates.BaseProjectOptions">BaseProjectOptions</a>

Specific project options to merge.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IProjectKind <a name="IProjectKind" id="@dxfrontier/dx-starter-templates.IProjectKind"></a>

- *Implemented By:* <a href="#@dxfrontier/dx-starter-templates.BaseProject">BaseProject</a>, <a href="#@dxfrontier/dx-starter-templates.CapServiceProject">CapServiceProject</a>, <a href="#@dxfrontier/dx-starter-templates.GitHubActionProject">GitHubActionProject</a>, <a href="#@dxfrontier/dx-starter-templates.JsiiProject">JsiiProject</a>, <a href="#@dxfrontier/dx-starter-templates.IProjectKind">IProjectKind</a>

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/dx-starter-templates.IProjectKind.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/dx-starter-templates.IProjectKind.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

