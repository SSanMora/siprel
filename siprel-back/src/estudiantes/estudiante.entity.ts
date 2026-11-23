import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('estudiantes')
export class Estudiante {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    documento!: string;

    @Column()
    nombreCompleto!: string;

    @Column()
    grado!: string;

    @Column({ default: '' })
    observaciones!: string;
}