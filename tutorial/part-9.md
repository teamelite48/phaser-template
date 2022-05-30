
# Part 9 - A score to settle

[Example Code](example-code/part-9.js)

There are two final touches we're going to add to our game: an enemy to avoid that can kill the player, and a score when you collect the stars. First, the score.

To do this we'll make use of a Text Game Object. Here we create two new properties, one to hold the actual score and the text object itself:

```
score = 0;
scoreText;
```

The `scoreText` is set-up in the `create` method:

```
this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
```

16 x 16 is the coordinate to display the text at. 'Score: 0' is the default string to display and the object that follows contains a font size and fill color. By not specifying which font we'll actually use the Phaser default, which is Courier.

Next we need to modify the `collectStar` method so that when the player picks-up a star their score increases and the text is updated to reflect this:

```
collectStar(player, star) {
  star.disableBody(true, true);

  this.score += 10;
  this.scoreText.setText('Score: ' + this.score);
}
```

So 10 points are added for every star and the `scoreText` is updated to show this new total. If you run the game now, you will see the stars fall and the score increase as you collect them.

![](images/part9.png)

In the final part we'll add some baddies.

[Back](part-8.md) | [Next](part-10.md)