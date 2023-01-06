import create from "zustand";

export const useServersStore = create((set) => ({
  // default data in case of no data from API
  servers: {
    Asia: {
      maintenance: false,
      totalSeconds: 0,
    },
    Europe: {
      maintenance: false,
      totalSeconds: 0,
    },
    America: {
      maintenance: false,
      totalSeconds: 0,
    },
  },
  setServers: (servers) => set({ servers }),
}));
