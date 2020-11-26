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

    setName(name: string): CustomLogBuilder {
        this._config.name = name;
        return this;
    }

    setAliases(aliases: string[]): CustomLogBuilder {
        this._config.aliases = aliases;
        return this;
    }

    setPath(path: string): CustomLogBuilder {
        this._config.path = path;
        return this;
    }

    setPattern(pattern: string): CustomLogBuilder {
        this._config.pattern = pattern;
        return this;
    }
    setColor(color: { text: string; background: string }): CustomLogBuilder {
        this._config.color = color;
        return this;
    }
    build(): CustomLogConfig {
        return this._config;
    }
}
