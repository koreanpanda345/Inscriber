/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/14/2020
 * @description    :  This is the Info Class. This handles all the info type's
 * methods.
 * @since          :  11/15/2020
 *========================================================================**/

import chalk = require("chalk");
import moment = require("moment");
import { FileSystem } from "../FileSystem";
import { Config } from "../global";
import { ILog } from "../interfaces/exports";
export class InfoClass implements ILog {
    constructor(config: Config, content: string | object, source: string) {
        if (config["write-logs"]) {
            if (config["one-file"]) {
                if (typeof config["log-paths"].info !== "string")
                    throw new TypeError(
                        `Type Provided for Info's Log Path is not a string. The type must be a string.`,
                    );
                this.write(content.toString(), source, config["log-paths"].info, config);
            } else {
                if (typeof config["log-paths"].info !== "string")
                    throw new TypeError(
                        `Type Provided for Error's Log Path is not a string. The type must be a string.`,
                    );
                this.write(content.toString(), source, config["log-paths"].info, config);
            }
        }
        this.print(content.toString(), source, config);
    }
    /**==============================================
     *  @summary Writes to the warn logs to the log files.
     *  @param content - The warn log
     *  @param source - the source of the warn log.
     *  @param filepath - the file location for the log.
     *  @param config - The configuration of Inscriber.
     *=============================================**/
    write(content: string, source: string, filepath: string, config: Config): void {
        let message = this.formatString(config, source, content);
        new FileSystem(config, `${moment().format("YYYY_MM_D")}.log`, message, "INFO").write();
    }
    /**==============================================
     *  @summary Prints the warn log to the console.
     *  @param content - the warn log.
     *  @param source - The source of the warn log.
     *  @param config - the configuration of Inscriber.
     *=============================================**/
    print(content: string, source: string, config: Config): void {
        let message = this.formatString(config, source, content);

        console.log(this.formatColors(config, message));
    }
    formatColors(config: Config, content: string) {
        let color = config["log-colors"].info;
        if (color.background.startsWith("#")) {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgHex(color.background)(content);
        } else {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgKeyword(color.background)(content);
        }
    }
    formatString(config: Config, source: string, content: string): string {
        let str = config["log-patterns"].info;
        str = str.replace("<time>", moment().format(config["time-pattern"]));
        str = str.replace("<source>", source);
        str = str.replace("<type>", "INFO");
        str = str.replace("<message>", content);
        return str;
    }
}
