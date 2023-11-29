import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';

import axios from "axios";
import { getSession, getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';


export default withPageAuthRequired(async function PlaygroundPage() {

  let userOrg = {};

  const { user } = await getSession();

  const token = await getAccessToken();

  if (!user) {

    console.log('no session');

  } else {

    console.log(user);

    try {

      const token = await getAccessToken();

      if (token?.accessToken) {
        let getUserOrg = await axios.get(`${process.env.AUTH0_BASE_URL}/api/organisation/`, {
          headers: {
            authorization: 'Bearer ' + token?.accessToken
          }
        })

        // console.log ('got user orgs ',JSON.stringify( getUserOrg.data));
        console.log(userOrg = { ...getUserOrg.data });

      }
    } catch (e) {
      console.log(e);
    }

  }

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
      category: userOrg?.name,
      stat: '10,234',
      data: userOrg,
      render: (<><form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">&nbsp;</span>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="www.example.com"
                  value={userOrg?.name}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="DisplayName" className="block text-sm font-medium leading-6 text-gray-900">
              Display Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">&nbsp;</span>
                <input
                  type="text"
                  name="DisplayName"
                  id="DisplayName"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="www.example.com"
                  value={userOrg?.display_name}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="DisplayName" className="block text-sm font-medium leading-6 text-gray-900">
              Id
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">&nbsp;</span>
                <input
                  type="text"
                  name="Id"
                  id="Id"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                
                  value={userOrg?.id}
                  disabled
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form></>)
    },
    {
      category: 'Online Shop',
      stat: '12,543',
      data: shop,
      render: (<>
        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Logo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <img className="h-12 w-12 text-gray-300" src={userOrg.branding.logo_url} aria-hidden="true" />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Primary Colour
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="primary-colour"
                    id="primary-colour"
                    value={userOrg?.branding?.colors?.primary}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Page Background
                </label>
                <div className="mt-2">
                  <input
                    id="secondary-colour"
                    name="secondary-colour"
                    type="text"
                    value={userOrg?.branding?.colors?.page_background}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form></>)
    },
    {
      category: 'Mobile App',
      stat: '2,543',
      data: app,
      render: (<></>)
    }
  ];
  


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card key={item.category}>
            {/* <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>Total views</Text>
            </Flex> */}
            <Flex className="mt-6">
              <Text>Pages</Text>
              <Text className="text-right">Views</Text>
            </Flex>
            <>{item.render}</>
          </Card>
        ))}
      </Grid>
    </main>
  );
})
