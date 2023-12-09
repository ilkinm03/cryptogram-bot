import { Module } from "@nestjs/common";
import { BaseCommand } from "./base.command";
import { BinanceService } from "../services/binance/binance.service";
import { HttpModule } from "@nestjs/axios";
import { BinanceModule } from "../services/binance/binance.module";

@Module({
    imports: [HttpModule, BinanceModule],
    providers: [BaseCommand, BinanceService]
})
export class CommandsModule {}