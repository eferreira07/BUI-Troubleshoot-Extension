/// <reference path="./osvcExtension.d.ts"/>

import { TsLogger } from "./ts-logger";

export class TsDownloadFile {

    tsLogger: TsLogger;

    constructor(tsLogger){        
        this.tsLogger = tsLogger;        
    }

    download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      }


    createFile(){
        var basic = '\n\n********************************'
        + '\nBasic Information'
        + '\n********************************\n'
        + '\nDate: ' + this.tsLogger.tsDate
        + '\nDuration: ' + this.tsLogger.tsTimer
        + '\nNavigator: ' + this.tsLogger.tsNavigatorInfo
        + '\nOSvC Interface: ' + this.tsLogger.osvcInterfaceName
        + '\nUser Login: ' + this.tsLogger.osvcUserLogin
        + '\nUser Profile: ' + this.tsLogger.osvcProfile
        + '\nDebug Level: ' + this.tsLogger.tsDebugLevel
        + '\nPerformance Monitor: ' + this.tsLogger.tsPerformance
        + '\n';

        var consoleLog = '\n********************************'
        + '\nConsole Log'
        + '\n********************************\n';
        
        if (this.tsLogger.tsConsoleLog.length > 0) {
            this.tsLogger.tsConsoleLog.forEach(function(value){
              consoleLog = consoleLog + value + '\n';
          });
        }else { consoleLog = consoleLog + 'No data was captured.' + '\n'; }

      
        var filename = "TroubleshootData_" + this.tsLogger.tsDate + ".txt";            
        var text =  basic + consoleLog;

        this.download(filename, text);
        return true;
      }


}