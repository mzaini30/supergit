#!/usr/bin/env node
import { execa } from "execa";

async function main() {
  const { stdout } = await execa("git", ["status"]);
  console.log(stdout);
}
main();
