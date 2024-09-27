const coin = document.querySelector('#coin')
const scoreEl = document.querySelector('#score')
const buyUpgrade = document.querySelector('buyUpgrade')
const message = document.querySelector('#buyUpgrade')
const buyBoost = document.querySelector('#buyBoost')

let score = 1 
let clickValue = 1
let upgradeCost = 100
let boostCost = 50
let boostDuration = 5000

coin.addEventListener('click', () => {
score += clickValue 
scoreEl.innerText = score
})

buyUpgrade.addEventListener('click', () => {
    if(score >= upgradeCost) {
        score -= upgradeCost
    
        scoreEl.innerText = score
        clickValue++
        upgradeCost = mATH.FLOOR (upgradeCost * 1.5)
        buyUpgrade.innerText = `Купить улучшение (${upgradeCost} коинов)`
        message.innerText = 'Вы успешно купили улучшение'
    } else {
        message.innerText = 'Недостаточно очков для улучшения'
    }
})

buyBoost.addEventListener('click', () => {
    if(score >= boostCost){
        score -= boostCost
        clickValue *= 2
        message.innerText = 'Вы успешно купили'
       
    }
    

})