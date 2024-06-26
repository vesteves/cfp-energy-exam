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
  });

  if (!res.ok) {
    try {
      const errorData = await res.json();
      return errorData
    } catch (jsonError) {
      throw new Error('Update failed. Please try again.');
    }
  }

  const data = await res.json();
  return data;
};

export const deleteUser = async (id: number) => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'DELETE'
  })
  const data = await res.json()

  return data;
}

export const createUser = async (params: any) => {
  const res = await fetch('/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    try {
      const errorData = await res.json();
      return errorData;
    } catch (jsonError) {
      throw new Error('Create failed. Please try again.');
    }
  }

  const data = await res.json();
  return data;
};