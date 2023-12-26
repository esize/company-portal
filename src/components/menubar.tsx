"use client";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { ModeToggle } from "./darkmode";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import React, { useState } from "react";
import BGT from "./bgtlogo";

export default function Menubar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="border-b">
        <div className="mx-8 flex h-16 items-center px-4">
          <Link href="/" className="hover:text-primary">
            <BGT
              className="light:fill-gray-800 light:hover:fill-gray-200 mr-4 h-8 transition-all  dark:fill-white dark:hover:fill-gray-200"
              color="black"
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>HR Management</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/hr/employees" title="Employees">
                      Manage the entire employee life cycle. From recruiting to
                      offboarding.
                    </ListItem>
                    <ListItem href="/hr/positions" title="Positions">
                      Create positions and define the job descriptions
                      associated with them.
                    </ListItem>
                    <ListItem href="/hr/teams" title="Teams">
                      Create and manage teams &mdash; the building blocks of
                      your organization.
                    </ListItem>
                    <ListItem href="/hr/compensation" title="Compensation">
                      Manage compensation and benefits.
                    </ListItem>
                    <ListItem href="/hr/attendance" title="Attendance">
                      Track attendance and time off.
                    </ListItem>
                    <ListItem href="/hr/reports" title="Reports">
                      Generate reports and export data.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Security</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/security/visitors" title="Visitors">
                      Manage visitors and contractors.
                    </ListItem>
                    <ListItem href="/security/vehicles" title="Vehicles">
                      Manage vehicles and parking.
                    </ListItem>
                    <ListItem href="/security/keys" title="Keys">
                      Manage keys and locks.
                    </ListItem>
                    <ListItem href="/security/ids" title="IDs">
                      Manage employee IDs.
                    </ListItem>
                    <ListItem href="/security/dispatch" title="Dispatch">
                      Log dispatch calls and manage incidents.
                    </ListItem>
                    <ListItem href="/security/reports" title="Reports">
                      Generate reports and export data.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Employee Scheduling
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/scheduling/schedules" title="Schedules">
                      Create schedules and assign employees to shifts.
                    </ListItem>
                    <ListItem href="/scheduling/shifts" title="Shifts">
                      Manage shifts and schedules.
                    </ListItem>
                    <ListItem
                      href="/scheduling/availability"
                      title="Availability"
                    >
                      Manage employee availability.
                    </ListItem>

                    <ListItem
                      href="/scheduling/forecasting"
                      title="Forecasting"
                    >
                      Forecast staffing needs.
                    </ListItem>
                    <ListItem href="/scheduling/variables" title="Variables">
                      Create and manage variables to forecast staffing needs.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Park Tickets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {/* products */}
                    <ListItem href="/tickets/products" title="Products">
                      Manage ticketing products.
                    </ListItem>
                    <ListItem href="/tickets/guests" title="Guests">
                      Manage guest accounts and tickets.
                    </ListItem>
                    <ListItem href="/tickets/validation" title="Validation">
                      Validate tickets.
                    </ListItem>
                    <ListItem
                      href="/tickets/complimentary"
                      title="Complimentary"
                    >
                      Issue and manage complimentary tickets.
                    </ListItem>
                    <ListItem href="/tickets/deactivation" title="Deactivation">
                      Deactivate tickets.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Finance</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/finance/transactions" title="Transactions">
                      Manage transactions.
                    </ListItem>
                    <ListItem href="/finance/accounts" title="Accounts">
                      Manage accounts.
                    </ListItem>
                    <ListItem href="/finance/budgets" title="Budgets">
                      Manage budgets.
                    </ListItem>
                    <ListItem href="/finance/ledger" title="Ledger">
                      Manage ledger.
                    </ListItem>
                    <ListItem href="/finance/reports" title="Reports">
                      Generate reports and export data.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/company/locations" title="Locations">
                      Manage locations.
                    </ListItem>
                    <ListItem href="/company/departments" title="Departments">
                      Manage departments.
                    </ListItem>
                    <ListItem href="/company/costcenters" title="Cost Centers">
                      Define and manage cost centers.
                    </ListItem>
                    <ListItem href="/company/reports" title="Reports">
                      Generate reports and export data.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">shadcn</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
