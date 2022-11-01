let shuffledArray = []
const result = "POSAO"
const endValue = result.split('')
const clickedElements = []

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    
    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

function renderElements() {
    shuffledArray = [...endValue];
    shuffledArray = shuffle(shuffledArray);
    
    for(const item of shuffledArray) {
        $('.buttonsContainer').append(`<button class="letterButton" onClick="onButtonClick(this)">${item}</button>`)
    }
    
}

function onButtonClick(clickedButton) {
    if(clickedElements.length !== 5) {
        clickedElements.push(clickedButton.innerText);
        $(clickedButton).remove();
        $('.resultContainer').append(`<span class="word">${clickedButton.innerText}</span>`)
    }
}

function startGame()
{
    renderElements();
    // Here a check is needed for the environment which is being used
    let isMobile = /iPhone|Android/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0;
    if (isMobile)
        setTimeout(endGame, 4000);
    else
        setTimeout(endGame, 5000);
}


function endGame()
{
    let currentValue = clickedElements.join('')
    if(currentValue === result) {
        $('.word').css('color', 'green')
        $('body').append(`<p class="bravo">Bravo!</p>`)
        $('body').append(`<button class="buttonRepeat" onClick="location.reload()">Igraj ponovo!</button>`)
    } else {
        location.reload()
    }
}

$(document).ready(startGame)

