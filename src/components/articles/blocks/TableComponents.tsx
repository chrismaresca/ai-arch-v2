import type React from "react";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const MDXTable = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-h-[45vh] overflow-y-auto">
    <Table className={cn("w-full my-0.5")}>{children}</Table>
  </div>
);

export const MDXTH = ({ children }: { children: React.ReactNode }) => 
  children ? <TableHead className="py-3 px-4 text-primary/90 max-w-[300px] min-w-[100px] break-words">{children}</TableHead> : null;

export const MDXTD = ({ children }: { children: React.ReactNode }) =>
  children ? <TableCell className="py-2 px-4 text-primary/90 max-w-[300px] min-w-[100px] break-words">{children}</TableCell> : null;

export const MDXTR = ({ children }: { children: React.ReactNode }) =>
  children ? <TableRow className="hover:bg-muted/50 transition-colors">{children}</TableRow> : null;

export const MDXTBody = ({ children }: { children: React.ReactNode }) =>
  children ? <TableBody>{children}</TableBody> : null;

export const MDXTableHeader = ({ children }: { children: React.ReactNode }) =>
  children ? <TableHeader className="bg-muted/80 hover:bg-muted/50 transition-colors">{children}</TableHeader> : null;

export const MDXTableBody = ({ children }: { children: React.ReactNode }) =>
  children ? <TableBody className="[&_tr:last-child]:border-0">{children}</TableBody> : null;

export const MDXTableFooter = ({ children }: { children: React.ReactNode }) =>
  children ? <TableFooter className="bg-muted/50 font-sm">{children}</TableFooter> : null;
