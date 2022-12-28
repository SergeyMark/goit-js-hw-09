import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTimePicker = document.querySelector('input');
const startBtn = document.querySelector('button[data-start]');

const refs = {
  second: document.querySelector('span[data-seconds]'),
  minute: document.querySelector('span[data-minutes]'),
  hours: document.querySelector('span[data-hours]'),
  days: document.querySelector('span[data-days]'),
}

let intervalId = null;

startBtn.disabled = true;

const currentDate = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

      if (selectedDates[0] - currentDate < 0) {
        alert('Please choose a date in the future');
      }

      startBtn.disabled = false;
    },
  };

const flatPic = flatpickr(dateTimePicker, options);

startBtn.addEventListener('click', onStartBtnTime);

function onStartBtnTime(){
  intervalId = setInterval( () => {
    const backTime = flatPic.selectedDates[0] - new Date();
    if (backTime === 0) {
      clearInterval(intervalId);
    }
    console.log(backTime);
    
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs())