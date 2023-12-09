import { Module } from '@nestjs/common';
import { TelegrafModule } from "nestjs-telegraf";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { CommandsModule } from "./commands/commands.module";

@Module({
    imports: [
        CommandsModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TelegrafModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                token: configService.getOrThrow<string>("BOT_TOKEN"),
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [],
})
export class BotModule {
}
