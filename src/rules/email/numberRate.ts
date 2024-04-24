import { MAX_NUMBER_RATE_PERCENTAGE } from '@data/constants';

export class NumberRateRule {
  static ruleName: string = 'rule::number_rate';
  /**
   * Checks if the email number rate is valid
   * @param email The email of the contact
   * @returns boolean true if rate is valid, false otherwise
   */
  static async validate(email: string): Promise<boolean> {
    const localPart = email.split('@')[0];
    const totalLength = localPart.length;

    const letterCount = localPart
      .split('')
      .filter((char) => /^[0-9]$/.test(char)).length;

    const percentage = (letterCount / totalLength) * 100;

    return percentage > MAX_NUMBER_RATE_PERCENTAGE;
  }
}
