import { RouterContext, helpers } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import { PocheItem } from "../models/PocheItem.ts";

export const pocheController = {
  async getAll(context: RouterContext) {
    const items = await PocheItem.findAll();
    context.response.body = items;
  },

  async create(context: RouterContext) {
    const result = context.request.body();
    const { title, url, ogp, memo, tags, isPrivate } = await result.value;
    const pocheItem = await PocheItem.create({
      title,
      url,
      ogp,
      memo,
      tags,
      isPrivate,
    });
    await pocheItem.save();
    context.response.body = pocheItem;
  },

  async delete(context: RouterContext) {
    const { id } = helpers.getQuery(context, { mergeParams: true });
    await PocheItem.delete(id);
    context.response.status = 204;
  },
};
