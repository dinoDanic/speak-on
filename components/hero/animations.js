export const logoAni = {
  initial: {
    opacity: 0,
    filter: "blur(15px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: [0, 0, 0, 0, -250],
    transition: { duration: 2 },
  },
};

const iconInit = {
  opacity: 0,
};
const iconAni = {
  opacity: 1,
  transition: { duration: 1, delay: 2 },
};

export const icon1 = {
  initial: { ...iconInit },
  animate: { ...iconAni, x: [0, 0, 0, 300] },
};
export const icon2 = {
  initial: { ...iconInit },
  animate: { ...iconAni },
};
export const icon3 = {
  initial: { ...iconInit },
  animate: { ...iconAni, x: [0, 0, 0, -300] },
};

export const buttonAni = {
  initial: {
    opacity: 0,
    y: 180,
  },
  animate: {
    opacity: 1,
    y: 220,
    transition: { delay: 2.8, duration: 0.7 },
  },
};
