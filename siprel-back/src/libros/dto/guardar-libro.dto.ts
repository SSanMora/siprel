import { IsOptional, IsString, MaxLength, IsNotEmpty, Max, Min, IsInt } from 'class-validator';

export class GuardarLibroDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    isbn!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    titulo!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    autor!: string;

    @IsInt()
    @Min(0)
    @Max(1000)
    @IsNotEmpty()
    cantidadTotal!: number;
}
