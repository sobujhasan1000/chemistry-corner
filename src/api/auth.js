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
