/// <reference path="./osvcExtension.d.ts"/>

import { TsLogger } from "./ts-logger";
import TsUtilities = require('./ts-utilities');
import TsDownloadFile = require('./ts-download');

export class TsResults {
    
    tsLogger: TsLogger;

    constructor(tsLogger){        
        this.tsLogger = tsLogger;        
    }

    saveLocalBlob(){
        sessionStorage.removeItem('tsFinalResult');
        var self = this;
        ORACLE_SERVICE_CLOUD.extension_loader.load("Global Extension", "1").then(function(extensionProvider: IExtensionProvider){
            extensionProvider.getGlobalContext().then(function(globalContext: IExtensionGlobalContext) {
		        globalContext.registerAction('actionName', (param: any) => {
                    return self.tsLogger;                    
			    });
		    });
	    });                                
    }

}