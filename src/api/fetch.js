import axios from "axios";

// ===========Get All Members===============
export const getAllMembers = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/members`);
  const data = res.json();
  return data;
};

// ==========Get Category Members=============
export const getGenderWiseMembers = async (gender) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/members?gender=${gender}`
  );
  const data = res.json();
  return data;
};

// ============search members by their name===========
export const membersSearch = async (text) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/membersSearchByName/${text}`
  );
  const data = res.json();
  return data;
};
