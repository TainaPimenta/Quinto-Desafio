import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import GetUserDTO from '../dto/getUsersDTO';
import CreateUserDTO from '../dto/createUserDTO';
import { User } from '../entity/user.entity';

function between(min, max) {
    return Math.floor( Math.random() * (max - min) + min )
} 

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private usersRepository: Repository<User>
    ) {}

    list(getUsersDTO: GetUserDTO) {
        return this.usersRepository.find();
    }

    async save(createUserDTO: CreateUserDTO): Promise<void> {
        const user = new User();

        user.username = createUserDTO.username;
        user.score = between(1, 1000);

        await this.usersRepository.save(user);    }
}
