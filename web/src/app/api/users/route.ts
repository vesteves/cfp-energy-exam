export async function GET() {
  const res = await fetch(`${process.env.API_URL}/api/users`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  })
  const data = await res.json()

  return Response.json({ data })
}