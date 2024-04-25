import { BlocklistRule } from '@rules/index';
import { BlocklistService } from '@services/blocklistService';

// Mock the BlocklistService
jest.mock('@services/blocklistService');

describe('BlocklistRule', () => {
  it('should validate false if the register number is on the blocklist', async () => {
    const registerNumber = 'ABC123';
    (BlocklistService.isBlocked as jest.Mock).mockResolvedValue(true);

    const result = await BlocklistRule.validate(registerNumber);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::registernumber::blocklist');
  });

  it('should validate true if the register number is not on the blocklist', async () => {
    const registerNumber = 'XYZ789';
    (BlocklistService.isBlocked as jest.Mock).mockResolvedValue(false); // Simulate the number not being blocked

    const result = await BlocklistRule.validate(registerNumber);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::registernumber::blocklist');
  });
});
