import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "@sanity/types";

export function portableTextToHtml(portableText: PortableTextBlock[]) {
	if (!portableText) return "";
	return toHTML(portableText);
}
