import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Tesimonials",
    path: "/testimonials",
    newTab: false,
  },
  {
    id: 30,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },

  {
    id: 5,
    title: "Countries",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "View All",
        path: "/blog?type=destination",
        newTab: false,
      },
      {
        id: 41,
        title: "USA",
        path: "/blog?type=usa",
        newTab: false,
      },
      {
        id: 42,
        title: "Germany",
        path: "/blog?type=germany",
        newTab: false,
      },
      {
        id: 43,
        title: "Australia",
        path: "/blog?type=australia",
        newTab: false,
      },
      {
        id: 44,
        title: "Singapore",
        path: "/blog?type=singapore",
        newTab: false,
      },
      {
        id: 45,
        title: "New Zealand",
        path: "/blog?type=new-zealand",
        newTab: false,
      },
      {
        id: 46,
        title: "UK",
        path: "/blog?type=uk",
        newTab: false,
      },
      {
        id: 47,
        title: "Canada",
        path: "/blog?type=canada",
        newTab: false,
      },
    ],
  },
  
];
export default menuData;
