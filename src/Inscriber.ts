/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/14/2020
 * @description    :  This is Inscriber. Inscriber is NPM Logging Package
 * that is fully customizable.
 * @since          :  11/21/2020
 * @license
 * Copyright 2020 Cody Spratford. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file in the root directory of this source tree.
 *========================================================================**/

/**======================
 *    IMPORTS
 *========================**/
import { ErrorClass, InfoClass, DebugClass, WarnClass } from "./classes/exports";
import { LogMethod } from "./classes/Log";
import { Config } from "./global";
import { InscriberConfig } from "./InscriberConfig";
/**======================
 *    END OF IMPORTS
 *========================**/

/**========================================================================
 *                              Inscriber
 *  This is the main class of Inscriber. This handles all methods
 *  that the users will be using.
 *  TODO Add warn and debug methods.
 *========================================================================**/
export class Inscriber {
    /**========================================================================
     *             Defining Configurations for the First time.
     * @example <caption>Using Default settings for the first time.</caption>
     *
     * ```js
     * const inscriber = new Inscriber();
     * ```
     * @example <caption>Using Config Builder for the first time.</caption>
     *
     * ```js
     * const inscriber = new Inscriber(new InscriberConfigBuilder().build);
     * ```
     * NOTE : InscriberConfigBuilder will overwrite the current config file.
     *
     *========================================================================**/
    constructor(config?: Config) {
        if (config != undefined) {
            let _config = new InscriberConfig();
            _config.UseBuilder(config);
            _config.loadConfig();
        }
    }
    /**==============================================
     *
     *   @param content the error.
     *   @example <caption>String Error</caption>
     * inscriber.error("This is a error");
     *   @example <caption>Object Error</caption>
     * const error = { success: false, code: 404, errorType: "NOT_FOUND" };
     * inscriber.error(error);
     *   @example <caption>Error Constructor</caption>
     * inscriber.error(new Error("This is an error."));
     *   @example <caption>Type Error Constructor</caption>
     * inscriber.error(new TypeError("This is a type error."));
     *   @example <caption>Syntax Error</caption>
     * inscriber.error(new SyntaxError("This is a syntax error."));
     *   @example <caption>Eval Error</caption>
     * inscriber.error(new EvalError("This is a eval error."));
     *
     * NOTE Not all Errors are supported. I only added
     * the common JS errors, or Javascript only Errors.
     *
     * TODO Add Support for other error types.
     *=============================================**/
    error(content: any): void {
        new ErrorClass(
            new InscriberConfig().loadConfig(),
            content,
            require.main?.filename == undefined ? "" : require.main?.filename,
        );
    }
    /**==============================================
     *
     *   @param content the info.
     *   @example <caption>String Info</caption>
     *   inscriber.info("This is a info log");
     *   @example <caption>Object Info</caption>
     *   const info = {desc: "Something", name: "Name"};
     *   inscriber.info(info);
     *
     *=============================================**/
    info(content: any): void {
        new InfoClass(
            new InscriberConfig().loadConfig(),
            content,
            require.main?.filename == undefined ? "" : require.main?.filename,
        );
    }
    /**==============================================
     *
     *  @param content the debug.
     *  @example <caption>String Debug</caption>
     *
     * ```js
     * inscriber.debug("This is a debug log.");
     * ```
     * @example <caption>Object Debug</caption>
     *
     * ```js
     * const debug = {process: "something", next: () => dosomething()};
     * inscriber.debug(debug);
     * ```
     *=============================================**/
    debug(content: any): void {
        new DebugClass(
            new InscriberConfig().loadConfig(),
            content,
            require.main?.filename == undefined ? "" : require.main?.filename,
        );
    }
    /**==============================================
     *
     *  @param content the warn
     *  @example
     *
     * ```js
     * inscriber.warn("This is a warn log.");
     * ```
     *
     *  @example
     *
     * ```js
     * const warn = {warn: "Waring", reason: "Something"};
     * inscriber.warn(warn);
     * ```
     *=============================================**/
    warn(content: any): void {
        new WarnClass(
            new InscriberConfig().loadConfig(),
            content,
            require.main?.filename == undefined ? "" : require.main?.filename,
        );
    }

    log(content: any, type: string): void {
        new LogMethod(new InscriberConfig().loadConfig(), content, require.main?.filename ?? "", type);
    }
}
