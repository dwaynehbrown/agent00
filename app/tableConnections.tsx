import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

import { Switch } from "@tremor/react";

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
          <TableHeaderCell>Strategy</TableHeaderCell>
          <TableHeaderCell>Assign membership on login


            
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {connections.map((connection) => (
          <TableRow key={connection.connection_id}>
            <TableCell>{connection?.connection?.name}</TableCell>
            <TableCell>{connection?.connection?.strategy}</TableCell>
            <TableCell> 
             { connection?.assign_memnbership_on_login ? 'yes' : 'no'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
