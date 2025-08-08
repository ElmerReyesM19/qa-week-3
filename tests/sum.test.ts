import { describe, it, expect } from 'vitest';
import { sum } from '../src/sum';

describe('sum()', () => {
  it('suma dos números positivos', () => {
    expect(sum(5, 7)).toBe(12);
  });

  it('suma con números negativos', () => {
    expect(sum(-3, 2)).toBe(-1);
  });
});