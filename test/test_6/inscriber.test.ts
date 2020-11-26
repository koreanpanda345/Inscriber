/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/21/2020
 * @description    :  This is a test for the custom log configuration.
 *========================================================================**/

/**=======================
 *     IMPORT
 *========================**/
import { Inscriber, InscriberConfigBuilder } from "../../src";
import { CustomLogBuilder } from "../../src/builders/CustomLogBuilder";
/**=======================
 *     END OF IMPORTS
 *========================**/
test("Custom log called jeff", () => {
    const inscriber = new Inscriber(
        new InscriberConfigBuilder()
            .addCustomLog(
                new CustomLogBuilder()
                    .setName("jeff")
                    .setPath("./LogTests/Logs/custom/jeff")
                    .setPattern("<time>\t[<type>]\t<message>")
                    .setColor({ text: "red", background: "white" })
                    .build(),
            )
            .addCustomLog(
                new CustomLogBuilder()
                    .setName("panda")
                    .setPath("./LogTests/Logs/custom/panda")
                    .setPattern("<time>\t[<type>]\t'nom'\t<message>")
                    .setColor({ text: "black", background: "white" })
                    .build(),
            )
            .writeFile(true)
            .build(),
    );
    inscriber.info("testing");
    inscriber.log("Testing jeff", "jeff");
    inscriber.log("Bamboo is good.", "panda");
});
