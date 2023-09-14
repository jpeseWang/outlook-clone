"use client";
import { useContext } from "react";
import NavPanel from "./NavPanel/NavPanel";
import InboxMail from "./Inbox/InboxMail";
import CreateEmail from "./CreateOrReadMail/CreateEmail";
import ViewEmail from "./CreateOrReadMail/ViewEmail/[id]/page";
import NotSelected from "./CreateOrReadMail/NotSelected";
import SentMail from "./Inbox/SentMail";
import { CurrentTabContext } from "@/context/CurrentTabContext";
export default function MainContent() {
  const { createOrViewMailTab, emailId, inboxTab } =
    useContext(CurrentTabContext);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-1">
          <NavPanel />
        </div>
        <div className="col-span-2 md:col-span-2">
          {inboxTab === "Inbox" ? <InboxMail /> : <SentMail />}
        </div>
        <div className="col-span-1 md:col-span-2">
          {createOrViewMailTab === "empty" ? (
            <NotSelected />
          ) : createOrViewMailTab === "createEmail" ? (
            <CreateEmail />
          ) : (
            <ViewEmail params={emailId} />
          )}
        </div>
      </div>
    </>
  );
}
