// set variables
const email = document.querySelector('.inputEmail');
const submit = document.querySelector('.arrow');
const error = document.querySelector('.error');
const errorMessage= document.querySelector('.errorMessage');
const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;







// function validation
function submitEmail(){
   //message for empty input
   if(email.value==''){
       errorMessage.style.display = 'flex';
       errorMessage.textContent = 'Whoops ,it seems you forgot to type your email!';
       error.style.display = 'flex';
       
   }
   //message for error input
   else if(!email.value.match(regex)){
       errorMessage.style.display = 'flex';
       errorMessage.textContent = 'Please provide a valid email';
       error.style.display = 'flex';
   }   //message for succes 
   else{
       errorMessage.style.display = 'flex';
       errorMessage.style.color = 'green';
       errorMessage.textContent = 'Awesome 🎉 ';
       error.style.display = 'none';
   }

}

// add event listener
submit.addEventListener('click',submitEmail)
