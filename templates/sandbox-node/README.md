# Sandbox Node

<!-- Source StackBlitz URL: https://stackblitz.com/fork/github/socnik/ts-kit/tree/main/templates/sandbox-node/template?title=TS Kit Sandbox Node.js&file=src/index.ts&hideNavigation=true&hidedevtools=true&view=editor&startScript=start:watch&terminalHeight=40 -->

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/socnik/ts-kit/tree/main/templates/sandbox-node/template?title=TS%20Kit%20Sandbox%20Node.js&file=src/index.ts&hideNavigation=true&hidedevtools=true&view=editor&startScript=start:watch&terminalHeight=40)

Minimal template for quick experimenting with TypeScript and Node.js. Includes `tsx` to quick run code.
You can use it with [StackBlitz](https://stackblitz.com).

## Technologies

<!--#region Technologies table -->

<table>
  <tr>
    <td>
      <a href="https://www.typescriptlang.org"
        ><img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
          alt="TypeScript icon"
          width="50px"
          height="50px"
      /></a>
    </td>
    <td>
      <a href="https://prettier.io"
        ><img
          src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon-light.svg"
          alt="Prettier icon"
          width="50px"
          height="50px"
      /></a>
    </td>
    <td>
      <a href="https://editorconfig.org"
        ><img
          src="https://raw.githubusercontent.com/editorconfig/editorconfig/master/assets/EditorConfig_Logo.svg"
          alt="EditorConfig icon"
          width="50px"
          height="50px"
      /></a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pnpm.io">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg"
          alt="Pnpm icon"
          width="50px"
          height="50px"
      /></a>
    </td>
    <td>
      <a href="https://nodejs.org">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          alt="Node.js icon"
          width="50px"
          height="50px"
        />
      </a>
    </td>
    <td>
      <a href="https://code.visualstudio.com/">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
          alt="VS Code icon"
          width="50px"
          height="50px"
      /></a>
    </td>
  </tr>
</table>

<!--#endregion-->

## Get started

### Download

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/socnik/ts-kit/tree/main/templates/sandbox-node/template?title=TS%20Kit%20Sandbox%20Node.js&file=src/index.ts&hideNavigation=true&hidedevtools=true&view=editor&startScript=start:watch&terminalHeight=40)

#### Local

Run this command in the directory where you want to use the template:

```shell
$ npx degit socnik/ts-kit/templates/universal-minimal/template
```

### Usage

`package.json` includes pre-configured scripts.

- `start` - run `index.ts` with [`tsx`](https://github.com/privatenumber/tsx) once and finish work
- `start:watch` - run `index.ts` with [`tsx`](https://github.com/privatenumber/tsx) and wait changes of code
- `check-types` - check types with [`tsc`](https://github.com/microsoft/TypeScript)
- `format` - format code with [`Prettier`](https://prettier.io)