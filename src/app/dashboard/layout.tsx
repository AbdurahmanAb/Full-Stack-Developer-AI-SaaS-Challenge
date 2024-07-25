import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkLoaded>
        <Header />
      <div>{children}</div>
    </ClerkLoaded>
  );
}
