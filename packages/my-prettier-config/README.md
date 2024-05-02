# My Prettier Config

<a href="https://github.com/prettier">
   <p align="center">
    <img
     src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-wide-dark.svg"
     alt="Prettier Banner"
    >
   </p>
</a>

This is my favorite prettier config for my projects. Part of [TS Kit](https://github.com/socnik/ts-kit).

## Usage

You can see [official Prettier docs](https://prettier.io/docs/en/configuration#sharing-configurations) or follow this steps:

### 1. Install `@socnik/my-prettier-config` package

```shell
$ npx nypm add -D prettier @socnik/my-prettier-config
```

_[Nypm](https://github.com/unjs/nypm) - unified package manager by UnJS. It detects your project package manager and use it for install package._

### 2. Add config to your `package.json`

```jsonc
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "@socnik/my-prettier-config", // <- Add this line
}
```

### 3. Enjoy 🚀!

## Config source

You can view the config in [`.prettierrc.json`](https://github.com/socnik/my-prettier-config/blob/main/.prettierrc.json) file.

Here you can see set properties in config:

```yaml
arrowParens: always,
bracketSameLine: false,
bracketSpacing: true,
cursorOffset: -1,
embeddedLanguageFormatting: auto,
endOfLine: "lf",
htmlWhitespaceSensitivity: css,
jsxSingleQuote: false,
printWidth: 80,
proseWrap: preserve,
quoteProps: "as-needed",
semi: false,
singleAttributePerLine: true,
singleQuote: true,
tabWidth: 2,
useTabs: false,
trailingComma: "es5",
vueIndentScriptAndStyle: false
```
