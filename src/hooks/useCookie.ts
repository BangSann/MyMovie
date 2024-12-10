export function useCookie() {
  async function getCookies(cookieName: string) {
    const res = await fetch("/api/cookies/get-cookies", {
      method: "POST",
      body: JSON.stringify({ cookieName: cookieName }),
    });
    const data = await res.json();
    return data.cookieValue;
  }

  async function setCookie({
    cookieName,
    cookieValue,
  }: {
    cookieName: string;
    cookieValue: string;
  }) {
    console.log(cookieValue, cookieName);
    
    const res = await fetch("/api/cookies/set-cookies", {
      method: "POST",
      body: JSON.stringify({
        cookieValue: cookieValue,
        cookieName: cookieName,
      }),
    });

    return true;
  }

  return { getCookies, setCookie };
}
