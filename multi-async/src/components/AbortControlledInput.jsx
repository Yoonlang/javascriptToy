import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { delayFetch } from "remotes";

const AbortControlledInput = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const count = useRef(0);

  const getDelayedData = async (count, signal) => {
    try {
      const res = await delayFetch(1000, signal);
      setResult(`${res}, ${count}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getDelayedData(count.current++, controller.signal);

    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <StyledSearcher>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>{result}</div>
    </StyledSearcher>
  );
};

const StyledSearcher = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AbortControlledInput;
