
import { NextResponse } from "next/server";
const axios = require("axios");

export async function GET(
  req,
  res
) {

  const jwt = require('jsonwebtoken');
  console.log('------------ org invites -----------')
  let org_id = jwt.decode(req?.headers.get('authorization').split(" ")[1]).org_id;
  
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

  let userOrg = await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/organizations/${org_id}/invitations`, {
    headers: {
      authorization: `Bearer ${a0MagementToken}`
    }
  });
  
  return NextResponse.json(
    userOrg.data, { status: 200 }
  )

}


