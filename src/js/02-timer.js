import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// Notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';




const dateTimePicker = document.querySelector('input');
const startBtn = document.querySelector('button[data-start]');

const refs = {
  second: document.querySelector('span[data-seconds]'),
  minute: document.querySelector('span[data-minutes]'),
  hours: document.querySelector('span[data-hours]'),
  days: document.querySelector('span[data-days]'),
}

let intervalId = null;
let backTime;

startBtn.disabled = true;

const currentDate = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

      if (selectedDates[0] - currentDate < 0) {
        Notify.failure('Please choose a date in the future', {
           position: 'center-top',
           clickToClose: true,
           width: '300px',
        });
        startBtn.disabled = true;
      }else{
        startBtn.disabled = false;
      }

      
    },
  };

const flatPic = flatpickr(dateTimePicker, options);

startBtn.addEventListener('click', onStartBtnTime);

function onStartBtnTime(){
  intervalId = setInterval( () => {

    backTime = flatPic.selectedDates[0] - new Date();
    console.log(backTime);
    const dataUpdateTime = convertMs(backTime);
    updateClock(dataUpdateTime);

    if (backTime < 1000 ) {
      clearInterval(intervalId);
    }
    
  }, 1000);

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateClock({ days, hours, minutes, seconds }) {
    refs.second.textContent = seconds;
    refs.minute.textContent = minutes;
    refs.hours.textContent = hours;
    refs.days.textContent = days;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}