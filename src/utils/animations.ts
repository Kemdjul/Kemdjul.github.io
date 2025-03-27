export const slideDown = {
  hidden: { y: -146, transition: { duration: 0.8, ease: "easeInOut" } },
  visible: { y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

export const fadeIn = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 16, transition: { duration: 0.8 } },
};

export const fillFromLeft = {
  visible: { width: "100%" },
  hidden: { width: 0 },
};
