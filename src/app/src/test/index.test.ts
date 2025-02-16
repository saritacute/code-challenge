import { expect, test } from 'vitest';
import { removeDuplicate } from '../utils/remove-duplicate';

test('Remove captures from the same billboard using its coordinates', () => {
  const directions = 'x^^x>>xvvx<<x';
  expect(removeDuplicate(directions)).toEqual('x^^x>>xvvx<<')

  const directions2 = 'x^^vvxv';
  expect(removeDuplicate(directions2)).toEqual('x^^vvv')

})
