/// <reference path="./osvcExtension.d.ts"/>

import { TsTicker } from "./ts-ticker";
import { TsLogger } from "./ts-logger";
import { TsResults } from "./ts-results";
import TsUtilities = require('./ts-utilities');

class TsExtension {
    
    isRunning = false;
    warnsIndex: number = 0;
    
    constructor(){
        const self = this;
        self.initialize();         
    }

    initialize() {
        const self = this;
        let startBtn = document.createElement('button');
        let stopBtn = document.createElement('button');
        let timer = document.createElement('time'); 
        const tsTicker = new TsTicker();
        const tsLogger = new TsLogger();

        const osvcTsConfig = "select value from configurations where lookupName = 'CUSTOM_CFG_TS'";
        
        TsUtilities.myROQLQuery(osvcTsConfig).then(function(result){
            result["items"].forEach(function(rows){
                rows["rows"].forEach(function(value){ 
                    var obj = JSON.parse(value);
                    tsLogger.tsDebugLevel = obj.debugLevel;
                    tsLogger.tsPerformance = obj.performance;                    
                })
            });                     
        });       
                
        // When the start button is clicked it is turned disbaled and gray. At this time the stop button turned to red and anabled.
        startBtn.textContent = " Start";
        startBtn.style.color = "green";
        startBtn.className = "btn fa fa-play-circle";
        startBtn.onclick = function() {
            self.isRunning = true;
            
            startBtn.style.color = "gray";
            startBtn.style.opacity = "0.3";
            startBtn.style.cursor = "not-allowed";
            startBtn.disabled = true;

            stopBtn.style.color = "red";
            stopBtn.style.opacity = "1";
            stopBtn.style.cursor = "pointer";
            stopBtn.disabled = false;            

            // call start process to capture log;            
            self.startCapture(self.isRunning, tsTicker, tsLogger); 
        
        }
        
        // When the stop button is clicked it is turned disbaled and gray. At this time the start button turned to green and anabled.
        stopBtn.textContent = " Stop";
        stopBtn.style.color = "gray";
        stopBtn.style.opacity = "0.3"
        stopBtn.style.cursor = "not-allowed";
        stopBtn.className = "btn fa fa-stop-circle";
        stopBtn.onclick = function() {
            
            stopBtn.style.color = "gray";
            stopBtn.style.opacity = "0.3";
            stopBtn.style.cursor = "not-allowed";
            stopBtn.disabled = true;
            
            startBtn.style.color = "green";
            startBtn.style.opacity = "1";
            startBtn.style.cursor = "pointer";
            startBtn.disabled = false;
                    
            // call stop process to show log capture results.
            self.stopCapture(self.isRunning, tsTicker ,tsLogger);            
        }

        timer.textContent = "00:00:00";
        timer.className = "time";
        timer.style.cursor = "not-allowed";
        timer.style.padding = "4px";
        timer.style.fontFamily = "auto";

        //Define Status Bar HTML Elements.
        document.getElementById("startBtn").appendChild(startBtn);
        document.getElementById("stopBtn").appendChild(stopBtn);                
        document.getElementById("timer").appendChild(timer);
                        
    }

    startCapture(isRunning: boolean, tsTicker: TsTicker, tsLogger: TsLogger){
        
        if(isRunning == true){

            //Start stop-watcher.
            tsTicker.startTimer();

            TsUtilities.getOSvCInterface(tsLogger);
            
            const osvcQuery = 'select name.first, name.last, displayName, login from accounts where id = '+ tsLogger.osvcUserId;
        
            TsUtilities.myROQLQuery(osvcQuery).then(function(result){
                result["items"].forEach(function(rows){
                    rows["rows"].forEach(function(value){
                        tsLogger.setUserInfo(value);                        
                    })
                });                     
            });

            if(tsLogger.tsPerformance) {window.parent.ORACLE_SERVICE_CLOUD.Configuration.isPerformanceMonitoringEnabled=true;}
            if(tsLogger.tsDebugLevel > 0) {window.parent.ORACLE_SERVICE_CLOUD.Configuration.logLevel = 5;}
                        
            navigator.sayswho= (function(){
                var ua= navigator.userAgent, tem, 
                M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if(/trident/i.test(M[1])){
                    tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                    return 'IE '+(tem[1] || '');
                }
                if(M[1]=== 'Chrome'){
                    tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
                    if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
                }
                M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
                if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
                return M.join(' ');
            })();

            tsLogger.tsNavigatorInfo = navigator.sayswho;
            
            //log
            console.defaultLog = console.log.bind(window.parent.console);
            console.logs = [];
            window.parent.console.log = function(){
                // default &  console.log()
                console.defaultLog(console, arguments);
                // new & array data
                //console.logs.push(Array.from(arguments));
                var message = "";
                Array.from(arguments).forEach(function(value){
                    message = message + '\n'+ value;
                    
                })

                tsLogger.tsConsoleLog.push({'id': tsLogger.tsConsoleLog.length + 1 , 'log': message});
              }

            //error
            console.defaultError = console.error.bind(window.parent.console);
            console.errors = [];
            window.parent.console.error = function(){
                // default &  console.error()
                console.defaultError.apply(console, arguments);
                // new & array data
                //console.errors.push(Array.from(arguments));
                var message = "";
                Array.from(arguments).forEach(function(value){
                    message = message + '\n'+ value;
                    
                })

                tsLogger.tsConsoleError.push({'id': tsLogger.tsConsoleError.length + 1 , 'log': message});
            }

            //warn
            console.defaultWarn = console.warn.bind(window.parent.console);            
            console.warns = [];            
            window.parent.console.warn = function(){
                // default &  console.warn()
                console.defaultWarn.apply(console, arguments);
                // new & array data
                //console.warns.push(Array.from(arguments));
                var message = "";
                Array.from(arguments).forEach(function(value){
                    message = message + '\n'+ value;
                    
                })

                tsLogger.tsConsoleWarn.push({'id': tsLogger.tsConsoleWarn.length + 1 , 'log': message});
            }
            
            //debug
            console.defaultDebug = console.debug.bind(window.parent.console);            
            console.debugs = [];
            window.parent.console.debug = function(){
                // default &  console.debug()
                console.defaultDebug.apply(console, arguments);
                // new & array data
                //console.debugs.push(Array.from(arguments));
                var message = "";
                Array.from(arguments).forEach(function(value){
                    message = message + '\n'+ value;
                    
                })

                tsLogger.tsConsoleDebug.push({'id': tsLogger.tsConsoleDebug.length + 1 , 'log': message});
            } 

        }    
    }

    stopCapture(isRunning: boolean, tsTicker: TsTicker, tsLogger: TsLogger){

        if(isRunning == true){
            
            isRunning = false;

            window.parent.ORACLE_SERVICE_CLOUD.Configuration.logLevel = 0;
            window.parent.ORACLE_SERVICE_CLOUD.Configuration.isPerformanceMonitoringEnabled = false;

            //Stop stop_watcher
            tsTicker.stopTimer(tsLogger);

            //Create HTML to show capture results.
            const tsResults = new TsResults(tsLogger);            
            tsResults.saveLocalBlob();

            //Show Modal with capture results.
            TsUtilities.MyModalWindow();

            tsLogger.tsConsoleDebug = [];
            tsLogger.tsConsoleWarn = [];
            tsLogger.tsConsoleError = [];
            tsLogger.tsConsoleLog = [];
        }
    }

}

new TsExtension();
