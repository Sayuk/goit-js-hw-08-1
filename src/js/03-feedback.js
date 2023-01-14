
// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onFormData, 500));
// form.addEventListener('submit', onSubmitForm);

// const formData = {};
// const STORAGE = 'feedback-form-state';

// function onFormData(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE, JSON.stringify(formData));

  
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

const form = document.querySelector('.feedback-form')

const STORAGE = "feedback-form-state";


form.addEventListener('submit', onSubmit)
form.addEventListener('input', throttle(onInput, 500))

autoFill()

function onInput(){
    
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }

    return localStorage.setItem(STORAGE, JSON.stringify(formData))
}

function onSubmit(e) {
        e.preventDefault();
        const {elements: { email, message }} = e.currentTarget;
        const data = {
            email: email.value,
            message: message.value,
        }

    if (email.value === '' || message.value == '') {
                return alert('Всі поля повинні бути заповнені')
            };

        console.log(data);

        localStorage.removeItem(STORAGE)
        return form.reset();
    }

function autoFill() {
    const values = localStorage.getItem(STORAGE)
    
    if (!values) {
        return
    }
    const {email, message} = JSON.parse(values);
        form.elements.email.value = email;
        form.elements.message.value = message;
}