define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsDownloadFile = (function () {
        function TsDownloadFile(tsLogger) {
            this.tsLogger = tsLogger;
        }
        TsDownloadFile.prototype.download = function (filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        };
        TsDownloadFile.prototype.createFile = function () {
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
                this.tsLogger.tsConsoleLog.forEach(function (value) {
                    consoleLog = consoleLog + value + '\n';
                });
            }
            else {
                consoleLog = consoleLog + 'No data was captured.' + '\n';
            }
            var filename = "TroubleshootData_" + this.tsLogger.tsDate + ".txt";
            var text = basic + consoleLog;
            this.download(filename, text);
            return true;
        };
        return TsDownloadFile;
    }());
    exports.TsDownloadFile = TsDownloadFile;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtZG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zY3JpcHRzL3RzLWRvd25sb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBO1FBSUksd0JBQVksUUFBUTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDO1FBRUQsaUNBQVEsR0FBUixVQUFTLFFBQVEsRUFBRSxJQUFJO1lBQ25CLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsZ0NBQWdDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRixPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUUzQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbkMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWhCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFHSCxtQ0FBVSxHQUFWO1lBQ0ksSUFBSSxLQUFLLEdBQUcsc0NBQXNDO2tCQUNoRCxxQkFBcUI7a0JBQ3JCLHNDQUFzQztrQkFDdEMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtrQkFDakMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztrQkFDdEMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZTtrQkFDL0Msb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUI7a0JBQ3RELGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtrQkFDOUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2tCQUM5QyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVk7a0JBQzlDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtrQkFDdkQsSUFBSSxDQUFDO1lBRVAsSUFBSSxVQUFVLEdBQUcsb0NBQW9DO2tCQUNuRCxlQUFlO2tCQUNmLHNDQUFzQyxDQUFDO1lBRXpDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVMsS0FBSztvQkFDL0MsVUFBVSxHQUFHLFVBQVUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFLO2dCQUFFLFVBQVUsR0FBRyxVQUFVLEdBQUcsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO2FBQUU7WUFHbkUsSUFBSSxRQUFRLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ25FLElBQUksSUFBSSxHQUFJLEtBQUssR0FBRyxVQUFVLENBQUM7WUFFL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBR1AscUJBQUM7SUFBRCxDQUFDLEFBdkRELElBdURDO0lBdkRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vb3N2Y0V4dGVuc2lvbi5kLnRzXCIvPlxuXG5pbXBvcnQgeyBUc0xvZ2dlciB9IGZyb20gXCIuL3RzLWxvZ2dlclwiO1xuXG5leHBvcnQgY2xhc3MgVHNEb3dubG9hZEZpbGUge1xuXG4gICAgdHNMb2dnZXI6IFRzTG9nZ2VyO1xuXG4gICAgY29uc3RydWN0b3IodHNMb2dnZXIpeyAgICAgICAgXG4gICAgICAgIHRoaXMudHNMb2dnZXIgPSB0c0xvZ2dlcjsgICAgICAgIFxuICAgIH1cblxuICAgIGRvd25sb2FkKGZpbGVuYW1lLCB0ZXh0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZW5hbWUpO1xuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICBlbGVtZW50LmNsaWNrKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cblxuXG4gICAgY3JlYXRlRmlsZSgpe1xuICAgICAgICB2YXIgYmFzaWMgPSAnXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionXG4gICAgICAgICsgJ1xcbkJhc2ljIEluZm9ybWF0aW9uJ1xuICAgICAgICArICdcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbidcbiAgICAgICAgKyAnXFxuRGF0ZTogJyArIHRoaXMudHNMb2dnZXIudHNEYXRlXG4gICAgICAgICsgJ1xcbkR1cmF0aW9uOiAnICsgdGhpcy50c0xvZ2dlci50c1RpbWVyXG4gICAgICAgICsgJ1xcbk5hdmlnYXRvcjogJyArIHRoaXMudHNMb2dnZXIudHNOYXZpZ2F0b3JJbmZvXG4gICAgICAgICsgJ1xcbk9TdkMgSW50ZXJmYWNlOiAnICsgdGhpcy50c0xvZ2dlci5vc3ZjSW50ZXJmYWNlTmFtZVxuICAgICAgICArICdcXG5Vc2VyIExvZ2luOiAnICsgdGhpcy50c0xvZ2dlci5vc3ZjVXNlckxvZ2luXG4gICAgICAgICsgJ1xcblVzZXIgUHJvZmlsZTogJyArIHRoaXMudHNMb2dnZXIub3N2Y1Byb2ZpbGVcbiAgICAgICAgKyAnXFxuRGVidWcgTGV2ZWw6ICcgKyB0aGlzLnRzTG9nZ2VyLnRzRGVidWdMZXZlbFxuICAgICAgICArICdcXG5QZXJmb3JtYW5jZSBNb25pdG9yOiAnICsgdGhpcy50c0xvZ2dlci50c1BlcmZvcm1hbmNlXG4gICAgICAgICsgJ1xcbic7XG5cbiAgICAgICAgdmFyIGNvbnNvbGVMb2cgPSAnXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionXG4gICAgICAgICsgJ1xcbkNvbnNvbGUgTG9nJ1xuICAgICAgICArICdcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbic7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy50c0xvZ2dlci50c0NvbnNvbGVMb2cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50c0xvZ2dlci50c0NvbnNvbGVMb2cuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICAgIGNvbnNvbGVMb2cgPSBjb25zb2xlTG9nICsgdmFsdWUgKyAnXFxuJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2UgeyBjb25zb2xlTG9nID0gY29uc29sZUxvZyArICdObyBkYXRhIHdhcyBjYXB0dXJlZC4nICsgJ1xcbic7IH1cblxuICAgICAgXG4gICAgICAgIHZhciBmaWxlbmFtZSA9IFwiVHJvdWJsZXNob290RGF0YV9cIiArIHRoaXMudHNMb2dnZXIudHNEYXRlICsgXCIudHh0XCI7ICAgICAgICAgICAgXG4gICAgICAgIHZhciB0ZXh0ID0gIGJhc2ljICsgY29uc29sZUxvZztcblxuICAgICAgICB0aGlzLmRvd25sb2FkKGZpbGVuYW1lLCB0ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cblxufSJdfQ==