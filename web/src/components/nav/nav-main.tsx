"use client";
import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import Link from "next/link";
import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { type RouteGroup } from "@/src/components/layouts/routes";

/** Maps RouteGroup enum values to i18n keys for the sidebar group labels. */
const ROUTE_GROUP_I18N_KEYS: Record<RouteGroup, string> = {
  [RouteGroup.Observability]: "nav.group.observability",
  [RouteGroup.PromptManagement]: "nav.group.promptManagement",
  [RouteGroup.Evaluation]: "nav.group.evaluation",
};

export type NavMainItem = {
  title: string;
  menuNode?: ReactNode;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  label?: string | ReactNode;
  newTab?: boolean;
  items?: {
    title: string;
    url: string;
    isActive?: boolean;
    newTab?: boolean;
  }[];
};

function NavItemContent({ item }: { item: NavMainItem }) {
  return (
    <>
      {item.icon && <item.icon />}
      <span>{item.title}</span>
      {item.label &&
        (typeof item.label === "string" ? (
          <span className="-my-0.5 self-center rounded-sm border px-1 py-0.5 text-xs leading-none break-keep whitespace-nowrap">
            {item.label}
          </span>
        ) : (
          // ReactNode
          item.label
        ))}
    </>
  );
}

export function NavMain({
  items,
}: {
  items: {
    grouped: Partial<Record<RouteGroup, NavMainItem[]>> | null;
    ungrouped: NavMainItem[];
  };
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.ungrouped.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.menuNode || (
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={item.isActive}
                  >
                    <Link
                      href={item.url}
                      target={item.newTab ? "_blank" : undefined}
                    >
                      <NavItemContent item={item} />
                    </Link>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      {items.grouped &&
        Object.entries(items.grouped).map(([group, items]) => {
          const groupKey = group as RouteGroup;
          const groupLabel = ROUTE_GROUP_I18N_KEYS[groupKey]
            ? t(ROUTE_GROUP_I18N_KEYS[groupKey])
            : group;
          return (
            <SidebarGroup key={group}>
              <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      {item.menuNode || (
                        <SidebarMenuButton
                          asChild
                          tooltip={item.title}
                          isActive={item.isActive}
                        >
                          <Link
                            href={item.url}
                            target={item.newTab ? "_blank" : undefined}
                          >
                            <NavItemContent item={item} />
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
    </>
  );
}
