// обработчик события "отправка формы"
document.getElementsByTagName('form')[0].addEventListener(
    'submit',
    (event) => {
        event.preventDefault()
        event.stopPropagation()
        const errors = new Map()
        const nameInput = document.getElementById('studentName')
        const ageInput = document.getElementById('age')
        const emailInput = document.getElementById('email')
        const scoreInput = document.getElementById('score')
        if (!/^[A-ZА-Я][a-zа-я]{1,255}$/.test(nameInput.value)) {
            errors.set(nameInput, '1 - 255 characters')
        } else {
            document.getElementById(nameInput.id + 'Error').style.display = 'none'
        }
        if (!/^[0-9]{1,3}$/.test(ageInput.value) || Number(ageInput.value) < 4 || Number(ageInput.value) > 100) {
            errors.set(ageInput, '4 - 100')
        } else {
            document.getElementById(ageInput.id + 'Error').style.display = 'none'
        }

        //Added e-mail validation here
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value)) {
            errors.set(emailInput, 'Wrong format')
        } else {
            document.getElementById(emailInput.id + 'Error').style.display = 'none'
        }
        //end of e-mail validation code

        //Added score validation code here
        if (!/^[0-9]{1,3}$/.test(scoreInput.value) || Number(scoreInput.value) < 1 || Number(scoreInput.value) > 12) {
            errors.set(scoreInput, '1 - 12')
        } else {
            document.getElementById(scoreInput.id + 'Error').style.display = 'none'
        }
        //end of score validation code

        if (errors.size > 0) {
            errors.forEach((message, element) => {
                const errorDiv = document.getElementById(element.id + 'Error')
                errorDiv.innerText = message
                errorDiv.style.display = 'block'
            })
        } else {
            /* const errorDivs = document.getElementsByClassName('form-error')
            for (let i = 0; i < errorDivs.length; i++) {
                // errorDiv.style.display = 'none'
                console.log('error', errorDivs[i])
                errorDivs[i].style.display = 'none'
            } */
            // TODO send form data
            students.unshift(new Student(
                nameInput.value,
                document.getElementById('age').value,
                document.getElementById('score').value,
                document.getElementById('email').value
            ))
            fillStudentList()
        }
    }
)
