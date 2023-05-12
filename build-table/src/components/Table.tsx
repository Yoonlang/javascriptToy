import styled from "styled-components";

const tableHeader = ["name", "title", "email", "role"];

interface EmployeeData {
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
          const { name, title, email, role } = data;
          return (
            <tr key={email}>
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

  & thead > tr,
  tr:nth-child(even) {
    background: lightgray;
  }
`;

export default Table;
