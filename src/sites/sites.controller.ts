import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo sitio.' })
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.sitesService.create(createSiteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los sitios creados.' })
  findAll() {
    return this.sitesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un sitio específico por su id.' })
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(id);
  }

  @Get('/user/:userId')
  @ApiOperation({ summary: 'Obtener los sitios que hayan sido creados por un usuario.' })
  findOneByUserId(@Param('userId') userId: string) {
    return this.sitesService.findOneByUserId(userId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modificar la información de un sitio específico por medio de su id. (No se pueden modificar los siguientes campos: nombre, url, userId)'})
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.sitesService.update(id, updateSiteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un sitio específico por medio de su id.' })
  remove(@Param('id') id: string) {
    return this.sitesService.remove(id);
  }
}
