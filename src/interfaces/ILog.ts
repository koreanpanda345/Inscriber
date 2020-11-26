/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/14/2020
 * @description    :  This is the ILog interface. this provides structure for
 * me to use when making the log methods.
 * @since          :  11/14/2020
 *========================================================================**/

import { Config } from "../global";

export interface ILog {
    write(content: string, source: string, filepath: string, config: Config): void;
    print(content: string, source: string, config: Config): void;
    formatColors(config: Config, content: string): any;
    formatString(config: Config, source: string, content: string): string;
}
