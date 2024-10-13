import mongoose, { Document } from 'mongoose';
import config from '../config/Config';

const partnerCollectionName = config.getPartnerCollectionName(); 

interface Breadcrumb {
    fromIp: string;
    byUser: string;
    atTime: string;
    correlationId: string;
}

interface Contact {
    _id: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    phone: string;
}

export interface PartnerDoc extends Document {
    name: string;
    description?: string;
    status?: string;
    url?: string;
    contacts: mongoose.Types.ObjectId[];
    lastSaved?: Breadcrumb;
    contactDetails?: Contact[]; 
}

const BreadcrumbSchema = new mongoose.Schema<Breadcrumb>({
    fromIp: { type: String },
    byUser: { type: String },
    atTime: { type: String },
    correlationId: { type: String }
});

const PartnerSchema = new mongoose.Schema<PartnerDoc>({
    name: { type: String, required: true },
    description: { type: String },
    status: { type: String },
    url: { type: String },
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
    lastSaved: { type: BreadcrumbSchema }
}, {
    collection: partnerCollectionName, 
    toJSON: { virtuals: true },  
    toObject: { virtuals: true } 
});

PartnerSchema.virtual('contactDetails', {
    ref: 'Contact', 
    localField: 'contacts',
    foreignField: '_id',  
    justOne: false 
});

export const Partner = mongoose.model<PartnerDoc>(partnerCollectionName, PartnerSchema);