import Link from "next/link";

export default function Home() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Marketing API</h1>
          <p className="py-6 text-xl">
            Marketing API is a small project I designed to help automate some of
            the marketing tasks we observe on a regular basis at my marketing
            agency. As more services are developed they will be added here.
          </p>
          <Link href="/adbuild">
            <button className="btn btn-primary">Try Ad Build</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
