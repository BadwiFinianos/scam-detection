import { ScamResponse, Pub, RuleResponse } from '@customTypes/index';
import {
  FirstnameLengthRule,
  LastnameLengthRule,
  AlphaRateRule,
  NumberRateRule,
  PriceQuotationRule,
  BlocklistRule
} from '@rules/index';

/**
 * Check the pub against all rules
 */
export class PubValidationService {
  /**
   * Check the pub against all rules
   * @param pub The Ad of the vehicule to be validated
   * @returns Promise<ScamResponse> A promise that contains thte response of the validation (ScamResponse)
   */
  static async validatePub(pub: Pub): Promise<ScamResponse> {
    const reference = pub.reference;

    const rulesResponses = await Promise.allSettled([
      FirstnameLengthRule.validate(pub.contacts.firstName),
      LastnameLengthRule.validate(pub.contacts.lastName),
      AlphaRateRule.validate(pub.contacts.email),
      NumberRateRule.validate(pub.contacts.email),
      PriceQuotationRule.validate(pub),
      BlocklistRule.validate(pub.vehicle.registerNumber)
    ]);

    const invalidRules =
      rulesResponses
        .filter(
          (response) =>
            response.status === 'fulfilled' && !response.value.isValid
        )
        .map(
          (fulfilled) =>
            (fulfilled as PromiseFulfilledResult<RuleResponse>).value.ruleName
        ) ?? [];

    return {
      reference,
      scam: invalidRules.length > 0,
      rules: invalidRules
    };
  }
}
