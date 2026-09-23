import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateSiteDto } from './create-site.dto';

export class UpdateSiteDto extends PartialType(
  OmitType(CreateSiteDto, ['name', 'url', 'userId'] as const)
) {}
