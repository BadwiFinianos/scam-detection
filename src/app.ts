import { Vehicle } from 'types/vehicule';
import { QuotationService } from 'services/quotationService';

const vehicle: Vehicle = {
  make: 'HONDA',
  model: 'CR-V',
  version: 'IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT',
  category: 'SUV_4X4_CROSSOVER',
  registerNumber: 'AA123AA',
  mileage: 100000
};

async function checkQuotation() {
  try {
    const quotation = await QuotationService.getQuotation(vehicle);
    console.log(`Quotation received: ${quotation}`);
  } catch (error) {
    console.error('Error fetching the quotation:', error);
  }
}

checkQuotation();
