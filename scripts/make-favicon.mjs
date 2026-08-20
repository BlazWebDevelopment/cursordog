/**
 * Builds the browser icons (app/favicon.ico and app/icon.png) from the Cursor
 * mark. Run with `npm run favicon` after replacing public/cursor-logo.png.
 */
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const SIZE = 256;
const BLACK = { r: 0, g: 0, b: 0, alpha: 1 };

const square = (size) =>
  sharp("public/cursor-logo.png")
    .resize(size, size, { fit: "contain", background: BLACK })
    .ensureAlpha()
    // Next's .ico decoder only accepts RGBA-encoded PNG payloads.
    .png({ palette: false, compressionLevel: 9 });

await square(512).toFile("app/icon.png");

const png = await square(SIZE).toBuffer();

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count

const entry = Buffer.alloc(16);
entry.writeUInt8(0, 0); // width: 0 means 256
entry.writeUInt8(0, 1); // height: 0 means 256
entry.writeUInt8(0, 2); // palette size
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(png.length, 8);
entry.writeUInt32LE(header.length + entry.length, 12);

await writeFile("app/favicon.ico", Buffer.concat([header, entry, png]));
console.log(`app/favicon.ico written (${header.length + entry.length + png.length} bytes)`);
