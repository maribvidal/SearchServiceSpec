import { CreateSiteDto } from './create-site.dto';
declare const UpdateSiteDto_base: import("@nestjs/mapped-types", { with: { "resolution-mode": "import" } }).MappedType<Partial<Omit<CreateSiteDto, "name" | "url" | "userId">>>;
export declare class UpdateSiteDto extends UpdateSiteDto_base {
}
export {};
