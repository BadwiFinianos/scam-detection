import { MIN_LENGTH } from '@data/constants';

export class LastnameLengthRule {
  static ruleName: string = 'rule::lastname::length';
  /**
   * Checks if the lastname is valid
   * @param lastname The lastname of the contact
   * @returns boolean true if length is valid, false otherwise
   */
  static async validate(lastname: string): Promise<boolean> {
    return lastname?.length > MIN_LENGTH;
  }
}
