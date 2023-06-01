export const delayFetch = (baseTime = 1000, signal) => {
  const timer = Math.ceil(Math.random() * 2 * baseTime);
  return new Promise((resolve, reject) => {
    const abortHandler = () => {
      clearTimeout(success);
      reject(new Error("aborted"));
    };

    const success = setTimeout(() => {
      resolve(`hi, delay ${timer}`);
      signal?.removeEventListener("abort", abortHandler);
    }, timer);
    signal?.addEventListener("abort", abortHandler);
  });
};
