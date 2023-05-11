import { useRecoilState } from "recoil";
import { viewingMoreData } from "store";

const DropDown = () => {
  const [isViewingMoreData, setIsViewingMoreData] =
    useRecoilState(viewingMoreData);

  return (
    <select
      name="viewingDataNums"
      onChange={() => setIsViewingMoreData(!isViewingMoreData)}
    >
      <option value="five">5개씩</option>
      <option value="fifteen">15개씩</option>
    </select>
  );
};

export default DropDown;
