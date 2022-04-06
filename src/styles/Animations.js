export const fadeInUp = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2
    }
  }
};

export const fadeInRight = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.5
    }
  }
}

export const zoomIn = {
  offscreen: {
    scale: 0,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
    }
  }
}