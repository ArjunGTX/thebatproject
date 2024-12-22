"use client";

import { Button } from "@/components/Button";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<Props> = ({ reset }) => {
  return (
    <main className="flex flex-col items-center justify-center text-center w-svw h-svh gap-5 p-10">
      <h1 className="text-5xl font-bebas-neue xs:text-6xl md:text-8xl lg:text-9xl leading-none">
        The dark has taken over
      </h1>
      <p className="text-base md:text-xl text-tertiary mb-2 text-balance">
        The system is broken, consumed by the shadows. <br /> We are working in
        silence to bring back control&mdash;patience is your ally.
      </p>
      <Button onClick={reset} variant="primary">
        Await the signal
      </Button>
    </main>
  );
};

export default ErrorPage;
