
// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onFormData, 500));
// form.addEventListener('submit', onSubmitForm);

// const date = {};
// const STORAGE = 'feedback-form-state';

// function onFormData(e) {
//   date[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE, JSON.stringify(date));

  
// }

// function onSubmitForm(e) {
//    e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE);
//   console.log(date)
//   delete date.email;
//   delete date.message;
  
// }
  


// function dataFromLocalStorage() {
//   const date = JSON.parse(localStorage.getItem(STORAGE));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (date) {
//     email.value = date.email || '';
//     message.value = date.message || '';
//   }
// };
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  delete date.email;
delete date.message;
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();
