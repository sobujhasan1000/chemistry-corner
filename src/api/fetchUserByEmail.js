export const fetchUserByEmail = async (email) => {
  const res = await fetch(`http://localhost:5000/users/${email}`);
  return res.json();
};
