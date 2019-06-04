define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsLogger = (function () {
        function TsLogger() {
            this.tsDate = new Date().toLocaleString();
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
        TsLogger.prototype.setUserInfo = function (value) {
            this.osvcUserFirstName = value[0];
            this.osvcUserLastName = value[1];
            this.osvcUserDisplayName = value[2];
            this.osvcUserLogin = value[3];
        };
        return TsLogger;
    }());
    exports.TsLogger = TsLogger;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2NyaXB0cy90cy1sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFtQkk7WUFMQSxXQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQU1qQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7UUFHRCw4QkFBVyxHQUFYLFVBQVksS0FBSztZQUNiLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FBQyxBQTVDRCxJQTRDQztJQTVDWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL29zdmNFeHRlbnNpb24uZC50c1wiLz5cblxuZXhwb3J0IGNsYXNzIFRzTG9nZ2VyIHtcblxuICAgIG9zdmNJbnRlcmZhY2VOYW1lOiBzdHJpbmc7XG4gICAgb3N2Y1VzZXJJZDogbnVtYmVyO1xuICAgIG9zdmNQcm9maWxlOiBzdHJpbmc7XG4gICAgb3N2Y1VzZXJEaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIG9zdmNVc2VyRmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgb3N2Y1VzZXJMYXN0TmFtZTogc3RyaW5nO1xuICAgIG9zdmNVc2VyTG9naW46IHN0cmluZztcbiAgICB0c1RpbWVyOiBzdHJpbmc7XG4gICAgdHNDb25zb2xlV2FybjogW107XG4gICAgdHNDb25zb2xlRXJyb3I6IFtdO1xuICAgIHRzQ29uc29sZUxvZzogW107XG4gICAgdHNDb25zb2xlRGVidWc6IFtdO1xuICAgIHRzRGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB0c05hdmlnYXRvckluZm86IHN0cmluZztcbiAgICB0c0RlYnVnTGV2ZWw6IG51bWJlcjtcbiAgICB0c1BlcmZvcm1hbmNlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5vc3ZjSW50ZXJmYWNlTmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMub3N2Y1VzZXJJZCA9IDA7XG4gICAgICAgIHRoaXMub3N2Y1Byb2ZpbGUgPSBcIlwiO1xuICAgICAgICB0aGlzLnRzVGltZXIgPSBcIjAwOjAwOjAwXCI7XG4gICAgICAgIHRoaXMudHNDb25zb2xlV2FybiA9IFtdO1xuICAgICAgICB0aGlzLnRzQ29uc29sZUVycm9yID0gW107XG4gICAgICAgIHRoaXMudHNDb25zb2xlTG9nID0gW107XG4gICAgICAgIHRoaXMudHNDb25zb2xlRGVidWcgPSBbXTtcbiAgICAgICAgdGhpcy50c05hdmlnYXRvckluZm8gPSBcIlwiO1xuICAgICAgICB0aGlzLm9zdmNVc2VyRmlyc3ROYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5vc3ZjVXNlckxhc3ROYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5vc3ZjVXNlckRpc3BsYXlOYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5vc3ZjVXNlckxvZ2luID0gXCJcIjtcbiAgICAgICAgdGhpcy50c0RlYnVnTGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLnRzUGVyZm9ybWFuY2UgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIHNldFVzZXJJbmZvKHZhbHVlKXtcbiAgICAgICAgdGhpcy5vc3ZjVXNlckZpcnN0TmFtZSA9IHZhbHVlWzBdO1xuICAgICAgICB0aGlzLm9zdmNVc2VyTGFzdE5hbWUgPSB2YWx1ZVsxXTtcbiAgICAgICAgdGhpcy5vc3ZjVXNlckRpc3BsYXlOYW1lID0gdmFsdWVbMl07XG4gICAgICAgIHRoaXMub3N2Y1VzZXJMb2dpbiA9IHZhbHVlWzNdO1xuICAgIH1cbn0iXX0=