const YourEmail = document.getElementById("Your Email");
const yourname = document.getElementById("Your Name");
const subject = document.getElementById("Subject");
const message = document.getElementById("Message");
const form= document.getElementById("form");

form.addEventListener('submit',(e) =>{
    let messages =[]
    if(YourEmail.value == '' || YourEmail.value == null)
    {
        messages.push('Please fill above boxes')
    }

})