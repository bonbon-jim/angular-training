import { DocumentsRouting } from "../../../const/routing.config";
import { MenuItem } from "./menu-item/menu-item.model";

export const sideMenu: MenuItem[] = [
  {
    icon: 'pi pi-desktop',
    label: 'Bindings',
    route: DocumentsRouting.Binding
  },
  {
    icon: 'pi pi-code',
    label: '@Input',
    route: DocumentsRouting.InputPara
  },
  {
    icon: 'pi pi-cloud-download',
    label: 'API Call',
    route: DocumentsRouting.ApiCall
  },
]