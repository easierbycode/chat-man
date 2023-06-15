const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade'
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('pacman', 'assets/pacman.png');
}

function create() {
    this.pacman = this.physics.add.sprite(400, 300, 'pacman');
    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    const pacmanSpeed = 160;

    if (this.cursors.left.isDown) {
        this.pacman.setVelocity(-pacmanSpeed, 0);
    } else if (this.cursors.right.isDown) {
        this.pacman.setVelocity(pacmanSpeed, 0);
    } else if (this.cursors.up.isDown) {
        this.pacman.setVelocity(0, -pacmanSpeed);
    } else if (this.cursors.down.isDown) {
        this.pacman.setVelocity(0, pacmanSpeed);
    } else {
        this.pacman.setVelocity(0, 0);
    }
}

