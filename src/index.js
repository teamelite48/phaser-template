import Phaser from "phaser";
import Game from "./scenes/game";

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: 'black',
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics : {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: new Game()
}

new Phaser.Game(config)