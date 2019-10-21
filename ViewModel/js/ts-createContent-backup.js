require(['knockout',
  'ojs/ojcore',
  'jquery',
  'ojs/ojarraydataprovider',
  'ojs/ojknockout',
  'ojs/ojtable',
  'ojs/ojvalidation-datetime',
  'ojs/ojvalidation-number', 
  'ojs/ojcollapsible',
  'ojs/ojaccordion', 
  'ojs/ojinputtext', 
  'ojs/ojlabel',
  'ojs/ojformlayout',
  'ojs/ojbutton',
  'ojs/ojlistview',
  'ojs/ojmessages'
], function(ko, oj, $, ArrayDataProvider) {
  'use strict';
    
    function DetailModel(logDataCollected){ 
      console.log(logDataCollected);
      const index = Object.keys(logDataCollected.result).length - 1;

      this.duration = ko.observable(logDataCollected.result[index].tsTimer);
      this.userProfile = ko.observable(logDataCollected.result[index].osvcProfile);
      this.osvcInterfaceName = ko.observable(logDataCollected.result[index].osvcInterfaceName);
      this.tsDate = ko.observable(logDataCollected.result[index].tsDate);
      this.tsNavigatorInfo = ko.observable(logDataCollected.result[index].tsNavigatorInfo);
      this.osvcUserLogin = ko.observable(logDataCollected.result[index].osvcUserLogin);
      this.debugLevel = ko.observable(logDataCollected.result[index].tsDebugLevel);
      this.performance = ko.observable(logDataCollected.result[index].tsPerformance);

      this.disabledValue = ko.observableArray();
      this.disableControls = ko.computed(function() {
            return this.disabledValue()[0];
          }.bind(this));

          const self = this;      
      
          self.dataConsoleLog = ko.observableArray();                    
          self.dataConsoleLog(logDataCollected.result[index].tsConsoleInfo);
      
          self.consoleLog = new ArrayDataProvider(
            self.dataConsoleLog, {
              keyAttributes: 'name'
            }
          );

          self.dataConsoleDebug = ko.observableArray();                    
          self.dataConsoleDebug(logDataCollected.result[index].tsConsoleDebug);
      
          self.consoleDebug = new ArrayDataProvider(
            self.dataConsoleDebug, {
              keyAttributes: 'name'
            }
          );


          self.dataConsoleWarn = ko.observableArray();                    
          self.dataConsoleWarn(logDataCollected.result[index].tsConsoleWarn);
      
          self.consoleWarn = new ArrayDataProvider(
            self.dataConsoleWarn, {
              keyAttributes: 'name'
            }
          );

          self.dataConsoleError = ko.observableArray();                    
          self.dataConsoleError(logDataCollected.result[index].tsConsoleError);
      
          self.consoleError = new ArrayDataProvider(
            self.dataConsoleError, {
              keyAttributes: 'name'
            }
          ); 

          function download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
          }

          self.buttonClick = function(){
            var agentAdditionalInfo = '********************************'
            + '\nAgent Additional Information'
            + '\n********************************\n'
            + document.getElementById('agentAddInfo').value;
            
            var basic = '\n\n********************************'
            + '\nBasic Information'
            + '\n********************************\n'
            + '\nDate: ' + document.getElementById("tsDate").value
            + '\nDuration: ' + document.getElementById("tsDurantion").value
            + '\nNavigator: ' + document.getElementById("tsNavigator").value
            + '\nOSvC Interface: ' + document.getElementById("osvcInterfaceName").value
            + '\nUser Login: ' + document.getElementById("osvcUserLogin").value
            + '\nUser Profile: ' + document.getElementById("userProfile").value
            + '\nDebug Level: ' + document.getElementById("debugLevel").value
            + '\nPerformance Monitor: ' + document.getElementById("performance").value
            + '\n';
 
            var consoleLog = '\n********************************'
            + '\nConsole Log'
            + '\n********************************\n';
            
            if (tsFinalResul.osvcLog.length > 0) {
              tsFinalResul.osvcLog.forEach(function(value){
                  consoleLog = consoleLog + value.log + '\n';
              });
            }else { consoleLog = consoleLog + 'No data was captured.' + '\n'; }
 
            var consoleDebug = '\n********************************'
            + '\nConsole Debug'
            + '\n********************************\n';
                            
            if (tsFinalResul.osvcDebug.length > 0) {
              tsFinalResul.osvcDebug.forEach(function(value){
                consoleDebug = consoleDebug + value.log + '\n';
              });
            }else { consoleDebug = consoleDebug + 'No data was captured.' + '\n'; }
 
            var consoleWarn = '\n********************************'
            + '\nConsole Warn'
            + '\n********************************\n';
             
            if (tsFinalResul.osvcWarn.length > 0) {
              tsFinalResul.osvcWarn.forEach(function(value){
                consoleWarn = consoleWarn + value.log + '\n';
              });
            }else { consoleWarn = consoleWarn + 'No data was captured.' + '\n'; }

            var consoleError = '\n********************************'
            + '\nConsole Error'
            + '\n********************************\n';
            
            if (tsFinalResul.osvcError.length > 0) {
              tsFinalResul.osvcError.forEach(function(value){
                consoleError = consoleError + value.log + '\n';
              });
            }else { consoleError = consoleError + 'No data was captured.' + '\n'; }
          
            var filename = "TroubleshootData_" + tsFinalResul.osvcInfo.tsDate + ".txt";            
            var text = agentAdditionalInfo + basic + consoleLog + consoleDebug + consoleWarn + consoleError;

            download(filename, text);
            return true;
          }
    }

    function LogData(){
      ORACLE_SERVICE_CLOUD.extension_loader.load("Global Extension", "1").then(function(extensionProvider) {          
        extensionProvider.getGlobalContext().then(function(globalContext) {
          var param = {value: 1};          
          globalContext.invokeAction('actionName', param).then(function(result) {
            var logData = result;            
            ko.applyBindings(new DetailModel(logData), document.getElementById('tsContent'));            
          }).catch(function(error) {
            // Perform some logic on error.
          });
        });
      });
    }

    LogData();
    //ko.applyBindings(new DetailModel(), document.getElementById('tsContent'));
  });