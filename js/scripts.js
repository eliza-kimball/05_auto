const navElement = document.querySelector('#theNav')
const btnElement = document.querySelector('#theButton')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')
})

import { reviews } from '../data/reviews.js'
console.log(reviews)

const myTarget = document.querySelector('#cards')

for (let x=0; x < reviews.length; x++) {
    const mySection = document.createElement('section')

    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    // add star rating
    const myRating = document.createElement('div')


    for (let step = 0; step < reviews[x].stars; step++) {
        const numStars = document.createElement('img')
        numStars.src = '../images/star.svg'
        myRating.appendChild(numStars)
    }

    // build the card
    mySection.appendChild(myName)
    mySection.appendChild(myRating)
    mySection.appendChild(myReview)

    myTarget.appendChild(mySection)
}