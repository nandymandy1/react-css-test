import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

const folders = [
  "pages",
  "store",
  "utils",
  "guards",
  "hooks",
  "assets",
  "layouts",
  "services",
  "constants",
  "components",
  "providers",
];

const getDirectory = (dir = null) =>
  resolve(__dirname, dir ? `src/${dir}` : `src`);

const getAlias = () => ({
  alias: folders.reduce(
    (acc, folder) => ({ ...acc, [`@${folder}`]: getDirectory(folder) }),
    {
      "@": getDirectory(),
    }
  ),
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  },
  resolve: getAlias(),
});
