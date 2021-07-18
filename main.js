const user= document.querySelector('.user');
const pw= document.querySelector('.pw');
const pw2= document.querySelector('.pw2');
const mail= document.querySelector('.mail');
const country= document.querySelector('.country');
const province= document.querySelector('.province');
const city= document.querySelector('.city');
const subbtn= document.querySelector('.submit');
const msg= document.querySelector('.msg');

subbtn.addEventListener('click', check);
let locationoptions= {
    'Canada': {
        'Ontario': ['Toronto', 'Markham'],
        'British Columbia': ['Vancouver', 'Richmond']
    },
    'USA': {
        'California': ['San Francisco', 'Los Angeles'],
        'New York': ['New York City', 'Buffalo']
    }
};

window.onload= function(){
    for(let x in locationoptions){
        country.options[country.options.length]= new Option(x, x);
    };
    country.onchange= function(){
        province.length= 1;
        city.length= 1;
        console.log(locationoptions[country.value]);
        //if object
        for(let y in locationoptions[country.value]){
            province.options[province.options.length]= new Option(y, y);
        };
    };
    province.onchange= function(){
        city.length= 1;
        console.log(locationoptions[country.value][province.value]);
        //if array
        let z= locationoptions[country.value][province.value];
        for(j= 0; j < z.length; j++){
            city.options[city.options.length]= new Option(z[j], z[j]);
        };
    };
};

function check(){
    let userv= user.value.trim();
    let pwv= pw.value.trim();
    let pw2v= pw2.value.trim();
    let mailv= mail.value.trim();
    let cityv= city.value;

    if(userv== ''){
        error(user, 'Username Invalid');
    }else{
        success(user);
    };

    if(pwv== '' || pw2v== ''){
        error(pw, 'Password Invalid');
    }else if(pwv.search(/[A-Z\a-z\0-9]/)== -1){
        error(pw, 'Password Does Not Meet Requirements');
    }else if(pwv.length <= 0 || pwv.length > 8){
        error(pw, 'Password Does Not Meet Requirements');
    }else if(pwv != pw2v){
        error(pw, 'Password Does Not Match');
    }else{
        success(pw);
    };

    if(mailv== ''){
        error(mail, 'Email Invalid');
    }else if(mailv.search(/@/)== -1){
        error(mail, 'Email Invalid');
    }else{
        success(mail);
    };

    if(cityv== ''){
        error(location, 'Location Invalid');
    }else{
        console.log('location working');
    }
};

function error(input, message){
    msg.innerHTML+= message + `<br>`;
};

function success(input, message){
    console.log(input.classList + ' working');
};