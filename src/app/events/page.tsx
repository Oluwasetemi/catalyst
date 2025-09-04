import { Heading } from "@/components/heading";
import { Input, InputGroup } from "@/components/input";
import { Select } from "@/components/select";
import { getEvents } from "@/data";
import { MagnifyingGlassIcon, EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { Divider } from "@/components/divider";
import { Badge } from "@/components/badge";
import { Dropdown, DropdownMenu, DropdownButton, DropdownItem } from "@/components/dropdown";
import { Link } from "@/components/link";
import { Metadata } from "next";
import { CreateEventButton } from "@/components/dialogs/create-event";

export const metadata: Metadata = {
  title: "Events",
};

export default async function Events() {
  const events = await getEvents();
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Events</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Search events&hellip;" aria-label="Search" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort">
                <option value="last-week">Sort by name</option>
                <option value="last-two-weeks">Sort by date</option>
                <option value="last-month">Sort by location</option>
                <option value="last-quarter">Sort by status</option>
              </Select>
            </div>
          </div>
        </div>
        <CreateEventButton />
      </div>

      <ul className="mt-10">
        {events.map((event, index) => (
          <li key={event.id} className="">
            <Divider soft={index > 0} />
            <div className="flex items-center justify-between">
              <div className="flex gap-6 py-6">
                <div className="w-32 shrink-0">
                  <Link href={event.url}>
                    <img className="rounded-lg aspect-3/2 shadown-sm" src={event.imgUrl} alt={event.name} />
                  </Link>
                </div>
                <div className="space-y-1.5">
                  <div className="text-base/5 font-semibold">
                    <Link href={event.url}>
                      {event.name}
                    </Link>
                  </div>
                  <div className="text-xs/6 text-zinc-500">
                    {event.date} at {event.time} <span aria-hidden="true">·</span> {event.location}
                  </div>
                  <div className="text-xs/6 text-zinc-600">
                    {event.ticketsSold}/{event.ticketsAvailable} tickets sold
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="max-sm:hidden" color={event.status === "On Sale" ? "lime" : "zinc"}>{event.status}</Badge>
                <Dropdown>
                  <DropdownButton plain aria-label="More options">
                    <EllipsisVerticalIcon />
                  </DropdownButton>
                  <DropdownMenu anchor="bottom end">
                    <DropdownItem href={event.url}>View</DropdownItem>
                    <DropdownItem href={`/events/${event.id}/edit`}>Edit</DropdownItem>
                    <DropdownItem href={`/events/${event.id}/delete`}>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
