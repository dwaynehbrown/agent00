import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface Connection {
  connection_id: string;
  assign_memnbership_on_login: string;
  connection: any;
}

export default function ConnectionsTable({ connections }: { connections: Connection[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {connections.map((connection) => (
          <TableRow key={connection.connection_id}>
            <TableCell>{connection?.name}</TableCell>
            <TableCell>
              <Text>{connection.connection_id}</Text>
            </TableCell>
            <TableCell>
              <Text>{connection?.email}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
