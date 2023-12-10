import { Inject, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { MyTrade, Spot, UserAssetsResponse } from "@binance/connector";
import { IBinanceService } from "./binance.interface";

@Injectable()
export class BinanceService implements IBinanceService {
    constructor(@Inject("BinanceClient") private readonly binanceClient: Spot) {}

    async fetchWalletInfo(): Promise<AxiosResponse<UserAssetsResponse[]>> {
        return this.binanceClient.userAsset();
    }

    async fetchMyTrades(): Promise<AxiosResponse<MyTrade[]>> {
        return this.binanceClient.myTrades("ETHUSDT");
    }
}