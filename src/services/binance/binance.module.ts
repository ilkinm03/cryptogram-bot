import { Module } from "@nestjs/common";
import { BinanceService } from "./binance.service";
import { HttpModule } from "@nestjs/axios";
import { Spot } from "@binance/connector";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [HttpModule],
    providers: [
        BinanceService,
        ConfigService,
        {
            provide: "BinanceClient",
            useFactory: (configService: ConfigService) => new Spot(
                configService.getOrThrow("BINANCE_API_KEY"),
                configService.getOrThrow("BINANCE_API_SECRET"),
            ),
            inject: [ConfigService],
        },
    ],
    exports: ["BinanceClient"],
})
export class BinanceModule {}