import { parseAndEvaluateExp } from './utils'

/**
 * Lists
 */
test('lists: evaluate to themselves', () => expect(parseAndEvaluateExp('[]')).toBe('[]'))
test('lists: evaluate to themselves', () => expect(parseAndEvaluateExp('[1]')).toBe('[1]'))
test('lists: evaluate to themselves', () => expect(parseAndEvaluateExp('[1,2,5]')).toBe('[1,2,5]'))

test('lists: empty list = empty list', () => expect(parseAndEvaluateExp('[] = []')).toBe('true'))
test('lists: empty list = non-empty list', () =>
  expect(parseAndEvaluateExp('[] = [1]')).toBe('false'))
test('lists: l1 = l1', () => expect(parseAndEvaluateExp('[1,2,3] = [1,2,3]')).toBe('true'))
test('lists: l1 = l2', () => expect(parseAndEvaluateExp('[1,2,3] = [1,2,3,4]')).toBe('false'))

test('lists: empty list <> empty list', () => expect(parseAndEvaluateExp('[] <> []')).toBe('false'))
test('lists: empty list <> non-empty list', () =>
  expect(parseAndEvaluateExp('[] <> [1]')).toBe('true'))
test('lists: l1 <> l1', () => expect(parseAndEvaluateExp('[1,2,3] <> [1,2,3]')).toBe('false'))
test('lists: l1 <> l2', () => expect(parseAndEvaluateExp('[1,2,3] <> [1,2,3,4]')).toBe('true'))
