export const throttle = (cb: () => void): (() => void) => {
  let isThrottled = false;

  const throttledCb = (): void => {
    if (!isThrottled) {
      isThrottled = true;
      cb();
      requestAnimationFrame(() => {
        isThrottled = false;
      });
    }
  };

  return throttledCb;
};
