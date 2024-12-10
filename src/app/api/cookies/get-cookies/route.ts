import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { cookieName } = await request.json();
  const cookiesStore = cookies();
  const res_cookies = (await cookiesStore).get(cookieName);
  const response = NextResponse.json({
    cookieName: cookieName,
    cookieValue: res_cookies?.value,
  });
  return response;
}
