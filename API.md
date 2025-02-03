# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseProject <a name="BaseProject" id="@dxfrontier/projen-template-projects.BaseProject"></a>

- *Implements:* <a href="#@dxfrontier/projen-template-projects.IProjectKind">IProjectKind</a>

Base class for managing project configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.BaseProject.Initializer"></a>

```typescript
import { BaseProject } from '@dxfrontier/projen-template-projects'

new BaseProject(options: BaseProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions">BaseProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.BaseProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProjectOptions">BaseProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.BaseProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/projen-template-projects.BaseProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/projen-template-projects.BaseProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/projen-template-projects.BaseProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.BaseProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/projen-template-projects.BaseProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.BaseProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/projen-template-projects.BaseProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.BaseProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/projen-template-projects.BaseProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/projen-template-projects.BaseProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/projen-template-projects.BaseProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/projen-template-projects.BaseProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/projen-template-projects.BaseProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.BaseProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.BaseProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/projen-template-projects.BaseProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.BaseProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/projen-template-projects.BaseProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/projen-template-projects.BaseProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/projen-template-projects.BaseProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/projen-template-projects.BaseProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.BaseProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/projen-template-projects.BaseProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.BaseProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/projen-template-projects.BaseProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.BaseProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/projen-template-projects.BaseProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.BaseProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/projen-template-projects.BaseProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/projen-template-projects.BaseProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/projen-template-projects.BaseProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.BaseProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/projen-template-projects.BaseProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.BaseProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/projen-template-projects.BaseProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.BaseProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/projen-template-projects.BaseProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.BaseProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/projen-template-projects.BaseProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/projen-template-projects.BaseProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/projen-template-projects.BaseProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.BaseProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/projen-template-projects.BaseProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.BaseProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.BaseProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.BaseProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/projen-template-projects.BaseProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.BaseProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/projen-template-projects.BaseProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.BaseProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/projen-template-projects.BaseProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.BaseProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/projen-template-projects.BaseProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/projen-template-projects.BaseProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/projen-template-projects.BaseProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.BaseProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/projen-template-projects.BaseProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.BaseProject.isConstruct"></a>

```typescript
import { BaseProject } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.BaseProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/projen-template-projects.BaseProject.isProject"></a>

```typescript
import { BaseProject } from '@dxfrontier/projen-template-projects'

BaseProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.BaseProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/projen-template-projects.BaseProject.of"></a>

```typescript
import { BaseProject } from '@dxfrontier/projen-template-projects'

BaseProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/projen-template-projects.BaseProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.commitlintConfig">commitlintConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase">CommitLintConfigBase</a></code> | Configuration for commitlint settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.devContainerConfig">devContainerConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase">DevContainerConfigBase</a></code> | Configuration for development container settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.eslintConfig">eslintConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase">EsLintConfigBase</a></code> | Configuration for ESLint settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.gitConfig">gitConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase">GitConfigBase</a></code> | Configuration for Git settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.githubConfig">githubConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase">GitHubConfigBase</a></code> | Configuration for GitHub settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.huskyConfig">huskyConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase">HuskyConfigBase</a></code> | Configuration for Husky settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.jestConfig">jestConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase">JestConfigBase</a></code> | Configuration for Jest settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.npmConfig">npmConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase">NpmConfigBase</a></code> | Configuration for NPM settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.prettierConfig">prettierConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase">PrettierConfigBase</a></code> | Configuration for Prettier settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.sampleCodeConfig">sampleCodeConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase">SampleCodeConfigBase</a></code> | Configuration for Sample Code in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.typescript">typescript</a></code> | <code>boolean</code> | This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.typescriptConfig">typescriptConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase">TypeScriptConfigBase</a></code> | Configuration for TypeScript settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.vscodeConfig">vscodeConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase">VsCodeConfigBase</a></code> | Configuration for VS Code settings in the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.BaseProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/projen-template-projects.BaseProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.BaseProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/projen-template-projects.BaseProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/projen-template-projects.BaseProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.BaseProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/projen-template-projects.BaseProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/projen-template-projects.BaseProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/projen-template-projects.BaseProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.BaseProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/projen-template-projects.BaseProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.BaseProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.BaseProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/projen-template-projects.BaseProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/projen-template-projects.BaseProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/projen-template-projects.BaseProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/projen-template-projects.BaseProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.BaseProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/projen-template-projects.BaseProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/projen-template-projects.BaseProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/projen-template-projects.BaseProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/projen-template-projects.BaseProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/projen-template-projects.BaseProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/projen-template-projects.BaseProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.BaseProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.BaseProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/projen-template-projects.BaseProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.BaseProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.BaseProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.BaseProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.BaseProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.BaseProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.BaseProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/projen-template-projects.BaseProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/projen-template-projects.BaseProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.BaseProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/projen-template-projects.BaseProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/projen-template-projects.BaseProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/projen-template-projects.BaseProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.BaseProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/projen-template-projects.BaseProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.BaseProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.BaseProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/projen-template-projects.BaseProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.BaseProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.BaseProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.BaseProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.BaseProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.BaseProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/projen-template-projects.BaseProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.BaseProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/projen-template-projects.BaseProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.BaseProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.BaseProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.BaseProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.BaseProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.BaseProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/projen-template-projects.BaseProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.BaseProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.BaseProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.BaseProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/projen-template-projects.BaseProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/projen-template-projects.BaseProject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

##### `commitlintConfig`<sup>Optional</sup> <a name="commitlintConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.commitlintConfig"></a>

```typescript
public readonly commitlintConfig: CommitLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase">CommitLintConfigBase</a>

Configuration for commitlint settings in the project.

This property is initialized if `commitlintEnabled` option is provided during project creation.

---

##### `devContainerConfig`<sup>Optional</sup> <a name="devContainerConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.devContainerConfig"></a>

```typescript
public readonly devContainerConfig: DevContainerConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase">DevContainerConfigBase</a>

Configuration for development container settings in the project.

This property is initialized if `devContainerEnabled` option is provided during project creation.

---

##### `eslintConfig`<sup>Optional</sup> <a name="eslintConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.eslintConfig"></a>

```typescript
public readonly eslintConfig: EsLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.EsLintConfigBase">EsLintConfigBase</a>

Configuration for ESLint settings in the project.

This property is initialized if `eslintEnabled` option is provided during project creation.

---

##### `gitConfig`<sup>Optional</sup> <a name="gitConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.gitConfig"></a>

```typescript
public readonly gitConfig: GitConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitConfigBase">GitConfigBase</a>

Configuration for Git settings in the project.

This property is always initialized as `gitConfig` when the project is created.

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.githubConfig"></a>

```typescript
public readonly githubConfig: GitHubConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitHubConfigBase">GitHubConfigBase</a>

Configuration for GitHub settings in the project.

This property is initialized if `githubEnabled` option is provided during project creation.

---

##### `huskyConfig`<sup>Optional</sup> <a name="huskyConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.huskyConfig"></a>

```typescript
public readonly huskyConfig: HuskyConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.HuskyConfigBase">HuskyConfigBase</a>

Configuration for Husky settings in the project.

This property is initialized if `huskyEnabled` option is provided during project creation.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.JestConfigBase">JestConfigBase</a>

Configuration for Jest settings in the project.

This property is initialized if `jestEnabled` option is provided during project creation.

---

##### `npmConfig`<sup>Optional</sup> <a name="npmConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.npmConfig"></a>

```typescript
public readonly npmConfig: NpmConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.NpmConfigBase">NpmConfigBase</a>

Configuration for NPM settings in the project.

This property is always initialized as `npmConfig` when the project is created.

---

##### `prettierConfig`<sup>Optional</sup> <a name="prettierConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.prettierConfig"></a>

```typescript
public readonly prettierConfig: PrettierConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.PrettierConfigBase">PrettierConfigBase</a>

Configuration for Prettier settings in the project.

This property is initialized if `prettierEnabled` option is provided during project creation.

---

##### `sampleCodeConfig`<sup>Optional</sup> <a name="sampleCodeConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.sampleCodeConfig"></a>

```typescript
public readonly sampleCodeConfig: SampleCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase">SampleCodeConfigBase</a>

Configuration for Sample Code in the project.

This property is initialized if `sampleCodeEnabled` option is provided during project creation.

---

##### `typescript`<sup>Optional</sup> <a name="typescript" id="@dxfrontier/projen-template-projects.BaseProject.property.typescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* boolean

This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="typescriptConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.typescriptConfig"></a>

```typescript
public readonly typescriptConfig: TypeScriptConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase">TypeScriptConfigBase</a>

Configuration for TypeScript settings in the project.

This property is always initialized as `typescriptConfig` when the project is created.

---

##### `vscodeConfig`<sup>Optional</sup> <a name="vscodeConfig" id="@dxfrontier/projen-template-projects.BaseProject.property.vscodeConfig"></a>

```typescript
public readonly vscodeConfig: VsCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase">VsCodeConfigBase</a>

Configuration for VS Code settings in the project.

This property is initialized if `vscodeEnabled` option is provided during project creation.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/projen-template-projects.BaseProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/projen-template-projects.BaseProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### CapServiceProject <a name="CapServiceProject" id="@dxfrontier/projen-template-projects.CapServiceProject"></a>

Base class for managing project CapService configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.CapServiceProject.Initializer"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/projen-template-projects'

new CapServiceProject(options: CapServiceProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions">CapServiceProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.CapServiceProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions">CapServiceProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.CapServiceProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/projen-template-projects.CapServiceProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/projen-template-projects.CapServiceProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/projen-template-projects.CapServiceProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.CapServiceProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/projen-template-projects.CapServiceProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.CapServiceProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/projen-template-projects.CapServiceProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/projen-template-projects.CapServiceProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/projen-template-projects.CapServiceProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/projen-template-projects.CapServiceProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/projen-template-projects.CapServiceProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/projen-template-projects.CapServiceProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.CapServiceProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.CapServiceProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/projen-template-projects.CapServiceProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/projen-template-projects.CapServiceProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/projen-template-projects.CapServiceProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/projen-template-projects.CapServiceProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.CapServiceProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/projen-template-projects.CapServiceProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/projen-template-projects.CapServiceProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/projen-template-projects.CapServiceProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.CapServiceProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/projen-template-projects.CapServiceProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/projen-template-projects.CapServiceProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/projen-template-projects.CapServiceProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/projen-template-projects.CapServiceProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/projen-template-projects.CapServiceProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.CapServiceProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/projen-template-projects.CapServiceProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.CapServiceProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.CapServiceProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.CapServiceProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/projen-template-projects.CapServiceProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/projen-template-projects.CapServiceProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/projen-template-projects.CapServiceProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/projen-template-projects.CapServiceProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/projen-template-projects.CapServiceProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/projen-template-projects.CapServiceProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.CapServiceProject.isConstruct"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CapServiceProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/projen-template-projects.CapServiceProject.isProject"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/projen-template-projects'

CapServiceProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CapServiceProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/projen-template-projects.CapServiceProject.of"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/projen-template-projects'

CapServiceProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/projen-template-projects.CapServiceProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.commitlintConfig">commitlintConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase">CommitLintConfigBase</a></code> | Configuration for commitlint settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.devContainerConfig">devContainerConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase">DevContainerConfigBase</a></code> | Configuration for development container settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.eslintConfig">eslintConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase">EsLintConfigBase</a></code> | Configuration for ESLint settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.gitConfig">gitConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase">GitConfigBase</a></code> | Configuration for Git settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.githubConfig">githubConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase">GitHubConfigBase</a></code> | Configuration for GitHub settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.huskyConfig">huskyConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase">HuskyConfigBase</a></code> | Configuration for Husky settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.jestConfig">jestConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase">JestConfigBase</a></code> | Configuration for Jest settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.npmConfig">npmConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase">NpmConfigBase</a></code> | Configuration for NPM settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.prettierConfig">prettierConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase">PrettierConfigBase</a></code> | Configuration for Prettier settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.sampleCodeConfig">sampleCodeConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase">SampleCodeConfigBase</a></code> | Configuration for Sample Code in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.typescript">typescript</a></code> | <code>boolean</code> | This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.typescriptConfig">typescriptConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase">TypeScriptConfigBase</a></code> | Configuration for TypeScript settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.vscodeConfig">vscodeConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase">VsCodeConfigBase</a></code> | Configuration for VS Code settings in the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.CapServiceProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.CapServiceProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/projen-template-projects.CapServiceProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/projen-template-projects.CapServiceProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/projen-template-projects.CapServiceProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/projen-template-projects.CapServiceProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.CapServiceProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/projen-template-projects.CapServiceProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.CapServiceProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/projen-template-projects.CapServiceProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/projen-template-projects.CapServiceProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/projen-template-projects.CapServiceProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/projen-template-projects.CapServiceProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/projen-template-projects.CapServiceProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.CapServiceProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.CapServiceProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/projen-template-projects.CapServiceProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.CapServiceProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.CapServiceProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.CapServiceProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.CapServiceProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.CapServiceProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.CapServiceProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/projen-template-projects.CapServiceProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/projen-template-projects.CapServiceProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.CapServiceProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/projen-template-projects.CapServiceProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/projen-template-projects.CapServiceProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/projen-template-projects.CapServiceProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.CapServiceProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.CapServiceProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.CapServiceProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/projen-template-projects.CapServiceProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.CapServiceProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.CapServiceProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.CapServiceProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/projen-template-projects.CapServiceProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.CapServiceProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/projen-template-projects.CapServiceProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.CapServiceProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.CapServiceProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.CapServiceProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.CapServiceProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.CapServiceProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.CapServiceProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/projen-template-projects.CapServiceProject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

##### `commitlintConfig`<sup>Optional</sup> <a name="commitlintConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.commitlintConfig"></a>

```typescript
public readonly commitlintConfig: CommitLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase">CommitLintConfigBase</a>

Configuration for commitlint settings in the project.

This property is initialized if `commitlintEnabled` option is provided during project creation.

---

##### `devContainerConfig`<sup>Optional</sup> <a name="devContainerConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.devContainerConfig"></a>

```typescript
public readonly devContainerConfig: DevContainerConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase">DevContainerConfigBase</a>

Configuration for development container settings in the project.

This property is initialized if `devContainerEnabled` option is provided during project creation.

---

##### `eslintConfig`<sup>Optional</sup> <a name="eslintConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.eslintConfig"></a>

```typescript
public readonly eslintConfig: EsLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.EsLintConfigBase">EsLintConfigBase</a>

Configuration for ESLint settings in the project.

This property is initialized if `eslintEnabled` option is provided during project creation.

---

##### `gitConfig`<sup>Optional</sup> <a name="gitConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.gitConfig"></a>

```typescript
public readonly gitConfig: GitConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitConfigBase">GitConfigBase</a>

Configuration for Git settings in the project.

This property is always initialized as `gitConfig` when the project is created.

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.githubConfig"></a>

```typescript
public readonly githubConfig: GitHubConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitHubConfigBase">GitHubConfigBase</a>

Configuration for GitHub settings in the project.

This property is initialized if `githubEnabled` option is provided during project creation.

---

##### `huskyConfig`<sup>Optional</sup> <a name="huskyConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.huskyConfig"></a>

```typescript
public readonly huskyConfig: HuskyConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.HuskyConfigBase">HuskyConfigBase</a>

Configuration for Husky settings in the project.

This property is initialized if `huskyEnabled` option is provided during project creation.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.JestConfigBase">JestConfigBase</a>

Configuration for Jest settings in the project.

This property is initialized if `jestEnabled` option is provided during project creation.

---

##### `npmConfig`<sup>Optional</sup> <a name="npmConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.npmConfig"></a>

```typescript
public readonly npmConfig: NpmConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.NpmConfigBase">NpmConfigBase</a>

Configuration for NPM settings in the project.

This property is always initialized as `npmConfig` when the project is created.

---

##### `prettierConfig`<sup>Optional</sup> <a name="prettierConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.prettierConfig"></a>

```typescript
public readonly prettierConfig: PrettierConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.PrettierConfigBase">PrettierConfigBase</a>

Configuration for Prettier settings in the project.

This property is initialized if `prettierEnabled` option is provided during project creation.

---

##### `sampleCodeConfig`<sup>Optional</sup> <a name="sampleCodeConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.sampleCodeConfig"></a>

```typescript
public readonly sampleCodeConfig: SampleCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase">SampleCodeConfigBase</a>

Configuration for Sample Code in the project.

This property is initialized if `sampleCodeEnabled` option is provided during project creation.

---

##### `typescript`<sup>Optional</sup> <a name="typescript" id="@dxfrontier/projen-template-projects.CapServiceProject.property.typescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* boolean

This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="typescriptConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.typescriptConfig"></a>

```typescript
public readonly typescriptConfig: TypeScriptConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase">TypeScriptConfigBase</a>

Configuration for TypeScript settings in the project.

This property is always initialized as `typescriptConfig` when the project is created.

---

##### `vscodeConfig`<sup>Optional</sup> <a name="vscodeConfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.vscodeConfig"></a>

```typescript
public readonly vscodeConfig: VsCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase">VsCodeConfigBase</a>

Configuration for VS Code settings in the project.

This property is initialized if `vscodeEnabled` option is provided during project creation.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/projen-template-projects.CapServiceProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/projen-template-projects.CapServiceProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### CommitLintConfigBase <a name="CommitLintConfigBase" id="@dxfrontier/projen-template-projects.CommitLintConfigBase"></a>

Base class for implementing all relevant CommitLint configuration.

This class acts as a base for handling CommitLint configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.Initializer"></a>

```typescript
import { CommitLintConfigBase } from '@dxfrontier/projen-template-projects'

new CommitLintConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.isConstruct"></a>

```typescript
import { CommitLintConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.isComponent"></a>

```typescript
import { CommitLintConfigBase } from '@dxfrontier/projen-template-projects'

CommitLintConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLintConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### CommitLintConfigCapService <a name="CommitLintConfigCapService" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService"></a>

Implementing all relevant CommitLint configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.Initializer"></a>

```typescript
import { CommitLintConfigCapService } from '@dxfrontier/projen-template-projects'

new CommitLintConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.isConstruct"></a>

```typescript
import { CommitLintConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.isComponent"></a>

```typescript
import { CommitLintConfigCapService } from '@dxfrontier/projen-template-projects'

CommitLintConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLintConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### CommitLintConfigGitHubAction <a name="CommitLintConfigGitHubAction" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction"></a>

Implementing all relevant CommitLint configuration for the GitHubAction project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.Initializer"></a>

```typescript
import { CommitLintConfigGitHubAction } from '@dxfrontier/projen-template-projects'

new CommitLintConfigGitHubAction(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.isConstruct"></a>

```typescript
import { CommitLintConfigGitHubAction } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.isComponent"></a>

```typescript
import { CommitLintConfigGitHubAction } from '@dxfrontier/projen-template-projects'

CommitLintConfigGitHubAction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLintConfigGitHubAction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Config <a name="Config" id="@dxfrontier/projen-template-projects.Config"></a>

Base class for creating and managing project configurations.

This class allows configuring a project using different strategies.
It requires the project to be either a `BaseProject` or `JsiiProject`.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.Config.Initializer"></a>

```typescript
import { Config } from '@dxfrontier/projen-template-projects'

new Config(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Config.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.Config.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Config.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.Config.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.Config.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.Config.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.Config.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.Config.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.Config.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.Config.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.Config.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.Config.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.Config.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.Config.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.Config.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.Config.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.Config.isConstruct"></a>

```typescript
import { Config } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.Config.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.Config.isComponent"></a>

```typescript
import { Config } from '@dxfrontier/projen-template-projects'

Config.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.Config.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Config.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.Config.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.Config.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.Config.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### DevContainerConfigBase <a name="DevContainerConfigBase" id="@dxfrontier/projen-template-projects.DevContainerConfigBase"></a>

Base class for implementing all relevant DevContainer configuration.

This class acts as a base for handling DevContainer configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.Initializer"></a>

```typescript
import { DevContainerConfigBase } from '@dxfrontier/projen-template-projects'

new DevContainerConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.isConstruct"></a>

```typescript
import { DevContainerConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.isComponent"></a>

```typescript
import { DevContainerConfigBase } from '@dxfrontier/projen-template-projects'

DevContainerConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.DevContainerConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### DevContainerConfigCapService <a name="DevContainerConfigCapService" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService"></a>

Implementing all relevant DevContainer configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.Initializer"></a>

```typescript
import { DevContainerConfigCapService } from '@dxfrontier/projen-template-projects'

new DevContainerConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.isConstruct"></a>

```typescript
import { DevContainerConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.isComponent"></a>

```typescript
import { DevContainerConfigCapService } from '@dxfrontier/projen-template-projects'

DevContainerConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.DevContainerConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### EsLintConfigBase <a name="EsLintConfigBase" id="@dxfrontier/projen-template-projects.EsLintConfigBase"></a>

Base class for implementing all relevant EsLint configuration.

This class acts as a base for handling EsLint configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.EsLintConfigBase.Initializer"></a>

```typescript
import { EsLintConfigBase } from '@dxfrontier/projen-template-projects'

new EsLintConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.EsLintConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.addRules">addRules</a></code> | Adds custom linting rules to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.EsLintConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.EsLintConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.EsLintConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.EsLintConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.EsLintConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.EsLintConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/projen-template-projects.EsLintConfigBase.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/projen-template-projects.EsLintConfigBase.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

##### `addRules` <a name="addRules" id="@dxfrontier/projen-template-projects.EsLintConfigBase.addRules"></a>

```typescript
public addRules(rules: {[ key: string ]: string}): void
```

Adds custom linting rules to the project's configuration.

###### `rules`<sup>Required</sup> <a name="rules" id="@dxfrontier/projen-template-projects.EsLintConfigBase.addRules.parameter.rules"></a>

- *Type:* {[ key: string ]: string}

A record of rule names and their corresponding configurations.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.EsLintConfigBase.isConstruct"></a>

```typescript
import { EsLintConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.EsLintConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.EsLintConfigBase.isComponent"></a>

```typescript
import { EsLintConfigBase } from '@dxfrontier/projen-template-projects'

EsLintConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.EsLintConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.EsLintConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.EsLintConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### EsLintConfigCapService <a name="EsLintConfigCapService" id="@dxfrontier/projen-template-projects.EsLintConfigCapService"></a>

Implementing all relevant EsLint configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.Initializer"></a>

```typescript
import { EsLintConfigCapService } from '@dxfrontier/projen-template-projects'

new EsLintConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.addRules">addRules</a></code> | Adds custom linting rules to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

##### `addRules` <a name="addRules" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.addRules"></a>

```typescript
public addRules(rules: {[ key: string ]: string}): void
```

Adds custom linting rules to the project's configuration.

###### `rules`<sup>Required</sup> <a name="rules" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.addRules.parameter.rules"></a>

- *Type:* {[ key: string ]: string}

A record of rule names and their corresponding configurations.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.isConstruct"></a>

```typescript
import { EsLintConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.isComponent"></a>

```typescript
import { EsLintConfigCapService } from '@dxfrontier/projen-template-projects'

EsLintConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.EsLintConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitConfigBase <a name="GitConfigBase" id="@dxfrontier/projen-template-projects.GitConfigBase"></a>

Base class for implementing all relevant Git configuration.

This class acts as a base for handling Git configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitConfigBase.Initializer"></a>

```typescript
import { GitConfigBase } from '@dxfrontier/projen-template-projects'

new GitConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.GitConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.GitConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.GitConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.GitConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/projen-template-projects.GitConfigBase.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/projen-template-projects.GitConfigBase.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.GitConfigBase.isConstruct"></a>

```typescript
import { GitConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.GitConfigBase.isComponent"></a>

```typescript
import { GitConfigBase } from '@dxfrontier/projen-template-projects'

GitConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.GitConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitConfigCapService <a name="GitConfigCapService" id="@dxfrontier/projen-template-projects.GitConfigCapService"></a>

Implementing all relevant Git configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitConfigCapService.Initializer"></a>

```typescript
import { GitConfigCapService } from '@dxfrontier/projen-template-projects'

new GitConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.GitConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.GitConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.GitConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.GitConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/projen-template-projects.GitConfigCapService.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/projen-template-projects.GitConfigCapService.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.GitConfigCapService.isConstruct"></a>

```typescript
import { GitConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.GitConfigCapService.isComponent"></a>

```typescript
import { GitConfigCapService } from '@dxfrontier/projen-template-projects'

GitConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.GitConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.GitConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitHubActionProject <a name="GitHubActionProject" id="@dxfrontier/projen-template-projects.GitHubActionProject"></a>

Base class for managing project GitHubAction configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitHubActionProject.Initializer"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/projen-template-projects'

new GitHubActionProject(options: GitHubActionProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions">GitHubActionProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.GitHubActionProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions">GitHubActionProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.GitHubActionProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/projen-template-projects.GitHubActionProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/projen-template-projects.GitHubActionProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/projen-template-projects.GitHubActionProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.GitHubActionProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/projen-template-projects.GitHubActionProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.GitHubActionProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/projen-template-projects.GitHubActionProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/projen-template-projects.GitHubActionProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitHubActionProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitHubActionProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/projen-template-projects.GitHubActionProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/projen-template-projects.GitHubActionProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/projen-template-projects.GitHubActionProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/projen-template-projects.GitHubActionProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.GitHubActionProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/projen-template-projects.GitHubActionProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/projen-template-projects.GitHubActionProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/projen-template-projects.GitHubActionProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.GitHubActionProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.GitHubActionProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.GitHubActionProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/projen-template-projects.GitHubActionProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/projen-template-projects.GitHubActionProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/projen-template-projects.GitHubActionProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/projen-template-projects.GitHubActionProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/projen-template-projects.GitHubActionProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/projen-template-projects.GitHubActionProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.GitHubActionProject.isConstruct"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitHubActionProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/projen-template-projects.GitHubActionProject.isProject"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/projen-template-projects'

GitHubActionProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitHubActionProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/projen-template-projects.GitHubActionProject.of"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/projen-template-projects'

GitHubActionProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/projen-template-projects.GitHubActionProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.commitlintConfig">commitlintConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase">CommitLintConfigBase</a></code> | Configuration for commitlint settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.devContainerConfig">devContainerConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase">DevContainerConfigBase</a></code> | Configuration for development container settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.eslintConfig">eslintConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase">EsLintConfigBase</a></code> | Configuration for ESLint settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.gitConfig">gitConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase">GitConfigBase</a></code> | Configuration for Git settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.githubConfig">githubConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase">GitHubConfigBase</a></code> | Configuration for GitHub settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.huskyConfig">huskyConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase">HuskyConfigBase</a></code> | Configuration for Husky settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.jestConfig">jestConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase">JestConfigBase</a></code> | Configuration for Jest settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.npmConfig">npmConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase">NpmConfigBase</a></code> | Configuration for NPM settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.prettierConfig">prettierConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase">PrettierConfigBase</a></code> | Configuration for Prettier settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.sampleCodeConfig">sampleCodeConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase">SampleCodeConfigBase</a></code> | Configuration for Sample Code in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.typescript">typescript</a></code> | <code>boolean</code> | This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.typescriptConfig">typescriptConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase">TypeScriptConfigBase</a></code> | Configuration for TypeScript settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.vscodeConfig">vscodeConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase">VsCodeConfigBase</a></code> | Configuration for VS Code settings in the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

##### `commitlintConfig`<sup>Optional</sup> <a name="commitlintConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.commitlintConfig"></a>

```typescript
public readonly commitlintConfig: CommitLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase">CommitLintConfigBase</a>

Configuration for commitlint settings in the project.

This property is initialized if `commitlintEnabled` option is provided during project creation.

---

##### `devContainerConfig`<sup>Optional</sup> <a name="devContainerConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.devContainerConfig"></a>

```typescript
public readonly devContainerConfig: DevContainerConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase">DevContainerConfigBase</a>

Configuration for development container settings in the project.

This property is initialized if `devContainerEnabled` option is provided during project creation.

---

##### `eslintConfig`<sup>Optional</sup> <a name="eslintConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.eslintConfig"></a>

```typescript
public readonly eslintConfig: EsLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.EsLintConfigBase">EsLintConfigBase</a>

Configuration for ESLint settings in the project.

This property is initialized if `eslintEnabled` option is provided during project creation.

---

##### `gitConfig`<sup>Optional</sup> <a name="gitConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.gitConfig"></a>

```typescript
public readonly gitConfig: GitConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitConfigBase">GitConfigBase</a>

Configuration for Git settings in the project.

This property is always initialized as `gitConfig` when the project is created.

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.githubConfig"></a>

```typescript
public readonly githubConfig: GitHubConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitHubConfigBase">GitHubConfigBase</a>

Configuration for GitHub settings in the project.

This property is initialized if `githubEnabled` option is provided during project creation.

---

##### `huskyConfig`<sup>Optional</sup> <a name="huskyConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.huskyConfig"></a>

```typescript
public readonly huskyConfig: HuskyConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.HuskyConfigBase">HuskyConfigBase</a>

Configuration for Husky settings in the project.

This property is initialized if `huskyEnabled` option is provided during project creation.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.JestConfigBase">JestConfigBase</a>

Configuration for Jest settings in the project.

This property is initialized if `jestEnabled` option is provided during project creation.

---

##### `npmConfig`<sup>Optional</sup> <a name="npmConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.npmConfig"></a>

```typescript
public readonly npmConfig: NpmConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.NpmConfigBase">NpmConfigBase</a>

Configuration for NPM settings in the project.

This property is always initialized as `npmConfig` when the project is created.

---

##### `prettierConfig`<sup>Optional</sup> <a name="prettierConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.prettierConfig"></a>

```typescript
public readonly prettierConfig: PrettierConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.PrettierConfigBase">PrettierConfigBase</a>

Configuration for Prettier settings in the project.

This property is initialized if `prettierEnabled` option is provided during project creation.

---

##### `sampleCodeConfig`<sup>Optional</sup> <a name="sampleCodeConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.sampleCodeConfig"></a>

```typescript
public readonly sampleCodeConfig: SampleCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase">SampleCodeConfigBase</a>

Configuration for Sample Code in the project.

This property is initialized if `sampleCodeEnabled` option is provided during project creation.

---

##### `typescript`<sup>Optional</sup> <a name="typescript" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.typescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* boolean

This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="typescriptConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.typescriptConfig"></a>

```typescript
public readonly typescriptConfig: TypeScriptConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase">TypeScriptConfigBase</a>

Configuration for TypeScript settings in the project.

This property is always initialized as `typescriptConfig` when the project is created.

---

##### `vscodeConfig`<sup>Optional</sup> <a name="vscodeConfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.vscodeConfig"></a>

```typescript
public readonly vscodeConfig: VsCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase">VsCodeConfigBase</a>

Configuration for VS Code settings in the project.

This property is initialized if `vscodeEnabled` option is provided during project creation.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### GitHubConfigBase <a name="GitHubConfigBase" id="@dxfrontier/projen-template-projects.GitHubConfigBase"></a>

Base class for implementing all relevant GitHub configuration.

This class acts as a base for handling GitHub configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitHubConfigBase.Initializer"></a>

```typescript
import { GitHubConfigBase } from '@dxfrontier/projen-template-projects'

new GitHubConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitHubConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.addAttributePatterns">addAttributePatterns</a></code> | Adds custom attributes patterns to the project's configuration. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.createBugIssue">createBugIssue</a></code> | Creates a bug issue template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.createCliff">createCliff</a></code> | Creates a the git cliff template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.createFeatureIssue">createFeatureIssue</a></code> | Creates a feature request template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.createHousekeepingIssue">createHousekeepingIssue</a></code> | Creates a housekeeping issue template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.createPullRequest">createPullRequest</a></code> | Creates a pull request template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.createQuestionIssue">createQuestionIssue</a></code> | Creates a question issue template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.createReleaseWorkflow">createReleaseWorkflow</a></code> | Creates a release workflow template file. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.GitHubConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitHubConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitHubConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.GitHubConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.GitHubConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.GitHubConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addAttributePatterns` <a name="addAttributePatterns" id="@dxfrontier/projen-template-projects.GitHubConfigBase.addAttributePatterns"></a>

```typescript
public addAttributePatterns(patterns: string[]): void
```

Adds custom attributes patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/projen-template-projects.GitHubConfigBase.addAttributePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be added as attributes.

---

##### `createBugIssue` <a name="createBugIssue" id="@dxfrontier/projen-template-projects.GitHubConfigBase.createBugIssue"></a>

```typescript
public createBugIssue(): void
```

Creates a bug issue template file.

##### `createCliff` <a name="createCliff" id="@dxfrontier/projen-template-projects.GitHubConfigBase.createCliff"></a>

```typescript
public createCliff(): void
```

Creates a the git cliff template file.

##### `createFeatureIssue` <a name="createFeatureIssue" id="@dxfrontier/projen-template-projects.GitHubConfigBase.createFeatureIssue"></a>

```typescript
public createFeatureIssue(): void
```

Creates a feature request template file.

##### `createHousekeepingIssue` <a name="createHousekeepingIssue" id="@dxfrontier/projen-template-projects.GitHubConfigBase.createHousekeepingIssue"></a>

```typescript
public createHousekeepingIssue(): void
```

Creates a housekeeping issue template file.

##### `createPullRequest` <a name="createPullRequest" id="@dxfrontier/projen-template-projects.GitHubConfigBase.createPullRequest"></a>

```typescript
public createPullRequest(): void
```

Creates a pull request template file.

##### `createQuestionIssue` <a name="createQuestionIssue" id="@dxfrontier/projen-template-projects.GitHubConfigBase.createQuestionIssue"></a>

```typescript
public createQuestionIssue(): void
```

Creates a question issue template file.

##### `createReleaseWorkflow` <a name="createReleaseWorkflow" id="@dxfrontier/projen-template-projects.GitHubConfigBase.createReleaseWorkflow"></a>

```typescript
public createReleaseWorkflow(): void
```

Creates a release workflow template file.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.GitHubConfigBase.isConstruct"></a>

```typescript
import { GitHubConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitHubConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.GitHubConfigBase.isComponent"></a>

```typescript
import { GitHubConfigBase } from '@dxfrontier/projen-template-projects'

GitHubConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitHubConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.GitHubConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitHubConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitHubConfigCapService <a name="GitHubConfigCapService" id="@dxfrontier/projen-template-projects.GitHubConfigCapService"></a>

Implementing all relevant GitHub configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.Initializer"></a>

```typescript
import { GitHubConfigCapService } from '@dxfrontier/projen-template-projects'

new GitHubConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.addAttributePatterns">addAttributePatterns</a></code> | Adds custom attributes patterns to the project's configuration. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createBugIssue">createBugIssue</a></code> | Creates a bug issue template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createCliff">createCliff</a></code> | Creates a the git cliff template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createFeatureIssue">createFeatureIssue</a></code> | Creates a feature request template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createHousekeepingIssue">createHousekeepingIssue</a></code> | Creates a housekeeping issue template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createPullRequest">createPullRequest</a></code> | Creates a pull request template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createQuestionIssue">createQuestionIssue</a></code> | Creates a question issue template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createReleaseWorkflow">createReleaseWorkflow</a></code> | Creates a release workflow template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createDeploymentWorkflow">createDeploymentWorkflow</a></code> | Creates a deployment workflow template file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.createStoryIssue">createStoryIssue</a></code> | Creates a user story issue template file. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addAttributePatterns` <a name="addAttributePatterns" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.addAttributePatterns"></a>

```typescript
public addAttributePatterns(patterns: string[]): void
```

Adds custom attributes patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.addAttributePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be added as attributes.

---

##### `createBugIssue` <a name="createBugIssue" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createBugIssue"></a>

```typescript
public createBugIssue(): void
```

Creates a bug issue template file.

##### `createCliff` <a name="createCliff" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createCliff"></a>

```typescript
public createCliff(): void
```

Creates a the git cliff template file.

##### `createFeatureIssue` <a name="createFeatureIssue" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createFeatureIssue"></a>

```typescript
public createFeatureIssue(): void
```

Creates a feature request template file.

##### `createHousekeepingIssue` <a name="createHousekeepingIssue" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createHousekeepingIssue"></a>

```typescript
public createHousekeepingIssue(): void
```

Creates a housekeeping issue template file.

##### `createPullRequest` <a name="createPullRequest" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createPullRequest"></a>

```typescript
public createPullRequest(): void
```

Creates a pull request template file.

##### `createQuestionIssue` <a name="createQuestionIssue" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createQuestionIssue"></a>

```typescript
public createQuestionIssue(): void
```

Creates a question issue template file.

##### `createReleaseWorkflow` <a name="createReleaseWorkflow" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createReleaseWorkflow"></a>

```typescript
public createReleaseWorkflow(): void
```

Creates a release workflow template file.

##### `createDeploymentWorkflow` <a name="createDeploymentWorkflow" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createDeploymentWorkflow"></a>

```typescript
public createDeploymentWorkflow(): void
```

Creates a deployment workflow template file.

##### `createStoryIssue` <a name="createStoryIssue" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.createStoryIssue"></a>

```typescript
public createStoryIssue(): void
```

Creates a user story issue template file.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.isConstruct"></a>

```typescript
import { GitHubConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.isComponent"></a>

```typescript
import { GitHubConfigCapService } from '@dxfrontier/projen-template-projects'

GitHubConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitHubConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### HuskyConfigBase <a name="HuskyConfigBase" id="@dxfrontier/projen-template-projects.HuskyConfigBase"></a>

Base class for implementing all relevant Husky configuration.

This class acts as a base for handling Husky configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.HuskyConfigBase.Initializer"></a>

```typescript
import { HuskyConfigBase } from '@dxfrontier/projen-template-projects'

new HuskyConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.HuskyConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.HuskyConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.HuskyConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.HuskyConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.HuskyConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.HuskyConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.HuskyConfigBase.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.HuskyConfigBase.isConstruct"></a>

```typescript
import { HuskyConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.HuskyConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.HuskyConfigBase.isComponent"></a>

```typescript
import { HuskyConfigBase } from '@dxfrontier/projen-template-projects'

HuskyConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.HuskyConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.HuskyConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.HuskyConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### HuskyConfigCapService <a name="HuskyConfigCapService" id="@dxfrontier/projen-template-projects.HuskyConfigCapService"></a>

Implementing all relevant Husky configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.Initializer"></a>

```typescript
import { HuskyConfigCapService } from '@dxfrontier/projen-template-projects'

new HuskyConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.isConstruct"></a>

```typescript
import { HuskyConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.isComponent"></a>

```typescript
import { HuskyConfigCapService } from '@dxfrontier/projen-template-projects'

HuskyConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.HuskyConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### HuskyConfigJsii <a name="HuskyConfigJsii" id="@dxfrontier/projen-template-projects.HuskyConfigJsii"></a>

Implementing all relevant Husky configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.Initializer"></a>

```typescript
import { HuskyConfigJsii } from '@dxfrontier/projen-template-projects'

new HuskyConfigJsii(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.isConstruct"></a>

```typescript
import { HuskyConfigJsii } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.isComponent"></a>

```typescript
import { HuskyConfigJsii } from '@dxfrontier/projen-template-projects'

HuskyConfigJsii.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigJsii.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.HuskyConfigJsii.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### JestConfigBase <a name="JestConfigBase" id="@dxfrontier/projen-template-projects.JestConfigBase"></a>

Base class for implementing all relevant Jest configuration.

This class acts as a base for handling Jest configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.JestConfigBase.Initializer"></a>

```typescript
import { JestConfigBase } from '@dxfrontier/projen-template-projects'

new JestConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.JestConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.JestConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.JestConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.JestConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.JestConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.JestConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.JestConfigBase.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.JestConfigBase.isConstruct"></a>

```typescript
import { JestConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.JestConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.JestConfigBase.isComponent"></a>

```typescript
import { JestConfigBase } from '@dxfrontier/projen-template-projects'

JestConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.JestConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.JestConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.JestConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### JestConfigCapService <a name="JestConfigCapService" id="@dxfrontier/projen-template-projects.JestConfigCapService"></a>

Implementing all relevant Jest configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.JestConfigCapService.Initializer"></a>

```typescript
import { JestConfigCapService } from '@dxfrontier/projen-template-projects'

new JestConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.JestConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.JestConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.JestConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.JestConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.JestConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.JestConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.JestConfigCapService.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.JestConfigCapService.isConstruct"></a>

```typescript
import { JestConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.JestConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.JestConfigCapService.isComponent"></a>

```typescript
import { JestConfigCapService } from '@dxfrontier/projen-template-projects'

JestConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.JestConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.JestConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.JestConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.JestConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### JsiiProject <a name="JsiiProject" id="@dxfrontier/projen-template-projects.JsiiProject"></a>

- *Implements:* <a href="#@dxfrontier/projen-template-projects.IProjectKind">IProjectKind</a>

Base class for managing project Jsii configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.JsiiProject.Initializer"></a>

```typescript
import { JsiiProject } from '@dxfrontier/projen-template-projects'

new JsiiProject(options: JsiiProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions">JsiiProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.JsiiProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions">JsiiProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.JsiiProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/projen-template-projects.JsiiProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/projen-template-projects.JsiiProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/projen-template-projects.JsiiProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.JsiiProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/projen-template-projects.JsiiProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.JsiiProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/projen-template-projects.JsiiProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.JsiiProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/projen-template-projects.JsiiProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/projen-template-projects.JsiiProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/projen-template-projects.JsiiProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/projen-template-projects.JsiiProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/projen-template-projects.JsiiProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.JsiiProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.JsiiProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/projen-template-projects.JsiiProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.JsiiProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/projen-template-projects.JsiiProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/projen-template-projects.JsiiProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/projen-template-projects.JsiiProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/projen-template-projects.JsiiProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.JsiiProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/projen-template-projects.JsiiProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.JsiiProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/projen-template-projects.JsiiProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.JsiiProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/projen-template-projects.JsiiProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.JsiiProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/projen-template-projects.JsiiProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/projen-template-projects.JsiiProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/projen-template-projects.JsiiProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.JsiiProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/projen-template-projects.JsiiProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.JsiiProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/projen-template-projects.JsiiProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.JsiiProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/projen-template-projects.JsiiProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.JsiiProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/projen-template-projects.JsiiProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/projen-template-projects.JsiiProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/projen-template-projects.JsiiProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.JsiiProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/projen-template-projects.JsiiProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.JsiiProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.JsiiProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.JsiiProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/projen-template-projects.JsiiProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.JsiiProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/projen-template-projects.JsiiProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.JsiiProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/projen-template-projects.JsiiProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.JsiiProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/projen-template-projects.JsiiProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/projen-template-projects.JsiiProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/projen-template-projects.JsiiProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.JsiiProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/projen-template-projects.JsiiProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.JsiiProject.isConstruct"></a>

```typescript
import { JsiiProject } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.JsiiProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/projen-template-projects.JsiiProject.isProject"></a>

```typescript
import { JsiiProject } from '@dxfrontier/projen-template-projects'

JsiiProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.JsiiProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/projen-template-projects.JsiiProject.of"></a>

```typescript
import { JsiiProject } from '@dxfrontier/projen-template-projects'

JsiiProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/projen-template-projects.JsiiProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.commitlintConfig">commitlintConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase">CommitLintConfigBase</a></code> | Configuration for commitlint settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.devContainerConfig">devContainerConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase">DevContainerConfigBase</a></code> | Configuration for development container settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.eslintConfig">eslintConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.EsLintConfigBase">EsLintConfigBase</a></code> | Configuration for ESLint settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.githubConfig">githubConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitHubConfigBase">GitHubConfigBase</a></code> | Configuration for GitHub settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.huskyConfig">huskyConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.HuskyConfigBase">HuskyConfigBase</a></code> | Configuration for Husky settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.jestConfig">jestConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.JestConfigBase">JestConfigBase</a></code> | Configuration for Jest settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.npmConfig">npmConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii">NpmConfigJsii</a></code> | Configuration for NPM settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.prettierConfig">prettierConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase">PrettierConfigBase</a></code> | Configuration for Prettier settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.vscodeConfig">vscodeConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase">VsCodeConfigBase</a></code> | Configuration for VS Code settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.gitConfig">gitConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.GitConfigBase">GitConfigBase</a></code> | Configuration for Git settings in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.typescript">typescript</a></code> | <code>boolean</code> | This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.typescriptConfig">typescriptConfig</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase">TypeScriptConfigBase</a></code> | Configuration for TypeScript settings in the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.JsiiProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/projen-template-projects.JsiiProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.JsiiProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/projen-template-projects.JsiiProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/projen-template-projects.JsiiProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.JsiiProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/projen-template-projects.JsiiProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/projen-template-projects.JsiiProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/projen-template-projects.JsiiProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.JsiiProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/projen-template-projects.JsiiProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.JsiiProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.JsiiProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/projen-template-projects.JsiiProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/projen-template-projects.JsiiProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/projen-template-projects.JsiiProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/projen-template-projects.JsiiProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.JsiiProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/projen-template-projects.JsiiProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/projen-template-projects.JsiiProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/projen-template-projects.JsiiProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/projen-template-projects.JsiiProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/projen-template-projects.JsiiProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/projen-template-projects.JsiiProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.JsiiProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.JsiiProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/projen-template-projects.JsiiProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.JsiiProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.JsiiProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.JsiiProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.JsiiProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.JsiiProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.JsiiProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/projen-template-projects.JsiiProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/projen-template-projects.JsiiProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.JsiiProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/projen-template-projects.JsiiProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/projen-template-projects.JsiiProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/projen-template-projects.JsiiProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.JsiiProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/projen-template-projects.JsiiProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.JsiiProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.JsiiProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/projen-template-projects.JsiiProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.JsiiProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.JsiiProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.JsiiProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.JsiiProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.JsiiProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/projen-template-projects.JsiiProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.JsiiProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/projen-template-projects.JsiiProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.JsiiProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.JsiiProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.JsiiProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.JsiiProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.JsiiProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/projen-template-projects.JsiiProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.JsiiProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.JsiiProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/projen-template-projects.JsiiProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `commitlintConfig`<sup>Optional</sup> <a name="commitlintConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.commitlintConfig"></a>

```typescript
public readonly commitlintConfig: CommitLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.CommitLintConfigBase">CommitLintConfigBase</a>

Configuration for commitlint settings in the project.

This property is initialized if `commitlintEnabled` option is provided during project creation.

---

##### `devContainerConfig`<sup>Optional</sup> <a name="devContainerConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.devContainerConfig"></a>

```typescript
public readonly devContainerConfig: DevContainerConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.DevContainerConfigBase">DevContainerConfigBase</a>

Configuration for development container settings in the project.

This property is initialized if `devContainerEnabled` option is provided during project creation.

---

##### `eslintConfig`<sup>Optional</sup> <a name="eslintConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.eslintConfig"></a>

```typescript
public readonly eslintConfig: EsLintConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.EsLintConfigBase">EsLintConfigBase</a>

Configuration for ESLint settings in the project.

This property is initialized if `eslintEnabled` option is provided during project creation.

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.githubConfig"></a>

```typescript
public readonly githubConfig: GitHubConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitHubConfigBase">GitHubConfigBase</a>

Configuration for GitHub settings in the project.

This property is initialized if `githubEnabled` option is provided during project creation.

---

##### `huskyConfig`<sup>Optional</sup> <a name="huskyConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.huskyConfig"></a>

```typescript
public readonly huskyConfig: HuskyConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.HuskyConfigBase">HuskyConfigBase</a>

Configuration for Husky settings in the project.

This property is initialized if `huskyEnabled` option is provided during project creation.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.JestConfigBase">JestConfigBase</a>

Configuration for Jest settings in the project.

This property is initialized if `jestEnabled` option is provided during project creation.

---

##### `npmConfig`<sup>Optional</sup> <a name="npmConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.npmConfig"></a>

```typescript
public readonly npmConfig: NpmConfigJsii;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.NpmConfigJsii">NpmConfigJsii</a>

Configuration for NPM settings in the project.

This property is always initialized as `npmConfig` when the project is created.

---

##### `prettierConfig`<sup>Optional</sup> <a name="prettierConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.prettierConfig"></a>

```typescript
public readonly prettierConfig: PrettierConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.PrettierConfigBase">PrettierConfigBase</a>

Configuration for Prettier settings in the project.

This property is initialized if `prettierEnabled` option is provided during project creation.

---

##### `vscodeConfig`<sup>Optional</sup> <a name="vscodeConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.vscodeConfig"></a>

```typescript
public readonly vscodeConfig: VsCodeConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase">VsCodeConfigBase</a>

Configuration for VS Code settings in the project.

This property is initialized if `vscodeEnabled` option is provided during project creation.

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/projen-template-projects.JsiiProject.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

##### `gitConfig`<sup>Optional</sup> <a name="gitConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.gitConfig"></a>

```typescript
public readonly gitConfig: GitConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.GitConfigBase">GitConfigBase</a>

Configuration for Git settings in the project.

This property is always initialized as `gitConfig` when the project is created.

---

##### `typescript`<sup>Optional</sup> <a name="typescript" id="@dxfrontier/projen-template-projects.JsiiProject.property.typescript"></a>

```typescript
public readonly typescript: boolean;
```

- *Type:* boolean

This flag aligns with Projen structure using flags like `eslint`, `devContainer`, .... for defining if configuration functionality is enabled or not. Will align with `typescriptEnabled` If set to `true`, TypeScript-specific settings will be configured for the project. If set to `false` TypeScript will be completely removed from the project as Projen projects used in this context are always relying on TypeScript.

---

##### `typescriptConfig`<sup>Optional</sup> <a name="typescriptConfig" id="@dxfrontier/projen-template-projects.JsiiProject.property.typescriptConfig"></a>

```typescript
public readonly typescriptConfig: TypeScriptConfigBase;
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase">TypeScriptConfigBase</a>

Configuration for TypeScript settings in the project.

This property is always initialized as `typescriptConfig` when the project is created.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/projen-template-projects.JsiiProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/projen-template-projects.JsiiProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### NpmConfigBase <a name="NpmConfigBase" id="@dxfrontier/projen-template-projects.NpmConfigBase"></a>

Base class for implementing all relevant NPM configuration.

This class acts as a base for handling NPM configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.NpmConfigBase.Initializer"></a>

```typescript
import { NpmConfigBase } from '@dxfrontier/projen-template-projects'

new NpmConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.addDependencies">addDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.addDevDependencies">addDevDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.addPeerDependencies">addPeerDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.addScripts">addScripts</a></code> | Adds custom npm scripts to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.addSettings">addSettings</a></code> | Adds custom settings to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.patchDevDependencyRemove">patchDevDependencyRemove</a></code> | Patches devDependencies in the `package.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.patchScriptsAdd">patchScriptsAdd</a></code> | Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.removeScriptsOnInit">removeScriptsOnInit</a></code> | Removes the NPM Package scripts associated with Projen NPM Package initialization. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.NpmConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.NpmConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.NpmConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.NpmConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.NpmConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.NpmConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addDependencies` <a name="addDependencies" id="@dxfrontier/projen-template-projects.NpmConfigBase.addDependencies"></a>

```typescript
public addDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigBase.addDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of dependencies to add.

---

##### `addDevDependencies` <a name="addDevDependencies" id="@dxfrontier/projen-template-projects.NpmConfigBase.addDevDependencies"></a>

```typescript
public addDevDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigBase.addDevDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of devDependencies to add.

---

##### `addPeerDependencies` <a name="addPeerDependencies" id="@dxfrontier/projen-template-projects.NpmConfigBase.addPeerDependencies"></a>

```typescript
public addPeerDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigBase.addPeerDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of peerDependencies to add.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.NpmConfigBase.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Adds custom npm scripts to the project.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigBase.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands.

---

##### `addSettings` <a name="addSettings" id="@dxfrontier/projen-template-projects.NpmConfigBase.addSettings"></a>

```typescript
public addSettings(settings: {[ key: string ]: any}): void
```

Adds custom settings to the project.

###### `settings`<sup>Required</sup> <a name="settings" id="@dxfrontier/projen-template-projects.NpmConfigBase.addSettings.parameter.settings"></a>

- *Type:* {[ key: string ]: any}

Record of settings to add.

---

##### `patchDevDependencyRemove` <a name="patchDevDependencyRemove" id="@dxfrontier/projen-template-projects.NpmConfigBase.patchDevDependencyRemove"></a>

```typescript
public patchDevDependencyRemove(devDependencies: string[]): void
```

Patches devDependencies in the `package.json` file.

###### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@dxfrontier/projen-template-projects.NpmConfigBase.patchDevDependencyRemove.parameter.devDependencies"></a>

- *Type:* string[]

A list of development dependencies to patch.

---

##### `patchScriptsAdd` <a name="patchScriptsAdd" id="@dxfrontier/projen-template-projects.NpmConfigBase.patchScriptsAdd"></a>

```typescript
public patchScriptsAdd(scripts: {[ key: string ]: string}): void
```

Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigBase.patchScriptsAdd.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands to patch.

---

##### `removeScriptsOnInit` <a name="removeScriptsOnInit" id="@dxfrontier/projen-template-projects.NpmConfigBase.removeScriptsOnInit"></a>

```typescript
public removeScriptsOnInit(scripts: string[]): void
```

Removes the NPM Package scripts associated with Projen NPM Package initialization.

Overwrite this method if you want to keep the projen standard scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigBase.removeScriptsOnInit.parameter.scripts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.NpmConfigBase.isConstruct"></a>

```typescript
import { NpmConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.NpmConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.NpmConfigBase.isComponent"></a>

```typescript
import { NpmConfigBase } from '@dxfrontier/projen-template-projects'

NpmConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.NpmConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.NpmConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### NpmConfigCapService <a name="NpmConfigCapService" id="@dxfrontier/projen-template-projects.NpmConfigCapService"></a>

Implementing all relevant NPM configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.NpmConfigCapService.Initializer"></a>

```typescript
import { NpmConfigCapService } from '@dxfrontier/projen-template-projects'

new NpmConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.addDependencies">addDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.addDevDependencies">addDevDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.addPeerDependencies">addPeerDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.addScripts">addScripts</a></code> | Adds custom npm scripts to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.addSettings">addSettings</a></code> | Adds custom settings to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.patchDevDependencyRemove">patchDevDependencyRemove</a></code> | Patches devDependencies in the `package.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.patchScriptsAdd">patchScriptsAdd</a></code> | Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.removeScriptsOnInit">removeScriptsOnInit</a></code> | Removes the NPM Package scripts associated with Projen NPM Package initialization. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.NpmConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.NpmConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.NpmConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.NpmConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.NpmConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.NpmConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addDependencies` <a name="addDependencies" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addDependencies"></a>

```typescript
public addDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of dependencies to add.

---

##### `addDevDependencies` <a name="addDevDependencies" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addDevDependencies"></a>

```typescript
public addDevDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addDevDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of devDependencies to add.

---

##### `addPeerDependencies` <a name="addPeerDependencies" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addPeerDependencies"></a>

```typescript
public addPeerDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addPeerDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of peerDependencies to add.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Adds custom npm scripts to the project.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands.

---

##### `addSettings` <a name="addSettings" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addSettings"></a>

```typescript
public addSettings(settings: {[ key: string ]: any}): void
```

Adds custom settings to the project.

###### `settings`<sup>Required</sup> <a name="settings" id="@dxfrontier/projen-template-projects.NpmConfigCapService.addSettings.parameter.settings"></a>

- *Type:* {[ key: string ]: any}

Record of settings to add.

---

##### `patchDevDependencyRemove` <a name="patchDevDependencyRemove" id="@dxfrontier/projen-template-projects.NpmConfigCapService.patchDevDependencyRemove"></a>

```typescript
public patchDevDependencyRemove(devDependencies: string[]): void
```

Patches devDependencies in the `package.json` file.

###### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@dxfrontier/projen-template-projects.NpmConfigCapService.patchDevDependencyRemove.parameter.devDependencies"></a>

- *Type:* string[]

A list of development dependencies to patch.

---

##### `patchScriptsAdd` <a name="patchScriptsAdd" id="@dxfrontier/projen-template-projects.NpmConfigCapService.patchScriptsAdd"></a>

```typescript
public patchScriptsAdd(scripts: {[ key: string ]: string}): void
```

Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigCapService.patchScriptsAdd.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands to patch.

---

##### `removeScriptsOnInit` <a name="removeScriptsOnInit" id="@dxfrontier/projen-template-projects.NpmConfigCapService.removeScriptsOnInit"></a>

```typescript
public removeScriptsOnInit(scripts: string[]): void
```

Removes the NPM Package scripts associated with Projen NPM Package initialization.

Overwrite this method if you want to keep the projen standard scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigCapService.removeScriptsOnInit.parameter.scripts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.NpmConfigCapService.isConstruct"></a>

```typescript
import { NpmConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.NpmConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.NpmConfigCapService.isComponent"></a>

```typescript
import { NpmConfigCapService } from '@dxfrontier/projen-template-projects'

NpmConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.NpmConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.NpmConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### NpmConfigGitHubAction <a name="NpmConfigGitHubAction" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction"></a>

Implementing all relevant NPM configuration for the GitHubAction project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.Initializer"></a>

```typescript
import { NpmConfigGitHubAction } from '@dxfrontier/projen-template-projects'

new NpmConfigGitHubAction(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addDependencies">addDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addDevDependencies">addDevDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addPeerDependencies">addPeerDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addScripts">addScripts</a></code> | Adds custom npm scripts to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addSettings">addSettings</a></code> | Adds custom settings to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.patchDevDependencyRemove">patchDevDependencyRemove</a></code> | Patches devDependencies in the `package.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.patchScriptsAdd">patchScriptsAdd</a></code> | Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.removeScriptsOnInit">removeScriptsOnInit</a></code> | Removes the NPM Package scripts associated with Projen NPM Package initialization. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addDependencies` <a name="addDependencies" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addDependencies"></a>

```typescript
public addDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of dependencies to add.

---

##### `addDevDependencies` <a name="addDevDependencies" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addDevDependencies"></a>

```typescript
public addDevDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addDevDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of devDependencies to add.

---

##### `addPeerDependencies` <a name="addPeerDependencies" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addPeerDependencies"></a>

```typescript
public addPeerDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addPeerDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of peerDependencies to add.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Adds custom npm scripts to the project.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands.

---

##### `addSettings` <a name="addSettings" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addSettings"></a>

```typescript
public addSettings(settings: {[ key: string ]: any}): void
```

Adds custom settings to the project.

###### `settings`<sup>Required</sup> <a name="settings" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.addSettings.parameter.settings"></a>

- *Type:* {[ key: string ]: any}

Record of settings to add.

---

##### `patchDevDependencyRemove` <a name="patchDevDependencyRemove" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.patchDevDependencyRemove"></a>

```typescript
public patchDevDependencyRemove(devDependencies: string[]): void
```

Patches devDependencies in the `package.json` file.

###### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.patchDevDependencyRemove.parameter.devDependencies"></a>

- *Type:* string[]

A list of development dependencies to patch.

---

##### `patchScriptsAdd` <a name="patchScriptsAdd" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.patchScriptsAdd"></a>

```typescript
public patchScriptsAdd(scripts: {[ key: string ]: string}): void
```

Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.patchScriptsAdd.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands to patch.

---

##### `removeScriptsOnInit` <a name="removeScriptsOnInit" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.removeScriptsOnInit"></a>

```typescript
public removeScriptsOnInit(scripts: string[]): void
```

Removes the NPM Package scripts associated with Projen NPM Package initialization.

Overwrite this method if you want to keep the projen standard scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.removeScriptsOnInit.parameter.scripts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.isConstruct"></a>

```typescript
import { NpmConfigGitHubAction } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.isComponent"></a>

```typescript
import { NpmConfigGitHubAction } from '@dxfrontier/projen-template-projects'

NpmConfigGitHubAction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigGitHubAction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmConfigGitHubAction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### NpmConfigJsii <a name="NpmConfigJsii" id="@dxfrontier/projen-template-projects.NpmConfigJsii"></a>

Implementing all relevant NPM configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.NpmConfigJsii.Initializer"></a>

```typescript
import { NpmConfigJsii } from '@dxfrontier/projen-template-projects'

new NpmConfigJsii(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmConfigJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.addDependencies">addDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.addDevDependencies">addDevDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.addPeerDependencies">addPeerDependencies</a></code> | Adds custom devDependencies to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.addScripts">addScripts</a></code> | Adds custom npm scripts to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.addSettings">addSettings</a></code> | Adds custom settings to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.patchDevDependencyRemove">patchDevDependencyRemove</a></code> | Patches devDependencies in the `package.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.patchScriptsAdd">patchScriptsAdd</a></code> | Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.removeScriptsOnInit">removeScriptsOnInit</a></code> | Removes the NPM Package scripts associated with Projen NPM Package initialization. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.NpmConfigJsii.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.NpmConfigJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.NpmConfigJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.NpmConfigJsii.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.NpmConfigJsii.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.NpmConfigJsii.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addDependencies` <a name="addDependencies" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addDependencies"></a>

```typescript
public addDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of dependencies to add.

---

##### `addDevDependencies` <a name="addDevDependencies" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addDevDependencies"></a>

```typescript
public addDevDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addDevDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of devDependencies to add.

---

##### `addPeerDependencies` <a name="addPeerDependencies" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addPeerDependencies"></a>

```typescript
public addPeerDependencies(dependencies: string[]): void
```

Adds custom devDependencies to the project.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addPeerDependencies.parameter.dependencies"></a>

- *Type:* string[]

List of peerDependencies to add.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Adds custom npm scripts to the project.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands.

---

##### `addSettings` <a name="addSettings" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addSettings"></a>

```typescript
public addSettings(settings: {[ key: string ]: any}): void
```

Adds custom settings to the project.

###### `settings`<sup>Required</sup> <a name="settings" id="@dxfrontier/projen-template-projects.NpmConfigJsii.addSettings.parameter.settings"></a>

- *Type:* {[ key: string ]: any}

Record of settings to add.

---

##### `patchDevDependencyRemove` <a name="patchDevDependencyRemove" id="@dxfrontier/projen-template-projects.NpmConfigJsii.patchDevDependencyRemove"></a>

```typescript
public patchDevDependencyRemove(devDependencies: string[]): void
```

Patches devDependencies in the `package.json` file.

###### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@dxfrontier/projen-template-projects.NpmConfigJsii.patchDevDependencyRemove.parameter.devDependencies"></a>

- *Type:* string[]

A list of development dependencies to patch.

---

##### `patchScriptsAdd` <a name="patchScriptsAdd" id="@dxfrontier/projen-template-projects.NpmConfigJsii.patchScriptsAdd"></a>

```typescript
public patchScriptsAdd(scripts: {[ key: string ]: string}): void
```

Patches scripts in the `package.json` file. Projen public API is not used as it would create Projen related tasks like `npx projen task` and would not be convenient for projects that need a non Projen related approach on scaffolding.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigJsii.patchScriptsAdd.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

A record of script names and their commands to patch.

---

##### `removeScriptsOnInit` <a name="removeScriptsOnInit" id="@dxfrontier/projen-template-projects.NpmConfigJsii.removeScriptsOnInit"></a>

```typescript
public removeScriptsOnInit(scripts: string[]): void
```

Removes the NPM Package scripts associated with Projen NPM Package initialization.

Overwrite this method if you want to keep the projen standard scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.NpmConfigJsii.removeScriptsOnInit.parameter.scripts"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.NpmConfigJsii.isConstruct"></a>

```typescript
import { NpmConfigJsii } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.NpmConfigJsii.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.NpmConfigJsii.isComponent"></a>

```typescript
import { NpmConfigJsii } from '@dxfrontier/projen-template-projects'

NpmConfigJsii.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.NpmConfigJsii.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmConfigJsii.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.NpmConfigJsii.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmConfigJsii.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PrettierConfigBase <a name="PrettierConfigBase" id="@dxfrontier/projen-template-projects.PrettierConfigBase"></a>

Base class for implementing all relevant Prettier configuration.

This class acts as a base for handling Prettier configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.PrettierConfigBase.Initializer"></a>

```typescript
import { PrettierConfigBase } from '@dxfrontier/projen-template-projects'

new PrettierConfigBase(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.PrettierConfigBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.PrettierConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.PrettierConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.PrettierConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.PrettierConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.PrettierConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.PrettierConfigBase.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/projen-template-projects.PrettierConfigBase.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/projen-template-projects.PrettierConfigBase.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.PrettierConfigBase.isConstruct"></a>

```typescript
import { PrettierConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.PrettierConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.PrettierConfigBase.isComponent"></a>

```typescript
import { PrettierConfigBase } from '@dxfrontier/projen-template-projects'

PrettierConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.PrettierConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.PrettierConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.PrettierConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PrettierConfigCapService <a name="PrettierConfigCapService" id="@dxfrontier/projen-template-projects.PrettierConfigCapService"></a>

Implementing all relevant Prettier configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.Initializer"></a>

```typescript
import { PrettierConfigCapService } from '@dxfrontier/projen-template-projects'

new PrettierConfigCapService(project: BaseProject | JsiiProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> \| <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a> | <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.addIgnorePatterns">addIgnorePatterns</a></code> | Adds custom ignore patterns to the project's configuration. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `addIgnorePatterns` <a name="addIgnorePatterns" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.addIgnorePatterns"></a>

```typescript
public addIgnorePatterns(patterns: string[]): void
```

Adds custom ignore patterns to the project's configuration.

###### `patterns`<sup>Required</sup> <a name="patterns" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.addIgnorePatterns.parameter.patterns"></a>

- *Type:* string[]

An array of file or directory patterns to be ignored.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.isConstruct"></a>

```typescript
import { PrettierConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.isComponent"></a>

```typescript
import { PrettierConfigCapService } from '@dxfrontier/projen-template-projects'

PrettierConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.PrettierConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### SampleCodeConfigBase <a name="SampleCodeConfigBase" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase"></a>

Base class for implementing all relevant sample code configuration.

This class acts as a base for handling sample code configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.Initializer"></a>

```typescript
import { SampleCodeConfigBase } from '@dxfrontier/projen-template-projects'

new SampleCodeConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.isConstruct"></a>

```typescript
import { SampleCodeConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.isComponent"></a>

```typescript
import { SampleCodeConfigBase } from '@dxfrontier/projen-template-projects'

SampleCodeConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.SampleCodeConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### SampleCodeConfigCapService <a name="SampleCodeConfigCapService" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService"></a>

Implementing all relevant SampleCode configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.Initializer"></a>

```typescript
import { SampleCodeConfigCapService } from '@dxfrontier/projen-template-projects'

new SampleCodeConfigCapService(project: CapServiceProject, options: CapServiceProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject">CapServiceProject</a></code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions">CapServiceProjectOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.CapServiceProject">CapServiceProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions">CapServiceProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.createTemplates">createTemplates</a></code> | Creates the template files for the specified directory. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `createTemplates` <a name="createTemplates" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.createTemplates"></a>

```typescript
public createTemplates(templates: {[ key: string ]: string[]}): void
```

Creates the template files for the specified directory.

###### `templates`<sup>Required</sup> <a name="templates" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.createTemplates.parameter.templates"></a>

- *Type:* {[ key: string ]: string[]}

The templates to create.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.isConstruct"></a>

```typescript
import { SampleCodeConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.isComponent"></a>

```typescript
import { SampleCodeConfigCapService } from '@dxfrontier/projen-template-projects'

SampleCodeConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.SampleCodeConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### SampleCodeConfigGitHubAction <a name="SampleCodeConfigGitHubAction" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction"></a>

Implementing all relevant SampleCode configuration for the GitHubAction project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.Initializer"></a>

```typescript
import { SampleCodeConfigGitHubAction } from '@dxfrontier/projen-template-projects'

new SampleCodeConfigGitHubAction(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.isConstruct"></a>

```typescript
import { SampleCodeConfigGitHubAction } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.isComponent"></a>

```typescript
import { SampleCodeConfigGitHubAction } from '@dxfrontier/projen-template-projects'

SampleCodeConfigGitHubAction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.SampleCodeConfigGitHubAction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### TypeScriptConfigBase <a name="TypeScriptConfigBase" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase"></a>

Base class for implementing all relevant TypeScript configuration.

This class acts as a base for handling TypeScript configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.Initializer"></a>

```typescript
import { TypeScriptConfigBase } from '@dxfrontier/projen-template-projects'

new TypeScriptConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.isConstruct"></a>

```typescript
import { TypeScriptConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.isComponent"></a>

```typescript
import { TypeScriptConfigBase } from '@dxfrontier/projen-template-projects'

TypeScriptConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigBase.property.configFileName">configFileName</a></code> | <code>string</code> | Retrieves the name to the TypeScript config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `configFileName`<sup>Required</sup> <a name="configFileName" id="@dxfrontier/projen-template-projects.TypeScriptConfigBase.property.configFileName"></a>

```typescript
public readonly configFileName: string;
```

- *Type:* string

Retrieves the name to the TypeScript config file.

---


### TypeScriptConfigCapService <a name="TypeScriptConfigCapService" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService"></a>

Implementing all relevant TypeScript configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.Initializer"></a>

```typescript
import { TypeScriptConfigCapService } from '@dxfrontier/projen-template-projects'

new TypeScriptConfigCapService(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.isConstruct"></a>

```typescript
import { TypeScriptConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.isComponent"></a>

```typescript
import { TypeScriptConfigCapService } from '@dxfrontier/projen-template-projects'

TypeScriptConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigCapService.property.configFileName">configFileName</a></code> | <code>string</code> | Retrieves the name to the TypeScript config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `configFileName`<sup>Required</sup> <a name="configFileName" id="@dxfrontier/projen-template-projects.TypeScriptConfigCapService.property.configFileName"></a>

```typescript
public readonly configFileName: string;
```

- *Type:* string

Retrieves the name to the TypeScript config file.

---


### TypeScriptConfigGitHubAction <a name="TypeScriptConfigGitHubAction" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction"></a>

Implementing all relevant TypeScript configuration for the GitHubAction project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.Initializer"></a>

```typescript
import { TypeScriptConfigGitHubAction } from '@dxfrontier/projen-template-projects'

new TypeScriptConfigGitHubAction(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.isConstruct"></a>

```typescript
import { TypeScriptConfigGitHubAction } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.isComponent"></a>

```typescript
import { TypeScriptConfigGitHubAction } from '@dxfrontier/projen-template-projects'

TypeScriptConfigGitHubAction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.property.configFileName">configFileName</a></code> | <code>string</code> | Retrieves the name to the TypeScript config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `configFileName`<sup>Required</sup> <a name="configFileName" id="@dxfrontier/projen-template-projects.TypeScriptConfigGitHubAction.property.configFileName"></a>

```typescript
public readonly configFileName: string;
```

- *Type:* string

Retrieves the name to the TypeScript config file.

---


### TypeScriptConfigJsii <a name="TypeScriptConfigJsii" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii"></a>

Implementing all relevant TypeScript configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.Initializer"></a>

```typescript
import { TypeScriptConfigJsii } from '@dxfrontier/projen-template-projects'

new TypeScriptConfigJsii(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.isConstruct"></a>

```typescript
import { TypeScriptConfigJsii } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.isComponent"></a>

```typescript
import { TypeScriptConfigJsii } from '@dxfrontier/projen-template-projects'

TypeScriptConfigJsii.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptConfigJsii.property.configFileName">configFileName</a></code> | <code>string</code> | Retrieves the name to the TypeScript config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `configFileName`<sup>Required</sup> <a name="configFileName" id="@dxfrontier/projen-template-projects.TypeScriptConfigJsii.property.configFileName"></a>

```typescript
public readonly configFileName: string;
```

- *Type:* string

Retrieves the name to the TypeScript config file.

---


### VsCodeConfigBase <a name="VsCodeConfigBase" id="@dxfrontier/projen-template-projects.VsCodeConfigBase"></a>

Base class for implementing all relevant VS Code configuration.

This class acts as a base for handling VS Code configuration within projects.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.Initializer"></a>

```typescript
import { VsCodeConfigBase } from '@dxfrontier/projen-template-projects'

new VsCodeConfigBase(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to configure the configuration module for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to configure the configuration module for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.registerConfig"></a>

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
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.isConstruct"></a>

```typescript
import { VsCodeConfigBase } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.isComponent"></a>

```typescript
import { VsCodeConfigBase } from '@dxfrontier/projen-template-projects'

VsCodeConfigBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigBase.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.VsCodeConfigBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### VsCodeConfigCapService <a name="VsCodeConfigCapService" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService"></a>

Implementing all relevant VsCode configuration for the CapService project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.Initializer"></a>

```typescript
import { VsCodeConfigCapService } from '@dxfrontier/projen-template-projects'

new VsCodeConfigCapService(project: CapServiceProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject">CapServiceProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.CapServiceProject">CapServiceProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.applyConfig">applyConfig</a></code> | Applies the current configuration based on the strategy to the project. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.registerConfig">registerConfig</a></code> | Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.createConfigLaunch">createConfigLaunch</a></code> | Creates the launch configuration file in the project directory. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.createConfigTasks">createConfigTasks</a></code> | Creates the tasks configuration file in the project directory. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `applyConfig` <a name="applyConfig" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.applyConfig"></a>

```typescript
public applyConfig(): void
```

Applies the current configuration based on the strategy to the project.

To ensure proper configuration handling `applyConfig` should be called in
`preSynthesize` phase of the configuration module and not from project itself.

Subclasses should overwrite it to guarantee proper module configuration.

##### `registerConfig` <a name="registerConfig" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.registerConfig"></a>

```typescript
public registerConfig(): void
```

Registers config to other configuration modules. Public API call addressing other modules should be performed here, to guarantee proper configuration handling.

This methods should be called only in the projects `preSynthesize` phase
and not on the configuration modules `preSynthesize` function otherwise
it is not guaranteed that all needed modules are setup properly.

##### `createConfigLaunch` <a name="createConfigLaunch" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.createConfigLaunch"></a>

```typescript
public createConfigLaunch(): void
```

Creates the launch configuration file in the project directory.

##### `createConfigTasks` <a name="createConfigTasks" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.createConfigTasks"></a>

```typescript
public createConfigTasks(): void
```

Creates the tasks configuration file in the project directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.isConstruct"></a>

```typescript
import { VsCodeConfigCapService } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.isComponent"></a>

```typescript
import { VsCodeConfigCapService } from '@dxfrontier/projen-template-projects'

VsCodeConfigCapService.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeConfigCapService.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.VsCodeConfigCapService.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### BaseProjectOptions <a name="BaseProjectOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/projen-template-projects.BaseProjectOptions.Initializer"></a>

```typescript
import { BaseProjectOptions } from '@dxfrontier/projen-template-projects'

const baseProjectOptions: BaseProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.commitlintEnabled">commitlintEnabled</a></code> | <code>boolean</code> | Whether to enable the commitlint configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.devContainerEnabled">devContainerEnabled</a></code> | <code>boolean</code> | Whether to enable the dev container configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.eslintEnabled">eslintEnabled</a></code> | <code>boolean</code> | Whether to enable the ESLint configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.githubEnabled">githubEnabled</a></code> | <code>boolean</code> | Whether to enable the GitHub configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.huskyEnabled">huskyEnabled</a></code> | <code>boolean</code> | Whether to enable the Husky configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.jestEnabled">jestEnabled</a></code> | <code>boolean</code> | Whether to enable the Jest configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.prettierEnabled">prettierEnabled</a></code> | <code>boolean</code> | Whether to enable the Prettier configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.sampleCodeEnabled">sampleCodeEnabled</a></code> | <code>boolean</code> | Whether to include sample code in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.typescriptEnabled">typescriptEnabled</a></code> | <code>boolean</code> | Whether to enable the TypeScript configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.BaseProjectOptions.property.vscodeEnabled">vscodeEnabled</a></code> | <code>boolean</code> | Whether to enable the VS Code configuration for the project. |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.bundledDeps"></a>

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

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.maxNodeVersion"></a>

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

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.minNodeVersion"></a>

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

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.minMajorVersion"></a>

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

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.nextVersionCommand"></a>

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

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseBranches"></a>

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseTagPrefix"></a>

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

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.testdir"></a>

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

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `commitlintEnabled`<sup>Optional</sup> <a name="commitlintEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.commitlintEnabled"></a>

```typescript
public readonly commitlintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the commitlint configuration for the project.

If set to `true`, commitlint configuration will be enabled.

---

##### `devContainerEnabled`<sup>Optional</sup> <a name="devContainerEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.devContainerEnabled"></a>

```typescript
public readonly devContainerEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the dev container configuration for the project.

If set to `true`, dev container configuration will be enabled.

---

##### `eslintEnabled`<sup>Optional</sup> <a name="eslintEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.eslintEnabled"></a>

```typescript
public readonly eslintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the ESLint configuration for the project.

If set to `true`, ESLint configuration will be enabled.

---

##### `githubEnabled`<sup>Optional</sup> <a name="githubEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.githubEnabled"></a>

```typescript
public readonly githubEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the GitHub configuration for the project.

If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).

---

##### `huskyEnabled`<sup>Optional</sup> <a name="huskyEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.huskyEnabled"></a>

```typescript
public readonly huskyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Husky configuration for the project.

If set to `true`, Husky hooks will be enabled to enforce code quality checks.

---

##### `jestEnabled`<sup>Optional</sup> <a name="jestEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.jestEnabled"></a>

```typescript
public readonly jestEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Jest configuration for the project.

If set to `true`, Jest testing framework will be configured for the project.

---

##### `prettierEnabled`<sup>Optional</sup> <a name="prettierEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.prettierEnabled"></a>

```typescript
public readonly prettierEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Prettier configuration for the project.

If set to `true`, Prettier code formatting configuration will be enabled.

---

##### `sampleCodeEnabled`<sup>Optional</sup> <a name="sampleCodeEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.sampleCodeEnabled"></a>

```typescript
public readonly sampleCodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include sample code in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `typescriptEnabled`<sup>Optional</sup> <a name="typescriptEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.typescriptEnabled"></a>

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

##### `vscodeEnabled`<sup>Optional</sup> <a name="vscodeEnabled" id="@dxfrontier/projen-template-projects.BaseProjectOptions.property.vscodeEnabled"></a>

```typescript
public readonly vscodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the VS Code configuration for the project.

If set to `true`, VS Code settings will be applied for the project.

---

### CapServiceProjectOptions <a name="CapServiceProjectOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.Initializer"></a>

```typescript
import { CapServiceProjectOptions } from '@dxfrontier/projen-template-projects'

const capServiceProjectOptions: CapServiceProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.commitlintEnabled">commitlintEnabled</a></code> | <code>boolean</code> | Whether to enable the commitlint configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devContainerEnabled">devContainerEnabled</a></code> | <code>boolean</code> | Whether to enable the dev container configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslintEnabled">eslintEnabled</a></code> | <code>boolean</code> | Whether to enable the ESLint configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.githubEnabled">githubEnabled</a></code> | <code>boolean</code> | Whether to enable the GitHub configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.huskyEnabled">huskyEnabled</a></code> | <code>boolean</code> | Whether to enable the Husky configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jestEnabled">jestEnabled</a></code> | <code>boolean</code> | Whether to enable the Jest configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettierEnabled">prettierEnabled</a></code> | <code>boolean</code> | Whether to enable the Prettier configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.sampleCodeEnabled">sampleCodeEnabled</a></code> | <code>boolean</code> | Whether to include sample code in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.typescriptEnabled">typescriptEnabled</a></code> | <code>boolean</code> | Whether to enable the TypeScript configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.vscodeEnabled">vscodeEnabled</a></code> | <code>boolean</code> | Whether to enable the VS Code configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bundledDeps"></a>

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

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.maxNodeVersion"></a>

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

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.minNodeVersion"></a>

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

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.minMajorVersion"></a>

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

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.nextVersionCommand"></a>

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

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseBranches"></a>

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseTagPrefix"></a>

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

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.testdir"></a>

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

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `commitlintEnabled`<sup>Optional</sup> <a name="commitlintEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.commitlintEnabled"></a>

```typescript
public readonly commitlintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the commitlint configuration for the project.

If set to `true`, commitlint configuration will be enabled.

---

##### `devContainerEnabled`<sup>Optional</sup> <a name="devContainerEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devContainerEnabled"></a>

```typescript
public readonly devContainerEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the dev container configuration for the project.

If set to `true`, dev container configuration will be enabled.

---

##### `eslintEnabled`<sup>Optional</sup> <a name="eslintEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslintEnabled"></a>

```typescript
public readonly eslintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the ESLint configuration for the project.

If set to `true`, ESLint configuration will be enabled.

---

##### `githubEnabled`<sup>Optional</sup> <a name="githubEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.githubEnabled"></a>

```typescript
public readonly githubEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the GitHub configuration for the project.

If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).

---

##### `huskyEnabled`<sup>Optional</sup> <a name="huskyEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.huskyEnabled"></a>

```typescript
public readonly huskyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Husky configuration for the project.

If set to `true`, Husky hooks will be enabled to enforce code quality checks.

---

##### `jestEnabled`<sup>Optional</sup> <a name="jestEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jestEnabled"></a>

```typescript
public readonly jestEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Jest configuration for the project.

If set to `true`, Jest testing framework will be configured for the project.

---

##### `prettierEnabled`<sup>Optional</sup> <a name="prettierEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettierEnabled"></a>

```typescript
public readonly prettierEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Prettier configuration for the project.

If set to `true`, Prettier code formatting configuration will be enabled.

---

##### `sampleCodeEnabled`<sup>Optional</sup> <a name="sampleCodeEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.sampleCodeEnabled"></a>

```typescript
public readonly sampleCodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include sample code in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `typescriptEnabled`<sup>Optional</sup> <a name="typescriptEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.typescriptEnabled"></a>

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

##### `vscodeEnabled`<sup>Optional</sup> <a name="vscodeEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.vscodeEnabled"></a>

```typescript
public readonly vscodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the VS Code configuration for the project.

If set to `true`, VS Code settings will be applied for the project.

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### GitHubActionProjectOptions <a name="GitHubActionProjectOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.Initializer"></a>

```typescript
import { GitHubActionProjectOptions } from '@dxfrontier/projen-template-projects'

const gitHubActionProjectOptions: GitHubActionProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.commitlintEnabled">commitlintEnabled</a></code> | <code>boolean</code> | Whether to enable the commitlint configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.devContainerEnabled">devContainerEnabled</a></code> | <code>boolean</code> | Whether to enable the dev container configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.eslintEnabled">eslintEnabled</a></code> | <code>boolean</code> | Whether to enable the ESLint configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.githubEnabled">githubEnabled</a></code> | <code>boolean</code> | Whether to enable the GitHub configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.huskyEnabled">huskyEnabled</a></code> | <code>boolean</code> | Whether to enable the Husky configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.jestEnabled">jestEnabled</a></code> | <code>boolean</code> | Whether to enable the Jest configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.prettierEnabled">prettierEnabled</a></code> | <code>boolean</code> | Whether to enable the Prettier configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.sampleCodeEnabled">sampleCodeEnabled</a></code> | <code>boolean</code> | Whether to include sample code in the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.typescriptEnabled">typescriptEnabled</a></code> | <code>boolean</code> | Whether to enable the TypeScript configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.vscodeEnabled">vscodeEnabled</a></code> | <code>boolean</code> | Whether to enable the VS Code configuration for the project. |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bundledDeps"></a>

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

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.maxNodeVersion"></a>

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

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.minNodeVersion"></a>

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

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.minMajorVersion"></a>

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

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.nextVersionCommand"></a>

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

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseBranches"></a>

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseTagPrefix"></a>

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

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.testdir"></a>

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

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `commitlintEnabled`<sup>Optional</sup> <a name="commitlintEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.commitlintEnabled"></a>

```typescript
public readonly commitlintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the commitlint configuration for the project.

If set to `true`, commitlint configuration will be enabled.

---

##### `devContainerEnabled`<sup>Optional</sup> <a name="devContainerEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.devContainerEnabled"></a>

```typescript
public readonly devContainerEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the dev container configuration for the project.

If set to `true`, dev container configuration will be enabled.

---

##### `eslintEnabled`<sup>Optional</sup> <a name="eslintEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.eslintEnabled"></a>

```typescript
public readonly eslintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the ESLint configuration for the project.

If set to `true`, ESLint configuration will be enabled.

---

##### `githubEnabled`<sup>Optional</sup> <a name="githubEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.githubEnabled"></a>

```typescript
public readonly githubEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the GitHub configuration for the project.

If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).

---

##### `huskyEnabled`<sup>Optional</sup> <a name="huskyEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.huskyEnabled"></a>

```typescript
public readonly huskyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Husky configuration for the project.

If set to `true`, Husky hooks will be enabled to enforce code quality checks.

---

##### `jestEnabled`<sup>Optional</sup> <a name="jestEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.jestEnabled"></a>

```typescript
public readonly jestEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Jest configuration for the project.

If set to `true`, Jest testing framework will be configured for the project.

---

##### `prettierEnabled`<sup>Optional</sup> <a name="prettierEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.prettierEnabled"></a>

```typescript
public readonly prettierEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Prettier configuration for the project.

If set to `true`, Prettier code formatting configuration will be enabled.

---

##### `sampleCodeEnabled`<sup>Optional</sup> <a name="sampleCodeEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.sampleCodeEnabled"></a>

```typescript
public readonly sampleCodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to include sample code in the project.

If set to `true`, sample code will be added to the project repository.

---

##### `typescriptEnabled`<sup>Optional</sup> <a name="typescriptEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.typescriptEnabled"></a>

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

##### `vscodeEnabled`<sup>Optional</sup> <a name="vscodeEnabled" id="@dxfrontier/projen-template-projects.GitHubActionProjectOptions.property.vscodeEnabled"></a>

```typescript
public readonly vscodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the VS Code configuration for the project.

If set to `true`, VS Code settings will be applied for the project.

---

### JsiiProjectOptions <a name="JsiiProjectOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.Initializer"></a>

```typescript
import { JsiiProjectOptions } from '@dxfrontier/projen-template-projects'

const jsiiProjectOptions: JsiiProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.commitlintEnabled">commitlintEnabled</a></code> | <code>boolean</code> | Whether to enable the commitlint configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.devContainerEnabled">devContainerEnabled</a></code> | <code>boolean</code> | Whether to enable the dev container configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.eslintEnabled">eslintEnabled</a></code> | <code>boolean</code> | Whether to enable the ESLint configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.githubEnabled">githubEnabled</a></code> | <code>boolean</code> | Whether to enable the GitHub configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.huskyEnabled">huskyEnabled</a></code> | <code>boolean</code> | Whether to enable the Husky configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jestEnabled">jestEnabled</a></code> | <code>boolean</code> | Whether to enable the Jest configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.prettierEnabled">prettierEnabled</a></code> | <code>boolean</code> | Whether to enable the Prettier configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.JsiiProjectOptions.property.vscodeEnabled">vscodeEnabled</a></code> | <code>boolean</code> | Whether to enable the VS Code configuration for the project. |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bundledDeps"></a>

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

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.maxNodeVersion"></a>

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

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.minNodeVersion"></a>

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

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.minMajorVersion"></a>

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

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.nextVersionCommand"></a>

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

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseBranches"></a>

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseTagPrefix"></a>

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

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.testdir"></a>

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

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.excludeTypescript"></a>

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

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jsiiVersion"></a>

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

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `commitlintEnabled`<sup>Optional</sup> <a name="commitlintEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.commitlintEnabled"></a>

```typescript
public readonly commitlintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the commitlint configuration for the project.

If set to `true`, commitlint configuration will be enabled.

---

##### `devContainerEnabled`<sup>Optional</sup> <a name="devContainerEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.devContainerEnabled"></a>

```typescript
public readonly devContainerEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the dev container configuration for the project.

If set to `true`, dev container configuration will be enabled.

---

##### `eslintEnabled`<sup>Optional</sup> <a name="eslintEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.eslintEnabled"></a>

```typescript
public readonly eslintEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the ESLint configuration for the project.

If set to `true`, ESLint configuration will be enabled.

---

##### `githubEnabled`<sup>Optional</sup> <a name="githubEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.githubEnabled"></a>

```typescript
public readonly githubEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the GitHub configuration for the project.

If set to `true`, GitHub-related settings will be configured (e.g., issue templates, PR templates).

---

##### `huskyEnabled`<sup>Optional</sup> <a name="huskyEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.huskyEnabled"></a>

```typescript
public readonly huskyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Husky configuration for the project.

If set to `true`, Husky hooks will be enabled to enforce code quality checks.

---

##### `jestEnabled`<sup>Optional</sup> <a name="jestEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.jestEnabled"></a>

```typescript
public readonly jestEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Jest configuration for the project.

If set to `true`, Jest testing framework will be configured for the project.

---

##### `prettierEnabled`<sup>Optional</sup> <a name="prettierEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.prettierEnabled"></a>

```typescript
public readonly prettierEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Prettier configuration for the project.

If set to `true`, Prettier code formatting configuration will be enabled.

---

##### `vscodeEnabled`<sup>Optional</sup> <a name="vscodeEnabled" id="@dxfrontier/projen-template-projects.JsiiProjectOptions.property.vscodeEnabled"></a>

```typescript
public readonly vscodeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the VS Code configuration for the project.

If set to `true`, VS Code settings will be applied for the project.

---

## Classes <a name="Classes" id="Classes"></a>

### BaseOptions <a name="BaseOptions" id="@dxfrontier/projen-template-projects.BaseOptions"></a>

Utility for shared options.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.BaseOptions.Initializer"></a>

```typescript
import { BaseOptions } from '@dxfrontier/projen-template-projects'

new BaseOptions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.BaseOptions.sharedOptions">sharedOptions</a></code> | Merges shared defaults with provided options. |

---

##### `sharedOptions` <a name="sharedOptions" id="@dxfrontier/projen-template-projects.BaseOptions.sharedOptions"></a>

```typescript
import { BaseOptions } from '@dxfrontier/projen-template-projects'

BaseOptions.sharedOptions(options: BaseProjectOptions)
```

Merges shared defaults with provided options.

###### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.BaseOptions.sharedOptions.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.BaseProjectOptions">BaseProjectOptions</a>

Specific project options to merge.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IProjectKind <a name="IProjectKind" id="@dxfrontier/projen-template-projects.IProjectKind"></a>

- *Implemented By:* <a href="#@dxfrontier/projen-template-projects.BaseProject">BaseProject</a>, <a href="#@dxfrontier/projen-template-projects.CapServiceProject">CapServiceProject</a>, <a href="#@dxfrontier/projen-template-projects.GitHubActionProject">GitHubActionProject</a>, <a href="#@dxfrontier/projen-template-projects.JsiiProject">JsiiProject</a>, <a href="#@dxfrontier/projen-template-projects.IProjectKind">IProjectKind</a>

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.IProjectKind.property.kind">kind</a></code> | <code>string</code> | Convenience type for guaranteeing type safety and avoiding too many circular dependencies. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@dxfrontier/projen-template-projects.IProjectKind.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Convenience type for guaranteeing type safety and avoiding too many circular dependencies.

---

