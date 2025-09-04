"use client"

import { Button } from "../button";
import { Dialog, DialogBody, DialogActions, DialogTitle, DialogDescription } from "../dialog";
import { Field, Label } from "../fieldset";
import { Input } from "../input";
import { useState } from "react";

// {
//   id: 1001,
//   name: 'Six Fingers — DJ Set',
//   url: '/events/1001',
//   date: 'Jun 2, 2024',
//   time: '8 PM',
//   location: 'Moonbeam Arena, Uxbridge, ON',
//   totalRevenue: '$24,115',
//   totalRevenueChange: '+3.2%',
//   ticketsAvailable: 150,
//   ticketsSold: 72,
//   ticketsSoldChange: '+8.1%',
//   pageViews: '57,544',
//   pageViewsChange: '-2.5%',
//   status: 'On Sale',
//   imgUrl: '/events/six-fingers.jpg',
//   thumbUrl: '/events/six-fingers-thumb.jpg',
// }

export function CreateEvent({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  return (
    <Dialog open={isOpen} onClose={setIsOpen}>
      <DialogTitle>Create event</DialogTitle>
      <DialogDescription>
        Create a new event to sell tickets and manage your events.
      </DialogDescription>
      <DialogBody>
        <Field>
          <Label>Name</Label>
          <Input name="name" placeholder="Event name" />
        </Field>
        <Field>
          <Label>Date</Label>
          <Input name="date" placeholder="Event date" />
        </Field>
        <Field>
          <Label>Time</Label>
          <Input name="time" placeholder="Event time" />
        </Field>
        <Field>
          <Label>Location</Label>
          <Input name="location" placeholder="Event location" />
        </Field>
        <Field>
          <Label>Tickets available</Label>
          <Input name="ticketsAvailable" placeholder="Event tickets available" />
        </Field>
      </DialogBody>
      <DialogActions>
        <Button plain onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={() => setIsOpen(false)}>Refund</Button>
      </DialogActions>
    </Dialog>
  )
}

export function CreateEventButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Create event</Button>
      <CreateEvent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
