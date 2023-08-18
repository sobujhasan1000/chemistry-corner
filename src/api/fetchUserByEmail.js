export const fetchUserByEmail = async (email) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`);
  return res.json();
};
