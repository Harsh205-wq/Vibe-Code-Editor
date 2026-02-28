import { Button } from "@/components/ui/button";
import Image from "next/image";

import { db } from "@/lib/db"
import UserButton from "@/modules/auth/componets/user.button";

export default async function Home() {
<div>
  <Button> Get Started</Button>
  <UserButton></UserButton>
  </div>
}