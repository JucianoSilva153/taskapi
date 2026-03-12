import { IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class  CreateTaskDto{
        @IsString()
        @IsNotEmpty()
        @MinLength(3)
        title: string

        @IsString()
        @IsEmpty()
        description?: string
}