import mongoose, { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
export declare class Site extends Document {
    nombre: string;
    url: string;
    depthLevel: number;
    captureFrequency: number;
    documentExtractor: string;
    pageResolver?: string;
    userId: User;
}
export declare const SiteSchema: mongoose.Schema<Site, mongoose.Model<Site, any, any, any, any, any, Site>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Site, mongoose.Document<unknown, {}, Site, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, Site, mongoose.Document<unknown, {}, Site, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    url?: mongoose.SchemaDefinitionProperty<string, Site, mongoose.Document<unknown, {}, Site, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    userId?: mongoose.SchemaDefinitionProperty<User, Site, mongoose.Document<unknown, {}, Site, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    depthLevel?: mongoose.SchemaDefinitionProperty<number, Site, mongoose.Document<unknown, {}, Site, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    captureFrequency?: mongoose.SchemaDefinitionProperty<number, Site, mongoose.Document<unknown, {}, Site, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    documentExtractor?: mongoose.SchemaDefinitionProperty<string, Site, mongoose.Document<unknown, {}, Site, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    pageResolver?: mongoose.SchemaDefinitionProperty<string | undefined, Site, mongoose.Document<unknown, {}, Site, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    nombre?: mongoose.SchemaDefinitionProperty<string, Site, mongoose.Document<unknown, {}, Site, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Site & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Site>;
