
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const date = {};
const STORAGE = 'feedback-form-state';

function onFormData(e) {
  date[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE, JSON.stringify(date));

}

function onSubmitForm(e) {
   e.preventDefault();
  
  e.currentTarget.reset();
 
  localStorage.removeItem(STORAGE);
// console.log(localStorage.getItem(STORAGE));
  delete date.email;
  delete date.message;
  
}

function dataFromLocalStorage() {
  const date = JSON.parse(localStorage.getItem(STORAGE));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (date) {
    email.value = date.email;
    
  }else {
    message.value = date.message;
  }
};