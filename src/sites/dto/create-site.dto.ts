export class CreateSiteDto {
  nombre: string;
  url: string;
  depthLevel: number;
  searchFrequency: number;
  documentExtractor: string;
  pageResolver?: string;
  userId: string;
}