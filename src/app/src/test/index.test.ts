import { expect, test } from 'vitest';
import { removeDuplicate } from '../utils/remove-duplicate';

test('Remove captures from the same billboard using its coordinates', () => {
  const directions = 'x^^x>>xvvx<<x';
  expect(removeDuplicate(directions.split(''))).toEqual(['x', '^', '^', 'x', '>', '>', 'x', 'v', 'v', 'x', '<', '<'])

  const directions2 = 'x^^vvxv';
  expect(removeDuplicate(directions2.split(''))).toEqual(['x', '^', '^', 'v', 'v', 'v'])

})
