export async function POST(request) {
  const { email, password } = await request.json();

  const response = await fetch(`${process.env.BACKEND_URL_BASE}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: data.headers,
  });
}
