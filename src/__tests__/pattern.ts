import { parseAndEvaluateExp } from './utils'

describe('InfixConstruction', () => {
  test('infix construction pattern matching', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun begins_with_one lst =
    case lst of
     1::_ => true
    | _ => false
in
  begins_with_one [1,2,3]
end
`)
    ).toBe(`true`))
})
