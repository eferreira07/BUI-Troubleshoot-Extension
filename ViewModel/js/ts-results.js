define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsResults = (function () {
        function TsResults(tsLogger) {
            this.tsLogger = tsLogger;
        }
        TsResults.prototype.saveLocalBlob = function () {
            sessionStorage.removeItem('tsFinalResult');
            var self = this;
            ORACLE_SERVICE_CLOUD.extension_loader.load("Global Extension", "1").then(function (extensionProvider) {
                extensionProvider.getGlobalContext().then(function (globalContext) {
                    globalContext.registerAction('actionName', function (param) {
                        return self.tsLogger;
                    });
                });
            });
        };
        return TsResults;
    }());
    exports.TsResults = TsResults;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NjcmlwdHMvdHMtcmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFNQTtRQUlJLG1CQUFZLFFBQVE7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDN0IsQ0FBQztRQUVELGlDQUFhLEdBQWI7WUFDSSxjQUFjLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQixvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsaUJBQXFDO2dCQUNuSCxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLGFBQXNDO29CQUMzRixhQUFhLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxVQUFDLEtBQVU7d0JBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFTCxnQkFBQztJQUFELENBQUMsQUFwQkQsSUFvQkM7SUFwQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9vc3ZjRXh0ZW5zaW9uLmQudHNcIi8+XG5cbmltcG9ydCB7IFRzTG9nZ2VyIH0gZnJvbSBcIi4vdHMtbG9nZ2VyXCI7XG5pbXBvcnQgVHNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3RzLXV0aWxpdGllcycpO1xuaW1wb3J0IFRzRG93bmxvYWRGaWxlID0gcmVxdWlyZSgnLi90cy1kb3dubG9hZCcpO1xuXG5leHBvcnQgY2xhc3MgVHNSZXN1bHRzIHtcbiAgICBcbiAgICB0c0xvZ2dlcjogVHNMb2dnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0c0xvZ2dlcil7ICAgICAgICBcbiAgICAgICAgdGhpcy50c0xvZ2dlciA9IHRzTG9nZ2VyOyAgICAgICAgXG4gICAgfVxuXG4gICAgc2F2ZUxvY2FsQmxvYigpe1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd0c0ZpbmFsUmVzdWx0Jyk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgT1JBQ0xFX1NFUlZJQ0VfQ0xPVUQuZXh0ZW5zaW9uX2xvYWRlci5sb2FkKFwiR2xvYmFsIEV4dGVuc2lvblwiLCBcIjFcIikudGhlbihmdW5jdGlvbihleHRlbnNpb25Qcm92aWRlcjogSUV4dGVuc2lvblByb3ZpZGVyKXtcbiAgICAgICAgICAgIGV4dGVuc2lvblByb3ZpZGVyLmdldEdsb2JhbENvbnRleHQoKS50aGVuKGZ1bmN0aW9uKGdsb2JhbENvbnRleHQ6IElFeHRlbnNpb25HbG9iYWxDb250ZXh0KSB7XG5cdFx0ICAgICAgICBnbG9iYWxDb250ZXh0LnJlZ2lzdGVyQWN0aW9uKCdhY3Rpb25OYW1lJywgKHBhcmFtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudHNMb2dnZXI7ICAgICAgICAgICAgICAgICAgICBcblx0XHRcdCAgICB9KTtcblx0XHQgICAgfSk7XG5cdCAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxufSJdfQ==