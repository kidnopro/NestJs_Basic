import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'cucucu99',
      database: 'dayladb',
      entities: [],
      synchronize: true, // Tự động tạo table, chỉ dùng trong môi trường đép
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
