import {
  ArchiveBoxIcon,
  DocumentTextIcon,
  HomeIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

export const sideBarData = [
  {
    title: <span className="text-white">Home</span>,
    path: "/",
    icon: <HomeIcon className="text-white" />,

  },
  {
    title: <span className="text-white">Productos</span>,
    path: "/products/general",
    icon: <ArchiveBoxIcon className="text-white" />,
  },
  {
    title: <span className="text-white">Crear Producto</span>,
    path: "/products/create",
    icon: <LightBulbIcon className="text-white" />,
  }
];
