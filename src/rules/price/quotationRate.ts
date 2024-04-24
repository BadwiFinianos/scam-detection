import { MAX_PRICE_INTERVAL_PERCENTAGE } from '@data/constants';
import QuotationService from '@services/quotationService';
import { Pub } from '@customTypes/index';

export class PriceQuotationRule {
  static ruleName: string = 'rule::price::quotation_rate';
  /**
   * Checks if the price is valid
   * @param pub The full Ad of the vehicule
   * @returns boolean true if price is in 20% margin, false otherwise
   */
  static async validate(pub: Pub): Promise<boolean> {
    const pubPrice = pub.price;
    const vehicule = pub.vehicle;

    const quotationPrice = await QuotationService.getQuotation(vehicule);

    const lowerBound =
      quotationPrice - quotationPrice * MAX_PRICE_INTERVAL_PERCENTAGE;
    const upperBound =
      quotationPrice + quotationPrice * MAX_PRICE_INTERVAL_PERCENTAGE;

    return pubPrice > lowerBound && pubPrice < upperBound;
  }
}
