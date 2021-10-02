import { RouterContext, helpers } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import { PocheItem } from "../models/PocheItem.ts";

export const pocheController = {
  getAll(context: RouterContext) {
    context.response.body = "Get all items";
  },

  async create(context: RouterContext) {
    const result = context.request.body();
    const { title, url, memo, tags, isPrivate } = await result.value;
    const pocheItem = await PocheItem.create({
      title,
      url,
      memo,
      tags,
      isPrivate,
    });
    await pocheItem.save();
    context.response.body = pocheItem;
  },

  delete(context: RouterContext) {
    const { id } = helpers.getQuery(context, { mergeParams: true });
    context.response.body = `Delete item By ID: ${id}`;
  },
};
