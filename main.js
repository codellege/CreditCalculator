let out = document.getElementById('alert')
let d_name = document.getElementById('name')
let d_credit = document.getElementById('credit')
let d_card1 = document.getElementById('cone')
let d_card2 = document.getElementById('ctwo')
let d_card3 = document.getElementById('cthree')
let d_card0 = document.getElementById('cother')
let d_dropdown = document.getElementById('triggerId')

let card = 0
let rate = 0

checker('', '', '')
listeners()

function calculator(name, credit, card) {
    
    console.log(name, credit, card)
   
    text = `<div class="alert alert-light" role="alert">
    <strong>Client: ${name}</strong><br>
    Card Type: ${card}<br> 
    Calculated new ammount to pay $${credit *= rate} @ rate %${rate}
    </div>`
    out.innerHTML = text
}

function choicecard(item) {
    switch (item) {

        case 1:
            card = 1
            rate = 25
            d_dropdown.innerText = 'Card Uno'
            break
        case 2:
            card = 2
            rate = 35
            d_dropdown.innerText = 'Card Dos'
            break
        case 3:
            card = 3
            rate = 40
            d_dropdown.innerText = 'Card Tres'
            break
        case 4:
            card = 4
            rate = 50
            d_dropdown.innerText = 'Another Card'
            break
    }

    checker(d_name.value, Number(d_credit.value), card)
}

function checker(name, credit, card) {

    if (name == '') {
        d_credit.disabled = true
        d_credit.value = ''
        
        card = 0
    } else {
        d_credit.disabled = false
    }

    if (credit == '') {
        d_dropdown.classList.add('disabled')
        card = 0
    } else {
        d_dropdown.classList.remove('disabled')
    }

    if (card !=0) {
        calculator(name, credit, card)
    } else {

        let text = `<div class="alert alert-light" role="alert">
                    <strong>Read Me!</strong> <br> <br>
                    1. Enter the clients name <br>
                    2. Enter the clients current credit  <br>
                    3. Enter the lowest-ranked-card on the client's account <br>
                    </div>`

        out.innerHTML = text

    }
}

function filterNumber(e) {

    let m = e.target.value.slice(-1) //LAST CHARACTER ENTERED
    let n = Number(e.target.value) //INPUT TO NUMBER OR NaN
    let o = e.target.value.substr(0, e.target.value.length - 1) //THE INPUT VALUE MINUS THE LAST CHAR ENTERED
    if (!isNaN(n)) {
        checker(d_name.value, n, card) //UPDATES WITH A VALID NUMBER
    } else if (m == '.') {
        if ((e.target.value.split('.')).length != 2) {
            e.target.value = o //ERASES LAST
        }
    } else {
        e.target.value = o //ERASES LAST
    }
}

function listeners() {
    

d_name.addEventListener('keyup', (e) => {
    checker(e.target.value, Number(d_credit.value), card)
})

d_credit.addEventListener('keyup', (e) => {
    filterNumber(e)
})

d_card1.addEventListener('click', (e) => {
    choicecard(1)
})
d_card2.addEventListener('click', (e) => {
    choicecard(2)
})
d_card3.addEventListener('click', (e) => {
    choicecard(3)
})
d_card0.addEventListener('click', (e) => {
    choicecard(4)
})
}