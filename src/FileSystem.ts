/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreapanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  This is the File System. This handles all the Log File's
 * Methods
 * @since 11/15/2020
 *========================================================================**/
import { Config } from "./global";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import moment = require("moment");
import { InscriberSystem } from "./InscriberSystem";

export class FileSystem {
    private _filename: string;
    private _content: string;
    private _config: Config;
    private _type: "ERROR" | "DEBUG" | "INFO" | "WARN";
    constructor(config: Config, filename: string, content: string, type: "ERROR" | "DEBUG" | "INFO" | "WARN") {
        this._filename = filename;
        this._content = content;
        this._config = config;
        this._type = type;
    }

    private checkIfPathExist() {
        switch (this._type) {
            case "ERROR":
                if (existsSync(`${this._config["log-paths"].error}`)) return true;
                return false;
            case "INFO":
                if (existsSync(`${this._config["log-paths"].info}`)) return true;
                return false;
            case "DEBUG":
                if (existsSync(`${this._config["log-paths"].debug}`)) return true;
                return false;
            case "WARN":
                if (existsSync(`${this._config["log-paths"].warn}`)) return true;
                return false;
            default:
                throw new TypeError(`${typeof this._type} is not a valid type.`);
        }
    }

    private checkIfFileExist() {
        if (this.checkIfPathExist()) {
            switch (this._type) {
                case "ERROR":
                    if (existsSync(`${this._config["log-paths"].error}/${this._filename}`)) return true;
                    return false;
                case "INFO":
                    if (existsSync(`${this._config["log-paths"].info}/${this._filename}`)) return true;
                    return false;
                case "DEBUG":
                    if (existsSync(`${this._config["log-paths"].debug}/${this._filename}`)) return true;
                    return false;
                case "WARN":
                    if (existsSync(`${this._config["log-paths"].warn}/${this._filename}`)) return true;
                    return false;
                default:
                    throw new TypeError(`${typeof this._type} is not a valid type.`);
            }
        } else {
            switch (this._type.toUpperCase()) {
                case "ERROR":
                    let _path = "";
                    for (let dir of this._config["log-paths"].error.split("/")) {
                        _path += dir;
                        if (!existsSync(_path)) mkdirSync(_path);
                        _path += "/";
                    }
                    if (existsSync(`${this._config["log-paths"].error}/${this._filename}`)) return true;
                    return false;

                case "INFO":
                    let __path = "";
                    for (let dir of this._config["log-paths"].info.split("/")) {
                        __path += dir;
                        if (!existsSync(__path)) mkdirSync(__path);
                        __path += "/";
                    }
                    if (existsSync(`${this._config["log-paths"].info}/${this._filename}`)) return true;
                    return false;
                case "DEBUG":
                    let ___path = "";
                    for (let dir of this._config["log-paths"].debug.split("/")) {
                        ___path += dir;
                        if (!existsSync(___path)) mkdirSync(___path);
                        ___path += "/";
                    }
                    if (existsSync(`${this._config["log-paths"].debug}/${this._filename}`)) return true;
                    return false;

                case "WARN":
                    let ____path = "";
                    for (let dir of this._config["log-paths"].warn.split("/")) {
                        ____path += dir;
                        if (!existsSync(____path)) mkdirSync(____path);
                        ____path += "/";
                    }
                    if (existsSync(`${this._config["log-paths"].warn}/${this._filename}`)) return true;
                    return false;
                default:
                    throw new TypeError(`${typeof this._type} is not a valid type.`);
            }
        }
    }

    public write() {
        if (this.checkIfFileExist()) {
            switch (this._type) {
                case "ERROR":
                    let data = readFileSync(`${this._config["log-paths"].error}/${this._filename}`, {
                        encoding: "utf-8",
                    });
                    data += "\n" + this._content;
                    writeFileSync(`${this._config["log-paths"].error}/${this._filename}`, data, { flag: "w" });
                    break;
                case "INFO":
                    let _data = readFileSync(`${this._config["log-paths"].info}/${this._filename}`, {
                        encoding: "utf-8",
                    });
                    _data += "\n" + this._content;
                    writeFileSync(`${this._config["log-paths"].info}/${this._filename}`, _data, { flag: "w" });
                    break;
                case "DEBUG":
                    let __data = readFileSync(`${this._config["log-paths"].debug}/${this._filename}`, {
                        encoding: "utf-8",
                    });
                    __data += "\n" + this._content;
                    writeFileSync(`${this._config["log-paths"].debug}/${this._filename}`, __data, { flag: "w" });
                    break;
                case "WARN":
                    let ___data = readFileSync(`${this._config["log-paths"].warn}/${this._filename}`, {
                        encoding: "utf-8",
                    });
                    ___data += "\n" + this._content;
                    writeFileSync(`${this._config["log-paths"].warn}/${this._filename}`, ___data, { flag: "w" });
                    break;
            }
        } else {
            switch (this._type) {
                case "ERROR":
                    let _message =
                        new InscriberSystem().getAsciiName() +
                        "                                          -------------------------------------------" +
                        `\n-----------------------------------------|${this._type.toUpperCase()} LOG FILE OF ${moment().format()}|------------------------------------------------` +
                        "\n                                          -------------------------------------------" +
                        `\n${this._content}`;
                    writeFileSync(`${this._config["log-paths"].error}/${this._filename}`, _message, {
                        flag: "w",
                    });
                    break;
                case "INFO":
                    let __message =
                        new InscriberSystem().getAsciiName() +
                        "                                          -------------------------------------------" +
                        `\n-----------------------------------------|${this._type.toUpperCase()} LOG FILE OF ${moment().format()}|------------------------------------------------` +
                        "\n                                          -------------------------------------------" +
                        `\n${this._content}`;
                    writeFileSync(`${this._config["log-paths"].info}/${this._filename}`, __message, {
                        flag: "w",
                    });
                    break;
                case "DEBUG":
                    let ___message =
                        new InscriberSystem().getAsciiName() +
                        "                                          -------------------------------------------" +
                        `\n-----------------------------------------|${this._type.toUpperCase()} LOG FILE OF ${moment().format()}|------------------------------------------------` +
                        "\n                                          -------------------------------------------" +
                        `\n${this._content}`;
                    writeFileSync(`${this._config["log-paths"].debug}/${this._filename}`, ___message, {
                        flag: "w",
                    });
                    break;
                case "WARN":
                    let ____message =
                        new InscriberSystem().getAsciiName() +
                        "                                          -------------------------------------------" +
                        `\n-----------------------------------------|${this._type.toUpperCase()} LOG FILE OF ${moment().format()}|------------------------------------------------` +
                        "\n                                          -------------------------------------------" +
                        `\n${this._content}`;
                    writeFileSync(`${this._config["log-paths"].warn}/${this._filename}`, ____message, {
                        flag: "w",
                    });
                    break;
            }
        }
    }
}
