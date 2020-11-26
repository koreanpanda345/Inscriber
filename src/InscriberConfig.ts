/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/14/2020
 * @description    :  This is the Config file of Inscriber. This handles
 * loading, creating, and adding configurations to "inscriber.config.json".
 * @since          :  11/21/2020
 *========================================================================**/

import { existsSync, readFileSync, writeFileSync, readdirSync } from "fs";
import { Config } from "./global";
import { InscriberSystem } from "./InscriberSystem";

export class InscriberConfig {
    private _test_cases = ["test", "test_1", "test_2", "test_3", "test_4", "test_5", "test_6"];
    // SECTION DefaultConfig
    /**======================================================================
     *                              DEFAULT CONFIG
     *                      - STUB Default Configurations
     *                      - LINK src\global.ts#config
     *
     *                              DESIGN NOTES
     * NOTE : one-file option might now work. I haven't worked to much on it.
     *                  TODO Work more on the on-file option.
     *======================================================================**/
    private _defaultConfig: Config = {
        "overwrite-config": false,
        "write-logs": false, // If true, Inscriber will write log files.
        "one-file": false, // If true, Inscriber will merge all the logs into one file.
        "log-paths": {
            // The path from the root folder of where to store the files in.
            // If one-file is true, then it will use info's log path.
            error: this.CheckPaths("error"),
            info: this.CheckPaths("info"),
            debug: this.CheckPaths("debug"),
            warn: this.CheckPaths("warn"),
        },
        "log-patterns": {
            // Log Patterns.
            error: "(<time>)\t[<type>]\t<message>",
            info: "(<time>)\t[<type>]\t<message>",
            debug: "(<time>)\t[<type>]\t<message>",
            warn: "(<time>)\t[<type>]\t<message>",
        },
        "log-colors": {
            // Log Colors.
            error: {
                text: "black",
                background: "red",
            },
            info: {
                text: "black",
                background: "white",
            },
            debug: {
                text: "black",
                background: "green",
            },
            warn: {
                text: "black",
                background: "yellow",
            },
        },
        "custom-logs": [],
        "time-pattern": "MMMM DD YYYY, h:mm:ss a", // Time formatting.
    };
    // !SECTION
    /**=======================
     *  END OF DEFAULT CONFIG
     *========================**/
    // SECTION Constants
    /**=======================
     *        CONSTANTS
     *========================**/
    public config = {};
    public _config = this._defaultConfig;
    private _filename: string = "inscriber.config.json";
    /**=======================
     *      END OF CONSTANTS
     *========================**/
    // !SECTION
    // SECTION Methods
    /**
     * @summary Checks if the root folder as a config file.
     * @method CheckIfConfigExist
     */
    private checkIfConfigExist(): boolean {
        if (existsSync(`${require.main?.path}/${this._filename}`)) return true;
        return false;
    }

    private getConfig(): string {
        if (!this.checkIfConfigExist()) this.createConfig();
        return readFileSync(`${require.main?.path}/${this._filename}`, { encoding: "utf-8" });
    }

    private createConfig(): void {
        let json = JSON.stringify(this._config, null, 2);
        writeFileSync(`${require.main?.path}/${this._filename}`, json, { flag: "w" });
        console.log(new InscriberSystem().makeMessage());
    }
    /**
     * @summary Loads the config into an object.
     * @method loadConfig
     * @returns {Config}
     */
    public loadConfig(): Config {
        return JSON.parse(this.getConfig());
    }

    private CheckPaths(type: string): string {
        let paths: string[] = [];
        if (require.main !== undefined) paths = require.main.path.split("\\");
        for (let path of paths) if (this._test_cases.includes(path)) return `./LogTests/Logs/${type}`;
        return `./Logs/${type}`;
    }

    public UseBuilder(config: Config) {
        this.config = config;
        if (config["overwrite-config"]) {
            if (!this.checkIfConfigExist()) {
                this._config = config;
                this.createConfig();
            } else {
                this.overwriteConfig();
            }
        }
    }
    private overwriteConfig() {
        var json = JSON.stringify(this.config, null, 2);
        writeFileSync(`${require.main?.path == undefined ? "./" : require.main.path}/inscriber.config.json`, json, {
            flag: "w",
        });
        console.log("Overwritten the config.");
    }
    // !SECTION
}
