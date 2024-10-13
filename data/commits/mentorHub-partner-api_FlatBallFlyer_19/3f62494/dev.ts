import mongoose from 'mongoose';
import config from './Config';
import { Partner, PartnerDoc } from '../models/PartnerModel';
import { Contact, ContactDoc } from '../models/ContactModel';
import { CollectionVersion, CollectionVersionDoc } from '../models/CollectionVersionModel';
import { Enumerators } from '../models/EnumeratorsModel';
import { highlightTrailingWhitespace } from 'jest-matcher-utils';
import { ObjectId } from 'mongodb';
import e from 'express';
export default class MongoIO {
  constructor() {
    const connectionString = config.getConnectionString();
    const dbName = config.getDbName();
    await mongoose.connect(connectionString, {
      dbName: dbName
    });
    await this.loadVersions();
    await this.loadEnumerators(config.getPartnerCollectionName());
    console.info("Database", dbName, "connected via Mongoose");
    console.info("Versions Loaded:", JSON.stringify(config.versions));
    console.info("Enumerators Loaded:", JSON.stringify(config.enumerators));
  public async disconnect(): Promise<void> {
    const dbName = config.getDbName();
    await mongoose.disconnect();
    console.info("Database", dbName, "Disconnected via Mongoose");
  /**
   * Finds partners, excluding those with a status of "Archived".
   * @returns An array of ShortName objects (only _id and name of partners).
   */
    const PartnerModel = mongoose.model(config.getPartnerCollectionName());

    const filter = { status: { $ne: "Archived" } };
    const projection = { _id: 1, name: 1 };

    try {
      const results: ShortName[] = await PartnerModel.find(filter, projection).lean();
      return results;
    } catch (error) {
      console.error("findPartners failed:", error);
      throw error;
  /**
   * Finds a single partner by ID and includes contact details.
   * @param id - The partner's ID to find.
   * @returns A Partner document with contact details included.
   */
  public async findPartner(id: string): Promise<PartnerDoc> {
    const partnerId = new mongoose.Types.ObjectId(id);
    // Utilizing the Partner model to fetch the partner with populated contact details
    const partner = await Partner.findById(partnerId)
      .populate('contactDetails')  // Automatically resolving contact details using the virtual defined in the model
      .exec();

    if (!partner) {

    return partner.toObject({ virtuals: true });  // Convert the Mongoose document to a plain object, including virtuals
  /**
   * Inserts a new partner into the database.
   * @param thePartner - The partner data to insert.
   * @returns The newly created Partner document.
   */
  public async insertPartner(thePartner: any): Promise<PartnerDoc> {
    const newPartner = new Partner(thePartner);
    await newPartner.save();
    return await this.findPartner(newPartner._id.toString());
  /**
   * Deletes new partner **ONLY FOR TESTING**
   * @param theId - The partner ID to delete
   */
  public async deletePartner(id: ObjectId): Promise<void> {
    await Partner.deleteOne({ _id: id });
  }
  /**
   * Updates an existing partner in the database.
   * @param id - The ID of the partner to update.
   * @param data - The update data.
   * @returns The updated Partner document.
   */
  public async updatePartner(id: string, data: any): Promise<PartnerDoc> {
    const updatedPartner = await Partner.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    ).exec();
    if (!updatedPartner) {
      throw new Error("Update Partner found No Partner to Update " + id);
  /**
  * Adds a contact to a partner's contact list.
  * @param partnerId - The ID of the partner to add the contact to.
  * @param personId - The ID of the person to add as a contact.
  * @returns The added Contact document.
  */
  public async addContact(partnerId: string, personId: string): Promise<ContactDoc> {
    const partnerObjectId = new mongoose.Types.ObjectId(partnerId);
    const personObjectId = new mongoose.Types.ObjectId(personId);
    const partner = await Partner.findById(partnerObjectId);
      throw new Error("addContact Partner Not Found " + partnerId);
    if (partner.contacts.some(contactId => contactId.equals(personObjectId))) {
      throw new Error("Add Contact failed: Contact already exists.");
    }
    const contact: ContactDoc | null = await Contact.findById(personObjectId);
    if (!contact) {
      throw new Error("addContact Contact Not Found " + personId);

    partner.contacts.push(contact._id);
    await partner.save();
    return contact;
  /**
   * Removes a contact from a partner's contact list.
   * @param partnerId - The ID of the partner from whom to remove the contact.
   * @param personId - The ID of the contact to remove.
   * @returns A promise resolved with void after the operation completes.
   */
    const partnerObjectId = new mongoose.Types.ObjectId(partnerId);
    const personObjectId = new mongoose.Types.ObjectId(personId);
    const result = await Partner.findByIdAndUpdate(
      partnerObjectId,
      { $pull: { contacts: personObjectId } },
      { new: true }
    );
    if (!result) {
      throw new Error("Remove Contact failed: Partner not found or contact not in list.");
  /**
   * Loads all collection versions from the database and stores them in the config.
   */
    const versions = await CollectionVersion.find({}).exec();
    config.versions = versions;
  /**
   * Loads the enumerators for a specific collection based on the latest version.
   * @param collectionName The name of the collection for which to load enumerators.
   */
    if (config.versions.length === 0) {
    const theVersionString = config.versions
      .filter((version: CollectionVersionDoc) => version.collectionName === collectionName)
    const enumerations = await Enumerators.findOne({ version: theVersion }).exec();
      throw new Error("Enumerators not found for version:" + collectionName + ":" + theVersionString);

    config.enumerators = enumerations.enumerators;