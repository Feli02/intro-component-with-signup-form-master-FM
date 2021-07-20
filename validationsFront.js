let btn = document.getElementById('btn')




btn.addEventListener('click', () => {
    let errors = 0;


    let name = document.getElementById('name')
    let last_name = document.getElementById('last_name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    let errorName = document.getElementById('nameError')
    let errorLastName = document.getElementById('last_name_error')
    let errorEmail = document.getElementById('email-error')
    let errorPassword = document.getElementById('password-error')

    let errorNameText = document.getElementById('nameErrorText')
    let errorLastNameText = document.getElementById('last_name_error_text')
    let errorEmailText = document.getElementById('email-error-text')
    let errorPasswordText = document.getElementById('password-error-text')

    if(name.value == null || name.value.length == 0 || /^\s+$/.test(name.value)){
        errorName.style.display = 'block';
        errorNameText.style.display = 'block'
        name.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorName.style.display = 'none';
        errorNameText.style.display = 'none';
        name.classList.remove('errorInput')
        if(errors > 0){
            errors = errors - 1
        }
    }

    if(last_name.value == null || last_name.value.length == 0 || /^\s+$/.test(last_name.value)){
        errorLastName.style.display = 'block';
        errorLastNameText.style.display = 'block';
        last_name.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorLastName.style.display = 'none';
        errorLastNameText.style.display = 'none';
        last_name.classList.remove('errorInput')
        if(errors > 0){
            errors = errors - 1
        }
    }

    valor = email.value
    regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.value == null || email.value.length == 0 || !regex.test(valor)){
        errorEmail.style.display = 'block';
        errorEmailText.style.display = 'block';
        email.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorEmail.style.display = 'none';
        errorEmailText.style.display = 'none';
        email.classList.remove('error-Input')
        if(errors > 0){
            errors = errors - 1
        }
    }

    if(password.value == null || password.value.length == 0 || /^\s+$/.test(password.value)){
        errorPassword.style.display = 'block';
        errorPasswordText.style.display = 'block';
        password.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorPassword.style.display = 'none';
        errorPasswordText.style.display = 'none';
        password.classList.remove('errorInput')
        if(errors > 0){
            errors = errors - 1
        }
    }


    let form = document.getElementById('form')

    form.addEventListener('submit', function(event){
        if (errors > 0){
            event.preventDefault();
        }
    })
})

