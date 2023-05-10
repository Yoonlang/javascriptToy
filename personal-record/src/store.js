import { atom, selector } from "recoil";

export const userList = selector({
  key: "userList",
  get: async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
});
