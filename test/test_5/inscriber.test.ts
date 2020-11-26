/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/21/2020
 * @description    :  This is a test witht the one file configuration.
 *========================================================================**/

/**=======================
 *     IMPORTS
 *========================**/
import { Inscriber, InscriberConfigBuilder } from "../../src";

test("One File Configuration", () => {
    const inscriber = new Inscriber(new InscriberConfigBuilder().oneFile(true).writeFile().build());

    inscriber.debug("Testing");
    inscriber.warn("This should write these logs to one file.");
    inscriber.error("testing");
    inscriber.info("hopefully.");
});
