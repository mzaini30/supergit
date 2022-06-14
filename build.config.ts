import fg from "fast-glob";

export default {
  entry: [...fg.sync("src/*")],
};
