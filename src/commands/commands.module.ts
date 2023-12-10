import { Module } from "@nestjs/common";
import { BaseCommand } from "./base.command";
import { BinanceService } from "../services/binance/binance.service";
import { HttpModule } from "@nestjs/axios";
import { BinanceModule } from "../services/binance/binance.module";
import { BinanceCommand } from "./binance.command";
import { FormatterService } from "../utils/formatter.service";

@Module({
    imports: [HttpModule, BinanceModule],
    providers: [
        BaseCommand,
        BinanceCommand,
        BinanceService,
        FormatterService,
    ]
})
export class CommandsModule {}