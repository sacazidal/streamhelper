import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "StreamHelper",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased dark:bg-neutral-800 bg-neutral-50 min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
