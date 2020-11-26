/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/21/2020
 * @description    :  This is the log method which will allow the users to make their own log methods.
 * @since 		   :  11/21/2020
 *========================================================================**/

import chalk = require("chalk");
import moment = require("moment");
import { Config } from "..";
import { FileSystem } from "../FileSystem";
import { CustomLogConfig } from "../global";

export class LogMethod {
    constructor(config: Config, content: string | object, source: string, type: string) {
        if (!config["custom-logs"].find((x) => x.name == type)) throw new Error("Couldn't find that log.");

        if (config["write-logs"]) {
            if (config["one-file"]) {
                if (typeof config["log-paths"].info !== "string")
                    throw new TypeError(
                        `Type Provided for Info's Log Path is not a string. The type must be a string.`,
                    );
                this.write(content.toString(), source, config["log-paths"].info, type, config);
            } else {
                if (typeof config["custom-logs"].find((x) => x.name == type)?.path !== "string")
                    throw new TypeError(
                        `Type Provided for Error's Log Path is not a string. The type must be a string.`,
                    );
                this.write(
                    content.toString(),
                    source,
                    config["custom-logs"].find((x) => x.name == type)?.path ?? "",
                    type,
                    config,
                );
            }
        }
        this.print(content.toString(), source, type, config);
    }

    write(content: string, source: string, filepath: string, type: string, config: Config): void {
        if (config["custom-logs"].find((x) => x.name == type) == undefined)
            throw new Error(`I couldn't find a custom log type with the name of ${type}`);
        let log = config["custom-logs"].find((x) => x.name == type);
        if (log?.path != undefined && typeof log.path !== "string")
            throw new TypeError(
                `The custom log path of ${log.name} is not a string. Found ${typeof log.path} instead.`,
            );
        let message = this.formatString(source, content, log?.pattern ?? "", type, config["time-pattern"]);
        new FileSystem(config, `${moment().format("YYYY_MM_D")}.log`, message, "LOG", type).write();
    }
    print(content: string, source: string, type: string, config: Config): void {
        if (config["custom-logs"].find((x) => x.name == type) == undefined)
            throw new Error(`I couldn't find a custom log type with the name of ${type}`);
        let log = config["custom-logs"].find((x) => x.name == type);
        if (log?.pattern != undefined && typeof log.pattern != "string")
            throw new TypeError(
                `The custom log patter of ${log.name} is not a string. Found ${typeof log.pattern} instead.`,
            );
        let pattern = log?.pattern;
        let str = this.formatString(source, content, pattern ?? "", type, config["time-pattern"]);
        if (log != undefined) console.log(this.formatColors(log, str));
    }
    formatColors(config: CustomLogConfig, content: string) {
        let color = config.color;

        if (color.background.startsWith("#")) {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgHex(color.background)(content);
        } else {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgKeyword(color.background)(content);
        }
    }
    formatString(source: string, content: string, pattern: string, type: string, timePattern: string): string {
        pattern = pattern.replace("<time>", moment().format(timePattern));
        pattern = pattern.replace("<source>", source);
        pattern = pattern.replace("<type>", type.toUpperCase());
        pattern = pattern.replace("<message>", content);
        return pattern;
    }
}
