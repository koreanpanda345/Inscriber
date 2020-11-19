/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  ANCHOR Test Case # 3 - Writing Logs
 * @since          :  11/15/2020
 *========================================================================**/

import { Inscriber } from "../../src";

test("Writing Info Log to a specific location", () => {
    const inscriber = new Inscriber();
    inscriber.info("This should write a file to './LogTests/Test_3/info/**.log");
});

test("Writing Error Log to default location.", () => {
    const inscriber = new Inscriber();
    inscriber.error("This should write a file to './LogTests/Logs/error/**.log'");
});

test("Writing Debug Log to Default Location", () => {
    const inscriber = new Inscriber();
    inscriber.debug("This should write a file to './LogTests/Logs/debug'");
});

test("Write Warn Log to Default Location", () => {
    const inscriber = new Inscriber();
    inscriber.warn("This should write a file to './LogTests/Logs/warn'");
});
