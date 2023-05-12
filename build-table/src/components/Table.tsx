import { useNavigate } from "react-router";
import styled from "styled-components";

const tableHeader = ["name", "title", "email", "role"];

interface EmployeeData {
  id: number;
  name: string;
  title: string;
  email: string;
  role: string;
}

interface TableProps {
  pageIdx: number;
  viewingDataForPage: number;
  employeeDataList: EmployeeData[];
}

const Table: React.FC<TableProps> = ({
  pageIdx,
  viewingDataForPage,
  employeeDataList,
}) => {
  const currentEmployeeDataList = employeeDataList.slice(
    (pageIdx - 1) * viewingDataForPage,
    pageIdx * viewingDataForPage
  );
  const navigate = useNavigate();

  return (
    <StyledTable>
      <thead>
        <tr>
          {tableHeader.map((title, index) => {
            return <th key={index}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {currentEmployeeDataList.map((data) => {
          const { id, name, title, email, role } = data;
          return (
            <tr
              onClick={() => navigate(`/web/user/${id}`, { state: data })}
              key={id}
            >
              <td>{name}</td>
              <td>{title}</td>
              <td>{email}</td>
              <td>{role}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  & td {
    text-align: center;
  }

  & tr {
    cursor: pointer;
  }

  & thead > tr,
  tr:nth-child(even) {
    background: lightgray;
  }
`;

export default Table;
