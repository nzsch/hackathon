class RainyState {
    // TODO: start/update weather
    preload() {
        console.log("Rainy state starting");
        this.game.stage.backgroundColor =  "#a8b5b3";
        this.addSunCloud();
        this.addRainCloud();
        this.addCloudy();
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

    constructor(game) {
        this.game = game;
        this.preload();
    }

}