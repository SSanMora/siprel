import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';
import { InventarioService } from './inventario.service';

@Module({
    imports: [TypeOrmModule.forRoot(databaseConfig)],
    providers: [InventarioService],
    exports: [InventarioService]
})
export class DatabaseModule {}



