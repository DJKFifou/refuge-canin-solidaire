import { heroType } from "./objects/heroType";
import { imageGalleryType } from "./objects/ImageGallery";
import { textWithIllustrationType } from "./objects/TextWithImage";
import { videoType } from "./objects/videoType";

import { pageTypes } from "./pageTypes";
import { blogTypes } from "./blogTypes";
import { dogTypes } from "./dogTypes";

export const schemaTypes = [
	blogTypes,
	dogTypes,
	pageTypes,
	heroType,
	textWithIllustrationType,
	imageGalleryType,
	videoType,
];
