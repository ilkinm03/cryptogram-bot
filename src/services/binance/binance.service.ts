import { Inject, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Spot, UserAssetsResponse } from "@binance/connector";
import { IBinanceService } from "./binance.interface";

@Injectable()
export class BinanceService implements IBinanceService {
    constructor(@Inject("BinanceClient") private readonly binanceClient: Spot) {}

    async fetchWalletInfo(): Promise<AxiosResponse<UserAssetsResponse[]>> {
        const response: AxiosResponse<UserAssetsResponse[]> = await this.binanceClient.userAsset();
        console.log(response);
        return response;
    }
}