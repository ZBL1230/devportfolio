import fs from "fs";
const base = "F:/ZBL/ZBL主页/devportfolio";
const h = fs.readFileSync(base + "/dist/index.html", "utf8");
const keys = [
  "ZBL神奇宝库",
  "ZBL3D代打",
  "ZBLAI（公测）",
  "ZBLCS",
  "WRSK",
  "NEWSNOW",
  "ZBL工具箱",
  "NB定制服务",
  "中秋节快乐",
  "images/zbl-toolbox",
  "lyx.zblweb.top",
  "zqjkl.zblweb.top",
  "new.zblweb.top",
  "wrsk.zblweb.top",
  "Experience",
  "linkedin",
];
const out = keys.map((k) => k + " -> " + (h.includes(k) ? "YES" : "no")).join("\n");
fs.writeFileSync(base + "/.check.txt", out, "utf8");
