export async function GET(_: Request, { params }: { params: { id: number } }) {
  const res = await fetch(`${process.env.API_URL}/api/users/${params.id}`, {
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  })
  const data = await res.json()

  return Response.json({ data })
}