import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InventarioService } from 'src/database/inventario.service';
import { Repository, ILike, EntityManager } from 'typeorm';
import { Libro } from './libro.entity';
import { GuardarLibroDto } from './dto/guardar-libro.dto';

@Injectable()
export class LibrosService {
    constructor(
        @InjectRepository(Libro) private readonly libros: Repository<Libro>,
        private readonly inventarioService: InventarioService
    ) {}

    async listar(buscar = '') {
        const filtro = ILike(`%${buscar}%`)
        const libros = await this.libros.find({
            where: [{ titulo: filtro }, { autor: filtro }, { isbn: filtro }],
            order: { titulo: 'ASC' }
        })
        return libros.map(libro => ({
            id: libro.id,
            titulo: libro.titulo,
            autor: libro.autor,
            isbn: libro.isbn
        }))

    }

    async crear(datos: GuardarLibroDto) {
        return this.inventarioService.ejecutar(async (manager) => {
            const repositorio = manager.getRepository(Libro)
            const libro = await repositorio.save(repositorio.create(datos))
            return 'Libro creado con éxito' + libro.titulo 
        })
    }

    async actualizar(id: number, datos: GuardarLibroDto) {
        return this.inventarioService.ejecutar(async (manager) => {
            const repositorio = manager.getRepository(Libro)
            const libro = await repositorio.findOne({ where: { id } })
            if (!libro) {
                throw new Error('Libro no encontrado')
            }
            await repositorio.update(id, datos)
            return 'Libro actualizado con éxito' + libro.titulo
        })
    }   
}
