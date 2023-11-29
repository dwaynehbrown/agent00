
import { NextResponse } from "next/server";
const axios = require("axios");

export async function GET(
  req,
  res
) {

  const jwt = require('jsonwebtoken');
  console.log('-----------------------------')
  console.log('------------ user orgs --------------')
  console.log (req?.headers.get('authorization'))

  let userSub = jwt.decode(req?.headers.get('authorization').split(" ")[1]).sub;
  // console.log('user/oranisations ', userSub);

  // console.log(req?.headers.get('authorization'));

  // get management token
  var options = {
    method: 'POST',
    url: `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
    headers: { 'content-type': 'application/json' },
    body: {
      "client_id": process.env.AUTH0_M2M_CLIENT_ID,
      "client_secret": process.env.AUTH0_M2M_CLIENT_SECRET,
      "audience": process.env.AUTH0_ISSUER_BASE_URL +  "/api/v2/",
      "grant_type": "client_credentials"
    }
  };

  let m2m = await axios.post(options.url,
    options.body
  )

  let a0MagementToken = m2m.data?.access_token;

  let userOrgs = await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${userSub}/organizations`, {
    headers: {
      authorization: `Bearer ${a0MagementToken}`
    }
  });

  console.log ('------------------------------')
  console.log ('get user orgs ', userSub);
  console.log ('get user orgs', userOrgs.status, userOrgs.data);

  return NextResponse.json(
    userOrgs.data, { status: 200 }
  )

}


