import { parseAndEvaluateExp } from './utils'

/**
 * Lists
 */
test('lists: evaluate to themselves', () => expect(parseAndEvaluateExp('[]')).toBe('[]'))
test('lists: evaluate to themselves', () => expect(parseAndEvaluateExp('[1]')).toBe('[1]'))
test('lists: evaluate to themselves', () => expect(parseAndEvaluateExp('[1,2,5]')).toBe('[1,2,5]'))
