import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import GetUserDTO  from '../dto/getUsersDTO';
import { User } from '../entity/user.entity';

@Injectable()
export class RankingsService {
    constructor(
        @InjectRepository(User) private rankingsRepository: Repository<User>
    ) {}

    async list(getUsersDTO: GetUserDTO): Promise<User[]> {
        const users = await this.rankingsRepository.find();

        return users;
    }
}
