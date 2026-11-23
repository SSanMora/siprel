import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class InventarioService {
    constructor(private readonly dataSource: DataSource) {}

    ejecutar<T>(operacion: (manager: EntityManager) => Promise<T> ){
        return this.dataSource.transaction(async (manager) => {
            await manager.query('LOCK TABLE libros, estudiantes IN SHARE EXCLUSIVE MODE');
            return await operacion(manager);
        })
    }
}