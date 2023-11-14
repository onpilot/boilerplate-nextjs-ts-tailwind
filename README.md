# Boilerplate Next.js + TypeScript + Tailwind CSS

[![Depfu](https://badges.depfu.com/badges/365159912876b518f245b527de23f5c9/overview.svg)](https://depfu.com/github/onpilot/boilerplate-nextjs-ts-tailwind?project_id=39446)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Next.js + TypeScript + Tailwind CSS boilerplate with some extras.

## Intro

This repository is heavily-inspired by
[Clarence's Next.js starter pack](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter).
With some issues raising after Next.js change the standard from `Page Router` to
`App Router`, I decide to do fresh-install the latest Next.js version and try to
remodel the starter pack on top of that.

This boilerplate was intended for my own personal use—I want to make it as light
and simple as possible—so I remove some features from the original starter pack.
If you find it useful, feel free to use it for your project. As for the license,
this project is
[MIT Licensed](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/discussions/158).

## Features

This repository is packed with:

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — with `prettier-plugin-tailwindcss` for sorting Tailwind
  classes
- Using default `NPM` package manager

Original features that has been preserved:

```
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your
  imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are
  committed
- 🤖 Conventional Commit Lint — Make sure you & your
  teammates follow conventional commit
- ⏰ Release Please — Generate your changelog by activating the `release-please`
  workflow
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created
  on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
```

Addition:

```
- 💁‍♂️ Conventional Commit Prompt — Enable commit via terminal prompt using `commitizen` + `cz-git` that follows your commit message configuration.
```

I recommend you to install commitizen on your machine globally

```bash
npm install -g commitizen
```

So you can simply use `git cz`, `git-cz` or just `cz` instead of _git commit_
when committing.

You can also use alias for common commit messages, eg. type `npx czg :ur` in
your terminal for `"docs: update README"` commit message. Add your definition on
[commitlint.config.js](https://github.com/onpilot/boilerplate-nextjs-ts-tailwind/blob/main/commitlint.config.js).

## Getting Started

### 1. Clone this template

1. Use this repository as template:

   Through `Use this template` green button on top of the page.

2. Using `create-next-app`

   ```bash
   npx create-next-app -e 'https://github.com/onpilot/boilerplate-nextjs-ts-tailwind' project-name
   ```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Husky hooks

```bash
npx husky install
```

### 4. Run the development server

You can start the server using this command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result. Start editing the page by modifying `app/page.tsx`.

### 4. Change defaults

There are some things you need to change.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is
mandatory to use it to commit changes.

# Attribution

For more **details**, please check Clarence's blog post and repository:

- Blog:
  [One-stop Starter to Maximize Efficiency on Next.js & Tailwind CSS Projects](https://theodorusclarence.com/blog/one-stop-starter)
- Repo:
  [Next.js + Tailwind CSS + TypeScript Starter and Boilerplate](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter)
