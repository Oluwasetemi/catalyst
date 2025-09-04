import type { Metadata } from "next";
import "@/styles/globals.css";
import { AppLayout } from "@/components/app-layout";


export const metadata: Metadata = {
  title: {
    template: "%s | Catalyst",
    default: "Catalyst",
  },
  description: "Catalyst is a starter kit for building your own component systems with React and Tailwind CSS — designed and developed by the Tailwind CSS team. It's a collection of beautiful, production-ready UI components you drop into your projects alongside your own code that are yours to customize, adapt, and make your own.",
  icons: {
    icon: "https://fav.farm/💲",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
