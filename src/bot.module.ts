import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TelegrafModule } from "nestjs-telegraf";
import { CommandsModule } from "./commands/commands.module";
import { MongooseConfigService } from "./config/mongoose.config";
import validationSchema from "./config/validation.schema";

@Module({
    imports: [
        CommandsModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema,
        }),
        MongooseModule.forRootAsync({
            useClass: MongooseConfigService,
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
