class CountdownTimer {

  constructor({ selector, targetDate}) {
    this.intervalId = null
    this.selector = selector
    this.targetDate = targetDate
    this.elDays = document.querySelector('[data-value="days"]')
    this.elHours = document.querySelector('[data-value="hours"]')
    this.elMins = document.querySelector('[data-value="mins"]')
    this.elSecs = document.querySelector('[data-value="secs"]')
  }

  startInterval() {
    this.selector = setInterval(() => {
      const currentTime = Date.now()
      const deltaTime = this.targetDate - currentTime
      const countDown = this.getTimeComponents(deltaTime)

      this.updateClockInterface(countDown)
  }, 1000)
  }
    
  pad(value) {
    return String(value).padStart(2, '0')
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs}
  }

  updateClockInterface({ days, hours, mins, secs }) {
    this.elDays.textContent = days
    this.elHours.textContent = hours
    this.elMins.textContent = mins
    this.elSecs.textContent = secs
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022')
});

timer.startInterval()