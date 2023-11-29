

import { Card, Col, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Balancer from "react-wrap-balancer";
import Changelog from './components/changelog';
import Image from 'next/image'

import axios from "axios";

import { getSession, getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';

const website = [
  { name: '/home', value: 1230 },
  { name: '/contact', value: 751 },
  { name: '/gallery', value: 471 },
  { name: '/august-discount-offer', value: 280 },
  { name: '/case-studies', value: 78 }
];

const shop = [
  { name: '/home', value: 453 },
  { name: '/imprint', value: 351 },
  { name: '/shop', value: 271 },
  { name: '/pricing', value: 191 }
];

const app = [
  { name: '/shop', value: 789 },
  { name: '/product-features', value: 676 },
  { name: '/about', value: 564 },
  { name: '/login', value: 234 },
  { name: '/downloads', value: 191 }
];

const data = [
  {
    category: 'Website',
    stat: '10,234',
    data: website
  },
  {
    category: 'Online Shop',
    stat: '12,543',
    data: shop
  },
  {
    category: 'Mobile App',
    stat: '2,543',
    data: app
  }
];

export default async function DefaultPage() {

  let user = {}, token = {};

  try {
    user = await getSession()?.user;
  }
  catch (e) { console.log(e); }

  let userOrgs = [];
  ` `
  try {

    const token = await getAccessToken();

  } catch (e) {
    console.log(e);
  }

  if (token) {

    console.log('fe ', token.accessToken)

    if (token?.accessToken) {
      let getUserOrgs = await axios.get(`${process.env.AUTH0_BASE_URL}/api/user/organisations/`, {
        headers: {
          authorization: 'Bearer ' + token?.accessToken
        }
      })

      userOrgs = [...getUserOrgs.data];

    }
  }



  return (
    <>

      {!user && <LandingPage />}

      {user && <>

        <main className="p-4 md:p-10 mx-auto max-w-7xl">
          <h1>You are viewing {user?.org_id}</h1>


          <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
            {userOrgs?.map((org) => (
              <Card>
                <Text>You have access to</Text>
                <Metric>{org?.name}</Metric>
              </Card>
            ))}
          </Grid>
        </main>
      </>}

    </>
  );
}

function LandingPage() {
  return (<main className="p-4 md:p-10 mx-auto max-w-7xl">

    <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6 mb-8">
      <Col numColSpan={1} numColSpanLg={2}>
        <Card>
          <h1 className="mb-8">
            Open Source Delegated Admin for Auth0
          </h1>
          <Changelog />
        </Card>
      </Col>
      <Card>

        {/* <a href="/api/auth/login">log in</a> */}

        <h1 className="pb-6">Instructions
        </h1>

        <h2 className="pb-8">You will need the following .env vars</h2>


        <p>AUTH0_SECRET</p>
        <p>AUTH0_BASE_URL</p>
        <p>AUTH0_ISSUER_BASE_URL</p>
        <p>AUTH0_AUDIENCE</p>
        <p>AUTH0_CLIENT_ID</p>
        <p>AUTH0_M2M_CLIENT_ID</p>
        <p>AUTH0_M2M_CLIENT_SECRET</p>

      </Card>
    </Grid>
    {/* 
  <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
    {data.map((item) => (
      <Card key={item.category}>
        <Title>{item.category}</Title>
        <Flex
          justifyContent="start"
          alignItems="baseline"
          className="space-x-2"
        >
          <Metric>{item.stat}</Metric>
          <Text>Total views</Text>
        </Flex>
        <Flex className="mt-6">
          <Text>Pages</Text>
          <Text className="text-right">Views</Text>
        </Flex>
        <BarList
          data={item.data}
          valueFormatter={(number: number) =>
            Intl.NumberFormat('us').format(number).toString()
          }
          className="mt-2"
        />
      </Card>
    ))}
  </Grid> */}

  </main>)
}