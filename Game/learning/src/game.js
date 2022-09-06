'use strict';

import * as sound from './sound.js';
import Field from './field.js';

export default class GameBuilder {

    withGameDuration(gameDuration) {
        this.gameDuration = gameDuration;
        return this;
    }

    withCarrotCount(num) {
        this.carrotCount = num;
        return this;
    }

    withBugCount(num) {
        this.bugCount = num;
        return this;
    }

    build() {
        return new Game(
            this.carrotCount,
            this.bugCount,
            this.gameDuration
        );
    }
}

class Game {

    constructor(CARROT_COUNT, BUG_COUNT, GAME_DURATION_SEC) {

        this.carrotCount = CARROT_COUNT;
        this.bugCount = BUG_COUNT;
        this.gameDuration = GAME_DURATION_SEC;

        this.started = false;
        this.score = 0;
        this.timer = undefined;

        this.gameBtn = document.querySelector('.game__button');
        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');

        this.gameField = new Field(CARROT_COUNT, BUG_COUNT);
        this.gameField.setClickListener(this.onItemClick);

        this.gameBtn.addEventListener('click', () => {
            if (this.started) {
                this.stop();
            } else {
                this.start();
            }
        });
    }

    setGameClickListener(onClick) {
        this.onClick = onClick;
    }

    start = () => {
        this.started = true;
        this.__init();
        this.__showStopButton();
        this.__showTimerAndScore();
        this.__startGameTimer();
        sound.playBg();
    }

    stop() {
        this.started = false;
        this.__stopGameTimer();
        this.__hideGameButton();

        this.onClick && this.onClick('cancel');
        //gameFinishBanner.showWithText('REPLAY❓');
        sound.playAlert();
        sound.stopBg();
    }

    __init() {
        this.score = 0;
        this.gameScore.innerHTML = this.carrotCount;
        this.gameField.init();
    }

    onItemClick = (item) => {
        if (!this.started) {
            return;
        }
        if (item === 'carrot') {
            this.score++;
            this.__updateScoreBoard();
            if (this.score === this.carrotCount) {
                this.finishGame(true);
            }
        } else if (item === 'bug') {
            this.finishGame(false);
        }
    }

    finishGame(win) {
        this.started = false;
        this.__hideGameButton();
        if (win) {
            sound.playWin();
        } else {
            sound.playBg;
        }
        this.__stopGameTimer();
        sound.stopBg();

        this.onClick && this.onClick(win ? 'win' : 'lost');
        // gameFinishBanner.showWithText(win ? 'YOU WON💥' : 'YOU LOSE💢');
    }

    __showStopButton() {
        const icon = document.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }

    __hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }

    __showTimerAndScore() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }

    __startGameTimer() {
        let remainingTimeSec = this.gameDuration;
        this.__updateTimerText(remainingTimeSec);
        this.timer = setInterval(() => {
            if (remainingTimeSec <= 0) {
                clearInterval(this.timer);
                this.finishGame(this.carrotCount === this.score);
                return;
            }
            this.__updateTimerText(--remainingTimeSec);
        }, 1000);
    }

    __stopGameTimer() {
        clearInterval(this.timer);
    }

    __updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerHTML = `${minutes}:${seconds}`;
    }

    __updateScoreBoard() {
        this.gameScore.innerText = this.carrotCount - this.score;
    }
}