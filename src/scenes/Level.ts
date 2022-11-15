
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformPrefab from "./PlatformPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// sky
		this.add.image(400, 300, "sky");

		// platform
		const platform = new PlatformPrefab(this, -39, 309);
		this.add.existing(platform);
		platform.scaleX = 1.3706765916721015;
		platform.scaleY = 1;

		// platform_1
		const platform_1 = new PlatformPrefab(this, 512, 440);
		this.add.existing(platform_1);

		// platform_2
		const platform_2 = new PlatformPrefab(this, 535, 248);
		this.add.existing(platform_2);

		// bottomPlatform
		const bottomPlatform = new PlatformPrefab(this, 0, 536);
		this.add.existing(bottomPlatform);
		bottomPlatform.scaleX = 2;
		bottomPlatform.scaleY = 2;
		bottomPlatform.tintBottomLeft = 670747;
		bottomPlatform.tintBottomRight = 670747;

		// lists
		const platforms = [platform, platform_1, platform_2, bottomPlatform];

		this.platforms = platforms;

		this.events.emit("scene-awake");
	}

	private platforms!: PlatformPrefab[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
