

require('dotenv').config();

console.log(process.env.PASS);

const contactForm = document.getElementById("contact-form");
const _name = document.getElementById("name");
const _email = document.getElementById("email");
const _subject = document.getElementById("subject");
const _message = document.getElementById("message");

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = {
        name : _name.value,
        email : _email.value,
        subject: _subject.value,
        message: _message.value
    }


    let xhr = new XMLHttpRequest(); 
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            _name.value = '';
            _email.value = '';
            _subject.value
            _message.value = '';
        }else{
            alert('Something went wrong!')
        }
    }
    xhr.send(JSON.stringify(formData));
    


    // fetch('/',{
    //     method: 'POST',
    //     headers:{
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then((response) => response.json())
    // .then((formData) =>{
    //     console.log('Success :', formData);
    // })
    // .catch((error)=>{
    //     console.log("error:", error);
    // })

   

});
