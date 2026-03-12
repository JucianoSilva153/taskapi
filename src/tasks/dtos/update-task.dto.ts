import { IsNumber, IsNotEmpty, IsString, MinLength, IsEmpty, IsBoolean } from "class-validator";

export class UpdateTaskDto{
    @IsNumber()
    @IsNotEmpty()
    id: number

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    @IsEmpty()
    description?: string

    @IsBoolean()
    completed: boolean = false;
}