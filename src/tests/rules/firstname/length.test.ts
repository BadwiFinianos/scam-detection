import { FirstnameLengthRule } from '@rules/index';
import { MIN_LENGTH } from '@data/constants';

describe('FirstnameLengthRule', () => {
  it('should validate that a firstname shorter than MIN_LENGTH is invalid', async () => {
    const shortFirstname = 'a'.repeat(MIN_LENGTH - 1); // Ensure the name is shorter than MIN_LENGTH
    const result = await FirstnameLengthRule.validate(shortFirstname);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::firstname::length');
  });

  it('should validate that a firstname equal to MIN_LENGTH is not valid', async () => {
    const exactLengthFirstname = 'a'.repeat(MIN_LENGTH); // Ensure the name is exactly MIN_LENGTH
    const result = await FirstnameLengthRule.validate(exactLengthFirstname);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::firstname::length');
  });

  it('should validate that a firstname longer than MIN_LENGTH is valid', async () => {
    const longFirstname = 'a'.repeat(MIN_LENGTH + 1); // Ensure the name is longer than MIN_LENGTH
    const result = await FirstnameLengthRule.validate(longFirstname);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::firstname::length');
  });

  it('should handle empty string inputs as invalid', async () => {
    const emptyFirstname = '';
    const result = await FirstnameLengthRule.validate(emptyFirstname);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::firstname::length');
  });
});
