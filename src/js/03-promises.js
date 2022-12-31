import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault()

    let delay = Number(refs.delay.value);
    const step = Number(refs.step.value);
    const amount = Number(refs.amount.value);
    

    for (let position = 1; position <= amount; position += 1) {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          setTimeout(() => {
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
          }, delay);
        })
        .catch(({ position, delay }) => {
          setTimeout(() => {
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
          }, delay);
        });
      delay += step;
    }
  };

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const promise = { position, delay };
  
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(promise);
      }
        reject(promise);
    });
  }
    






















