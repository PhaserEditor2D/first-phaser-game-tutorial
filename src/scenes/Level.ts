
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformPrefab from "./PlatformPrefab";
import PlayerPrefab from "./PlayerPrefab";
import StarPrefab from "./StarPrefab";
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

		// starsLayer
		const starsLayer = this.add.layer();

		// star
		const star = new StarPrefab(this, 54, -26);
		starsLayer.add(star);

		// star_1
		const star_1 = new StarPrefab(this, 123, -26);
		starsLayer.add(star_1);

		// star_2
		const star_2 = new StarPrefab(this, 192, -26);
		starsLayer.add(star_2);

		// star_3
		const star_3 = new StarPrefab(this, 261, -26);
		starsLayer.add(star_3);

		// star_4
		const star_4 = new StarPrefab(this, 330, -26);
		starsLayer.add(star_4);

		// star_5
		const star_5 = new StarPrefab(this, 399, -26);
		starsLayer.add(star_5);

		// star_6
		const star_6 = new StarPrefab(this, 468, -26);
		starsLayer.add(star_6);

		// star_7
		const star_7 = new StarPrefab(this, 537, -26);
		starsLayer.add(star_7);

		// star_8
		const star_8 = new StarPrefab(this, 606, -26);
		starsLayer.add(star_8);

		// star_9
		const star_9 = new StarPrefab(this, 675, -26);
		starsLayer.add(star_9);

		// star_10
		const star_10 = new StarPrefab(this, 744, -26);
		starsLayer.add(star_10);

		// player_platforms_collider
		this.physics.add.collider(player, platformsLayer.list);

		// stars_platforms_collider
		this.physics.add.collider(starsLayer.list, platformsLayer.list);

		// player_stars_collider
		this.physics.add.overlap(player, starsLayer.list, this.collectStar as any, undefined, this);

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

	private collectStar(player: PlayerPrefab, star: StarPrefab) {

		star.collected();
	}

	update() {

		this.updatePlayer();
	}


	private updatePlayer() {

		if (this.leftKey.isDown) {

			this.player.moveLeft();

		} else if (this.rightKey.isDown) {

			this.player.moveRight();

		} else {

			this.player.stopMoving();
		}

		if (this.upKey.isDown && this.player.body.touching.down) {

			this.player.jump();
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
