var TsStatusBar = (function () {
    function TsStatusBar() {
        this.getAbsolutePath = function (contentPage) {
            var base = window.location.href;
            var relative = contentPage;
            var stack = base.split("/"), parts = relative.split("/");
            stack.pop();
            for (var i = 0; i < parts.length; i++) {
                if (parts[i] == ".")
                    continue;
                if (parts[i] == "..")
                    stack.pop();
                else
                    stack.push(parts[i]);
            }
            return stack.join("/");
        };
        this.appName = "Troubleshoot-Extension";
        this.appVersion = "1.0.0";
        this.appUrl = this.getAbsolutePath('../../View/index.html');
    }
    TsStatusBar.prototype.createStatusBar = function () {
        var self = this;
        ORACLE_SERVICE_CLOUD.extension_loader.load(this.appName, this.appVersion).then(function (sdk) {
            sdk.registerUserInterfaceExtension(function (userInterfaceContext) {
                userInterfaceContext.getStatusBarContext().then(function (IStatusBarContext) {
                    IStatusBarContext.getStatusBarItem("id").then(function (IStatusBarItem) {
                        IStatusBarItem.setContentUrl(self.appUrl);
                        IStatusBarItem.setLabel(self.appName);
                        IStatusBarItem.setVisible(true);
                        IStatusBarItem.setWidth('200');
                        IStatusBarItem.render();
                    });
                });
            });
        });
    };
    return TsStatusBar;
}());
var tsExtension = new TsStatusBar();
tsExtension.createStatusBar();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtc3RhdHVzYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2NyaXB0cy90cy1zdGF0dXNiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFNSTtRQU1BLG9CQUFlLEdBQUcsVUFBUyxXQUFXO1lBQ2xDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2hDLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQztZQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUN2QixLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztvQkFBRSxTQUFTO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO29CQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7b0JBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1FBakJFLElBQUksQ0FBQyxPQUFPLEdBQUcsd0JBQXdCLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQWdCRCxxQ0FBZSxHQUFmO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO1lBQ3ZGLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxVQUFTLG9CQUFvQjtnQkFDNUQsb0JBQW9CLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxpQkFBaUI7b0JBQ3RFLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLGNBQWM7d0JBQ2pFLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMxQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDL0IsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBR0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNwQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9vc3ZjRXh0ZW5zaW9uLmQudHNcIi8+XHJcblxyXG5jbGFzcyBUc1N0YXR1c0JhciB7XHJcblxyXG4gICAgYXBwTmFtZTogc3RyaW5nO1xyXG4gICAgYXBwVmVyc2lvbjogc3RyaW5nO1xyXG4gICAgYXBwVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFwcE5hbWUgPSBcIlRyb3VibGVzaG9vdC1FeHRlbnNpb25cIjtcclxuICAgICAgICB0aGlzLmFwcFZlcnNpb24gPSBcIjEuMC4wXCI7XHJcbiAgICAgICAgdGhpcy5hcHBVcmwgPSB0aGlzLmdldEFic29sdXRlUGF0aCgnLi4vLi4vVmlldy9pbmRleC5odG1sJyk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRBYnNvbHV0ZVBhdGggPSBmdW5jdGlvbihjb250ZW50UGFnZSkge1xyXG4gICAgICAgIHZhciBiYXNlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gY29udGVudFBhZ2U7XHJcbiAgICAgICAgdmFyIHN0YWNrID0gYmFzZS5zcGxpdChcIi9cIiksXHJcbiAgICAgICAgICAgIHBhcnRzID0gcmVsYXRpdmUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIHN0YWNrLnBvcCgpOyAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGFydHNbaV0gPT0gXCIuXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocGFydHNbaV0gPT0gXCIuLlwiKSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgZWxzZSBzdGFjay5wdXNoKHBhcnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrLmpvaW4oXCIvXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVTdGF0dXNCYXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgT1JBQ0xFX1NFUlZJQ0VfQ0xPVUQuZXh0ZW5zaW9uX2xvYWRlci5sb2FkKHRoaXMuYXBwTmFtZSwgdGhpcy5hcHBWZXJzaW9uKS50aGVuKGZ1bmN0aW9uKHNkaykge1xyXG4gICAgICAgICAgICBzZGsucmVnaXN0ZXJVc2VySW50ZXJmYWNlRXh0ZW5zaW9uKGZ1bmN0aW9uKHVzZXJJbnRlcmZhY2VDb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlQ29udGV4dC5nZXRTdGF0dXNCYXJDb250ZXh0KCkudGhlbihmdW5jdGlvbihJU3RhdHVzQmFyQ29udGV4dCkge1x0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgSVN0YXR1c0JhckNvbnRleHQuZ2V0U3RhdHVzQmFySXRlbShcImlkXCIpLnRoZW4oZnVuY3Rpb24oSVN0YXR1c0Jhckl0ZW0sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElTdGF0dXNCYXJJdGVtLnNldENvbnRlbnRVcmwoc2VsZi5hcHBVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJU3RhdHVzQmFySXRlbS5zZXRMYWJlbChzZWxmLmFwcE5hbWUpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVN0YXR1c0Jhckl0ZW0uc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVN0YXR1c0Jhckl0ZW0uc2V0V2lkdGgoJzIwMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJU3RhdHVzQmFySXRlbS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCB0c0V4dGVuc2lvbiA9IG5ldyBUc1N0YXR1c0JhcigpO1xyXG50c0V4dGVuc2lvbi5jcmVhdGVTdGF0dXNCYXIoKTtcclxuIl19