interface SearchInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  inputValue,
  setInputValue,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="SearchInput" onSubmit={onSubmit}>
      <input
        className="SearchInput__input"
        type="text"
        placeholder="프로그램 언어를 입력하세요."
        value={inputValue}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchInput;
