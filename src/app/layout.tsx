import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "StintMaster",
  description: "Manage your endurance racing stints with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <div style={{ height: "100%", maxWidth: "1920px", margin: "0 auto" }}>
        <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
