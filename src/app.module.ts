import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: "./config/config.env"
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test-postgres',
    password: 'postgres',
    database: 'mytestdb',
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: true, 
    logging:true /* show logs */}),
  UserModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
