const user= document.querySelector('.user');
const pw= document.querySelector('.pw');
const pw2= document.querySelector('.pw2');
const mail= document.querySelector('.mail');
const subbtn= document.querySelector('.submit');
const msg= document.querySelector('.msg');

subbtn.addEventListener('click', check);

function check(){
    userv= user.value.trim();
    pwv= pw.value.trim();
    pwv2= pw2.value.trim();
    mailv= mail.value.trim();

    if(userv== ''){
        error(user, 'Username Invalid');
    }else{
        success(user);
        user.value= '';
    };

    if(pwv== '' || pwv2== ''){
        error(pw, 'Password Invalid');
    }else if(pwv.search(/[A-Z\a-z\0-9]/)== -1){
        error(pw, 'Password Does Not Meet Requirements');
    }else if(pwv.length <= 0 || pwv.length > 8){
        error(pw, 'Password Does Not Meet Requirements');
    }else if(pwv!= pwv2){
        error(pw, 'Password Does Not Match');
    }else{
        success(pw);
        pw.value= '';
        pw2.value= '';
    };

    if(mailv== ''){
        error(mail, 'Email Invalid');
    }else if(mailv.search(/@/)== -1){
        error(mail, 'Email Invalid');
    }else{
        success(mail);
        mail.value= '';
    };
};

function error(input, message){
    msg.innerHTML+= message + `<br>`;
};

function success(input, message){
    console.log('working');
};