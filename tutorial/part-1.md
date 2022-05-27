# Part 1 - Introduction

![](https://phaser.io/content/tutorials/making-your-first-phaser-3-game/tutorial_header.png)

Welcome to our first tutorial on Making a Game with Phaser 3. Here we will learn how to create a small game involving a player running and jumping around platforms, collecting stars and avoiding baddies. While going through this process we'll explain some of the core features of the framework.

## What is Phaser?
Phaser is an HTML5 game framework which aims to help developers make powerful, cross-browser HTML5 games really quickly. It was created specifically to harness the benefits of modern browsers, both desktop and mobile. The only browser requirement is the support of the canvas tag.

## Requirements

You need to have a very, very basic knowledge of JavaScript.

Open `src/index.js` in your editor of choice and let's have a closer look at the code. The code structure looks like this:

```
import Phaser from "phaser";
import Main from "./scenes/main";

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
  physics : {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 }
    }
  }
});

game.scene.add('main', Main);

game.scene.start('main');
```

The config object is how you configure your Phaser Game. There are lots of options that can be placed in this object and as you expand on your Phaser knowledge you'll encounter more of them. But in this tutorial we're just going to set the renderer, dimensions and a default Scene.

An instance of a Phaser.Game object is assigned to a local variable called `game` and the configuration object is passed to it. This will start the process of bringing Phaser to life.

The `type` property can be either `Phaser.CANVAS`, `Phaser.WEBGL`, or `Phaser.AUTO`. This is the rendering context that you want to use for your game. The recommended value is `Phaser.AUTO` which automatically tries to use WebGL, but if the browser or device doesn't support it it'll fall back to Canvas. The canvas element that Phaser creates will be simply be appended to the document at the point the script was called, but you can also specify a parent container in the game config should you wish.

The `width` and `height` properties set the size of the canvas element that Phaser will create. In this case 800 x 600 pixels. Your game world can be any size you like, but this is the resolution the game will display in.

The `scene` property of the configuration object will be covered in more detail further on in this tutorial.

[Back](index.md) | [Next](part-2.md)

TODO

Glancing quickly at the code you'll see a call to `this.physics`. This means we're using the Arcade Physics system, but before we can do that we need to add it to our Game Config to tell Phaser our game requires it. So let's update that to include physics support. Here is the revised game config:

```
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
```

The new addition is the `physics` property. With this code in place if you run it, which you'll find as `part4.html` in the tutorial zip file, you should see a much more game-like scene: