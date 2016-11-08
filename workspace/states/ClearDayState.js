class ClearDayState {
	preload() {
		console.log("Clear day state starting");
		this.game.stage.backgroundColor = "#7FEEFF";
		this.addSun();
	}

    // TODO: start/update weather
    update() {
        // Check for transition to rain
    }

	end() {
		console.log("Clear day state ending");
		this.removeSun();
	}

    addSun(){
		this.sunSprite = this.game.add.sprite(600, 25, 'sun');
		this.sunSprite.scale.setTo(0.5,0.5);
		//sunSprite.frame = 0;
	}

	removeSun(){
		if(this.sunSprite){
			this.sunSprite.visible = false;
		}
	}

	constructor(game) {
		this.game = game;
		this.preload();
	}
}