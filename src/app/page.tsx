import Link from "next/link";

export default function Home() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Marketing QA</h1>
          <p className="py-6 text-xl">
            Marketing QA is a small project I designed to help automate some of
            the QA processes that my marketing agency regularly has to go
            through. Currently in beta we support basic ad QA.
          </p>
          <Link href="/adbuild">
            <button className="btn btn-primary">Try Ad Build</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
