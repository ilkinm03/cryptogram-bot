import { Command, Ctx, Update } from "nestjs-telegraf";
import { AxiosResponse } from "axios";
import { MyTrade, UserAssetsResponse } from "@binance/connector";
import { IBotContext } from "../context/context.interface";
import { BinanceService } from "../services/binance/binance.service";
import { FormatterService } from "../utils/formatter.service";

@Update()
export class BinanceCommand {
    constructor(
        private readonly binanceService: BinanceService,
        private readonly formatterService: FormatterService,
    ) {}

    @Command("wallet")
    public async wallet(@Ctx() ctx: IBotContext): Promise<void> {
        const response: AxiosResponse<UserAssetsResponse[]> = await this.binanceService.fetchWalletInfo();
        const data: UserAssetsResponse[] = response.data;
        await ctx.reply(this.formatterService.formatUserAssetsData(data));
    }

    @Command("myTrades")
    public async myTrades(@Ctx() ctx: IBotContext): Promise<void> {
        const response: AxiosResponse<MyTrade[]> = await this.binanceService.fetchMyTrades();
        const data: MyTrade[] = response.data;
        await ctx.reply(this.formatterService.formatMyTradesData(data));
    }
}
