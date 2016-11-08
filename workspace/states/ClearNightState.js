class ClearNightState {

    preload() {
        console.log("Clear night state starting");
        this.game.stage.backgroundColor = "#3a3f3f";
        this.addMoon();
    }

    // TODO: start/update weather
    update() {
        // Check for transition to rain
        
    }

    end() {
        console.log("Clear night state ending");
        this.removeMoon();
    }

    addMoon(){
		this.moonSprite = this.game.add.sprite(600,0, 'moon');
		this.moonSprite.scale.setTo(0.8,0.8);
	}

	removeMoon(){
		if(this.moonSprite){
			this.moonSprite.visible = false;
		}
	}

    constructor(game) {
        this.game = game;
        this.preload();
    }
}