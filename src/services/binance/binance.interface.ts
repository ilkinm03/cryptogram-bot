import { AxiosResponse } from "axios";
import { UserAssetsResponse } from "@binance/connector";

export interface IBinanceService {
    fetchWalletInfo(): Promise<AxiosResponse<UserAssetsResponse[]>>
}