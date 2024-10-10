export const login = async (email: string, password: string) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return response.json();
};
