import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('libros')
export class Libro {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    isbn!: string;

    @Column()
    titulo!: string;

    @Column()
    autor!: string;

    @Column()
    cantidad!: number;
}
