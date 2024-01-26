let buttonCountry = document.querySelector('.form__block-country');

buttonCountry.addEventListener('click', function () {
    let nextElement = buttonCountry.nextElementSibling
    nextElement.classList.toggle('activeList')
})

let flagRF = document.querySelector('.form__block-country__RF')
let flagOth = document.querySelector('.form__block-country__Other')
let flagOth1 = document.querySelector('.form__block-country__Other1')

//меняем placeholder и background в зависимости от выбранной страны
function openInput(flag) {
    flag.addEventListener('click', function () {
        let inp = document.querySelector('input[name="telRF"]')
        let nextElement = buttonCountry.nextElementSibling
        if (flag === flagRF) {
            inp.placeholder = '+7 (___) ___-__-__'
            buttonCountry.style.cssText = `
                background: url(../images/form/icons/countryRF.svg);
                height: 18px;
                width: 25px;
                background-size: cover;
                border: none;
                cursor: pointer;
                margin-left: 16px;
                margin-top: 16px;`
        }
        if (flag === flagOth) {
            inp.placeholder = '+8 (___) ___-__-__'
            buttonCountry.style.cssText = `
                background: #ff0000;
                outline: 1px solid #C6CDDA;
                outline-offset: -1px;
                height: 18px;
                width: 25px;
                background-size: cover;
                border: none;
                cursor: pointer;
                margin-left: 16px;
                margin-top: 16px;`
        }
        if (flag === flagOth1) {
            inp.placeholder = '+9 (___) ___-__-__'
            buttonCountry.style.cssText = `
                background: #0000ff;
                outline: 1px solid #C6CDDA;
                outline-offset: -1px;
                height: 18px;
                width: 25px;
                background-size: cover;
                border: none;
                cursor: pointer;
                margin-left: 16px;
                margin-top: 16px;`
        }

        nextElement.classList.toggle('activeList')

    })
}

openInput(flagRF)
openInput(flagOth)
openInput(flagOth1)

/*
* Валидация формы, проверка на пустоту
* */
function validation(form) {

    let allInputs = form.querySelectorAll('input')
    let inpTel = document.querySelector('.form__block-country__tel')
    let result = true;
    let inpTelValue = document.querySelector('input[name = "telRF"]')
    inpTel.style.borderColor = '#fff'
    if (inpTelValue.value === '') {
        inpTel.style.borderColor = '#d97373'
        result = false

    }
    for (const input of allInputs) {
        input.style.borderColor = '#fff'


        if (input.value === '') {
            input.style.borderColor = '#d97373'
            result = false

        }
    }

    if (result === false) {
        alert("Форма не отправлена, проверьте правильность заполнения полей")
    }
    return result
}

const TELEGRAM_BOT_TOKEN = '6909770478:AAETbJbL9TvfI7e3eTVXMMFYvmUe7PrNDqY';
const TELEGRAM_CHAT_ID = '-1002037694009';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('.form__block-text__submit button');
    const {user, telRF, email} = Object.fromEntries(new FormData(form).entries());
    const text = `заявка от ${user}, телефон:${telRF} , Email:${email}`;
    if (user !== '' && telRF !== '' && email !== '') {
        try {
            formBtn.textContent = 'Loading...';

            const response = await fetch(API, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                })
            });
            if (response.ok) {
                alert("Форма отправлена")
                form.reset()
            } else {
                throw new Error(response.statusText)
            }
        } catch (error) {
            console.error(error + "Ошибка! Форма не отправлена")
            alert("Ошибка! Форма не отправлена")
        } finally {
            formBtn.textContent = 'Оформить заявку'
        }
    } else {
        validation(form)
    }
}

