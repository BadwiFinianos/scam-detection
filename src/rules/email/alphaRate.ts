import { RuleResponse } from '@customTypes/index';
import { MIN_ALPHA_RATE_PERCENTAGE } from '@data/constants';

export class AlphaRateRule {
  static ruleName: string = 'rule::alpha_rate';
  /**
   * Checks if the email alpha rate is valid
   * @param email The email of the contact
   * @returns boolean true if rate is valid, false otherwise
   */
  static async validate(email: string): Promise<RuleResponse> {
    const localPart = email.split('@')[0];
    const totalLength = localPart.length;

    const letterCount = localPart
      .split('')
      .filter((char) => /^[A-Za-z0-9]$/.test(char)).length;

    const percentage = (letterCount / totalLength) * 100;
    return {
      ruleName: this.ruleName,
      isValid: percentage > MIN_ALPHA_RATE_PERCENTAGE
    };
  }
}
