import { PriceQuotationRule } from '@rules/index';
import QuotationService from '@services/quotationService';

// Mock the QuotationService
jest.mock('@services/quotationService');

describe('PriceQuotationRule', () => {
  it('should validate true if the price is within the allowed percentage interval', async () => {
    const pub = {
      contacts: {
        firstName: 'Sophie',
        lastName: 'Martin',
        email: 'sophie.martin@yopmail.fr',
        phone: {
          value: '0614151617'
        }
      },
      creationDate: '2020-11-30T18:50:50.8912',
      price: 22000,
      publicationOptions: ['STRENGTHS'],
      reference: 'B300058910',

      vehicle: {
        make: 'Toyota',
        model: 'Corolla',
        version: '2020',
        category: 'sedan',
        registerNumber: 'XYZ123',
        mileage: 30000
      }
    };
    const quotedPrice = 20000;

    (QuotationService.getQuotation as jest.Mock).mockResolvedValue(quotedPrice);

    const result = await PriceQuotationRule.validate(pub);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::price::quotation_rate');
  });

  it('should validate false if the price is outside the allowed percentage interval', async () => {
    const pub = {
      contacts: {
        firstName: 'Laurent',
        lastName: 'Lefevre',
        email: 'laurent.lef@yopmail.fr',
        phone: {
          value: '0611121314'
        }
      },
      creationDate: '2020-08-20T16:35:40.5678',
      publicationOptions: ['BOOST_VO'],
      reference: 'B300056789',
      price: 26000,
      vehicle: {
        make: 'Toyota',
        model: 'Corolla',
        version: '2020',
        category: 'sedan',
        registerNumber: 'XYZ123',
        mileage: 30000
      }
    };
    const quotedPrice = 20000;

    (QuotationService.getQuotation as jest.Mock).mockResolvedValue(quotedPrice);

    const result = await PriceQuotationRule.validate(pub);
    expect(result.isValid).toBe(false);
    expect(result.ruleName).toBe('rule::price::quotation_rate');
  });

  it('handles edge cases where price equals the boundary conditions', async () => {
    const pub = {
      contacts: {
        firstName: 'Laurent',
        lastName: 'Lefevre',
        email: 'laurent.lef@yopmail.fr',
        phone: {
          value: '0611121314'
        }
      },
      creationDate: '2020-08-20T16:35:40.5678',
      publicationOptions: ['BOOST_VO'],
      reference: 'B300056789',
      price: 22000, // Exactly 20% above the quoted price
      vehicle: {
        make: 'Toyota',
        model: 'Corolla',
        version: '2020',
        category: 'sedan',
        registerNumber: 'XYZ123',
        mileage: 30000
      }
    };
    const quotedPrice = 20000;

    (QuotationService.getQuotation as jest.Mock).mockResolvedValue(quotedPrice);

    const result = await PriceQuotationRule.validate(pub);
    expect(result.isValid).toBe(true);
    expect(result.ruleName).toBe('rule::price::quotation_rate');
  });
});
