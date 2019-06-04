/// <reference path="./osvcExtension.d.ts"/>

class TsStatusBar {

    appName: string;
    appVersion: string;
    appUrl: string;

    constructor(){
        this.appName = "Troubleshoot-Extension";
        this.appVersion = "1.0.0";
        this.appUrl = this.getAbsolutePath('../../View/index.html');        
    }

    getAbsolutePath = function(contentPage) {
        var base = window.location.href;
        var relative = contentPage;
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop();        
        for (var i = 0; i < parts.length; i++) {
            if (parts[i] == ".") continue;
            if (parts[i] == "..") stack.pop();
            else stack.push(parts[i]);
        }
        return stack.join("/");
    };

    createStatusBar() {
        const self = this;
        ORACLE_SERVICE_CLOUD.extension_loader.load(this.appName, this.appVersion).then(function(sdk) {
            sdk.registerUserInterfaceExtension(function(userInterfaceContext) {
                userInterfaceContext.getStatusBarContext().then(function(IStatusBarContext) {				
                    IStatusBarContext.getStatusBarItem("id").then(function(IStatusBarItem,) {
                        IStatusBarItem.setContentUrl(self.appUrl);
                        IStatusBarItem.setLabel(self.appName); 
                        IStatusBarItem.setVisible(true);
                        IStatusBarItem.setWidth('200');
                        IStatusBarItem.render();
                    });
                });
            });
        });
    }
}


let tsExtension = new TsStatusBar();
tsExtension.createStatusBar();
