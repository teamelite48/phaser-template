# Part 1 - Introduction

[Example Code](example-code/part-1.js)

![](images/tutorial_header.png)

Welcome to our first tutorial on Making a Game with Phaser 3. Here we will learn how to create a small game involving a player running and jumping around platforms, collecting stars and avoiding baddies. While going through this process we'll explain some of the core features of the framework.

## What is Phaser?
Phaser is an HTML5 game framework which aims to help developers make powerful, cross-browser HTML5 games really quickly. It was created specifically to harness the benefits of modern browsers, both desktop and mobile. The only browser requirement is the support of the canvas tag.

## Requirements
- Basic knowledge of JavaScript - [Learn JavaScript](https://www.sololearn.com/learning/1024)
- A Phaser 3 development environment - [Getting Started](../README.md#getting-started)
- A code editor - [Visual Studio Code](https://code.visualstudio.com/)

## Example Code
There is an [Example Code](example-code/part-1.js) link at the top of every page that shows you what your code should look like at the end of each part.

## Let's Go!
All of your code will go in `src/scenes/play.js`. Let's start by replacing the code in `src/scenes/play.js` with the snippet bellow:

```
import Phaser from "phaser";

export class Play extends Phaser.Scene {

  preload() {

  }

  create() {

  }

  update() {

  }
}
```

Let's take a look at the game configuration in `src/game.js` to better understand what's going on. It looks like this:

```
import Phaser from 'phaser';
import Play from './scenes/play';

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
```

The config object is how you configure your Phaser Game. There are lots of options that can be placed in this object and as you expand on your Phaser knowledge you'll encounter more of them.

The `type` property can be either `Phaser.CANVAS`, `Phaser.WEBGL`, or `Phaser.AUTO`. This is the rendering context that you want to use for your game. The recommended value is `Phaser.AUTO` which automatically tries to use WebGL, but if the browser or device doesn't support it it'll fall back to Canvas.

The `parent` property tells Phaser to append the canvas element to the `<div id="game">` tag in `src/index.html`.

The `width` and `height` properties set the size of the canvas element that Phaser will create. In this case 800 x 600 pixels. Your game world can be any size you like, but this is the resolution the game will display in.

The `physics` property adds Arcade Physics to our game.

An instance of a Phaser.Game object is created with the configuration and assigned to a local variable named `game`.

The `Play` scene is then added to the game object and the game is started. This will bring Phaser to life.

[Back](README.md) | [Next](part-2.md)