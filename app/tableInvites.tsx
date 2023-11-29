import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface Invite {
  id: number;
  client_id: string;
  inviter: any;
  invitee: any;
  invitation_url: any;
  ticket_id: any;
  created_at: any;
  expires_at: any;
  organization_id: any;
}

export default function InvitesTable({ invites }: { invites: Invite[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Invitename</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invites.map((invite: any) => (
          <TableRow key={invite.id}>
            <TableCell>{invite.name}</TableCell>
            <TableCell>
              <Text>{invite.client_id}</Text>
            </TableCell>
            <TableCell>
              <Text>{invite.expiers_at}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
