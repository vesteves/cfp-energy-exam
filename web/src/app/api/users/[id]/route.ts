import { NextRequest } from "next/server"

const GENERIC_ERROR = 'Server error. Please try in a few minutes.';

export async function GET(_: NextRequest, { params }: { params: { id: number } }) {
  const res = await fetch(`${process.env.API_URL}/api/users/${params.id}`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  })
  const data = await res.json()

  return Response.json({ data })
}

export async function PUT(req: NextRequest, { params }: { params: { id: number } }) {
  const userData = await req.json()

  const res = await fetch(`${process.env.API_URL}/api/users/${params.id}`, {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error.message || GENERIC_ERROR);
  }

  const data = await res.json();

  return Response.json({ data });
}

export async function DELETE(_: NextRequest, { params }: { params: { id: number } }) {
  const res = await fetch(`${process.env.API_URL}/api/users/${params.id}`, {
    cache: 'no-store',
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(GENERIC_ERROR);
  }

  const data = await res.json();
  console.log('data', data)

  return Response.json({ data });
}