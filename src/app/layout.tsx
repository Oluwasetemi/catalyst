import type { Metadata } from "next";
import "@/styles/globals.css";
import { SidebarLayout } from "@/components/sidebar-layout";
import { Navbar, NavbarSpacer, NavbarSection, NavbarItem } from "@/components/navbar";
import { MagnifyingGlassIcon, InboxIcon, HomeIcon, Square2StackIcon, TicketIcon, Cog6ToothIcon, MegaphoneIcon, QuestionMarkCircleIcon, SparklesIcon, ArrowRightStartOnRectangleIcon, UserIcon, Cog8ToothIcon, ShieldCheckIcon, LightBulbIcon, PlusIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, DropdownLabel, DropdownDivider } from "@/components/dropdown";
import { Avatar } from "@/components/avatar";
import { Sidebar, SidebarHeader, SidebarBody, SidebarSection, SidebarHeading, SidebarItem, SidebarLabel, SidebarSpacer, SidebarFooter } from "@/components/sidebar";

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
        <SidebarLayout
          navbar={
            <Navbar>
              <NavbarSpacer />
              <NavbarSection>
                <NavbarItem href="/search" aria-label="Search">
                  <MagnifyingGlassIcon />
                </NavbarItem>
                <NavbarItem href="/inbox" aria-label="Inbox">
                  <InboxIcon />
                </NavbarItem>
                <Dropdown>
                  <DropdownButton as={NavbarItem}>
                    <Avatar src="/profile-photo.jpg" square />
                  </DropdownButton>
                  <DropdownMenu className="min-w-64" anchor="bottom end">
                    <DropdownItem href="/my-profile">
                      <UserIcon />
                      <DropdownLabel>My profile</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/settings">
                      <Cog8ToothIcon />
                      <DropdownLabel>Settings</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/privacy-policy">
                      <ShieldCheckIcon />
                      <DropdownLabel>Privacy policy</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/share-feedback">
                      <LightBulbIcon />
                      <DropdownLabel>Share feedback</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/logout">
                      <ArrowRightStartOnRectangleIcon />
                      <DropdownLabel>Sign out</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarSection>
            </Navbar>
          }
          sidebar={
            <Sidebar>
              <SidebarHeader>
                <Dropdown>
                  <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                    <Avatar src="./teams/catalyst.svg" />
                    <SidebarLabel>Catalyst</SidebarLabel>
                    <ChevronDownIcon />
                  </DropdownButton>
                  <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
                    <DropdownItem href="/teams/1/settings">
                      <Cog8ToothIcon />
                      <DropdownLabel>Settings</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/teams/1">
                      <Avatar slot="icon" src="./teams/catalyst.svg" />
                      <DropdownLabel>Tailwind Labs</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/teams/2">
                      <Avatar slot="icon" initials="WC" className="bg-purple-500 text-white" />
                      <DropdownLabel>Workcation</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/teams/create">
                      <PlusIcon />
                      <DropdownLabel>New team&hellip;</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                {/* <SidebarSection className="max-lg:hidden">
                  <SidebarItem href="/search">
                    <MagnifyingGlassIcon />
                    <SidebarLabel>Search</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/inbox">
                    <InboxIcon />
                    <SidebarLabel>Inbox</SidebarLabel>
                  </SidebarItem>
                </SidebarSection> */}
              </SidebarHeader>
              <SidebarBody>
                <SidebarSection>
                  <SidebarItem href="/">
                    <HomeIcon />
                    <SidebarLabel>Home</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/events">
                    <Square2StackIcon />
                    <SidebarLabel>Events</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/orders">
                    <TicketIcon />
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/settings">
                    <Cog6ToothIcon />
                    <SidebarLabel>Settings</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/broadcasts">
                    <MegaphoneIcon />
                    <SidebarLabel>Broadcasts</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
                <SidebarSection className="max-lg:hidden">
                  <SidebarHeading>Upcoming Events</SidebarHeading>
                  <SidebarItem href="/events/1">Bear Hug: Live in Concert</SidebarItem>
                  <SidebarItem href="/events/2">Viking People</SidebarItem>
                  <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
                  <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
                </SidebarSection>
                <SidebarSpacer />
                <SidebarSection>
                  <SidebarItem href="/support">
                    <QuestionMarkCircleIcon />
                    <SidebarLabel>Support</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/changelog">
                    <SparklesIcon />
                    <SidebarLabel>Changelog</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              </SidebarBody>
              <SidebarFooter className="max-lg:hidden">
                <Dropdown>
                  <DropdownButton as={SidebarItem}>
                    <span className="flex min-w-0 items-center gap-3">
                      <Avatar src="/users/erica.jpg" className="size-10" square alt="" />
                      <span className="min-w-0">
                        <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Erica</span>
                        <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                          erica@example.com
                        </span>
                      </span>
                    </span>
                    <ChevronUpIcon />
                  </DropdownButton>
                  <DropdownMenu className="min-w-64" anchor="top start">
                    <DropdownItem href="/my-profile">
                      <UserIcon />
                      <DropdownLabel>My profile</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/settings">
                      <Cog8ToothIcon />
                      <DropdownLabel>Settings</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/privacy-policy">
                      <ShieldCheckIcon />
                      <DropdownLabel>Privacy policy</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/share-feedback">
                      <LightBulbIcon />
                      <DropdownLabel>Share feedback</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/logout">
                      <ArrowRightStartOnRectangleIcon />
                      <DropdownLabel>Sign out</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </SidebarFooter>
            </Sidebar>
          }
        >
          {/* The page content */}
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
