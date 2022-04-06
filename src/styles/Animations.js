export const fadeInUp = (delay ) => {
  return {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: delay || 0 ,
      }
    }
  }
} 


export const fadeInRight = (delay) => {
  return {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: delay || 0,
      }
    }
  }
} 

export const zoomIn = (delay) =>  {
  return {
    offscreen: {
      scale: 0,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: delay || 0,
      }
    }
  }
}
