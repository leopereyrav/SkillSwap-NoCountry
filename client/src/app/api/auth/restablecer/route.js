export async function POST(request) {
  const { email } = await request.json();

  const response = await fetch(
    `${process.env.BACKEND_URL_BASE}/forgot_password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  );

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: data.headers,
  });
}
