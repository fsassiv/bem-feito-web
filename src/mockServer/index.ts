import { categories, searchBarfilters } from "@/lib/dummy-data";
import { createServer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

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
}
