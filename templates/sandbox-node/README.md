# Sandbox Node

<!-- Source StackBlitz URL: https://stackblitz.com/fork/github/socnik/ts-kit/tree/main/templates/sandbox-node/template?title=TS Kit Sandbox Node.js&file=src/index.ts&hideNavigation=true&hidedevtools=true&view=editor&startScript=start:watch&terminalHeight=40 -->

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/socnik/ts-kit/tree/main/templates/sandbox-node/template?title=TS%20Kit%20Sandbox%20Node.js&file=src/index.ts&hideNavigation=true&hidedevtools=true&view=editor&startScript=start:watch&terminalHeight=40)

Minimal template for quick experimenting with TypeScript and Node.js. Includes `tsx` to quick run code.
You can use it with [StackBlitz](https://stackblitz.com).

## Usage

### Download

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/socnik/ts-kit/tree/main/templates/sandbox-node/template?title=TS%20Kit%20Sandbox%20Node.js&file=src/index.ts&hideNavigation=true&hidedevtools=true&view=editor&startScript=start:watch&terminalHeight=40)

#### Local

Run this command in the directory where you want to use the template:

```shell
$ npx degit socnik/ts-kit/templates/universal-minimal/template
```

### Package.json scripts

`package.json` includes pre-configured scripts.

- `start` - run `index.ts` with [`tsx`](https://github.com/privatenumber/tsx) once and finish work
- `start:watch` - run `index.ts` with [`tsx`](https://github.com/privatenumber/tsx) and wait changes of code
- `check-types` - check types with [`tsc`](https://github.com/microsoft/TypeScript)
- `format` - format code with [`Prettier`](https://prettier.io)
