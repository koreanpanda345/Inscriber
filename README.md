					   ____                 _ __
                      /  _/__  ___ ________(_) /  ___ ____
                     _/ // _ \(_-</ __/ __/ / _ \/ -_) __/
                    /___/_//_/___/\__/_/ /_/_.__/\__/_/
# What is Inscriber?
Inscriber is a NPM Logger Package. It provides full customization to the logger, as well being able to write logs.

# Why was it called Inscriber?
Because you should Subscribe to the github repo, and smash that star button. ~~JK~~ The reason is because one of my friends said "call it Inscriber". So yea thats the reason. I was tempted to call it Panda Logger, ngl.

# Who made Inscriber?
I did! me the panda of korea. My real name is Cody Spratford, but I made Inscriber.

# Why Should I use Inscriber over other logging packages?
Why shouldn't you use it? Inscriber is newer, and is focused on the users that use it. It was design to be customizable, because who likes being force to use something that has little customization to it? i know i don't.


# How do I use it?
```js
const Inscriber = require("@koreanpanda/inscriber");
const inscriber = new Inscriber();

inscriber.error(new Error("This is an error log"));
inscriber.error("This is also an error log");

inscriber.info("This is an info log");

const info = {message: "This is an Info log in a object.", success: true};
inscriber.info(info);

inscriber.debug("This is a debug log");
inscriber.warn("This is a warn log");

```

# How do I make it write Logs?
If you want to have the packge to write logs right away:
```js
const inscriber = new Inscriber(new InscriberConfigBuilder().writeLogs(true).build());
```
else when you first run your project with Inscriber, a config file called `inscriber.config.json` will be made. In this file there is a property called `write-logs`, change this to `true`, then run your project, and it should start writing logs.

# I found a Bug, where do I report it?
In the github repo's issues. I will try my best to response to you asap, and fix it.

# I have a suggestion, where do I put it?
In the github repo's issues. I will look at it, and see if it is need to have suggestion.

# I am having troubles trying to get it to work, where do I go to get help?
I don't have a discord for this, because that would be dumb to have, but in the github repo's issues is the best place, I asked that you try your best and not email me. I am pretty good at checking my repos, so I will see it. Plus Github will email if you make a issue in the repo, so i will still be notified if you need help. as well others will be able to help you if i am not able to.

# Why is there a lot of comments?
Because I like comments. ~~jk~~ Its because good documentation makes it easier for me, and for others to read it.

# Whats with some of these Comments?
I have a extentsion on VSCode that is called `Comment Anchors`, which is pretty nice. It anchors my comments like LINK, SECTION, TODO, FIXME, etc, and makes a shortcut for me to click on them, and be direct to that portion of a file. Its pretty handy to have when my code can be a mess, and long.