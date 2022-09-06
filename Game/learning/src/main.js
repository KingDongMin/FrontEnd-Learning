'use strict';

import PopUp from './popup.js';
import { GameBuilder, Reason } from './game.js';
import * as sound from './sound.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
    .withGameDuration(5)
    .withCarrotCount(3)
    .withBugCount(2)
    .build();

gameFinishBanner.setClickLinstener(game.start);

game.setGameClickListener((reason) => {
    let massage;
    switch (reason) {
        case Reason.cancel:
            massage = 'REPLAY❓';
            sound.playAlert();
            break;
        case Reason.win:
            massage = 'YOU WON💥';
            sound.playWin();
            break;
        case Reason.loose:
            massage = 'YOU LOSE💢';
            sound.playBug();
            break;
        default:
            throw new Error('not vaild reason');
    }
    gameFinishBanner.showWithText(massage);
});