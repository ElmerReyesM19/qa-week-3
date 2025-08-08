import { describe, it, expect } from 'vitest';
import { subtract } from '../src/subtract';

describe('subtract()', () => {
  it('resta dos números positivos', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it('resta con resultado negativo', () => {
    expect(subtract(3, 5)).toBe(-2);
  });
});