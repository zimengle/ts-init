import * as fs from "fs";
import * as path from "path";
import {execSync} from "child_process";
import {getLogger} from "log4js";

console.info("123");

const logger = getLogger();
logger.level = "debug";


const workpath = path.resolve(__dirname, "../");
const version = JSON.parse(fs.readFileSync(path.resolve(workpath, "package.json"), "utf-8")).version;
logger.info(`git tag v${version}`);
execSync(`git tag v${version}`, {cwd: workpath});
logger.info(`git push origin v${version}`);
execSync(`git push origin v${version}`, {cwd: workpath});

