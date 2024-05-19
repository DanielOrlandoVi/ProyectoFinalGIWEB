import {
  ArchiveBoxIcon,
  DocumentTextIcon,
  HomeIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

export const sideBarData = [
  {
    title: <span className="text-black">Home</span>,
    path: "/",
    icon: <HomeIcon className="text-black" />,

  },
  {
    title: <span className="text-black">Productos</span>,
    path: "/products/general",
    icon: <ArchiveBoxIcon className="text-black" />,
  },
  {
    title: <span className="text-black">Crear Producto</span>,
    path: "/products/create",
    icon: <LightBulbIcon className="text-black" />,
  }
];
