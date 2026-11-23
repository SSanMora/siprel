import { IsOptional, IsString, MaxLength } from 'class-validator';

export class BuscarDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    buscar?: string;
}