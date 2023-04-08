# sml-slang

SML sub-language implementation

## Installation

1. Install Node (known working version is v16.19.0) and Yarn (known working version is v1.22.19)

1. Install dependencies
    ```bash
    yarn install
    ```

1. Build `sml-slang`
    ```bash
    yarn build
    ```

## Usage

### Evaluating programs

```
yarn eval <path to .sml program>
```

Some sample programs can be found in `src/__tests__/programs/`

```
yarn eval src/__tests__/programs/fib.sml
yarn eval src/__tests__/programs/fizz_buzz.sml
yarn eval src/__tests__/programs/gcd.sml
yarn eval src/__tests__/programs/hello_world.sml
yarn eval src/__tests__/programs/is_prime.sml
yarn eval src/__tests__/programs/logical_operators.sml
yarn eval src/__tests__/programs/stdlib.sml
```

### Running tests
```
yarn test
```

## Regenerating ANTLR code

This step is needed each time [the grammar](./src/lang/Sml.g4) is updated.


```
yarn antlr4ts
```
