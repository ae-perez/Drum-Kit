/*window.addEventListener('keydown', function(event){
    // console.log(event.keyCode); console for visual debug
    
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    //console.log(audio); console for visual debug
    if(!audio) return; // stops function from running
    
    //rewind to the start so you can play over and over again
    audio.currentTime = 0; //allows you to play 'f' for example quick
    audio.play();
    
    //console.log(key); console for visual debug
    
    key.classList.add('playing');
    
}); */

function playSound(event) {
    //separated the above code, and created playSound function
    //done so if you want to play sound based of something else you could
    
    
    // console.log(event.keyCode); console for visual debug
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    //console.log(audio); console for visual debug
    if(!audio) return; // stops function from running
    
    //rewind to the start so you can play over and over again
    audio.currentTime = 0; //allows you to play 'f' for example quick
    audio.play();
    
    //console.log(key); console for visual debug
    key.classList.add('playing');
}

function removeTransition(event) {
    //console.log(event); console for visual debug
    if(event.propertyName !== 'transform') return; //skip if its not transofrm
    // console.log(event.propertyName); console for visual debug
    
    //console.log(this); // this is equal to the key
    //so when using 'this' you are pointing to the key
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);