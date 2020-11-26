/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/15/2020
 * @description    :  This is the Warn Class. This handles all of the warn
 * type's methods.
 * @since          :  11/15/2020
 *========================================================================**/

import chalk = require("chalk");
import moment = require("moment");
import { Config } from "..";
import { FileSystem } from "../FileSystem";
import { ILog } from "../interfaces/exports";

export class WarnClass implements ILog {
    constructor(config: Config, content: string | object, source: string) {
        if (config["write-logs"]) {
            if (config["one-file"]) {
                if (typeof config["log-paths"].info !== "string")
                    throw new TypeError(
                        `Type Provided for Info's Log Path is not a string. The type must be a string.`,
                    );
                this.write(content.toString(), source, config["log-paths"].info, config);
            } else {
                if (typeof config["log-paths"].warn !== "string")
                    throw new TypeError(
                        `Type Provided for Error's Log Path is not a string. The type must be a string.`,
                    );
                this.write(content.toString(), source, config["log-paths"].warn, config);
            }
        }
        this.print(content.toString(), source, config);
    }

    write(content: string, source: string, filepath: string, config: Config): void {
        let message = this.formatString(config, source, content);
        new FileSystem(config, `${moment().format("YYYY_MM_D")}.log`, message, "WARN").write();
    }
    print(content: string, source: string, config: Config): void {
        let message = this.formatString(config, source, content);

        console.log(this.formatColors(config, message));
    }
    formatColors(config: Config, content: string) {
        let color = config["log-colors"].warn;
        if (color.background.startsWith("#")) {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgHex(color.background)(content);
        } else {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgKeyword(color.background)(content);
        }
    }
    formatString(config: Config, source: string, content: string): string {
        let str = config["log-patterns"].warn;
        str = str.replace("<time>", moment().format(config["time-pattern"]));
        str = str.replace("<source>", source);
        str = str.replace("<type>", "WARN");
        str = str.replace("<message>", content);

        return str;
    }
}
