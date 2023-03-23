import axios from "axios";

const token = localStorage.getItem("token");

export async function getUserData(userId) {
  return await axios({
    method: "get",
    url: `https://groupomania-backend-xl2a.onrender.com/api/user/${userId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err));
}

export async function getUsersDatas() {
  return await axios({
    method: "get",
    url: `https://groupomania-backend-xl2a.onrender.com/api/user/`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err));
}

export async function getPosts() {
  return await axios({
    method: "get",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => {
    console.log(err);
  });
}

export async function getUserPosts(userId) {
  return await axios({
    method: "get",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/${userId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => {
    console.log(err);
  });
}

export async function addPost(data) {
  return await axios({
    method: "post",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/`,
    headers: {
      Authorization: "Bearer " + token,
    },
    data: data,
  }).catch((err) => console.log(err));
}

export async function deleteOnePost(postId) {
  return await axios({
    method: "delete",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/${postId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err));
}

export async function getComments(postId) {
  return await axios({
    method: "get",
    url: `https://groupomania-backend-xl2a.onrender.com/api/comment/${postId}/allcomments`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err));
}

export async function addComment(postId, data) {
  return await axios({
    method: "post",
    url: `https://groupomania-backend-xl2a.onrender.com/api/comment/${postId}`,
    headers: {
      Authorization: "Bearer " + token,
    },
    data: data,
  }).catch((err) => console.log(err));
}

export async function deleteOneComment(commentId) {
  return await axios({
    method: "delete",
    url: `https://groupomania-backend-xl2a.onrender.com/api/comment/${commentId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err));
}

export async function modifyPost(postId, post) {
  return await axios({
    method: "put",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/${postId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      message: post,
    },
  }).catch((err) => console.log(err));
}

export async function getProfilImg(userId) {
  return await axios({
    method: "get",
    url: `https://groupomania-backend-xl2a.onrender.com/api/user/image/${userId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err, token));
}

export async function putProfilImg(userId, data) {
  return await axios({
    method: "put",
    url: `https://groupomania-backend-xl2a.onrender.com/api/user/${userId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
    data: data,
  }).catch((err) => console.log(err));
}

export async function getPostImg(postId) {
  return await axios({
    method: "get",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/image/${postId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err));
}

export async function getLikes(postId) {
  return await axios({
    method: "get",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/countLikes/${postId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err));
}

export async function liked(postId, userId) {
  return await axios({
    method: "post",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/postLiked`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      post_id: postId,
      user_id: userId,
    },
  }).catch((err) => console.log(err));
}

export async function toggleLike(postId, userId) {
  return await axios({
    method: "post",
    url: `https://groupomania-backend-xl2a.onrender.com/api/post/likeUnlike`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      post_id: postId,
      user_id: userId,
    },
  }).catch((err) => console.log(err));
}

export async function putBio(userId, data) {
  return await axios({
    method: "put",
    url: `https://groupomania-backend-xl2a.onrender.com/api/user/${userId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
    data: data,
  }).catch((err) => console.log(err));
}

export async function putDesactivate(userId) {
  return await axios({
    method: "put",
    url: `https://groupomania-backend-xl2a.onrender.com/api/auth/desactivateAccount/${userId}`,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + token,
    },
  }).catch((err) => console.log(err));
}
