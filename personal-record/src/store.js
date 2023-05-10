import { atom, selector } from "recoil";

export const pageId = atom({
  key: "pageId",
  default: 0,
});

export const currentPostList = selector({
  key: "currentPostList",
  get: async ({ get }) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${get(pageId)}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
});
