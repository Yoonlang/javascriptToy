import styled from "styled-components";
import employeeData from "datas/index.json";

const tableHeader = ["name", "title", "email", "role"];

const Table: React.FC = () => {
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
        {employeeData.map((data) => {
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

const StyledTable = styled.table``;

export default Table;
