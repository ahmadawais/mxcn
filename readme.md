[![mxcn](./.github/logo.jpg)](https://github.com/AhmadAwais/mxcn)

# mxcn

[![DOWNLOADS](https://img.shields.io/npm/dt/mxcn?label=DOWNLOADS%20%20❯&colorA=21262D&colorB=30363D&style=flat)](https://www.npmjs.com/package/mxcn) [![Node.js CLI](https://img.shields.io/badge/-NodeCLI.com-gray.svg?colorA=21262D&colorB=30363D&style=flat)](https://NodeCLI.com/?utm_source=FOSS) [![Learn VSCode](https://img.shields.io/badge/-VSCODE.pro-gray.svg?colorA=21262D&colorB=30363D&style=flat)](https://VSCode.pro/?utm_source=FOSS) [![Sponsor](https://img.shields.io/badge/-Sponsor-gray.svg?colorA=21262D&colorB=30363D&style=flat)](https://github.com/ahmadawais/sponsor?utm_source=FOSS)
[![Follow @MrAhmadAwais on Twitter](https://img.shields.io/badge/Twitter-@MRAHMADAWAIS-gray.svg?colorA=21262D&colorB=30363D&style=flat)](https://twitter.com/mrahmadawais/)

> Utility function to use both[`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) in one go. Where class merging becomes a seamless dance, leaving style conflicts in the dust!

<br>

- 🧿 Fully typed, with built-in TypeScript declarations
- 📦 Use [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) in one go
- 🎛️ Works in modern browsers & Node >=12
- 🎖️ This module is available in three formats:
- 📟 ES Module: `dist/index.js`
- 📼 CommonJS: `dist/index.cjs`
- 🌍 UMD: `dist/index.global.js`

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm i mxcn
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

```js
// Use ESM `import` statement syntax for ESM lib.
import cn from 'mxcn';
import { cn } from 'mxcn'; // Or named import.

// OR use CommonJS `require` syntax for CommonJS lib.
const cn = require('mxcn');

// Basic usage in React.
<div className={cn('custom class or tailwind px-2 py-3 flex')} />

// Example: Combined, any example of tailwind-merge or clsx works.
cn('px-2 py-1 bg-red hover:bg-dark-red', null, true && 'p-3 bg-[#B91C1C]')
//=> 'hover:bg-dark-red p-3 bg-[#B91C1C]'

// Example: tailwind-merge
cn('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
//=> 'hover:bg-dark-red p-3 bg-[#B91C1C]'
// Why? px-2 and py-1 are removed because of p-3 that came afterwards.

// Example: clsx
// Strings (variadic)
cn('foo', true && 'bar', 'baz')
//=> 'foo bar baz'

// Objects
cn({ foo:true, bar:false, baz:isTrue() })
//=> 'foo baz'

// Objects (variadic)
cn({ foo:true }, { bar:false }, null, { '--foobar':'hello' })
//=> 'foo --foobar'

// Arrays
cn(['foo', 0, false, 'bar'])
//=> 'foo bar'

// Arrays (variadic)
cn(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]])
//=> 'foo bar baz hello there'

// The famous Kitchen sink (with nesting)
cn('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya')
//=> 'foo bar hello world cya'
```

> For more please check the docs of  [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge). Cheers!


<br>

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `🤖 TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)](./../../)

## License & Conduct

- MIT © [Ahmad Awais](https://twitter.com/MrAhmadAwais/)
- [Code of Conduct](code-of-conduct.md)

<br>

[![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)](./../../)

## Connect

<div align="left">
    <p><a href="https://twitter.com/MrAhmadAwais/"><img alt="Twitter @MrAhmadAwais" align="center" src="https://img.shields.io/badge/-@MrAhmadAwais-gray.svg?colorA=6A788D&colorB=1da1f2&style=for-the-badge" /></a>&nbsp;<small> <strong>(follow)</strong> To get <a href="https://Awais.dev/odmt">#OneDevMinute</a> development tips</small></p>
    <p><a href="https://www.linkedin.com/in/MrAhmadAwais/"><img alt="LinkedIn @MrAhmadAwais" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorA=0A6DA5&colorB=0A6DA5&style=for-the-badge" /></a>&nbsp;<small><strong>(connect)</strong> On LinkedIn, you know what to do here</small></p>
    <p><a href="https://youtube.com/AhmadAwais?sub_confirmation=1"><img alt="YouTube AhmadAwais" align="center" src="https://img.shields.io/badge/YOUTUBE-gray.svg?colorA=F6251D&colorB=F6251D&style=for-the-badge" /></a>&nbsp;<small><strong>(subscribe)</strong> Tech talks & #OneDevMinute videos</small></p>
    <p><a href="https://AhmadAwais.com/"><img alt="Blog: AhmadAwais.com" align="center" src="https://img.shields.io/badge/-MY%20BLOG-gray.svg?colorA=6A788D&colorB=6A788D&style=for-the-badge" /></a>&nbsp;<small><strong>(read)</strong> In-depth & long-form technical articles</small></p>
	<div align="left">
    <p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/-GitHub-gray.svg?colorA=6A788D&colorB=6A788D&style=for-the-badge" /></a>&nbsp;<small><strong>(follow)</strong> my free and open-source work</small></p>

</div>

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Course Recommendation

### [NodeCLI.com][n] — Learn to build Node.js CLI Automation

> Node CLI Automation development — without wasting a thousand hours

After building hundreds of developer automation tools used by millions of developers, I am teaching exactly how you can do it yourself with minimum effective effort. Learn to build Node.js & JavaScript-based CLI (Command Line Interface) apps & npm packages. Automate the grunt work, do more in less time, impress your manager, make more salary, and help the community. I'm sharing it all in [this step-by-step 100-videos][n] course.

[![Node CLI Course](https://raw.githubusercontent.com/ahmadawais/stuff/master/nodecli/featured.jpg)][n]

<br>

[![👌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/sponsor.png)](./../../)

## Sponsor

I ([Ahmad Awais](https://twitter.com/mrahmadawais/)) and my incredible wife ([Maedah Batool](https://twitter.com/MaedahBatool/)) are two engineers who fell in love with open source and then with each other. You can read more [about me here](https://ahmadawais.com/about). If you or your company use any of my projects or like what I’m doing then consider backing me. I'm in this for the long run. An open-source developer advocate.


[![Sponsor Awais](https://raw.githubusercontent.com/ahmadawais/stuff/master/sponsor/sponsor.jpg)][s]

<small><strong>❯❯ Professional Development Courses ↓</strong></small>

[![Node CLI Course](https://img.shields.io/badge/LEARN-Node%20CLI%20Automation-gray.svg?colorA=215732&colorB=44883e&style=for-the-badge)][n] [![VSCode Course](https://img.shields.io/badge/LEARN-VSCode%20Power%20User-gray.svg?colorA=655BE1&colorB=4F44D6&style=for-the-badge)][v] [![Node.js Course](https://img.shields.io/badge/LEARN-Node.js%20(free)-gray.svg?colorA=21262D&colorB=30363D&style=for-the-badge)][nj]


[s]: https://github.com/AhmadAwais/sponsor
[n]: https://NodeCLI.com?utm_source=github.com/ahmadawais/mxcn&utm_medium=referral&utm_campaign=profile
[v]: https://VSCode.pro?utm_source=github.com/ahmadawais/mxcn&utm_medium=referral&utm_campaign=profile
[nj]: https://NodejsBeginner.com?utm_source=github.com/ahmadawais/mxcn&utm_medium=referral&utm_campaign=profile
[g]: https://github.com/AhmadAwais
