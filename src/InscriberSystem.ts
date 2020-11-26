/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :  https://github.com/koreanpanda345/Inscriber
 * @createdOn      :  11/14/2020
 * @description    :  This is the System file. This is not for public use.
 * This is just for welcome message, and other stuff to inform the user about
 * something.
 * @since          :  11/14/2020
 *========================================================================**/
import chalk = require("chalk");

/**========================================================================
 *                             ASCII ART
 *                       ____                 _ __
 *                     /  _/__  ___ ________(_) /  ___ ____
 *                    _/ // _ \(_-</ __/ __/ / _ \/ -_) __/
 *                   /___/_//_/___/\__/_/ /_/_.__/\__/_/
 *
 *  This is the Ascii Art for the Title. This will be the logo till one is
 * made.
 *
 *========================================================================**/

// We are going to use the ascii art and use it for the title.
export class InscriberSystem {
    private asciiName: string;
    private thankYouMessage: string;
    private message: String;
    constructor() {
        let asciiName = "                                                ____                 _ __          \n";
        asciiName += "                                               /  _/__  ___ ________(_) /  ___ ____\n";
        asciiName += "                                              _/ // _ \\(_-</ __/ __/ / _ \\/ -_) __/\n";
        asciiName += "                                             /___/_//_/___/\\__/_/ /_/_.__/\\__/_/   \n";
        this.asciiName = asciiName;
        // This is the thank you message, thank the user for using Inscriber.
        this.thankYouMessage =
            "                 Thank you for using Inscriber. Your config file will be made now. Enjoy using Inscriber ^-^";
        // This is just any other thing to add.
        this.message =
            "                 If you like this package, and want to help support it, then please share this with others";
        this.message += "\n                 This is the remake of Log-System. It works just like it, just better.";
    }
    // Makes the message.
    public makeMessage() {
        return chalk.greenBright(this.asciiName + "\n" + this.thankYouMessage + "\n" + this.message);
    }

    public getAsciiName(): string {
        return this.asciiName;
    }
}
