
let fname = document.getElementById('fname');
let error1 = document.getElementById('error1');
let lname = document.getElementById('lname');
let error2 = document.getElementById('error2');
let email = document.getElementById('email');
let error3 = document.getElementById('error3');
let password = document.getElementById('password');
let error4 = document.getElementById('error4');
let btn_sumbit = document.getElementById('sumbmission');
let inputForm = document.querySelectorAll(".input__form");


btn_sumbit.addEventListener('click',(event) =>{
    event.preventDefault()
    if(fname.value === ""){
        fname.classList.add('error_icon');
        error1.innerHTML="First Name cannot be empty";
        return
    }else if (lname.value === ""){
        fname.classList.remove('error_icon');
        error1.innerHTML="";
        lname.classList.add('error_icon');
        error2.innerHTML="Second Name cannot be empty"
        return
    }else if(email.value===""){
        lname.classList.remove('error_icon');
        error2.innerHTML = "";
        email.classList.add('error_icon');
        error3.innerHTML='Email cannot be empty';
        return
    }else if (email.value.indexOf("@")<0||email.value.indexOf(".com")<0){
        lname.classList.remove('error_icon');
        email.style.placeholder='example@gmail.com';
        error2.innerHTML = "";
        email.classList.add('error_icon');
        error3.innerHTML='Looks like this not an email';
        return

    }else if(password.value ===''){
        email.classList.remove('error_icon');
        error3.innerHTML ="";
        password.classList.add('error_icon');
        error4.innerHTML = "Password cannot be empty";
        return

    }else{
        password.classList.remove('error_icon');
        error4.innerHTML ='';
        
        alert("your information has been loaded");
        inputForm.forEach(element=>{
            element.value=""
        })
        window.location.reload();
    }

   

}
)