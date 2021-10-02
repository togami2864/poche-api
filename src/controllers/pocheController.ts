import { RouterContext, helpers } from "https://deno.land/x/oak@v6.5.0/mod.ts";

export const pocheController = {
  getAll(context: RouterContext) {
    context.response.body = "Get all items";
  },

  create(context: RouterContext) {
    context.response.body = "Create item";
  },

  delete(context: RouterContext) {
    const { id } = helpers.getQuery(context, { mergeParams: true });
    context.response.body = `Delete item By ID: ${id}`;
  },
};
