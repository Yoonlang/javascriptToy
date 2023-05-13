import { atom, selector } from "recoil";

export const pageId = atom({
  key: "pageId",
  default: 1,
});

export const currentPostList = selector({
  key: "currentPostList",
  get: async ({ get }) => {
    try {
      const pid = get(pageId);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pid}`
      );
      const data = await res.json();
      return { list: data, pid };
    } catch (err) {
      throw new Error(err);
    }
  },
});

export const totalPostList = atom({
  key: "totalPostList",
  default: [],
});
