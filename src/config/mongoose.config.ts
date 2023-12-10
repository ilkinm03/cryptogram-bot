import {
    MongooseModuleOptions,
    MongooseOptionsFactory
} from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import { Inject } from "@nestjs/common";

export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(@Inject(ConfigService) private readonly configService: ConfigService) {
    }

    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: this.configService.getOrThrow<string>("MONGODB_URI"),
            appName: "cryptogram",
            dbName: "cryptogram",
            auth: {
                username: this.configService.getOrThrow<string>("MONGO_INITDB_ROOT_USERNAME"),
                password: this.configService.getOrThrow<string>("MONGO_INITDB_ROOT_PASSWORD"),
            }
        };
    }
}