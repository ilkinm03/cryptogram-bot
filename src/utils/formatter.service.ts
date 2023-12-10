import { MyTrade, UserAssetsResponse } from "@binance/connector";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FormatterService {
    public formatUserAssetsData(data: UserAssetsResponse[]): string {
        let formattedString = "";
        data.map(({ asset, free, locked, freeze, withdrawing }) => {
            formattedString += `- Asset: ${asset}\n`;
            formattedString += `\t\t- Free: ${free}\n`;
            formattedString += `\t\t- Locked: ${locked}\n`;
            formattedString += `\t\t- Freeze: ${freeze}\n`;
            formattedString += `\t\t- Withdrawing: ${withdrawing}\n\n`;
        });
        return formattedString;
    }

    public formatMyTradesData(data: MyTrade[]): string {
        let formattedString = '';
        data.map((trade: MyTrade, index: number) => {
            formattedString += `- Trade ${index + 1}:\n`;
            formattedString += `\t\t- Symbol: ${trade.symbol}\n`;
            formattedString += `\t\t- ID: ${trade.id}\n`;
            formattedString += `\t\t- Order ID: ${trade.orderId}\n`;
            formattedString += `\t\t- Order List ID: ${trade.orderListId}\n`;
            formattedString += `\t\t- Price: ${trade.price}\n`;
            formattedString += `\t\t- Quantity: ${trade.qty}\n`;
            formattedString += `\t\t- Quote Quantity: ${trade.quoteQty}\n`;
            formattedString += `\t\t- Commission: ${trade.commission}\n`;
            formattedString += `\t\t- Commission Asset: ${trade.commissionAsset}\n`;
            formattedString += `\t\t- Time: ${trade.time}\n`;
            formattedString += `\t\t- Buyer: ${trade.isBuyer}\n`;
            formattedString += `\t\t- Maker: ${trade.isMaker}\n`;
            formattedString += `\t\t- Best Match: ${trade.isBestMatch}\n`;
            formattedString += "=".repeat(30) + "\n\n"
        });
        return formattedString;
    }
}