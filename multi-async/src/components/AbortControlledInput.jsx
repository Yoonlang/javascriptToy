import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { delayFetch } from "remotes";

const AbortControlledInput = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const count = useRef(0);

  const getDelayedData = async (count) => {
    const res = await delayFetch();
    setResult(`${res}, ${count}`);
  };

  useEffect(() => {
    getDelayedData(count.current++);
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
