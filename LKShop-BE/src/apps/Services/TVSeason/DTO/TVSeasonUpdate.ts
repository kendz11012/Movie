import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export default class TVSeasonUpdate {
    @IsNumber()
    @IsOptional()
    public Season: number

    @IsString()
    @IsOptional()
    public Poster: string

    @IsString()
    @IsOptional()
    public CoverPoster: string

    @IsString()
    @IsOptional()
    public Description: string

    @IsNumber()
    @IsOptional()
    public Rating: number

    @IsNumber()
    @IsOptional()
    public RateCount: number

    @IsNumber()
    @IsOptional()
    public ViewCount: number

    @IsNumber()
    @IsOptional()
    public YearProduce: number

    @IsString()
    @IsOptional()
    public Status: string

    @IsBoolean()
    @IsOptional()
    public IsTrending: boolean

    @IsString()
    @IsOptional()
    public Trailer: string

    @IsString()
    @IsOptional()
    public video: string


    @IsString()
    @IsOptional()
    public Movie: string

    @IsString()
    @IsOptional()
    public CreatedTime: Date

}