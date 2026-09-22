export class CreateSiteDto {
  name: string;
  url: string;
  depthLevel: number;
  searchFrequency: number;
  documentExtractor: string;
  pageResolver?: string;
  userId: string;
}