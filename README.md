<!-- TITLE/ -->
# is-gitpod
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/is-gitpod.svg)](https://npmjs.org/package/is-gitpod)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)

[![Build status](https://img.shields.io/github/workflow/status/dword-design/is-gitpod/build)](https://github.com/dword-design/is-gitpod/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/is-gitpod)](https://coveralls.io/github/dword-design/is-gitpod)
[![Dependency status](https://img.shields.io/david/dword-design/is-gitpod)](https://david-dm.org/dword-design/is-gitpod)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/dword-design/is-gitpod)
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Checks if we are in Gitpod
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
# Install

```bash
# NPM
$ npm install is-gitpod

# Yarn
$ yarn add is-gitpod
```
<!-- /INSTALL -->

## CLI Usage
The cli script `is-gitpod` either does nothing or fails with exit code 1.

```bash
$ is-gitpod
```

## API Usage

```js
import isGitpod from 'is-gitpod'

const result = await isGitpod()
// true or false
```

<!-- LICENSE/ -->
# License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
