import { Variants } from "framer-motion";

export const showUp: Variants = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  
  export const showUpDelayed: Variants = {
    ...showUp,
    show: {
      ...showUp.show,
      transition: {
        duration: 0.7,
        delay: 0.5,
      },
    },
  };