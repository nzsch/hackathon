class RainyState {
    // TODO: start/update weather
    preload() {
        console.log("Rainy state starting");
        this.game.stage.backgroundColor =  "#a8b5b3";
        this.addSunCloud();
        this.addRainCloud();
        this.addCloudy();
        this.makeRain();
        //this.mySprite = this.add.sprite(x, y, 'image');
    }

    update() {
        // rain bitch
    }

    end() {
        // remove sprites
        this.removeSunCloud();
        this.removeRainCloud();
        this.removeCloudy();
        this.stopRain();
        console.log("Rainy state ending");
    }

    addSunCloud() {
		this.sunCloudSprite = this.game.add.sprite(600,25,'sun_cloud');
		this.sunCloudSprite.scale.setTo(0.5,0.5);
	}

	removeSunCloud() {
		if(this.sunCloudSprite){
			this.sunCloudSprite.visible = false;
		}
	}

    addRainCloud() {
		this.rainCloudSprite = this.game.add.sprite(600,25, 'rain_cloud');
		this.rainCloudSprite.scale.setTo(0.5,0.5);
	}

	removeRainCloud() {
		if(this.rainCloudSprite){
			this.rainCloudSprite.visible = false;
		}
	}

    addCloudy(){
		this.cloudySprite = this.game.add.sprite(600,25, 'cloudy');
		this.cloudySprite.scale.setTo(0.5,0.5);
	}

	removeCloudy(){
		if(this.cloudySprite){
			this.cloudySprite.visible = false;
		}
	}

    makeRain() {

		this.isRaining = true;
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.emitter.start(false, 5000, 10, 400);

		//checkBounds(this.emitter);
		//this.emitter.forEachAlive(checkBounds(), this);
	}

    stopRain() {
		if (this.isRaining){
			this.emitter.on = false;
			this.isRaining = false;
		}
	}

    makeClouds(){
        
	}

    constructor(game) {
        this.game = game;
        this.emitter = this.game.add.emitter(this.game.world.centerX, 0, 200);
        this.emitter.width = this.game.world.width;
		// this.emitter.angle = 30; // uncomment to set an angle for the rain.

		this.emitter.makeParticles('raindrop');

		this.emitter.minParticleScale = 0.1;
		this.emitter.maxParticleScale = 0.5;

		this.emitter.setYSpeed(300, 500);
		this.emitter.setXSpeed(-5, 5);

		this.emitter.minRotation = 0;
		this.emitter.maxRotation = 0;
    }

}