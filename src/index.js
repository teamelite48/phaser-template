import Phaser from "phaser";
import GameScene from "./scenes/game.scene";

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
  scene: new GameScene()
}

new Phaser.Game(config)