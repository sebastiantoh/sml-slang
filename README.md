# sml-slang

SML sub-language implementation

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
