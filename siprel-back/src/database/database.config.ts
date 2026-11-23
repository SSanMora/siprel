import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Libro } from 'src/libros/libro.entity';
import { Estudiante } from 'src/estudiantes/estudiante.entity';




export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USER ?? 'tevendev',
    password: process.env.DB_PASSWORD ?? ' ',
    database: process.env.DB_NAME ?? 'siprel_bd',
    entities: [Libro, Estudiante],
    synchronize: true,
}    