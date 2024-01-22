
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
    let result = true;
    for (const input of allInputs) {
        input.style.borderColor = '#fff'
        document.querySelector('.form__block-country__tel').style.borderColor = '#fff'

        if (input.value === '') {
            document.querySelector('.form__block-country__tel').style.borderColor = '#d97373'
            input.style.borderColor = '#d97373'
            alert('поле не заполнено')
            result = false
            return
        } else {
            input.value = ''
        }

    }
    result === true ? alert("Форма отправлена") : alert("Ошибка! Форма не отправлена")
    return result
}

document.getElementById('form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    validation(this)
})

