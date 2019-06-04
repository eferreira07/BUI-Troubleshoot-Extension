import { TsLogger } from "./ts-logger";

export class TsTicker {

    element_timer = document.getElementById('timer');
    seconds = 0; 
    minutes = 0; 
    hours = 0; 
    t;
    
   
    add(): void {
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
    }
    
    /* Start button */
    startTimer(): void {
        this.t = setTimeout(this.add.bind(this), 1000);
    }

    /* Stop button */
    stopTimer (tsLogger: TsLogger) { 
        tsLogger.tsTimer = this.element_timer.textContent;       
        clearTimeout(this.t);
        this.clearTime();        
    }

    /* Clear */
    clearTime() {
        this.element_timer.textContent = "00:00:00";
        this.element_timer.className = "time";
        this.element_timer.style.cursor = "not-allowed";
        this.element_timer.style.padding = "4px";
        this.element_timer.style.fontFamily = "auto";
        this.seconds = 0; this.minutes = 0; this.hours = 0;
    }

}