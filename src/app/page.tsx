import { Avatar } from "@/components/avatar";
import { Heading, Subheading } from "@/components/heading";
import { Select } from "@/components/select";
import { Stat } from "@/components/stat";
import { Table, TableRow, TableCell, TableHeader, TableHead, TableBody } from "@/components/table";
import { getRecentOrders } from "@/data";

export default async function Home() {
  const recentOrders = await getRecentOrders();
  return (
    <>
      <Heading>Good Afternoon, Erica</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Overview</Subheading>
        <div>
          <Select name="filter">
            <option value="last-week">Last Week</option>
            <option value="last-two-weeks">Last Two Weeks</option>
            <option value="last-month">Last Month</option>
            <option value="last-quarter">Last Quarter</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Total Revenue" value="$2.6M" change="+4.5%" changePeriod="last week" />
        <Stat title="Average Order Value" value="$112" change="-12.5%" changePeriod="last week" />
        <Stat title="Tickets Sold" value="5,100" change="+100%" changePeriod="last week" />
        <Stat title="Page Views" value="56,000" change="-2.5%" changePeriod="last week" />
      </div>
      <div className="mt-14">
        <Subheading>Recent Orders</Subheading>
        <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
          <TableHead>
            <TableRow>
              {/* Order number	Purchase date	Customer	Event	Amount */}
              <TableHeader>Order number</TableHeader>
              <TableHeader>Purchase date</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Event</TableHeader>
              <TableHeader className="text-right">Amount</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell className="text-zinc-500">{order.date}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>
                  <div>
                    <Avatar className="size-6 mr-2" src={order.event.imgUrl} />
                    <span>{order.event.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{order.amount.usd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
