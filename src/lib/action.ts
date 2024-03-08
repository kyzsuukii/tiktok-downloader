"use server";

import got from "got";

export async function downloadVideo(formData: FormData) {
  const url = formData.get("url");
  const response = await got.get(`${process.env.API_URL}/?url=${url}`, {
    headers: {
      "api-key": process.env.API_KEY,
    },
  });
  const data = response.body;
  return JSON.parse(data);
}
