"use client";

import { downloadVideo } from "@/lib/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

export default function Form({ setData }: { setData: any }) {
  return (
    <form
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { data } = await downloadVideo(formData);
        setData(data);
      }}
      className="flex w-full flex-col md:flex-row max-w-lg mx-auto items-center gap-4"
    >
      <Input type="text" name="url" placeholder="Url" required />
      <Button type="submit">Download</Button>
    </form>
  );
}
