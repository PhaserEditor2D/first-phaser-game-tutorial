
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface StarPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class StarPrefab extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 177, y ?? 55, texture || "star", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(24, 22, false);

		/* START-USER-CTR-CODE */
		
		this.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	collected() {
		
		this.disableBody(true, true);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
