import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Link href="/dashborad">
    <Button variant="outline">Dashboard</Button>
    </Link>
 </div>
  );
}
