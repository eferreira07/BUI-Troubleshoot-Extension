/// <reference path="./osvcExtension.d.ts"/>

import { TsLogger } from "./ts-logger";
import TsUtilities = require('./ts-utilities');

export class TsResults {
    
    tsLogger: TsLogger;

    constructor(tsLogger){        
        this.tsLogger = tsLogger;        
    }

    saveLocalBlob(){

        var tsFinalResult = {
            "osvcInfo": {
                'time': this.tsLogger.tsTimer, 
                'userProfile': this.tsLogger.osvcProfile,
                'osvcInterfaceName': this.tsLogger.osvcInterfaceName,
                'tsDate': this.tsLogger.tsDate,
                'tsNavigatorInfo': this.tsLogger.tsNavigatorInfo,
                'osvcUserLogin': this.tsLogger.osvcUserLogin,
                'osvcUserFirstName': this.tsLogger.osvcUserFirstName,
                'osvcUserLastName': this.tsLogger.osvcUserLastName,
                'debugLevel': this.tsLogger.tsDebugLevel,
                'performance': this.tsLogger.tsPerformance
            },
            "osvcWarn": this.tsLogger.tsConsoleWarn,
            "osvcError": this.tsLogger.tsConsoleError,
            "osvcDebug": this.tsLogger.tsConsoleDebug,
            "osvcLog": this.tsLogger.tsConsoleLog
        };
        sessionStorage.removeItem('tsFinalResult');
        sessionStorage.setItem('tsFinalResult', JSON.stringify(tsFinalResult));
    }

}