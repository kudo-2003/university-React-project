import { Table } from 'semantic-ui-react';

const ClassHeader = () => {

  const tableHeader = [
    'Your name', 'Point', 'Class name', 'Year of Birth', 'Number phone', 'City', 'Academic ability'
  ];

  return(
    <Table.Header>
      <Table.Row>
        {tableHeader.map((table) => (
        <Table.HeaderCell content={table}/>
        ))}
      </Table.Row>
    </Table.Header>
  );
}

export default ClassHeader;