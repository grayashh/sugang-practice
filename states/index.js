import { atom, selector } from "recoil";

export const stopWatchState = atom({
  key: "stopWatchStateKey",
  default: "pause",
});

export const stopWatchSelector = selector({
  key: "stopWatchSelector",
  get: ({ get }) => {
    const stopWatch = get(stopWatchState);
    return stopWatch;
  },
});

export const courseBagState = atom({
  key: "courseBagStateKey",
  default: [],
});

export const courseBagSelector = selector({
  key: "courseBagSelector",
  get: ({ get }) => {
    const courseBag = get(courseBagState);
    return courseBag;
  },
});
