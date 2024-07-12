import { categories, searchBarfilters } from "@/lib/dummy-data";
import { createServer } from "miragejs";

export const makeServer = ({ environment = "test" } = {}) => {
  // eslint-disable-next-line no-console
  console.log("--- MIRAGEJS SERVER RUNNING ---");
  let server = createServer({
    environment,
    useDefaultPassthroughs: true,
    routes() {
      this.namespace = "api";
      this.passthrough("https://api.bigdatacloud.net/**");
      this.get("/auth/session", () => {
        return {};
      });

      this.get("/categories", () => {
        return categories;
      });

      this.get("/searchfilters", () => {
        return searchBarfilters;
      });
    },
  });

  return server;
};
