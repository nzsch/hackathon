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

		decrementWater(amount) {
			this.water -= amount;
			if (this.water < 0)
				this.water = 0;
		}

		incrementWater(amount) {
			this.water += amount;
			if (this.water > 100)
				this.water = 100;
		}

		incrementAge() {
			// TODO: make the plant taller
			this.age +=1;
		}

		incrementHealth(amount) {
			this.health += amount;
			if (this.health > 100)
				this.health = 100;
		}

		inflictDamage(amount) {
			// TODO: change overlay color depending on buckets of 1-5
			this.health -= amount;
			if (this.health < 0)
				this.health = 0;
		}

		update() {
			this.sprite.frameName = 'run'+ (this.age++);
		}
	}
