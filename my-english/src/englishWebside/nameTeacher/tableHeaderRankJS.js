import { Table } from 'semantic-ui-react';
const TableRank = () =>{

    return(
        <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Ranking table</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>See level</Table.HeaderCell>
        <Table.HeaderCell>outstanding ability</Table.HeaderCell>
        <Table.HeaderCell>Evaluate</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    );
}

export default TableRank;