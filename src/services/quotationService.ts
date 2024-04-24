import { Vehicle } from '@customTypes/index';
import { VEHICULE_PRICE } from '@data/constants';
/**
 * Simulates fetching the quotation for a vehicle with a delay
 */
export default class QuotationService {
  /**
   * Gets the quotation of a vehicle with simulated delay
   * @param vehicle The vehicle object
   * @returns Promise<number> A promise that resolves with the quotation price, 35000 as mock
   */
  static async getQuotation(vehicle: Vehicle): Promise<number> {
    // Simulate a network delay of 50ms
    return new Promise((resolve) =>
      setTimeout(() => {
        // In a real scenario, this method would calculate the quotation based on vehicle details.
        console.log(
          `Calculating quotation for: ${vehicle.make} ${vehicle.model} (${vehicle.version})`
        );
        resolve(VEHICULE_PRICE);
      }, 50)
    );
  }
}
