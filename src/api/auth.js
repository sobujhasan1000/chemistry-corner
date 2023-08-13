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
