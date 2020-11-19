/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  This is the Debug Class. This handles all debug type's
 * methods
 *========================================================================**/

import chalk = require("chalk");
import moment = require("moment");
import { Config } from "..";
import { FileSystem } from "../FileSystem";
import { ILog } from "../interfaces/exports";

export class DebugClass implements ILog {
    constructor(config: Config, content: string | object, source: string) {
        if (config["write-logs"]) {
            if (config["one-file"]) {
                if (typeof config["log-paths"].info !== "string")
                    throw new TypeError(
                        `Type Provided for Info's Log Path is not a string. The type must be a string.`,
                    );
                this.write(content.toString(), source, config["log-paths"].info, config);
            } else {
                if (typeof config["log-paths"].debug !== "string")
                    throw new TypeError(
                        `Type Provided for Error's Log Path is not a string. The type must be a string.`,
                    );
                this.write(content.toString(), source, config["log-paths"].debug, config);
            }
        }
        this.print(content.toString(), source, config);
    }

    write(content: string, source: string, filepath: string, config: Config): void {
        let message = this.formatString(config, source, content);
        new FileSystem(config, `${moment().format("YYYY_MM_D")}.log`, message, "DEBUG").write();
    }
    print(content: string, source: string, config: Config): void {
        let message = this.formatString(config, source, content);

        console.log(this.formatColors(config, message));
    }
    formatColors(config: Config, content: string) {
        let color = config["log-colors"].debug;
        if (color.background.startsWith("#")) {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgHex(color.background)(content);
        } else {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgKeyword(color.background)(content);
        }
    }
    formatString(config: Config, source: string, content: string): string {
        let str = config["log-patterns"].debug;
        str = str.replace("<time>", moment().format(config["time-pattern"]));
        str = str.replace("<source>", source);
        str = str.replace("<type>", "DEBUG");
        str = str.replace("<message>", content);

        return str;
    }
}
