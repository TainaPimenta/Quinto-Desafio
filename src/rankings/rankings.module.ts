import { Module, Controller } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { RankingsController } from './rankings.controller';
import { RankingsService } from './rankings.service';


@Module({ 
    imports: [TypeOrmModule.forFeature([User])],
    providers: [RankingsService],
    controllers: [RankingsController],
    
})
export class RankingsModule {}

