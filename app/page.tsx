import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-center flex-col h-[100%] gap-5">
      <p data-cy="title" className="text-3xl font-extrabold ">
        Wear better, look better.
      </p>
      <p className="font-semibold text-lg">Don&#39;t you just love being in apparel?</p>
      <Link href="/collections" className="bg-violet-700 p-2 rounded-lg text-white text-md font-bold">Shop Now</Link>
    </div>
  );
}
