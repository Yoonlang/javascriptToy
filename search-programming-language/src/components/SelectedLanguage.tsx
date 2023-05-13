interface SelectedLanguageProps {
  selectedLanguage: string[];
}

const SelectedLanguage: React.FC<SelectedLanguageProps> = ({
  selectedLanguage,
}) => {
  return (
    <div className="SelectedLanguage">
      <ul>
        {selectedLanguage.map((lang, index) => {
          // index로 키 처리하면 안됨. 일단 임시
          return <li key={index}>{lang}</li>;
        })}
      </ul>
    </div>
  );
};

export default SelectedLanguage;
