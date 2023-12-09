import { Inject, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Spot, UserAssetsResponse } from "@binance/connector";

@Injectable()
export class BinanceService {
    constructor(@Inject("BinanceClient") private readonly binanceClient: Spot) {}

    async fetchAccountInfo(): Promise<AxiosResponse<UserAssetsResponse>> {
        const response: AxiosResponse<UserAssetsResponse> = await this.binanceClient.userAsset();
        console.log(response);
        return response;
    }
}