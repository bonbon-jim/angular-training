export interface SubMenuItem {
  route: string;
}

export interface SubMenuItemGroup {
  title?: string;
  subItems: SubMenuItem[];
}

export interface MenuItem {
  icon?: string;
  text: string;
  route?: string;
  subGroups?: SubMenuItemGroup[];
}