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

  const getLanguageList = async (keyword: string) => {
    try {
      const res = await fetch(`${fetchURL}/languages?keyword=${keyword}`);
      const data = await res.json();
      if (data.error) setLanguageList([]);
      else setLanguageList(data);
    } catch (err) {
      console.log(err);
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
    getLanguageList(debouncedValue);
  }, [debouncedValue]);

  if (languageList.length === 0) return <></>;

  return (
    <div className="Suggestion">
      <ul>
        {/* <li className="Suggestion__item--selected">
          Action<span className="Suggestion__item--matched">Script</span>
        </li> */}
        {languageList.map((lang, idx) => {
          //   const a = lang.split(debouncedValue);
          //   console.log(a);
          // debouncedValue랑 매칭해서 <span className="Suggestion__item--matched">Script</span>
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
