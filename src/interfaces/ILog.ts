import { Config } from "../global";

export interface ILog {
    write(content: string, source: string, filepath: string, config: Config): void;
    print(content: string, source: string, config: Config): void;
    formatColors(config: Config, content: string): any;
    formatString(config: Config, source: string, content: string): string;
}
