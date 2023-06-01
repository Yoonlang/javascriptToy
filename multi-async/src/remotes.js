export const delayFetch = (baseTime = 1000) => {
  const timer = Math.ceil(Math.random() * 2 * baseTime);
  return new Promise((resolve) =>
    setTimeout(() => resolve(`hi, delay ${timer}`), timer)
  );
};
