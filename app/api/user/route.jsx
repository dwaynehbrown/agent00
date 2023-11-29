
import { NextResponse } from "next/server";


export async function GET(
  req,
  res
) {

  console.log (' get user orgs' );
  const dummyData = { 
    users: [
      { id: 1, name: "Alice" }
      , { id: 2, name: "Bob" },
    ] 
  };

  return NextResponse.json({ dummyData }, { status: 200 });
}