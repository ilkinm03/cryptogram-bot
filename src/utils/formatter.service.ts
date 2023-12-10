import { UserAssetsResponse } from "@binance/connector";

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
}