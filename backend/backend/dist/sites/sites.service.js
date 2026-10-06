"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const site_schema_1 = require("./schemas/site.schema");
const mongoose_2 = require("mongoose");
let SitesService = class SitesService {
    siteModel;
    constructor(siteModel) {
        this.siteModel = siteModel;
    }
    create(createSiteDto) {
        const createdSite = new this.siteModel(createSiteDto);
        return createdSite.save();
    }
    findAll() {
        return this.siteModel.find().exec();
    }
    findOne(id) {
        return this.siteModel.findById(id).exec();
    }
    findByUserId(userId) {
        return this.siteModel.find({ 'userId': userId }).exec();
    }
    update(id, updateSiteDto) {
        return this.siteModel.findByIdAndUpdate(id, updateSiteDto, { returnDocument: 'after' }).exec();
    }
    remove(id) {
        return this.siteModel.findByIdAndDelete(id).exec();
    }
};
exports.SitesService = SitesService;
exports.SitesService = SitesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(site_schema_1.Site.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SitesService);
//# sourceMappingURL=sites.service.js.map