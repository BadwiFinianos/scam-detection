import { AlphaRateRule } from '@rules/index';
import { MIN_ALPHA_RATE_PERCENTAGE } from '@data/constants';

describe('AlphaRateRule', () => {
  it('should return true for valid alpha rate above the minimum percentage', async () => {
    const email = `testemail@domain.com`;
    const expectedPercentage = (9 / 10) * 100; // "testemail" has 9 valid characters out of 10
    expect(expectedPercentage).toBeGreaterThan(MIN_ALPHA_RATE_PERCENTAGE);

    const result = await AlphaRateRule.validate(email);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::alpha_rate');
  });

  it('should return false for alpha rate below the minimum percentage', async () => {
    const email = `t3st3m@il@domain.com`;
    const expectedPercentage = (6 / 10) * 100; // "t3st3m@il" has 6 valid characters out of 10
    expect(expectedPercentage).toBeLessThan(MIN_ALPHA_RATE_PERCENTAGE);

    const result = await AlphaRateRule.validate(email);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::alpha_rate');
  });

  it('should handle emails with no valid characters correctly', async () => {
    const email = `1234567890@domain.com`;
    const result = await AlphaRateRule.validate(email);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::alpha_rate');
  });

  it('should handle empty local part correctly', async () => {
    const email = `@domain.com`;
    const result = await AlphaRateRule.validate(email);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::alpha_rate');
  });
});
