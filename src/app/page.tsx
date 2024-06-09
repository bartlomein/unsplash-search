"use client";
import { useRouter } from "next/navigation";
import InputAndButton from "@/components/InputAndButton/InputAndButton";

import { buildQuery } from "@/lib/api";
export default function Home() {
  const router = useRouter();
  const submitPress = (value: string) => {
    const query = buildQuery(value, 1);
    router.push(`/images/${query}`);
  };
  return (
    <div>
      <InputAndButton onButtonPress={submitPress} />
      <div className="m-auto p-8 text-center">
        Please search for an image in the searchbar
      </div>
    </div>
  );
}
