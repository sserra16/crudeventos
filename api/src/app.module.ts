import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './config/orm';
import { UsuariosModule } from './usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSource.options), UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
