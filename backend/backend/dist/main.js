"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Página del Swagger')
        .setDescription('La descripción para la API de SearchServiceSpec')
        .setVersion('1.0')
        .addTag('model')
        .build();
    const document = swagger_2.SwaggerModule.createDocument(app, config);
    swagger_2.SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map