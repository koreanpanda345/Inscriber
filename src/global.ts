/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreapanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  This is the Global file. This holds all Global Types.
 * @since          :  11/14/2020
 *========================================================================**/

// ANCHOR [id=config] Global Config File.
// TYPE Config
export type Config = {
    "overwrite-config": boolean; // DEFINE To determine if the config should be overwrite or not.
    "write-logs": boolean; // DEFINE determines if Inscriber will write log files.
    "one-file": boolean; // DEFINE determines if Inscriber will write the logs into one file per day.
    "log-paths": {
        // DEFINE sets the location where Inscriber will write the logs to.
        error: string; // DEFINE Error Log Path
        info: string; // DEFINE Info Log Path/One File Log Path
        debug: string; // DEFINE Debug Log Path
        warn: string; // DEFINE Warn Log Path
    };
    "log-patterns": {
        // DEFINE sets the log types patterns.
        error: string; // DEFINE Error pattern
        info: string; // DEFINE Info pattern
        debug: string; // DEFINE Debug pattern
        warn: string; // DEFINE Warn pattern
    };
    "log-colors": {
        // DEFINE sets the colors of the log types when being viewed in the console.
        error: {
            // DEFINE Error Log Colors.
            text: string; // DEFINE Foreground color
            background: string; // DEFINE Background color
        };
        info: {
            // DEFINE Info Log Colors.
            text: string; // DEFINE Foreground color
            background: string; // DEFINE Background color
        };
        debug: {
            // DEFINE Debug Log Colors.
            text: string; // DEFINE Foreground color
            background: string; // DEFINE Background color
        };
        warn: {
            // DEFINE Warn Log Colors.
            text: string; // DEFINE Foreground color
            background: string; // DEFINE Background color
        };
    };
    "time-pattern": string; // DEFINE sets the time pattern for the logs.
};
