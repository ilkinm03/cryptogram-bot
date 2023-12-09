import { Command, Ctx, Help, Start, Update } from "nestjs-telegraf";
import { IBotContext } from "../context/context.interface";
import { BinanceService } from "../services/binance/binance.service";
import { UserAssetsResponse } from "@binance/connector";
import { AxiosResponse } from "axios";

@Update()
export class BaseCommand {
    constructor(private readonly binanceService: BinanceService) {}

    @Start()
    public async start(@Ctx() ctx: IBotContext): Promise<void> {
        await ctx.reply("🚀 Welcome to the Binance Trading Assistant Bot! 📈\n" +
            "\n" +
            "I'm here to assist you with all things related to trading on Binance. Whether you're a seasoned trader or just starting out, I've got you covered!\n" +
            "\n" +
            "📊 Track Coin Prices: Stay updated on the latest prices of your favorite cryptocurrencies. Just ask for the price of a specific coin, and I'll fetch it for you!\n" +
            "\n" +
            "💰 Buy/Sell Coins: Looking to make a trade? Let me help you with buying or selling cryptocurrencies seamlessly.\n" +
            "\n" +
            "📈 Trading Insights: Get valuable insights and trends to make informed trading decisions. I can provide analysis and information on various coins and markets.\n" +
            "\n" +
            "🔍 Account and Wallet Info: Curious about your account status or wallet details? I can fetch that information for you securely.\n" +
            "\n" +
            "🤖 Customized Assistance: I'm here to adapt to your needs. Ask me anything related to Binance trading, and I'll do my best to assist you.\n" +
            "\n" +
            "Start exploring by typing a command or simply ask me a question. Let's embark on a profitable trading journey together! 🌟");
        await ctx.reply("🔎 Need more info? For a detailed list of commands" +
            " and how to use them, type '/help' anytime!");
    }

    @Help()
    public async help(@Ctx() ctx: IBotContext): Promise<void> {
        await ctx.reply("Here's some documentation");
    }

    @Command("info")
    public async info(@Ctx() ctx: IBotContext): Promise<void> {
        const data: AxiosResponse<UserAssetsResponse> = await this.binanceService.fetchAccountInfo();
        console.log(data.data)
        await ctx.reply("Success");
    }
}