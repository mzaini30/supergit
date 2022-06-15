import { platform } from "os";

export default function (): string {
  let storage: string;
  if (platform() == "linux") {
    storage = "/tmp/.supergit.txt";
  } else if (platform() == "win32") {
    storage = `${process.env.APPDATA}\\supergit.txt`;
  } else {
    storage = "/sdcard/.supergit.txt";
  }
  return storage;
}
