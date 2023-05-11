export const throttle = (cb) => {
  let isThrottled = false;

  const throttledCb = () => {
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
