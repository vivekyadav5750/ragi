"use client";
import AccountDashboard from "@/components/AccountDashboard";
import { useTheme } from "next-themes";

export default function ProfilePage() {
  const theme = useTheme();
  let ModeToggle = theme.theme;
  return (
    <>
      <div className="mt-16">
        <AccountDashboard ModeToggle={ModeToggle} />
      </div>
    </>
  );
}
