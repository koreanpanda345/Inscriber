/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  ANCHOR Test Case #1 - Testing Log default Log Methods.
 * @since          :  11/15/2020
 *========================================================================**/
import { Inscriber } from "../../src";

test("Error Class", () => {
    const inscriber = new Inscriber();
    inscriber.error("Testing");
});

test("Info Class", () => {
    const inscriber = new Inscriber();
    inscriber.info("Testing");
});

test("Debug Class", () => {
    const inscriber = new Inscriber();
    inscriber.debug("Testing");
});

test("Warn Class", () => {
    const inscriber = new Inscriber();
    inscriber.debug("Testing");
});
