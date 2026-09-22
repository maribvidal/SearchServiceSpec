import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SitesModule } from './sites/sites.module';

@Module({
  imports: [UsersModule, SitesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
