import { PartnerDoc } from '../models/PartnerModel';
import { ContactDoc } from '../models/ContactModel';
  findPartner(id: string): Promise<PartnerDoc>;
  insertPartner(thePartner: PartnerDoc): Promise<PartnerDoc>;
  updatePartner(id: string, data: any): Promise<PartnerDoc>;
  addContact(partnerId: string, personId: string): Promise<ContactDoc>;