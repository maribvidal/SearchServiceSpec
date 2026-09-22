import { Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Site } from './schemas/site.schema';
import { Model } from 'mongoose';

@Injectable()
export class SitesService {
  constructor(@InjectModel(Site.name) private siteModel: Model<Site>) {}

  create(createSiteDto: CreateSiteDto) {
    const createdSite = new this.siteModel(createSiteDto);
    return createdSite.save()
  }

  findAll() {
    return this.siteModel.find().exec();
  }

  findOne(id: string) {
    return this.siteModel.findById(id).exec();
  }

  findOneByUserId(userId: string) {
    return this.siteModel.find({'userId': userId }).exec();
  }

  update(id: string, updateSiteDto: UpdateSiteDto) {
    return this.siteModel.findByIdAndUpdate(id, updateSiteDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.siteModel.findByIdAndDelete(id).exec();
  }
}
