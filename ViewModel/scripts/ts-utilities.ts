var appName = "Troubleshoot-Extension";
var appVersion = "1.0.0";
var appUrl = '../View/logresult.html';

import { TsLogger } from "./ts-logger";

export var getOSvCInterface = function(tsLogger: TsLogger){
    return new ORACLE_SERVICE_CLOUD.ExtensionPromise((resolve, reject) => {
        ORACLE_SERVICE_CLOUD.extension_loader.load("Global Extension", "1").then(function(extensionProvider){
            extensionProvider.getGlobalContext().then(function(globalContext) {                
                tsLogger.osvcUserId = globalContext.getAccountId();
                tsLogger.osvcInterfaceName = globalContext.getInterfaceName();
                tsLogger.osvcProfile = globalContext.getProfileName();
                resolve('success');
            });
        });
      });    
}

export var MyModalWindow = function(){
    ORACLE_SERVICE_CLOUD.extension_loader.load(appName , appVersion).then(function(extensionProvider){
            extensionProvider.registerUserInterfaceExtension(function(IUserInterfaceContext){
                    IUserInterfaceContext.getModalWindowContext().then(function(IModalWindowContext){
                            var modalWindow = IModalWindowContext.createModalWindow();
                            modalWindow.setTitle('Troubleshooting Data');
                            modalWindow.setContentUrl(appUrl);
                            modalWindow.setHeight('500px');
			                modalWindow.setWidth('900px');
                            modalWindow.render();
                            });
                    });
            });
}

let myAuthentication = function(){
    return new ORACLE_SERVICE_CLOUD.ExtensionPromise((resolve, reject) => {
        ORACLE_SERVICE_CLOUD.extension_loader.load(appName,appVersion).then(function(extensionProvider){
            extensionProvider.getGlobalContext().then(function(globalContext){
                var _urlrest = globalContext.getInterfaceServiceUrl("REST");
                var _accountId = globalContext.getAccountId();
                globalContext.getSessionToken().then(
                    function(sessionToken){
                        resolve({'sessionToken': sessionToken,'restEndPoint': _urlrest, 'accountId': _accountId});
                });
            });
        });
    });
}

export var myROQLQuery = function(param){
    return new ORACLE_SERVICE_CLOUD.ExtensionPromise((resolve, reject) => {
        var xhr = new XMLHttpRequest();

        myAuthentication().then(function(result){

            xhr.open("GET", result['restEndPoint'] + "/connect/latest/queryResults/?query=" + param, true);
            xhr.setRequestHeader("Authorization", "Session " + result['sessionToken']);
            xhr.setRequestHeader("OSvC-CREST-Application-Context", "UtilitiesExtension");
            xhr.onload = function(e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var obj = JSON.parse(xhr.responseText);                                                                         
                        resolve(obj);
                    } else {
                        reject('myROQLQuery from Utilities Library has failed');
                    }
                  }
            }
            xhr.onerror = function (e) {
                console.error(xhr.statusText);
              };
            xhr.send();
        });

    });
}


export var download = function(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}