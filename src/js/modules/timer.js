const timer = (timerSelector, deadline) => {
  const addZero = (num) => {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  const getTimeRemaining = (deadline) => {
    const t = Date.parse(deadline) - Date.parse(new Date()),
          seconds = Math.floor((t / 1000) % 60),
          minutes = Math.floor((t / 1000 / 60) % 60),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          days = Math.floor((t / (1000 * 60 * 60 * 24)));
    
    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days
    }
  };

  const setClock = (timerSelector, deadline) => {
    const timer = document.querySelector(timerSelector),
          seconds = timer.querySelector('#seconds'),
          minutes = timer.querySelector('#minutes'),
          hours = timer.querySelector('#hours'),
          days = timer.querySelector('#days'),
          timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(deadline);

      seconds.textContent = addZero(t.seconds);
      minutes.textContent = addZero(t.minutes);
      hours.textContent = addZero(t.hours);
      days.textContent = addZero(t.days);

      if (t.total <= 0) {
        seconds.textContent = addZero(0);
        minutes.textContent = addZero(0);
        hours.textContent = addZero(0);
        days.textContent = addZero(0);

        deadline.setDate(deadline.getDate() + 7);

        clearInterval(timeInterval);
      }
    };
  };

  setClock(timerSelector, deadline);

};

export default timer;