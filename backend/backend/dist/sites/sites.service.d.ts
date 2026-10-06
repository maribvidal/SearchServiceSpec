import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './schemas/site.schema';
import { Model } from 'mongoose';
export declare class SitesService {
    private siteModel;
    constructor(siteModel: Model<Site>);
    create(createSiteDto: CreateSiteDto): Promise<import("mongoose").Document<unknown, {}, Site, {}, import("mongoose").DefaultSchemaOptions> & Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Site, {}, import("mongoose").DefaultSchemaOptions> & Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Site, {}, import("mongoose").DefaultSchemaOptions> & Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    findByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, Site, {}, import("mongoose").DefaultSchemaOptions> & Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    update(id: string, updateSiteDto: UpdateSiteDto): Promise<(import("mongoose").Document<unknown, {}, Site, {}, import("mongoose").DefaultSchemaOptions> & Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, Site, {}, import("mongoose").DefaultSchemaOptions> & Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
