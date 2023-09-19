// save user into database
export const saveUser = async (userInfo) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  const data = response.json();
  return data;
};

// update user profile into db
export const modifyUser = async (userInfo, email) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  const data = res.json();
  return data;
};

// =========update user role==========
export const updateUserRole = async (id, role) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user-role/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ role }),
  });
  const data = res.json();
  return data;
};

// ========update a user photos========
export const updateUserPhotos = async (id, photos) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user-photos/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(photos),
  });
  const data = res.json();
  return data;
};
// =======delete a user from db========
export const deleteAUser = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user/${id}`, {
    method: "DELETE",
  });
  const data = res.json();
  return data;
};
