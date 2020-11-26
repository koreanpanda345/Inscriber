/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/21/2020
 * @description    :  This is a builder for custom loggers.
 * @since          :  11/21/2020
 *========================================================================**/

import { CustomLogConfig } from "../global";
/**========================================================================
 *                             Custom Log Builder
 *  @summary Builds the Custom Log Configuration for you.
 *  @example
 *
 * ```js
 *  const config = new CustomLogBuilder()
 *      .setName("Panda")
 *      .setAliases(["bamboo"])
 *      .setColor({text: "green"})
 *      .build();
 * ```
 *  
 *========================================================================**/
export class CustomLogBuilder {
    private _config: CustomLogConfig;
    constructor() {
        this._config = {
            name: "",
            aliases: [],
            path: "",
            color: { text: "", background: "" },
            pattern: "",
        };
    }
    /**==============================================
     *                
     *  @param name - The name you would like the log to be called.
     *  
     *=============================================**/
    setName(name: string): CustomLogBuilder {
        this._config.name = name;
        return this;
    }
    /**==============================================
     *                
     *  @param aliases - The aliases to be used for this log.
     *  
     *=============================================**/
    setAliases(aliases: string[] = []): CustomLogBuilder {
        this._config.aliases = aliases;
        return this;
    }
    /**==============================================
     *                
     *  @param path - The path that the logs should be written to.
     *  
     *=============================================**/
    setPath(path: string = `./Logs/${this._config.name}`): CustomLogBuilder {
        this._config.path = path;
        return this;
    }
    /**==============================================
     *                
     *  @param pattern - The pattern that the log should use when writing logs.
     *  
     *=============================================**/
    setPattern(pattern: string = "(<time>)\t[type]\t<message>"): CustomLogBuilder {
        this._config.pattern = pattern;
        return this;
    }
    /**==============================================
     *                
     *  @param color - what colors should the log use when priting the log out.
     * 
     *=============================================**/
    setColor(color: { text: string; background: string } = {text: "white", background: "black"}): CustomLogBuilder {
        this._config.color = color;
        return this;
    }
    /**==============================================
     *                
     *  Builds the Custom Log Config.
     *  
     *=============================================**/
    build(): CustomLogConfig {
        return this._config;
    }
}
