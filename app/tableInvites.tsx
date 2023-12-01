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
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Created</TableHeaderCell>
          <TableHeaderCell>Expires</TableHeaderCell>
          <TableHeaderCell>Invited By</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invites.map((invite: any) => (
          <TableRow key={invite.id}>
            <TableCell>{invite?.invitee?.email}</TableCell>
            <TableCell>
              <Text>{new Date (invite?.created_at).toLocaleDateString ()}</Text>
            </TableCell>
            <TableCell>
              <Text>{new Date (invite?.expires_at).toLocaleDateString ()}</Text>
            </TableCell>
            <TableCell>
              <Text>{invite?.inviter?.name}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
