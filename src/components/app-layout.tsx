'use client'

import { SidebarLayout } from "@/components/sidebar-layout";
import { HomeIcon, Square2StackIcon, TicketIcon, Cog6ToothIcon, MegaphoneIcon, QuestionMarkCircleIcon, SparklesIcon, ArrowRightStartOnRectangleIcon, UserIcon, Cog8ToothIcon, ShieldCheckIcon, LightBulbIcon, PlusIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, DropdownLabel, DropdownDivider } from "@/components/dropdown";
import { Avatar } from "@/components/avatar";
import { Sidebar, SidebarHeader, SidebarBody, SidebarSection, SidebarHeading, SidebarItem, SidebarLabel, SidebarSpacer, SidebarFooter } from "@/components/sidebar";
import { MobileNavbar } from "@/components/mobile-navbar";
import { usePathname } from "next/navigation";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <SidebarLayout
      navbar={
        <MobileNavbar />
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
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/" current={pathname === "/"} aria-current={pathname === "/"} >
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/events" current={pathname === "/events"} aria-current={pathname === "/events"} >
                <Square2StackIcon />
                <SidebarLabel>Events</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders" current={pathname === "/orders"} aria-current={pathname === "/orders"} >
                <TicketIcon />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings" current={pathname === "/settings"} aria-current={pathname === "/settings"} >
                <Cog6ToothIcon />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/broadcasts" current={pathname === "/broadcasts"} aria-current={pathname === "/broadcasts"} >
                <MegaphoneIcon />
                <SidebarLabel>Broadcasts</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            {/* Upcoming Events from database */}
            <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Upcoming Events</SidebarHeading>
              <SidebarItem href="/events/1" current={pathname === "/events/1"} aria-current={pathname === "/events/1"} >
                Bear Hug: Live in Concert
              </SidebarItem>
              <SidebarItem href="/events/2" current={pathname === "/events/2"} aria-current={pathname === "/events/2"} >
                Viking People
              </SidebarItem>
              <SidebarItem href="/events/3" current={pathname === "/events/3"} aria-current={pathname === "/events/3"} >
                Six Fingers — DJ Set
              </SidebarItem>
              <SidebarItem href="/events/4" current={pathname === "/events/4"} aria-current={pathname === "/events/4"} >
                We All Look The Same
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support" current={pathname === "/support"} aria-current={pathname === "/support"} >
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog" current={pathname === "/changelog"} aria-current={pathname === "/changelog"} >
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src="/users/setemiojo.jpg" className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Setemi</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      me@oluwasetemi.dev
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
  )
}
