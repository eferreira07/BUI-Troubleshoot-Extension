define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsResults = (function () {
        function TsResults(tsLogger) {
            this.tsLogger = tsLogger;
        }
        TsResults.prototype.saveLocalBlob = function () {
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
        };
        return TsResults;
    }());
    exports.TsResults = TsResults;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NjcmlwdHMvdHMtcmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLQTtRQUlJLG1CQUFZLFFBQVE7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDN0IsQ0FBQztRQUVELGlDQUFhLEdBQWI7WUFFSSxJQUFJLGFBQWEsR0FBRztnQkFDaEIsVUFBVSxFQUFFO29CQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87b0JBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7b0JBQ3hDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCO29CQUNwRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUM5QixpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWU7b0JBQ2hELGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7b0JBQzVDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCO29CQUNwRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQjtvQkFDbEQsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWTtvQkFDeEMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtpQkFDN0M7Z0JBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtnQkFDdkMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYztnQkFDekMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYztnQkFDekMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWTthQUN4QyxDQUFDO1lBQ0YsY0FBYyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMzQyxjQUFjLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUVMLGdCQUFDO0lBQUQsQ0FBQyxBQWhDRCxJQWdDQztJQWhDWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL29zdmNFeHRlbnNpb24uZC50c1wiLz5cblxuaW1wb3J0IHsgVHNMb2dnZXIgfSBmcm9tIFwiLi90cy1sb2dnZXJcIjtcbmltcG9ydCBUc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdHMtdXRpbGl0aWVzJyk7XG5cbmV4cG9ydCBjbGFzcyBUc1Jlc3VsdHMge1xuICAgIFxuICAgIHRzTG9nZ2VyOiBUc0xvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKHRzTG9nZ2VyKXsgICAgICAgIFxuICAgICAgICB0aGlzLnRzTG9nZ2VyID0gdHNMb2dnZXI7ICAgICAgICBcbiAgICB9XG5cbiAgICBzYXZlTG9jYWxCbG9iKCl7XG5cbiAgICAgICAgdmFyIHRzRmluYWxSZXN1bHQgPSB7XG4gICAgICAgICAgICBcIm9zdmNJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICAndGltZSc6IHRoaXMudHNMb2dnZXIudHNUaW1lciwgXG4gICAgICAgICAgICAgICAgJ3VzZXJQcm9maWxlJzogdGhpcy50c0xvZ2dlci5vc3ZjUHJvZmlsZSxcbiAgICAgICAgICAgICAgICAnb3N2Y0ludGVyZmFjZU5hbWUnOiB0aGlzLnRzTG9nZ2VyLm9zdmNJbnRlcmZhY2VOYW1lLFxuICAgICAgICAgICAgICAgICd0c0RhdGUnOiB0aGlzLnRzTG9nZ2VyLnRzRGF0ZSxcbiAgICAgICAgICAgICAgICAndHNOYXZpZ2F0b3JJbmZvJzogdGhpcy50c0xvZ2dlci50c05hdmlnYXRvckluZm8sXG4gICAgICAgICAgICAgICAgJ29zdmNVc2VyTG9naW4nOiB0aGlzLnRzTG9nZ2VyLm9zdmNVc2VyTG9naW4sXG4gICAgICAgICAgICAgICAgJ29zdmNVc2VyRmlyc3ROYW1lJzogdGhpcy50c0xvZ2dlci5vc3ZjVXNlckZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAnb3N2Y1VzZXJMYXN0TmFtZSc6IHRoaXMudHNMb2dnZXIub3N2Y1VzZXJMYXN0TmFtZSxcbiAgICAgICAgICAgICAgICAnZGVidWdMZXZlbCc6IHRoaXMudHNMb2dnZXIudHNEZWJ1Z0xldmVsLFxuICAgICAgICAgICAgICAgICdwZXJmb3JtYW5jZSc6IHRoaXMudHNMb2dnZXIudHNQZXJmb3JtYW5jZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib3N2Y1dhcm5cIjogdGhpcy50c0xvZ2dlci50c0NvbnNvbGVXYXJuLFxuICAgICAgICAgICAgXCJvc3ZjRXJyb3JcIjogdGhpcy50c0xvZ2dlci50c0NvbnNvbGVFcnJvcixcbiAgICAgICAgICAgIFwib3N2Y0RlYnVnXCI6IHRoaXMudHNMb2dnZXIudHNDb25zb2xlRGVidWcsXG4gICAgICAgICAgICBcIm9zdmNMb2dcIjogdGhpcy50c0xvZ2dlci50c0NvbnNvbGVMb2dcbiAgICAgICAgfTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndHNGaW5hbFJlc3VsdCcpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0c0ZpbmFsUmVzdWx0JywgSlNPTi5zdHJpbmdpZnkodHNGaW5hbFJlc3VsdCkpO1xuICAgIH1cblxufSJdfQ==