const {Inscriber, InscriberConfigBuilder} = require("../../src");

const inscriber = new Inscriber(
	new InscriberConfigBuilder()
	.writeFile(true)
	.build()
);

test('Info Method', () =>
{
	inscriber.info("This is a info log.");
	const info = {message: "This is also a info log."};
	inscriber.info(info);
});

test('Error Method', () =>
{
	inscriber.error(new Error("This is a Error log."));
	const error = {message: "This is also a error log.", code: 500};
	inscriber.error(error);
	inscriber.error(new TypeError("This is a Type Error"));
	inscriber.error(new SyntaxError("This is a Syntax Error"));
	inscriber.error(new EvalError("This is a Eval Error"));
	inscriber.error("This is a error.");
});

test('Debug Method', () =>
{
	inscriber.debug("This is a debug log.");
	const debug = {message: "this is also a debug log."};
	inscriber.debug(debug);
});

test('Warn Method', () =>
{
	inscriber.warn("This is a warn log.");
	const warn = {message: "this is also a warn log."};
	inscriber.warn(warn);
});