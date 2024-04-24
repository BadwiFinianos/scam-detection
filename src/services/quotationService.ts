import { Vehicle } from 'types/vehicule';

/**
 * Simulates fetching the quotation for a vehicle with a delay.
 */
export class QuotationService {
  /**
   * Gets the quotation of a vehicle with simulated network delay.
   * @param vehicle The vehicle object containing details like make, model, version, etc.
   * @returns Promise<number> A promise that resolves with the quotation price.
   */
  static async getQuotation(vehicle: Vehicle): Promise<number> {
    // Simulate a network delay of 50ms
    return new Promise((resolve) =>
      setTimeout(() => {
        // In a real scenario, this method would calculate the quotation based on vehicle details.
        console.log(
          `Calculating quotation for: ${vehicle.make} ${vehicle.model} (${vehicle.version})`
        );
        resolve(35000);
      }, 50)
    );
  }
}
