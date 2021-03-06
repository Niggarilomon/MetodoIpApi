import { Request } from "express";

export const DEFAULT_PERPAGE = 100;
export default (req: Request) => {
  const { perpage, page, offset } = req.query;

  if (offset) {
    return {
      skip: Number(offset),
      take: 10,
    };
  }

  let take = DEFAULT_PERPAGE;
  let skip = 0;

  if (typeof perpage === "string" && typeof page === "string") {
    take = parseInt(perpage) > 100 ? 100 : parseInt(perpage);
    skip = take * (parseInt(page) - 1) || 0;
  }

  return { skip, take };
};
