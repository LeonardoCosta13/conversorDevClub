const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const meuDolar = 5.2
const meuEuro = 5.9
const meuBTC = 0.62

const convertValue = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const somaFinal = document.getElementById('currency-value-text')


    // realValueText.innerHTML = inputReal

    realValueText.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL', 
        }).format(inputReal);

    // somaFinal.innerHTML = inputReal / meuDolar
        if(select.value === 'US$ Dólar americano'){
            somaFinal.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD', 
                }).format(inputReal / meuDolar);
        }
    
        if(select.value === '€ Euro'){
            somaFinal.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR', 
                }).format(inputReal / meuEuro);
        }

        if(select.value === '฿ Bitcoin'){
            somaFinal.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'XBT', 
                }).format(inputReal / meuBTC);
        }
        

}

changeCurrency = () => {
    const moneyEuro = document.getElementById('money')
    const currencyImage = document.getElementById('currency-image')

    if(select.value === 'US$ Dólar americano'){
        moneyEuro.innerHTML = 'US$ Dólar americano'
        currencyImage.src = './assets/EUA.svg'
    }

    if(select.value === '€ Euro'){
        moneyEuro.innerHTML = 'Euro'
        currencyImage.src = './assets/Euro.svg'
    }

    if(select.value === '฿ Bitcoin'){
        moneyEuro.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bit.svg'
    }

    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)
