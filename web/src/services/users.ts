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