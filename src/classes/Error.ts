/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/14/2020
 * @description    :  This is the Error Class. This handles all the error type's
 * methods.
 * @since          :  11/15/2020
 *========================================================================**/
import chalk = require("chalk");
import moment = require("moment");
import { Config } from "../global";
import { ILog } from "../interfaces/exports";
import { FileSystem } from "../FileSystem";

/**========================================================================
 *                             ERROR CLASS
 *  - TODO Add Javascript Error Support.
 *  - TODO Add More support to other Error Types.
 *========================================================================**/
export class ErrorClass implements ILog {
    constructor(
        config: Config,
        content: string | object | number | boolean | symbol | Error | TypeError | EvalError | RangeError | SyntaxError,
        source: string,
    ) {
        if (config["write-logs"]) {
            if (config["one-file"]) {
                if (typeof config["log-paths"].info !== "string")
                    throw new TypeError(
                        `Type Provided for Info's Log Path is not a string. The type must be a string.`,
                    );

                this.write(
                    content instanceof Error
                        ? `${content.name}\n${content.message}\n${content.stack}`
                        : content instanceof TypeError
                        ? `${content.name}\n${content.message}\n${content.stack}`
                        : content instanceof EvalError
                        ? `${content.name}\n${content.message}\n${content.stack}`
                        : content instanceof RangeError
                        ? `${content.name}\n${content.message}\n${content.stack}`
                        : content instanceof SyntaxError
                        ? `${content.name}\n ${content.message}\n${content.stack}`
                        : content.toString(),
                    source,
                    config["log-paths"].info,
                    config,
                );
            } else {
                if (typeof config["log-paths"].error !== "string")
                    throw new TypeError(
                        `Type Provided for Error's Log Path is not a string. The type must be a string.`,
                    );
                this.write(
                    content instanceof Error
                        ? `${content.name}\n${content.message}\n${content.stack}`
                        : content instanceof TypeError
                        ? `${content.name}\n${content.message}\n${content.stack}`
                        : content instanceof EvalError
                        ? `${content.name}\n${content.message}\n${content.stack}`
                        : content instanceof RangeError
                        ? `${content.name}\n${content.message}\n${content.stack}`
                        : content instanceof SyntaxError
                        ? `${content.name}\n ${content.message}\n${content.stack}`
                        : content.toString(),
                    source,
                    config["log-paths"].error,
                    config,
                );
            }
        }

        this.print(
            content instanceof Error
                ? `${content.name}\n${content.message}\n${content.stack}`
                : content instanceof TypeError
                ? `${content.name}\n${content.message}\n${content.stack}`
                : content instanceof EvalError
                ? `${content.name}\n${content.message}\n${content.stack}`
                : content instanceof RangeError
                ? `${content.name}\n${content.message}\n${content.stack}`
                : content instanceof SyntaxError
                ? `${content.name}\n ${content.message}\n${content.stack}`
                : content.toString(),
            source,
            config,
        );
    }

    write(content: string, source: string, filepath: string, config: Config): void {
        let message = this.formatString(config, source, content);
        new FileSystem(config, `${moment().format("YYYY_MM_D")}.log`, message, "ERROR").write();
    }
    print(content: string, source: string, config: Config): void {
        let message = this.formatString(config, source, content);

        console.log(this.formatColors(config, message));
    }

    formatString(config: Config, source: string, content: string): string {
        let str = config["log-patterns"].error;
        str = str.replace("<time>", moment().format(config["time-pattern"]));
        str = str.replace("<source>", source);
        str = str.replace("<type>", "ERROR");
        str = str.replace("<message>", content);

        return str;
    }

    formatColors(config: Config, content: string): string {
        let color = config["log-colors"].error;
        if (color.background.startsWith("#")) {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgHex(color.background)(content);
        } else {
            if (color.text.startsWith("#")) return chalk.hex(color.text).bgKeyword(color.background)(content);
            else return chalk.keyword(color.text).bgKeyword(color.background)(content);
        }
    }
}
