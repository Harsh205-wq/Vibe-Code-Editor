import { Button } from "@/components/ui/button";
import Image from "next/image";

import { db } from "@/lib/db"

export default async function Home() {
  const users = await db.user.findMany()
  console.log(users)

  return <div>Check terminal</div>
}