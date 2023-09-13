import NavPanel from "./NavPanel/NavPanel";
import InboxMail from "./Inbox/InboxMail";
import CreateOrReadMail from "./CreateOrReadMail/CreateOrReadMail";
export default function MainContent() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-1">
          <NavPanel />
        </div>
        <div className="col-span-2 md:col-span-2">
          <InboxMail />
        </div>
        <div className="col-span-1 md:col-span-2">
          <CreateOrReadMail />
        </div>
      </div>
    </>
  );
}
