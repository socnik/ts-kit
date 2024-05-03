# Universal Max

This template is a ultimate base for any TypeScript project.

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
      <a href="https://code.visualstudio.com">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
          alt="VS Code icon"
          width="50px"
          height="50px"
      /></a>
    </td>
  </tr>
  <tr>
    <td><a href="https://commitlint.js.org"><img src="https://raw.githubusercontent.com/conventional-changelog/commitlint/master/docs/public/assets/icon.svg" alt="CommitLint icon" width="50px" height="50px" /></a></td>
    <td><a href="https://git-scm.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git icon" width="50px" height="50px" /></a></td>
  </tr>
</table>

<!--#endregion-->

## Usage

### Download

Run this command in the directory where you want to use the template:

```shell
$ npx degit socnik/ts-kit/templates/universal-max/template
```

### Package.json scripts

- `prepare` - setup husky
- `lint` - run ESLint and auto fix problems
- `lint:check-only` - run ESLint without fix problems
- `lint:inspect` - inspect ESLint config with `@eslint/config-inspector`
- `check-types` - check types with tsc
- `check-licenses` - check licenses with `license-checker`
- `format` - format files with Prettier
- `commit` - run Git commit cli by CommitLint
