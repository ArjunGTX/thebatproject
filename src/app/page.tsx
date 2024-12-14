import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center gap-6 w-svw h-svh p-10">
      <div className="relative w-full md:w-[34rem] rounded-md overflow-hidden aspect-[2/1]">
        <Image
          alt="Let him cook"
          src={"/images/let-him-cook.webp"}
          fill
          loading="eager"
          decoding="auto"
        />
      </div>
    </main>
  );
}
