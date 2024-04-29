import { NextApiRequest } from "next"

export async function GET(_: NextApiRequest, { params }: { params: { id: number } }) {
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

export async function PUT(req: Request, { params }: { params: { id: number } }) {
  const userData = await req.json()

  const res = await fetch(`${process.env.API_URL}/api/users/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!res.ok) {
    throw new Error('Failed to update user')
  }

  const data = await res.json()

  return Response.json({ data })
}