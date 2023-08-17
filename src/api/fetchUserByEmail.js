export const fetchUserByEmail = async (email) => {
  const res = await fetch(`https://chemistry-corner-server.vercel.app/users/${email}`);
  return res.json();
};
