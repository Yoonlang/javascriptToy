import SearchInput from "components/SearchInput";
import SelectedLanguage from "components/SelectedLanguage";
import Suggestion from "components/Suggestion";
import { useEffect, useState } from "react";

const delay = 300;

const MainPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <>
      <SelectedLanguage selectedLanguage={selectedLanguage} />
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <Suggestion
        debouncedValue={debouncedValue}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </>
  );
};

export default MainPage;
