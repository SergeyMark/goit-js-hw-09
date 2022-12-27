import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    //   Если пользователь выбрал дату в прошлом, покажи window.alert() с текстом "Please choose a date in the future".
      if (selectedDates) {
        alert('Please choose a date in the future');
      }
    },
  };


const dateTimePicker = document.querySelector('input');
console.log(dateTimePicker)

const flatPic = flatpickr(dateTimePicker, options);
