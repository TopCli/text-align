# text-align
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/TopCli/text-align/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/TopCli/text-align/commit-activity)
[![mit](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/TopCli/text-align/blob/master/LICENSE)
![build](https://img.shields.io/github/actions/workflow/status/TopCli/text-align/node.js.yml?style=for-the-badge)

A wide-character aware text alignment function for use in terminals / on the console. This package is a modern implementation of [wide-align](https://github.com/iarna/wide-align) with String.prototype.padLeft and String.prototype.padRight.

## Requirements
- [Node.js](https://nodejs.org/en/) v14 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @topcli/text-align
# or
$ yarn add @topcli/text-align
```

### Usage example

```js
import * as align from "@topcli/text-align";

console.log(align.center('abc', 10));     // '   abc    '
console.log(align.center('古古古', 10));   // '  古古古  '
console.log(align.left('abc', 10));       // 'abc       '
console.log(align.left('古古古', 10));     // '古古古    '
console.log(align.right('abc', 10));      // '       abc'
console.log(align.right('古古古', 10));    // '    古古古'
```

## API

### `align.center(str: string, length: number)` → string
Returns *str* with spaces added to both sides such that that it is *length*
chars long and centered in the spaces.

### `align.left(str: string, length: number)` → string
Returns *str* with spaces to the right such that it is *length* chars long.

### `align.right(str: string, length: number)` → string
Returns *str* with spaces to the left such that it is *length* chars long.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/TopCli/text-align/commits?author=fraxken" title="Code">💻</a> <a href="https://github.com/TopCli/text-align/commits?author=fraxken" title="Documentation">📖</a> <a href="https://github.com/TopCli/text-align/pulls?q=is%3Apr+reviewed-by%3Afraxken" title="Reviewed Pull Requests">👀</a> <a href="#security-fraxken" title="Security">🛡️</a> <a href="https://github.com/TopCli/text-align/issues?q=author%3Afraxken" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Max2810"><img src="https://avatars.githubusercontent.com/u/53535185?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Max</b></sub></a><br /><a href="https://github.com/TopCli/text-align/commits?author=Max2810" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
