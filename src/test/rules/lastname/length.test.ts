import { LastnameLengthRule } from '@rules/index';
import { MIN_LENGTH } from '@data/constants';

describe('LastnameLengthRule', () => {
  it('should validate that a lastname shorter than MIN_LENGTH is invalid', async () => {
    const shortLastname = 'a'.repeat(MIN_LENGTH - 1); // Ensure the name is shorter than MIN_LENGTH
    const result = await LastnameLengthRule.validate(shortLastname);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::lastname::length');
  });

  it('should validate that a lastname equal to MIN_LENGTH is valid', async () => {
    const exactLengthLastname = 'a'.repeat(MIN_LENGTH); // Ensure the name is exactly MIN_LENGTH
    const result = await LastnameLengthRule.validate(exactLengthLastname);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::lastname::length');
  });

  it('should validate that a lastname longer than MIN_LENGTH is valid', async () => {
    const longLastname = 'a'.repeat(MIN_LENGTH + 1); // Ensure the name is longer than MIN_LENGTH
    const result = await LastnameLengthRule.validate(longLastname);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::lastname::length');
  });

  it('should handle empty string inputs as invalid', async () => {
    const emptyLastname = '';
    const result = await LastnameLengthRule.validate(emptyLastname);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::lastname::length');
  });
});
