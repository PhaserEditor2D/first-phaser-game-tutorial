
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformPrefab from "./PlatformPrefab";
import PlayerPrefab from "./PlayerPrefab";
/* START-USER-IMPORTS */

import { ANIM_LEFT, ANIM_RIGHT, ANIM_TURN } from "./animations";

/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// sky
		this.add.image(400, 300, "sky");

		// platformsLayer
		const platformsLayer = this.add.layer();

		// platform
		const platform = new PlatformPrefab(this, 600, 400);
		platform.setOrigin(0.5, 0.5);
		platformsLayer.add(platform);

		// platform_1
		const platform_1 = new PlatformPrefab(this, 50, 250);
		platform_1.setOrigin(0.5, 0.5);
		platformsLayer.add(platform_1);

		// platform_2
		const platform_2 = new PlatformPrefab(this, 750, 220);
		platform_2.setOrigin(0.5, 0.5);
		platformsLayer.add(platform_2);

		// bottomPlatform
		const bottomPlatform = new PlatformPrefab(this, 400, 568);
		bottomPlatform.scaleX = 2;
		bottomPlatform.scaleY = 2;
		bottomPlatform.setOrigin(0.5, 0.5);
		bottomPlatform.tintBottomLeft = 670747;
		bottomPlatform.tintBottomRight = 670747;
		platformsLayer.add(bottomPlatform);

		// player
		const player = new PlayerPrefab(this, 435, 184);
		this.add.existing(player);

		// collider
		this.physics.add.collider(player, platformsLayer.list);

		// player (prefab fields)
		player.autoPlayAnimation = "left";

		this.player = player;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;

		this.events.emit("scene-awake");
	}

	private player!: PlayerPrefab;
	private leftKey!: Phaser.Input.Keyboard.Key;
	private rightKey!: Phaser.Input.Keyboard.Key;
	private upKey!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update() {

		if (this.leftKey.isDown) {

			// move to the left
			this.player.setVelocityX(-160);
			this.player.play(ANIM_LEFT, true);

		} else if (this.rightKey.isDown) {

			// move to the right
			this.player.setVelocityX(160);
			this.player.play(ANIM_RIGHT, true);

		} else {

			// stop moving horizontally
			this.player.setVelocityX(0);
			this.player.play(ANIM_TURN, true);
		}

		if (this.upKey.isDown && this.player.body.touching.down) {

			this.player.setVelocityY(-330);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
