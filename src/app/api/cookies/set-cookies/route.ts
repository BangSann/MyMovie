import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { cookieValue, cookieName } = await request.json();
  console.log(cookieValue, cookieName);
  
  const cookiesStore = cookies();
  await (
    await cookiesStore
  ).set(cookieName, cookieValue, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24,
    sameSite: "strict",
  });
  const response = NextResponse.json({
    message: "Cookie set successfully",
    cookieName: cookieName,
    cookieValue: cookieValue,
  });
  return response;
}
