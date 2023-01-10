
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const data = {};
const STORAGE = 'feedback-form-state';

function onFormData(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE, JSON.stringify(data));
}

function onSubmitForm(e) {
   const parsedData = JSON.parse(localStorage.getItem(STORAGE));
  console.log(parsedData);

  e.preventDefault();
  localStorage.removeItem(STORAGE);
  e.currentTarget.reset();

  delete date.email;
  delete date.message;
  
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    
  }else {
    message.value = data.message;
  }
};