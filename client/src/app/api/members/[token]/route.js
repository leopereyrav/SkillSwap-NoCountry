export async function GET(request, { params }) {
  const response = await fetch(`${process.env.BACKEND_URL_BASE}/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${params.token}`,
    },
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: data.headers,
  });
}
