import { Contacts } from "@customTypes/index";

export interface Pub {
  contacts: Contacts;
  creationDate: string;
  price: number;
  publicationOptions: string[];
  reference: string;
  vehicle: Vehicle;
}