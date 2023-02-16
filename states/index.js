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

export const showModal = atom({
  key: "showModal",
  default: false,
});

export const modalSelector = selector({
  key: "modalSelector",
  get: ({ get }) => {
    const modal = get(showModal);
    return modal;
  },
});
