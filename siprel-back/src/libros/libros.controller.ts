import { Controller, Get, Delete, Put, Post, Body, Param, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { BuscarDto } from 'src/common/dto/buscar.dto';
import { GuardarLibroDto } from './dto/guardar-libro.dto';

@Controller('libros')
export class LibrosController {

    constructor(private readonly librosService: LibrosService) {}

    @Get()
    listar(@Query() filtros: BuscarDto) {
        return this.librosService.listar(filtros.buscar);
    }

    @Post()
    crear(@Body() datos: GuardarLibroDto) {
        return this.librosService.crear(datos);
    }

    @Put(':id')
    actualizar(@Param('id') id: number, @Body() datos: GuardarLibroDto) {
        return this.librosService.actualizar(id, datos);
    }

}
