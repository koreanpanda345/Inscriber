/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  ANCHOR Test Case #3 - InscriberConfigBuilder
 * @since          :  11/15/2020
 *========================================================================**/
import { Inscriber, InscriberConfigBuilder } from "../../src";
test("Testing Config builder", () => {
    const inscriber = new Inscriber(
        new InscriberConfigBuilder()
            .writeFile(true)
            .logPatterns({
                error: "(<time>) => [<source>] : <message>",
            })
            .build(),
    );
    inscriber.error("Should automatically make the logs.");
});
