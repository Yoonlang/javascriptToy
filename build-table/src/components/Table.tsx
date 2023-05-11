import styled from "styled-components";
import employeeData from "datas/index.json";

const tableHeader = ["name", "title", "email", "role"];

interface TableProps {
  pageIdx: number;
}

const viewingDataForPage = 5;

const Table: React.FC<TableProps> = ({ pageIdx }) => {
  const currentEmployeeData = employeeData.slice(
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
        {currentEmployeeData.map((data) => {
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
