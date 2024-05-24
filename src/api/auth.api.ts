export const Login = async (email: string, password: string) => {
  const res = await fetch(`https://localhost:4000/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await res.json();
  return data;
};
export const LoginFacebook = async (email: string, name: string) => {
  const res = await fetch(`http://localhost:4000/auth/facebook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, name: name }),
  });
  const data = await res.json();
  return data;
};
export const AddMovieToList = async (
  email: string,
  movie: {
    name: string;
    slug: string;
    tap: string;
    thumb_url: string;
    poster_url: string;
  }
) => {
  const data = {
    email: email,
    movie,
  };
  const res = await fetch(`http://localhost:4000/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
export const sendOtp = async (email: string) => {
  const res = await fetch(`http://localhost:4000/auth/send-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  const data = await res.json();
  return data;
};
export const getListMovie = async (id: string) => {
  const res = await fetch(`http://localhost:4000/list/id?id=${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
export const getUserByEmail = async (email: string) => {
  const res = await fetch(`https://localhost:4000/auth/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  const data = await res.json();
  return data;
};
