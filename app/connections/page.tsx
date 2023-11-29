import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import UsersTable from '../tableUsers';
import InvitesTable from '../tableInvites';

import { getSession, getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';

import axios from "axios";
import ConnectionsTable from '../tableConnections';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default withPageAuthRequired(async function MembersPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';


  let userOrg = {}, orgConnections = [];

  const token = await getAccessToken();

  try {

    if (token?.accessToken) {
      let getOrgConnections = await axios.get(`${process.env.AUTH0_BASE_URL}/api/organisation/connections`, {
        headers: {
          authorization: 'Bearer ' + token?.accessToken
        }
      })

      // console.log ('got user orgs ',JSON.stringify( getOrgConnections.data));
      console.log(orgConnections = [...getOrgConnections.data]);

    }
  } catch (e) {
    console.log(e);
  }

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="mb-8">
        <Title>Connections ({orgConnections && orgConnections?.length})</Title>
        <Text>Connections for this Organization.</Text>
        <Search />

        {orgConnections && orgConnections.length > 0 && <Card className="mt-6">
          <ConnectionsTable connections={orgConnections} />
        </Card>}
        {!orgConnections || orgConnections.length == 0 && <ConnectionsEmpty />}

      </div>


    </main>
  );
})

function ConnectionsEmpty() {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
        />
      </svg>
      <span className="mt-2 block text-sm font-semibold text-gray-900">There are no connections configured for this org</span>
    </button>
  )
}

