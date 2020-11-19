/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  ANCHOR Test Case #2 - Error Throwing.
 * @since          :  11/15/2020
 *========================================================================**/
import { Inscriber } from "../../src";

const inscriber = new Inscriber();
test("String Error", () => {
    inscriber.error("This is a string.");
});

test("Object Error", () => {
    let error = {
        success: false,
        code: 404,
        errorType: "NOT_FOUND",
    };

    inscriber.error(error);
});

test("Error instance", () => {
    let error = new Error("This is an error.");
    inscriber.error(error);
});

test("Type Error", () => {
    let error = new TypeError("This is a type error.");
    inscriber.error(error);
});

test("Syntax Error", () => {
    let error = new SyntaxError("This is a syntax error.");
    inscriber.error(error);
});

test("Eval Error", () => {
    let error = new EvalError("This is a eval error.");
    inscriber.error(error);
});
