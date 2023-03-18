import Notiflix from "notiflix";

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay) 
  });  
}


const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const time = Number(formEl.delay.value);
  const step = Number(formEl.step.value);
  const amount = Number(formEl.amount.value);
  let position = 1;
  let delay = time;

  for (let i = 0; i < amount; i++) {
    createPromise(position, delay).then(x => Notiflix.Notify.success(x)).catch(y => Notiflix.Notify.failure(y));
    position += 1;
    delay += step;
  }
};
