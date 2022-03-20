import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDTO from '../dto/createUserDTO';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDTO: CreateUserDTO): Promise<void> {
        await this.usersService.save(createUserDTO);
    }
}
