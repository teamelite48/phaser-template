# Part 3 - World Building

[Example Code](example-code/part-3.js) for `src/scenes/main.js`

Under the hood `this.add.image` is creating a new Image Game Object and adding it to the current Scenes display list. This list is where all of your Game Objects live. You could position the image anywhere and Phaser will not mind. Of course, if it's outside of the region 0x0 to 800x600 then you're not going to visually see it, because it'll be "off screen", but it will still exist within the Scene.

The Scene itself has no fixed size and extends infinitely in all directions. The Camera system controls your view into the Scene and you can move and zoom the active camera as required. You can also create new cameras for other views into the Scene.

For now let's build up the Scene by adding a background image and some platforms. Here is the updated `create` method:

```
platforms;

create() {
  this.add.image(400, 300, 'sky');

  this.platforms = this.physics.add.staticGroup();

  this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  this.platforms.create(600, 400, 'ground');
  this.platforms.create(50, 250, 'ground');
  this.platforms.create(750, 220, 'ground');
}
```

Glancing quickly at the code you'll see a call to `this.physics`. This means we're using the Arcade Physics system.

With this code in place, if you run it, you should see a much more game-like scene:

![](images/part4.png)

We've got a backdrop and some platforms, but how exactly are those platforms working?

[Back](part-2.md) | [Next](part-4.md)