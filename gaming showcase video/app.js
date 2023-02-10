const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

const headsetImg = document.querySelector('.headset');
const keyboardImg = document.querySelector('.keyboard');
const mouseImg = document.querySelector('.mouse');

// MAIN PART 

rightArrow.addEventListener('click', function() {
    // focus on the headset
    
    if (headsetImg.classList.contains('middle')) { // if the headset is in the middle, then...

        headsetImg.classList.remove('middle');
        headsetImg.classList.add('right-side');

        mouseImg.classList.remove('right-side');
        mouseImg.classList.add('left-side');

        keyboardImg.classList.remove('left-side');
        keyboardImg.classList.add('middle');
    }
    else if (headsetImg.classList.contains('right-side')) { // if the headset is on the right side, then...
        headsetImg.classList.remove('right-side');
        headsetImg.classList.add('left-side');

        mouseImg.classList.remove('left-side');
        mouseImg.classList.add('middle');

        keyboardImg.classList.remove('middle');
        keyboardImg.classList.add('right-side');
    }
    else { // if the headset is on the left side, then...
        headsetImg.classList.remove('left-side');
        headsetImg.classList.add('middle');

        mouseImg.classList.remove('middle');
        mouseImg.classList.add('right-side');

        keyboardImg.classList.remove('right-side');
        keyboardImg.classList.add('left-side');
    }


})

leftArrow.addEventListener('click', function() {
    if (headsetImg.classList.contains('middle')) { // if headset is in the middle, then...

        headsetImg.classList.remove('middle');
        headsetImg.classList.add('left-side');

        keyboardImg.classList.remove('left-side');
        keyboardImg.classList.add('right-side');

        mouseImg.classList.remove('right-side');
        mouseImg.classList.add('middle');
    }
    else if(headsetImg.classList.contains('left-side')) { // if the headset is in the left side, then...

        headsetImg.classList.remove('left-side');
        headsetImg.classList.add('right-side');

        keyboardImg.classList.remove('right-side');
        keyboardImg.classList.add('middle');

        mouseImg.classList.remove('middle');
        mouseImg.classList.add('left-side');
    }
    else { // if the headset is in the right side, then...

        headsetImg.classList.remove('right-side');
        headsetImg.classList.add('middle');
        
        keyboardImg.classList.remove('middle');
        keyboardImg.classList.add('left-side');

        mouseImg.classList.remove('left-side');
        mouseImg.classList.add('right-side');
    }
})