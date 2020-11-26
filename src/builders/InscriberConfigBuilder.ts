/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/14/2020
 * @description    :  This is the Config Builder. This Class can be used
 * to make the config to be applied when creating the config file.
 * @since          :  11/21/2020
 *========================================================================**/
/**=======================
 *     IMPORT
 *========================**/
import { Config, CustomLogConfig } from "../global";
import { InscriberConfig } from "../InscriberConfig";
import { CustomLogBuilder } from "./CustomLogBuilder";
/**=======================
 *     END OF IMPORTS
 *========================**/

/**==============================================
 *             InscriberConfigBuilder
 *   @classdesc This is to build the config
 * to be used when making the config file.
 *
 *=============================================**/
export class InscriberConfigBuilder {
    /**=======================
     *     CONSTANTS
     *========================**/
    private config: Config;
    /**=======================
     *     END OF CONSTANT
     *========================**/

    /**==============================================
     *                CONSTRUCTOR
     *=============================================**/
    constructor() {
        this.config = new InscriberConfig()._config;
        this.config["overwrite-config"] = true;
    }

    /**==============================================
     *                END OF CONSTRUCTOR
     *=============================================**/
    // SECTION Time Pattern
    /**==============================================
     *                Time Pattern
     *  @summary Sets the time pattern that the log types should be using
     * for <time> property in the logs.
     *  @param pattern The time pattern.
     *=============================================**/
    public timePattern(pattern: string = "MMMM Do YYYY, h:mm:ss a"): InscriberConfigBuilder {
        this.config["time-pattern"] = pattern;
        return this;
    }
    // !SECTION Time Pattern
    // SECTION One File
    /**==============================================
     *                One File
     *  @summary Sets the one file option in the config
     * file. This will force all the log types to write
     * logs to one file, for that day.
     *
     *  @param on - Whether to be on or not. By Default
     * its off.
     *=============================================**/
    public oneFile(on: boolean = true): InscriberConfigBuilder {
        this.config["one-file"] = on;
        return this;
    }
    // !SECTION One File
    // SECTION Write File
    /**==============================================
     *                Write File
     *  @summary Sets the write file option in the config
     * file. This will make Inscriber to write logs
     * for each of the log types.
     *
     *  @param on - Whether to be on or not. By Default
     * its off.
     *=============================================**/
    public writeFile(on: boolean = true): InscriberConfigBuilder {
        this.config["write-logs"] = on;
        return this;
    }
    // !SECTION Write File
    // SECTION Log Patterns
    /**==============================================
     *                Log Patterns
     *  @summary Sets the log patterns option in the
     * config. This will set what the log types will
     * display when executed.
     *
     * @param patterns - The patterns for each of the log types.
     *=============================================**/
    public logPatterns({
        error = "(<time>) => [<source>]: <message>",
        info = "(<time>) => [<source>]: <message>",
        debug = "(<time>) => [<source>]: <message>",
        warn = "(<time>) => [<source>]: <message>",
    }): InscriberConfigBuilder {
        this.config["log-patterns"] = {
            error: error,
            info: info,
            debug: debug,
            warn: warn,
        };
        return this;
    }
    // !SECTION Log Patterns
    // SECTION Log Colors
    /**==============================================
     *                Log Colors
     *  @summary Sets the log colors option in the
     * config. This will change the colors of the log
     * types, when being displayed on in the console.
     *
     *  @param colors - The colors of the log types.
     *=============================================**/
    public logColors({
        error = {
            text: "black",
            background: "red",
        },
        info = {
            text: "black",
            background: "white",
        },
        debug = {
            text: "black",
            background: "green",
        },
        warn = {
            text: "black",
            background: "yellow",
        },
    }): InscriberConfigBuilder {
        this.config["log-colors"] = {
            error: error,
            info: info,
            debug: debug,
            warn: warn,
        };

        return this;
    }
    // !SECTION Log Colors
    // SECTION Log Paths
    /**==============================================
     *                Log Paths
     *  @summary This will set the log paths option
     * in the config file. This will direct all the
     * log files for the certain log type to that
     * location, unless the one file option is enabled,
     * then it will direct it to the info type's path.
     *
     *  @param paths - The paths of each of the log types.
     *
     *=============================================**/
    public logPaths({
        error = "./Logs/error",
        info = "./Logs/info",
        debug = "./Logs/debug",
        warn = "./Logs/warn",
    }): InscriberConfigBuilder {
        this.config["log-paths"] = {
            error: error,
            info: info,
            debug: debug,
            warn: warn,
        };
        return this;
    }

    addCustomLog(logConfig: CustomLogConfig): InscriberConfigBuilder {
        this.config["custom-logs"].push({
            name: logConfig.name,
            aliases: logConfig.aliases,
            path: logConfig.path,
            color: logConfig.color,
            pattern: logConfig.pattern,
        });
        return this;
    }

    // !SECTION Log Paths
    // SECTION Build
    /**========================================================================
     *                             Build
     *  @summary Builds the Config.
     *  @example <caption>How the builder works.</caption>
     *
     * ```js
     * new InscriberConfigBuilder.logPaths({error: "./src/Logs/errors"}).build();
     * ```
     * @returns {Config} - the config that will be used when creating the file.
     *========================================================================**/
    public build(): Config {
        return this.config;
    }
    // !SECTION Build
}
