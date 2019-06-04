define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsTicker = (function () {
        function TsTicker() {
            this.element_timer = document.getElementById('timer');
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;
        }
        TsTicker.prototype.add = function () {
            this.seconds++;
            if (this.seconds >= 60) {
                this.seconds = 0;
                this.minutes++;
                if (this.minutes >= 60) {
                    this.minutes = 0;
                    this.hours++;
                }
            }
            this.element_timer.textContent = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
            this.element_timer.className = "time";
            this.element_timer.style.cursor = "not-allowed";
            this.element_timer.style.padding = "4px";
            this.element_timer.style.fontFamily = "auto";
            this.startTimer();
        };
        TsTicker.prototype.startTimer = function () {
            this.t = setTimeout(this.add.bind(this), 1000);
        };
        TsTicker.prototype.stopTimer = function (tsLogger) {
            tsLogger.tsTimer = this.element_timer.textContent;
            clearTimeout(this.t);
            this.clearTime();
        };
        TsTicker.prototype.clearTime = function () {
            this.element_timer.textContent = "00:00:00";
            this.element_timer.className = "time";
            this.element_timer.style.cursor = "not-allowed";
            this.element_timer.style.padding = "4px";
            this.element_timer.style.fontFamily = "auto";
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;
        };
        return TsTicker;
    }());
    exports.TsTicker = TsTicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtdGlja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2NyaXB0cy90cy10aWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFBQTtZQUVJLGtCQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ1osWUFBTyxHQUFHLENBQUMsQ0FBQztZQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUErQ2QsQ0FBQztRQTNDRyxzQkFBRyxHQUFIO1lBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFO29CQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztvQkFDakIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNoQjthQUNKO1lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5UCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFHN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFHRCw2QkFBVSxHQUFWO1lBQ0ksSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUdELDRCQUFTLEdBQVQsVUFBVyxRQUFrQjtZQUN6QixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQ2xELFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFHRCw0QkFBUyxHQUFUO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVMLGVBQUM7SUFBRCxDQUFDLEFBcERELElBb0RDO0lBcERZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHNMb2dnZXIgfSBmcm9tIFwiLi90cy1sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUc1RpY2tlciB7XHJcblxyXG4gICAgZWxlbWVudF90aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lcicpO1xyXG4gICAgc2Vjb25kcyA9IDA7IFxyXG4gICAgbWludXRlcyA9IDA7IFxyXG4gICAgaG91cnMgPSAwOyBcclxuICAgIHQ7XHJcbiAgICBcclxuICAgXHJcbiAgICBhZGQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzKys7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kcyA+PSA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMubWludXRlcyA+PSA2MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW51dGVzID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG91cnMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmVsZW1lbnRfdGltZXIudGV4dENvbnRlbnQgPSAodGhpcy5ob3VycyA/ICh0aGlzLmhvdXJzID4gOSA/IHRoaXMuaG91cnMgOiBcIjBcIiArIHRoaXMuaG91cnMpIDogXCIwMFwiKSArIFwiOlwiICsgKHRoaXMubWludXRlcyA/ICh0aGlzLm1pbnV0ZXMgPiA5ID8gdGhpcy5taW51dGVzIDogXCIwXCIgKyB0aGlzLm1pbnV0ZXMpIDogXCIwMFwiKSArIFwiOlwiICsgKHRoaXMuc2Vjb25kcyA+IDkgPyB0aGlzLnNlY29uZHMgOiBcIjBcIiArIHRoaXMuc2Vjb25kcyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50X3RpbWVyLmNsYXNzTmFtZSA9IFwidGltZVwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudF90aW1lci5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50X3RpbWVyLnN0eWxlLnBhZGRpbmcgPSBcIjRweFwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudF90aW1lci5zdHlsZS5mb250RmFtaWx5ID0gXCJhdXRvXCI7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogU3RhcnQgYnV0dG9uICovXHJcbiAgICBzdGFydFRpbWVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudCA9IHNldFRpbWVvdXQodGhpcy5hZGQuYmluZCh0aGlzKSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU3RvcCBidXR0b24gKi9cclxuICAgIHN0b3BUaW1lciAodHNMb2dnZXI6IFRzTG9nZ2VyKSB7IFxyXG4gICAgICAgIHRzTG9nZ2VyLnRzVGltZXIgPSB0aGlzLmVsZW1lbnRfdGltZXIudGV4dENvbnRlbnQ7ICAgICAgIFxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnQpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJUaW1lKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKiBDbGVhciAqL1xyXG4gICAgY2xlYXJUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudF90aW1lci50ZXh0Q29udGVudCA9IFwiMDA6MDA6MDBcIjtcclxuICAgICAgICB0aGlzLmVsZW1lbnRfdGltZXIuY2xhc3NOYW1lID0gXCJ0aW1lXCI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50X3RpbWVyLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICB0aGlzLmVsZW1lbnRfdGltZXIuc3R5bGUucGFkZGluZyA9IFwiNHB4XCI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50X3RpbWVyLnN0eWxlLmZvbnRGYW1pbHkgPSBcImF1dG9cIjtcclxuICAgICAgICB0aGlzLnNlY29uZHMgPSAwOyB0aGlzLm1pbnV0ZXMgPSAwOyB0aGlzLmhvdXJzID0gMDtcclxuICAgIH1cclxuXHJcbn0iXX0=