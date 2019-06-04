/// <reference path="./osvcExtension.d.ts"/>

export class TsLogger {

    osvcInterfaceName: string;
    osvcUserId: number;
    osvcProfile: string;
    osvcUserDisplayName: string;
    osvcUserFirstName: string;
    osvcUserLastName: string;
    osvcUserLogin: string;
    tsTimer: string;
    tsConsoleWarn: [];
    tsConsoleError: [];
    tsConsoleLog: [];
    tsConsoleDebug: [];
    tsDate = new Date().toLocaleString();
    tsNavigatorInfo: string;
    tsDebugLevel: number;
    tsPerformance: boolean;

    constructor(){
        this.osvcInterfaceName = "";
        this.osvcUserId = 0;
        this.osvcProfile = "";
        this.tsTimer = "00:00:00";
        this.tsConsoleWarn = [];
        this.tsConsoleError = [];
        this.tsConsoleLog = [];
        this.tsConsoleDebug = [];
        this.tsNavigatorInfo = "";
        this.osvcUserFirstName = "";
        this.osvcUserLastName = "";
        this.osvcUserDisplayName = "";
        this.osvcUserLogin = "";
        this.tsDebugLevel = 0;
        this.tsPerformance = false;
    }


    setUserInfo(value){
        this.osvcUserFirstName = value[0];
        this.osvcUserLastName = value[1];
        this.osvcUserDisplayName = value[2];
        this.osvcUserLogin = value[3];
    }
}