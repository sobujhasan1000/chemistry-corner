// ===========Get All Members===============
export const getAllMembers = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
  const data = res.json();
  return data;
};

// ==========Get Category Members=============
export const getGenderWiseMembers = async (gender) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/users?gender=${gender}`
  );
  const data = res.json();
  return data;
};

// ============search members by their name===========
export const membersSearch = async (text) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/usersSearchByName/${text}`
  );
  const data = res.json();
  return data;
};

// ============search members by their location===========
export const membersSearchByLocation = async (text) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/usersSearchByLocation/${text}`
  );
  const data = res.json();
  return data;
};

// ==========post notes in db=============
export const sendNotes = async (contactInfo) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/contact-us`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(contactInfo),
  });
  const data = response.json();
  return data;
};

export const getComplexSearch = async (gender, minAge, maxAge, country) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/find-your-partner?gender=${gender}&&minAge=${minAge}&&maxAge=${maxAge}&&country=${country}`
  );
  const data = response.json();
  return data;
};

// =========get a member=========
export const fetchMemberById = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/member/${id}`);
  const data = res.json();
  return data;
};

// ==========post an order==========
export const postOrder = async (orderInfo) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(orderInfo),
  });
  const data = res.json();
  return data;
};
