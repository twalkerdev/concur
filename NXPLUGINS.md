# NX Plugins

- @nx/vite
- @nx/eslint
- @nx/next
- @nx/react
- @nx/storybook
- @nx/workspace
-

nx g @nx/react:library ----dry-run
nx g @nx/next:application apps/blocks
nx g @nx/nest:application utils/fake-api
nx g @nx/storybook

### add storybook to react

nx g @nx/react:storybook-configuration packages/axolotl
nx g @nx/react:storybook-configuration apps/blocks

nx g @nx/react:library --bundler rollup --linter eslint --name concurui --importPath @concurui --unitTestRunner vitest --publishable

nx storybook project-name
nx build-storybook project-name

### faker nest server

npx nx g @nx/nest:application helpers/faker --unitTestRunner=jest --linter=eslint --dry-run

### Blocks for nest

npx nx g @nx/next:application app/blocks --bundler=tsc --unitTestRunner=jest --linter=eslint

## docker node setup for ci/cd

nx g @nx/node:setup-docker ...
