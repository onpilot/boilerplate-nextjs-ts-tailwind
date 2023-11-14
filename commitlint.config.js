/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'ci',
        'revert',
      ],
    ],
    // !STARTERCONF (Optional) Enable/disable this scope enum rules. Replace with yours.
    // https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
    'scope-enum': [2, 'always', ['app', 'home', 'account', 'blog']],
    'scope-empty': [1, 'always'],
    'subject-case': [2, 'always', ['sentence-case']],
  },
  //#region  //*=========== cz-git Prompt ===========
  prompt: {
    alias: {
      fd: 'docs: Fix typos',
      ur: 'docs: Update README',
      ':': 'docs(blog): Update posts',
    },
    types: [
      {
        value: 'feat',
        name: 'feat:      ✨   A new feature',
      },
      { value: 'fix', name: 'fix:       🐛   A bug fix' },
      {
        value: 'docs',
        name: 'docs:      📝   Documentation only changes',
      },
      {
        value: 'style',
        name: 'style:     💄   Changes that do not affect the meaning of the code',
      },
      {
        value: 'refactor',
        name: 'refactor:  ♻️   A code change that neither fixes a bug nor adds a feature',
      },
      {
        value: 'perf',
        name: 'perf:      ⚡️  A code change that improves performance',
      },
      {
        value: 'test',
        name: 'test:      ✅   Adding missing tests or correcting existing tests',
      },
      {
        value: 'build',
        name: 'build:     📦️  Changes that affect the build system or external dependencies',
      },
      {
        value: 'ci',
        name: 'ci:        🎡   Changes to our CI configuration files and scripts',
      },
      {
        value: 'chore',
        name: "chore:     🔨   Other changes that don't modify src or test files",
      },
      {
        value: 'revert',
        name: 'revert:    ⏪️  Reverts a previous commit',
      },
    ],
    // !STARTERCONF (Optional) Enable/disable this scope enum rules. Replace with yours.
    scopes: [
      { value: 'app', name: 'app:       System business' },
      { value: 'home', name: 'home:      Homepage' },
      { value: 'account', name: 'account:   Account related' },
      { value: 'blog', name: 'blog:      Blog related' },
    ],
    allowEmptyScopes: true,
    markBreakingChangeMode: true,
    allowBreakingChanges: ['feat', 'fix'],
    upperCaseSubject: true,
  },
  //#endregion  //*======== cz-git Prompt ===========
}
