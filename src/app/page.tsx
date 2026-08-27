import { cacheLife } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";
import { AuthControls } from "@/components/auth-controls";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@/lib/auth";

const HomePage = async () => {
  return (
    <>
      <header className="w-full border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="font-bold font-mono text-lg">
            Site Name Here
          </Link>
          <div className="flex items-center gap-2">
            <Suspense
              fallback={
                <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
              }
            >
              <AuthSlot />
            </Suspense>
          </div>
        </div>
      </header>
      <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:top-1/2 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="mb-1 font-extrabold font-mono text-4xl leading-tight tracking-tighter [word-spacing:-0.5rem] md:text-5xl">
          <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
            Next.js
          </span>{" "}
          starter template
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
        </p>
        <div className="mt-2 flex gap-4">
          <Suspense
            fallback={
              <div className="h-10 w-36 animate-pulse rounded-md bg-muted" />
            }
          >
            <CallToActionSlot />
          </Suspense>
          <Link
            href="https://github.com/Skolaczk/next-starter"
            target="_blank"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <Icons.github /> Github
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

const AuthSlot = async () => {
  const session = await getSession();

  return <AuthControls session={session} />;
};

const CallToActionSlot = async () => {
  const session = await getSession();

  if (session) return;

  return (
    <Link
      href="https://github.com/Skolaczk/next-starter/blob/main/README.md#getting-started"
      target="_blank"
      className={buttonVariants({ size: "lg" })}
    >
    </Link>
  );
};

const Footer = async () => {
  "use cache";
  cacheLife("days");

  return (
    <footer className="absolute bottom-3 w-full text-center text-muted-foreground text-sm">
      © {new Date().getFullYear()}{" "}
      <Link
        href="https://michalskolak.pl"
        className={buttonVariants({ variant: "link", className: "!p-0" })}
      >
        Michał Skolak
      </Link>
    </footer>
  );
};

export default HomePage;
