import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RankingsModule } from './rankings/rankings.module';
import { User } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'pastelandia-alunos',
      password: 'my-ultra-password',
      database: 'pastelandia-alunos',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    RankingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
