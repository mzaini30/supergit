#!/usr/bin/env node
import { question } from "readline-sync";
import { execa } from "execa";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { cwd } from "process";

const storage = "/tmp/.supergit.txt";

async function main() {
  execa("git", ["add", "."]);
  const message = question("Commit message: ");
  try {
    const { stdout: commit } = await execa("git", [
      "commit",
      "-m",
      `${message}`,
    ]);
    console.log(commit);
    if (!existsSync(storage)) {
      writeFileSync(storage, "");
    }
    let data = readFileSync(storage).toString();
    let dataArray: string[]
    dataArray = data.split("\n").filter((x) => x);
    dataArray.push(cwd());
    dataArray = [...new Set(dataArray)];
    data = dataArray.join("\n");
    writeFileSync(storage, data);
  } catch (error) {
    console.log(error);
  }
}
main();
