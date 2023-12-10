declare module "@binance/connector" {
    import { AxiosResponse } from "axios";
    export type SnapshotType = "SPOT" | "MARGIN" | "FUTURES";

    export interface Balance {
        asset: string;
        free: string;
        locked: string;
    }

    export interface SnapshotData {
        balances: Balance[];
        totalAssetOFBtc: string;
    }

    export interface Snapshot {
        data: SnapshotData,
        type: string;
        updateTime: number;
    }

    export interface AccountSnapshotOptions {
        limit?: number;
        startTime?: number;
        endTime?: number;
        recvWindow?: number;
        timestamp?: number;
    }

    export interface AccountSnapshotResponse {
        code: number;
        msg: string;
        snapshotVos: Snapshot[];
    }

    export interface AssetDetailOptions {
        timestamp?: number;
        recvWindow?: number;
    }

    export interface Network {
        addressRegex: RegExp | string;
        coin: string;
        depositDesc?: string
        depositEnable: boolean;
        isDefault: boolean;
        memoRegex: RegExp | string;
        minConfirm: number;
        name: string;
        network: string;
        resetAddressStatus: boolean;
        specialTips: string;
        unLockConfirm: number;
        withdrawDesc?: string;
        withdrawEnable: boolean;
        withdrawFee: string;
        withdrawIntegerMultiple: string;
        withdrawMax: string;
        withdrawMin: string;
        sameAddress: boolean;
        estimatedArrivalTime: number;
        busy: boolean;
    }

    export interface AssetDetailResponse {
        coin: string;
        depositAllEnable: boolean;
        free: string;
        freeze: string;
        ipoable: string;
        ipoing: string;
        isLegalMoney: boolean;
        locked: string;
        name: string;
        networkList: Network[];
        storage: string;
        trading: boolean;
        withdrawAllEnable: boolean;
        withdrawing: string;
    }

    export interface UserAssetDetails {
        asset?: string;
        needBtcValuation?: boolean;
        recvWindow?: number;
        timestamp?: number;
    }

    export interface UserAssetsResponse {
        asset: string;
        free: string;
        locked: string;
        freeze: string;
        withdrawing: string;
        ipoable: string;
        btcValuation: string;
    }

    export interface Trade {
        id: number;
        price: string;
        qty: string;
        quoteQty: string;
        time: number;
        isBestMatch: boolean;
    }

    export interface TradeResponse extends Trade {
        isBuyerMaker: boolean;
    }

    export interface MyTrade extends Trade {
        symbol: string;
        orderId: number;
        orderListId: number;
        commission: string;
        commissionAsset: string;
        isBuyer: boolean;
        isMaker: boolean;
    }

    export interface MyTradesOptions {
        orderId?: number;
        startTime?: number;
        endTime?: number;
        fromId?: number;
        limit?: number;
        recvWindow?: number;
        timestamp?: number;
    }

    export class Spot {
        constructor(apiKey: string, apiSecret: string): Spot;

        async accountSnapshot(type: SnapshotType, options?: AccountSnapshotOptions = { limit: 5 }): Promise<AxiosResponse<AccountSnapshotResponse>>;

        async assetDetail(options: AssetDetailOptions = {}): Promise<AxiosResponse<AssetDetailResponse>>;

        async userAsset(options: UserAssetDetails = {}): Promise<AxiosRespones<UserAssetsResponse[]>>;

        async trades(symbol: string, options: { limit: number } = { limit: 500 }): Promise<AxiosResponse<TradeResponse[]>>;

        async myTrades(symbol: string, options: MyTradesOptions = { limit: 500 }): Promise<AxiosResponse<MyTrade[]>>
    }
}