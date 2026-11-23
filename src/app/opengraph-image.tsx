import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Royston G King: positive wisdom, gone viral";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const photo = await readFile(path.join(process.cwd(), "public", "site", "img16.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: "radial-gradient(60% 70% at 78% 45%, rgba(124,200,255,0.35), #060e20 70%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 0.95, letterSpacing: -2 }}>ROYSTON</div>
          <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 0.95, letterSpacing: -2 }}>G KING</div>
          <div style={{ fontSize: 34, color: "#7cc8ff", marginTop: 24 }}>Positive wisdom, gone viral.</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={420} height={420} style={{ borderRadius: 28, objectFit: "cover" }} alt="" />
      </div>
    ),
    size,
  );
}
