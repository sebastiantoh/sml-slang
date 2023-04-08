# sml-slang

SML sub-language implementation

## Requirements

- Node (known working version: v16.19.0)
- Yarn (known working version: v1.22.19)

## Set Up

### Building
```bash
yarn install
yarn build
```

### Running tests
```
yarn test
```

### Regenerating ANTLR code

This step is needed each time [the grammar](./src/lang/Sml.g4) is updated.


```
yarn antlr4ts
```
