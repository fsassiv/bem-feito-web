import { categories, searchBarfilters } from "@/data/dummy-data";
import { createServer } from "miragejs";

export const makeServer = ({ environment = "test" } = {}) => {
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
