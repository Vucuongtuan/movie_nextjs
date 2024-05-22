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
export const AddMovieToList = async (idUser: string, movie: any[]) => {
  const data = {
    idUser: idUser,
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
