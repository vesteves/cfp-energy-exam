export const getUsers = async () => {
  const res = await fetch('/api/users')
  const data = await res.json()

  return data;
}

export const getUser = async (id: number) => {
  const res = await fetch(`/api/users/${id}`)
  const data = await res.json()

  return data;
}

export const updateUser = async (params: any) => {
  const res = await fetch(`/api/users/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(params),
  })
  const data = await res.json()

  return data;
}