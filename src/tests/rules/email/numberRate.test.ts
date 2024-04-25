import { NumberRateRule } from '@rules/index';
import { MAX_NUMBER_RATE_PERCENTAGE } from '@data/constants';

describe('NumberRateRule', () => {
  it('should validate true when number rate is below the maximum', async () => {
    const email = 'testuser123@domain.com'; // 3 numbers out of 11 characters
    const percentage = (3 / 11) * 100;
    expect(percentage).toBeLessThan(MAX_NUMBER_RATE_PERCENTAGE);

    const result = await NumberRateRule.validate(email);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::number_rate');
  });

  it('should validate false when number rate exceeds the maximum', async () => {
    const email = '12345user@domain.com'; // 5 numbers out of 13 characters
    const percentage = (5 / 13) * 100;
    expect(percentage).toBeGreaterThan(MAX_NUMBER_RATE_PERCENTAGE);

    const result = await NumberRateRule.validate(email);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::number_rate');
  });

  it('should handle emails with no numbers correctly', async () => {
    const email = 'user@domain.com'; // No numbers
    const result = await NumberRateRule.validate(email);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::number_rate');
  });

  it('should handle empty local part correctly', async () => {
    const email = '@domain.com'; // Empty local part
    const result = await NumberRateRule.validate(email);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::number_rate');
  });
});
