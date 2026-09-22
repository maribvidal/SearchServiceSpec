import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   const config = new DocumentBuilder()
    .setTitle('Página del Swagger')
    .setDescription('La descripción para la API de SearchServiceSpec')
    .setVersion('1.0')
    .addTag('model')
    .build();
   const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
