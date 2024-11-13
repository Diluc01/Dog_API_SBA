export async function getDogs() {
  const response = await fetch(
    "https://api.thedogapi.com/v1/images/search?limit=10"
  );
  const data = await response.json();
  return data;
}

export async function favouriteDog(id) {
  const response = await fetch("https://api.thedogapi.com/v1/votes", {
    method: "POST",
    headers: {
      "x-api-key":
        "live_iQEVPsxwsssjMyr9P3zzlqjVYLklOpCXJwFdx4cshkqKSIKRjqSpNJYyCaoC5jsx",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
      value: 1,
    }),
  });

  const data = await response.json();
  console.log(data);
}
