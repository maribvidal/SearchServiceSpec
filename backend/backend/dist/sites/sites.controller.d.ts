import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
export declare class SitesController {
    private readonly sitesService;
    constructor(sitesService: SitesService);
    create(createSiteDto: CreateSiteDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/site.schema").Site, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/site.schema").Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/site.schema").Site, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/site.schema").Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/site.schema").Site, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/site.schema").Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update(id: string, updateSiteDto: UpdateSiteDto): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/site.schema").Site, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/site.schema").Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/site.schema").Site, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/site.schema").Site & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
