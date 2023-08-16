export const getGenderWiseMembers = async (gender, search) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/members?gender=${gender}&&search=${search}`
  );
  const data = res.json();
  return data;
};
