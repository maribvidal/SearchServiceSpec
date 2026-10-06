"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSiteDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateSiteDto {
    name;
    url;
    depthLevel;
    captureFrequency;
    documentExtractor;
    pageResolver;
    userId;
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, url: { required: true, type: () => String }, depthLevel: { required: true, type: () => Number }, captureFrequency: { required: true, type: () => Number }, documentExtractor: { required: true, type: () => String }, pageResolver: { required: false, type: () => String }, userId: { required: true, type: () => String } };
    }
}
exports.CreateSiteDto = CreateSiteDto;
//# sourceMappingURL=create-site.dto.js.map