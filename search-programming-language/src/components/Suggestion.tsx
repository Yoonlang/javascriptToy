import { fetchURL } from "consts";
import { useEffect, useState } from "react";

interface SuggestionProps {
  debouncedValue: string;
  selectedLanguage: string[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<any[]>>;
}

const Suggestion: React.FC<SuggestionProps> = ({
  debouncedValue,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const [languageList, setLanguageList] = useState<string[]>([]);

  const getLanguageList = async (keyword: string, signal: AbortSignal) => {
    try {
      const res = await fetch(`${fetchURL}/languages?keyword=${keyword}`, {
        signal,
      });
      const data = await res.json();
      if (data.error) setLanguageList([]);
      else setLanguageList(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLanguageList = (selected: string) => {
    setSelectedLanguage([...selectedLanguage, selected]);
  };

  useEffect(() => {
    if (debouncedValue === "") {
      setLanguageList([]);
      return;
    }
    const controller = new AbortController();
    getLanguageList(debouncedValue, controller.signal);

    return () => {
      controller.abort();
    };
  }, [debouncedValue]);

  if (languageList.length === 0) return <></>;

  return (
    <div className="Suggestion">
      <ul>
        {languageList.map((lang, idx) => {
          return (
            <li key={idx} onClick={() => handleLanguageList(lang)}>
              {lang}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Suggestion;
