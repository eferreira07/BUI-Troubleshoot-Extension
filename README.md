# BUI-Troubleshoot-Extension
The “Troubleshoot Extension Sample Code” was created to automatically capture information, such as OSvC Basic Information, and Web Console Log, Error, Warn, and Debug messages in one fell swoop instead of requiring agents to install or use different tools outside of Oracle Service Cloud. All that agents need to do is push the "start" button (located in the status bar) and push the “stop” when the agents have completed all steps to reproduce the error.

## Quick summary to guide you through the main files.

###ts-extension.ts
main file responsible to create the HTML elements and invoke the start, stop and timer functions.

###ts-logger.ts
an object for the log capturing

###ts-results.ts
this file is responsible to read the log object and create a local session storage.

###ts-statusbar.ts
The status bar extension is created from this file. The HTML elements used by this status bar is created by ts-extension and bound on index.html

###ts-ticker.ts
This file is responsible to create the stopwatcher.

###ts-utilities.ts
Compiling common functions that could be used in different classes.

###ts-createContent.js
responsible to read the local session storage and bind into HTML elements created in the modal window.
