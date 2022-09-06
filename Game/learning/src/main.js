'use strict';

import PopUp from './popup.js';
import Game from './game.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();
const game = new Game(CARROT_COUNT, BUG_COUNT, GAME_DURATION_SEC);

gameFinishBanner.setClickLinstener(game.start);

game.setGameClickListener((reason) => {
    let massage;
    switch (reason) {
        case 'cancel':
            massage = 'REPLAY❓';
            break;
        case 'win':
            massage = 'YOU WON💥';
            break;
        case 'lost':
            massage = 'YOU LOSE💢';
            break;
        default:
            throw new Error('not vaild reason');
    }
    gameFinishBanner.showWithText(massage);
});