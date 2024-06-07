import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Homepage",
};

export default function Page() {
  return (
    <h1>
      Hello, Next.js! <Link href="/dashboard">Dashboard</Link>
    </h1>
  );
}
