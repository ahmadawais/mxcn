# mxcn

[![DOWNLOADS](https://img.shields.io/npm/dt/mxcn?label=DOWNLOADS%20%20❯&colorA=6A788D&colorB=6A788D&style=flat)](https://www.npmjs.com/package/mxcn) [![Node.js CLI](https://img.shields.io/badge/-NodeCLI.com-gray.svg?colorB=6A788D&style=flat)](https://NodeCLI.com/?utm_source=FOSS) [![Learn VSCode](https://img.shields.io/badge/-VSCODE.pro-gray.svg?colorB=6A788D&style=flat)](https://VSCode.pro/?utm_source=FOSS) [![Sponsor](https://img.shields.io/badge/-Sponsor-gray.svg?colorB=6A788D&style=flat)](https://github.com/ahmadawais/sponsor?utm_source=FOSS)
[![Follow @MrAhmadAwais on Twitter](https://img.shields.io/badge/FOLLOW%20@MRAHMADAWAIS%20%E2%86%92-gray.svg?colorA=6A788D&colorB=6A788D&style=flat)](https://twitter.com/mrahmadawais/)

> Utility function to use both &#x60;clsx&#x60; and &#x60;tailwind-merge&#x60; in one go. Where class merging becomes a seamless dance, leaving style conflicts in the dust!

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

// Kitchen sink (with nesting)
cn('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya')
//=> 'foo bar hello world cya'
```

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
    <p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/MrAhmadAwais/"><img alt="Twitter @MrAhmadAwais" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get #OneDevMinute daily hot tips & trolls</small></p>
    <p><a href="https://www.youtube.com/AhmadAwais"><img alt="YouTube AhmadAwais" align="center" src="https://img.shields.io/badge/YOUTUBE-gray.svg?colorB=ff0000&style=flat" /></a>&nbsp;<small><strong>(subscribe)</strong> To tech talks & #OneDevMinute videos</small></p>
    <p><a href="https://AhmadAwais.com/"><img alt="Blog: AhmadAwais.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> In-depth & long form technical articles</small></p>
    <p><a href="https://www.linkedin.com/in/MrAhmadAwais/"><img alt="LinkedIn @MrAhmadAwais" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>

<br>

[![👌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/sponsor.png)](./../../)

## Sponsor

Me ([Ahmad Awais](https://twitter.com/mrahmadawais/)) and my incredible wife ([Maedah Batool](https://twitter.com/MaedahBatool/)) are two engineers who fell in love with open source and then with each other. You can read more [about me here](https://ahmadawais.com/about). If you or your company use any of my projects or like what I’m doing then consider backing me. I'm in this for the long run. An open-source developer advocate.

[![Ahmad on Twitter](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Follow%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)

### [NodeCLI.com][n] — Learn to build Node.js CLI Automation

> This repository is part of the [NodeCLI.com][n] course.

After building hundreds of developer automation tools used by millions of developers, I am sharing exactly how you can do it yourself with minimum effective effort. Learn to build Node.js & JavaScript based CLI (Command Line Interface) apps. Automate the grunt work, do more in less time, impress your manager, and help the community.
→ I'm sharing it all in this online video course. [Node CLI Automation
without wasting a 1,000 hours][n] →</p>

[![Node CLI Course](https://raw.githubusercontent.com/ahmadawais/stuff/master/nodecli/featured.jpg)][n]

[![Node CLI](https://img.shields.io/badge/-NodeCLI.com%20%E2%86%92-gray.svg?colorB=488640&style=flat)][n]

[n]: https://NodeCLI.com?utm_source=github&utm_medium=referral&utm_campaign=ahmadawais/cli-meow-help

[![Awais on Twitter](https://raw.githubusercontent.com/ahmadawais/stuff/master/sponsor/sponsor.jpg)](https://github.com/AhmadAwais/sponsor)
