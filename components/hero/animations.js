export const logoAni = {
  initial: {
    opacity: 0,
    filter: "blur(15px)",
    y: 300,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: [300, 300, 300, 0],
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
  animate: { ...iconAni, x: 300 },
};
export const icon2 = {
  initial: { ...iconInit },
  animate: { ...iconAni },
};
export const icon3 = {
  initial: { ...iconInit },
  animate: { ...iconAni, x: -300 },
};

export const buttonAni = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 2, duration: 1 },
  },
};
