"use strict"

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function keyTransitionToggle(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    !key ? null : key.classList.add('playing');
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', keyTransitionToggle));

window.addEventListener('keydown', function (e) {
    playSound(e);
    keyTransitionToggle(e);
});
