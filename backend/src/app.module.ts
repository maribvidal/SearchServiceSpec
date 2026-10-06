import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SitesModule } from './sites/sites.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    UsersModule, 
    SitesModule,
    MongooseModule.forRoot('mongodb+srv://marianobazalarvidal_db_user:NhS2yD4UjdUywKIM@cluster0.aqcpgx3.mongodb.net/?appName=Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
