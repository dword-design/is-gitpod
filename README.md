<!-- TITLE/ -->

<h1>is-gitpod</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/is-gitpod" title="View this project on NPM"><img src="https://img.shields.io/npm/v/is-gitpod.svg" alt="NPM version" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/dword-design/is-gitpod.git" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/dword-design/is-gitpod.git/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/dword-design/is-gitpod.git" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/dword-design/is-gitpod.git.svg" alt="Coveralls Coverage Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/dword-design/is-gitpod.git" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/dword-design/is-gitpod.git.svg" alt="Dependency Status" /></a></span>
<span class="badge-shields"><a href="https://img.shields.io/badge/renovate-enabled-brightgreen.svg"><img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Checks if we are in Gitpod

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save is-gitpod</code></li>
<li>Require: <code>require('is-gitpod')</code></li>
</ul>

<!-- /INSTALL -->

<h2>CLI Usage</h2>
The cli script `is-gitpod` either does nothing or fails with exit code 1.

```bash
$ is-gitpod
```

<h2>API Usage</h2>

```js
import isGitpod from 'is-gitpod'

const result = await isGitpod()
// true or false
```

<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; dword</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
