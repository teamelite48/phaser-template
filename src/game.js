import Phaser from 'phaser';
import { Play } from './scenes/play';

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: 'black',
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 }
    }
  }
});

game.scene.add('play', Play);

game.scene.start('play');
