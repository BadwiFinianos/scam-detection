import { MIN_LENGTH } from '@data/constants';

export class FirstnameLengthRule {
  static ruleName: string = 'rule::firstname::length';
  /**
   * Checks if the firstname is valid
   * @param firstname The firstname of the contact
   * @returns boolean true if length is valid, false otherwise
   */
  static async validate(firstname: string): Promise<boolean> {
    return firstname?.length > MIN_LENGTH;
  }
}
