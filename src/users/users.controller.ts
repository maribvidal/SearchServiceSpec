import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { SitesService } from '../sites/sites.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly sitesService: SitesService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios creados.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario específico por su id.' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get(':userId/sites')
  @ApiOperation({ summary: 'Obtener los sitios que hayan sido creados por un usuario.' })
  findOneByUserId(@Param('userId') userId: string) {
    return this.sitesService.findByUserId(userId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modificar la información de un usuario específico por medio de su id.'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario específico por medio de su id.' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
