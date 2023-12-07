import { Ctx, Help, Start, Update } from "nestjs-telegraf";
import { IBotContext } from "../context/context.interface";

@Update()
export class BaseCommand {
    constructor() {}

    @Start()
    public async start(@Ctx() ctx: IBotContext): Promise<void> {
        await ctx.reply("Hellooo!");
    }

    @Help()
    public async help(@Ctx() ctx: IBotContext): Promise<void> {
        await ctx.reply("Here's some documentation");
    }
}