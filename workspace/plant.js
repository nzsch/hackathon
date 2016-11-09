class Plant {
	constructor(sprite, x, y, health, game) {
		this.sprite = sprite;
		this.health = health
		this.age = 0;
		this.game = game;
		this.water = 100;

		this.sprite = this.game.add.sprite(x, y, sprite);
		this.sprite.scale.setTo(1.5, 1.5);
	}

	static getMaxAge() {
		return 16;
	}

	getHealth() {
		return this.health;
	}

	getAge() {
		return this.age;
	}

	getWater() {
		return this.water;
	}

	incrementAge() {
		// TODO: make the plant taller
		this.age +=1;
	}

	changeWater(delta) {
		this.water += delta;
		if(this.water > 100) {
			this.water = 100;
		}
	}

	changeHealth(delta) {
		this.health += delta;
		if(this.health > 100) {
			this.health = 100;
		}
	}

	update() {
		var a = this.age + 1;
		this.sprite.frameName = 'run'+ (a);
	}
}
