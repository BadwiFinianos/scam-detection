import { RuleResponse } from '@customTypes/index';
import { BlocklistService } from '@services/blocklistService';

export class BlocklistRule {
  static ruleName: string = 'rule::registernumber::blocklist';
  /**
   * Checks if the registerNumber is valid
   * @param registerNumber The vehicule's register number
   * @returns boolean true if registerNumber is not blocked, false otherwise
   */
  static async validate(registerNumber: string): Promise<RuleResponse> {
    return {
      ruleName: this.ruleName,
      isValid: !(await BlocklistService.isBlocked(registerNumber))
    };
  }
}
