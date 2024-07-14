import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid h-full grid-cols-[4rem_1fr] gap-12 sm:grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
