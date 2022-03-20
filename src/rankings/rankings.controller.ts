import { Get, Query, Controller } from '@nestjs/common';
import GetUserDTO  from '../dto/getUsersDTO';
import { RankingsService } from './rankings.service';


@Controller('rankings')
export class RankingsController {
    constructor(private readonly rankingsServices: RankingsService) {}

    @Get()
    list(@Query() getUsersDTO: GetUserDTO) {
        return this.rankingsServices.list(getUsersDTO);
    }
}
