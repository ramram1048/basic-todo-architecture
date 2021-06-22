### set package manager to yarn berry

```
# set package manager to yarn berry
yarn set version berry
yarn init

# add typescript and enable VSCode integration
yarn add --dev typescript
yarn dlx @yarnpkg/pnpify --sdk vscode

# add @types/* dependency yarn plugin
yarn plugin import typescript
```
