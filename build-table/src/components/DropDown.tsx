import { viewingDataLayer } from "consts";

interface DropDownProps {
  setViewingDataForPage: React.Dispatch<React.SetStateAction<number>>;
  resetViewingPage: () => void;
}

const DropDown: React.FC<DropDownProps> = ({
  setViewingDataForPage,
  resetViewingPage,
}) => {
  return (
    <select
      name="viewingDataNums"
      onChange={(e) => {
        setViewingDataForPage(viewingDataLayer[e.target.value]);
        resetViewingPage();
      }}
    >
      <option value="five">5개씩</option>
      <option value="fifteen">15개씩</option>
    </select>
  );
};

export default DropDown;
