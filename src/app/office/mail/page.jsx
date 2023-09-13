"use client";
import NavMenu from "./NavMenu/NavMenu";
import SidePanel from "./SidePanel/SidePanel";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function MailPage() {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") {
    router?.push("/login");
  }
  return (
    <div className="flex flex-col h-screen">
      <NavMenu />

      <div className="flex-1 overflow-y-auto">
        <div className="body relative">
          <SidePanel />
        </div>
      </div>
    </div>
  );
}
