#!/usr/bin/env node
import { execa } from "execa";
import { existsSync, readFileSync, writeFileSync } from "fs";

const storage = "/tmp/.supergit.txt";

async function main() {
  if (!existsSync(storage)) {
    writeFileSync(storage, "");
  }
  let data = readFileSync(storage).toString();
  let dataArray: string[]
  dataArray = data.split("\n").filter((x) => x);
  for (let x of dataArray) {
    const push = await execa("git", ["push"], { cwd: x });
    if (push) {
      console.log(`git push ${x}`);
      dataArray = dataArray.filter((y) => y != x);
      writeFileSync(storage, dataArray.join("\n"));
    }
  }
}
main();
