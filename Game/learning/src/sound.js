'use strict';

const carrotSound = new Audio('../sound/carrot_pull.mp3');
const alertSound = new Audio('../sound/alert.wav');
const bgSound = new Audio('../sound/bg.mp3');
const bugSound = new Audio('../sound/bug_pull.mp3');
const winSound = new Audio('../sound/game_win.mp3');

export function playBug() {
    bugSound.currentTime = 0;
    bugSound.play();
}
export function playCarrot() {
    carrotSound.currentTime = 0;
    carrotSound.play();
}
export function playAlert() {
    alertSound.currentTime = 0;
    alertSound.play();
}
export function playWin() {
    winSound.currentTime = 0;
    winSound.play();
}
export function playBg() {
    bgSound.currentTime = 0;
    bgSound.play();
}
export function stopBg() {
    bgSound.pause();
}
