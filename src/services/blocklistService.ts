import { BLOCKED_NUMBERS } from '@data/constants';
/**
 * Simulates checking if a vehicle's registration number is on a blocklist
 */
export class BlocklistService {
  /**
   * Checks if the given registration number is blacklisted
   * @param registerNumber The registration number of the vehicle to check.
   * @returns Promise<boolean> A promise that resolves to true if blacklisted, false otherwise
   */
  static async isBlocked(registerNumber: string): Promise<boolean> {
    // Simulate a network delay of 50ms
    return new Promise((resolve) =>
      setTimeout(() => {
        // Check if the registration number is on the blocklist
        const isBlocked = BLOCKED_NUMBERS.includes(registerNumber);
        resolve(isBlocked);
      }, 50)
    );
  }
}
