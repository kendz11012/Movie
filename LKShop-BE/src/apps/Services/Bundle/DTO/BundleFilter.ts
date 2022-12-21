import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export default class BundleFilter {

    @IsString()
    @IsOptional()
    public BundleName: string

    @IsString()
    @IsOptional()
    public Description: string

    @IsNumber()
    @IsOptional()
    public Price: number
}