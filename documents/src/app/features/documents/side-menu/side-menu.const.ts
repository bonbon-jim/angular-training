import { DocumentsRouting } from "../../../const/routing.config";
import { MenuItem } from "./menu-item/menu-item.model";

export const sideMenu: MenuItem[] = [
  {
    label: 'Bindings',
    route: DocumentsRouting.Binding
  },
  {
    label: '@Input',
    route: DocumentsRouting.InputPara
  },
  {
    icon: 'pi',
    label: 'API Call',
    route: DocumentsRouting.ApiCall
  },
]