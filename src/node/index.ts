import * as fs from "fs";
import * as path from "path";

export const packageJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../package.json"), "utf-8"));
