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

// ===========add to favorite==============
export const addToFavorite = async (favInfo) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/favorites`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(favInfo),
  });
  const data = res.json();
  return data;
};

export const removeFromFavorite = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/favorites/${id}`, {
    method: "DELETE",
  });
  const data = res.json();
  return data;
};
// ===========get favorite by email========
export const getFavoriteByEmail = async (email) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/favorites?email=${email}`
  );
  const data = res.json();
  return data;
};

// ===========get favoriteList by email===========
export const getFavoriteListByEmail = async (email) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/favoriteList/${email}`
  );
  const data = res.json();
  return data;
};

// ================== blogs ====================
export const getAllBlogs = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
  const data = res.json();
  return data;
};

export const addBlog = async (blogData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(blogData),
  });
  const data = response.json();
  return data;
};

// ===========Get All feedbacks===============
export const getAllFeedbacks = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/feedbacks`);
  const data = res.json();
  return data;
};

// ========add like==========
export const giveLike = async (id, userInfo) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/updateLikes/${id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }
  );
  const data = response.json();
  return data;
};

// ========remove like=========
export const removeLike = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/removeLikes/${id}`, {
    method: "PATCH",
  });
  const data = res.json();
  return data;
};

// =========get likes by email==========
export const getLikesByEmail = async (email) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/likes?email=${email}`
  );
  const data = res.json();
  return data;
};

// ===========get likesList by email===========
export const getLikesListById = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/likesList/${id}`);
  const data = res.json();
  return data;
};

// =========get single blog=========
export const getSigleBlog = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/blog/${id}`);
  const data = res.json();
  return data;
};

// ======get all blogs=========
export const getBlogs = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
  const data = res.json();
  return data;
};

// =========get all payment =============
export const getAllPayments = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/payments`);
  const data = res.json();
  return data;
};

// ========== contract-us get =============
export const getContractUs = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/contract-get`);
  const data = res.json();
  return data;
};