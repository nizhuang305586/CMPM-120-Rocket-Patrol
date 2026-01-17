class Menu extends Phaser.Scene {
    constructor() {
        super("MenuScene")
    }

    preload() {
        this.load.image('rocket', './asssets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', './assets/starfield.png')
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("PlayScene")
    }
}