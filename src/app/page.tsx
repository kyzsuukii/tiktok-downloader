"use client";

import Form from "@/components/Form";
import Hero from "@/components/Hero";
import { useState } from "react";
import ReactPlayer from "react-player";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function isEmpty(obj: Object | undefined) {
  for (var x in obj) {
    return false;
  }
  return true;
}

type Data = {
  code?: number;
  title?: string;
  play?: string;
};

export default function Home() {
  const [data, setData] = useState<Data>();
  return (
    <main className="container flex flex-col items-center">
      <Hero
        title="TikTok Downloader"
        description="Fast, simple, and no ads. Download your favorite TikTok videos with ease."
      />
      <Form setData={setData} />
      <div className="my-12">
        {!isEmpty(data) && (
          <Card className="max-w-2xl">
            <CardHeader>
              <CardDescription>{data?.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <ReactPlayer url={data?.play} playing={true} controls />
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
