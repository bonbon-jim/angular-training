export interface SubMenuItem {
  label: string;
  route: string;
}

export interface SubMenuItemGroup {
  title?: string;
  subItems: SubMenuItem[];
}

export interface MenuItem {
  icon?: string;
  label: string;
  route?: string;
  subGroups?: SubMenuItemGroup[];
}