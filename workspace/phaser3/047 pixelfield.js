
var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'phaser-example', { create: create, update: update });

function between (min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var p;

function create() {

    var hsv = Phaser.Color.HSVColorWheel();

    p = game.add.pixelField(0, 0, 4, game.stage);

    for (var i = 0; i < 359; i++)
    {
        var color = hsv[i];

        var x = between(0, 800);
        var y = between(0, 600);
        p.add(x, y, color.r, color.g, color.b, 1);
    }

}

function update() {

    // for (var i = 0; i < sprites.length; i++)
    // {
    //     var sprite = sprites[i].s;

    //     sprite.y -= sprites[i].r;

    //     if (sprite.y < -256)
    //     {
    //         sprite.y = 700;
    //     }
    // }

}