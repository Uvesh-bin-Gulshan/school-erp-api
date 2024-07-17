import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

interface BreadcrumbItem {
  href?: string;
  label: string;
}

interface BreadcrumbWithCustomSeparatorProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export function BreadcrumbWithCustomSeparator({
  items,
  separator = <BreadcrumbSeparator />,
}: BreadcrumbWithCustomSeparatorProps) {
  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <Link href={item.href} legacyBehavior passHref>
                  <BreadcrumbLink>{item.label}</BreadcrumbLink>
                </Link>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && separator}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
