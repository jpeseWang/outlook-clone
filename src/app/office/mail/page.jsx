import NavMenu from "./NavMenu/NavMenu";
import SidePanel from "./SidePanel/SidePanel";
export default function MailPage() {
  return (
    <div className="flex flex-col h-screen">
      <NavMenu />

      <div className="flex-1 overflow-y-auto">
        <div className="body relative">
          <SidePanel />
          Hahaha
        </div>
      </div>
    </div>
  );
}
