export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },

  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
      },
      {
        childtitle: "Project  Dashbaord",
        childlink: "project",
      },
      {
        childtitle: " CRM Dashbaord",
        childlink: "crm",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
      },
    ],
  },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "changelog",
    isHide: false,
    badge: "1.0.0",
  },
  {
    isHeadr: true,
    title: "apps",
  },

  {
    title: "Chat",
    isHide: true,
    icon: "heroicons-outline:chat",
    link: "chat",
  },

  {
    title: "Email",
    isHide: true,
    icon: "heroicons-outline:mail",
    link: "email",
  },

  {
    title: "Kanban",
    isHide: true,
    icon: "heroicons-outline:view-boards",
    link: "kanban",
  },
  {
    title: "Calender",
    isHide: true,
    icon: "heroicons-outline:calendar",
    link: "calender",
  },

  {
    title: "Todo",
    isHide: true,
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
  },

  {
    title: "Projects",
    icon: "heroicons-outline:document",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Projects",
        childlink: "projects",
      },
      {
        childtitle: "Project Details",
        childlink: "project-details",
      },
    ],
  },
  {
    title: "Ecommerce",
    icon: "heroicons:shopping-bag",
    link: "#",
    child: [
      {
        childtitle: "User App",

        multi_menu: [
          {
            multiTitle: "Products",
            multiLink: "products",
          },
          {
            multiTitle: "Products Details",
            multiLink: "products/1",
          },

          {
            multiTitle: "Cart",
            multiLink: "cart",
          },
          {
            multiTitle: "Wishlist",
            multiLink: "wishlist",
          },
        ],
      },
      {
        childtitle: "Admin App",

        multi_menu: [
          {
            multiTitle: "Orders",
            multiLink: "orders",
            badge: "soon",
          },

          {
            multiTitle: "Add Product",
            multiLink: "add-product",
            badge: "soon",
          },
          {
            multiTitle: "Edit Product",
            multiLink: "edit-product",
            badge: "soon",
          },
          {
            multiTitle: "Customers",
            multiLink: "customers",
            badge: "soon",
          },
          {
            multiTitle: "Sellers",
            multiLink: "sellers",
            badge: "soon",
          },
          {
            multiTitle: "Invoice",
            multiLink: "invoice-ecommerce",
            badge: "soon",
          },
        ],
      },
    ],
  },
  {
    isHeadr: true,
    title: "Pages",
  },
  {
    title: "Authentication",
    icon: "heroicons-outline:lock-closed",
    link: "#",
    child: [
      {
        childtitle: "Signin One",
        childlink: "/",
      },
      {
        childtitle: "Signin Two",
        childlink: "/login2",
      },
      {
        childtitle: "Signin Three",
        childlink: "/login3",
      },
      {
        childtitle: "Signup One",
        childlink: "/reg",
      },
      {
        childtitle: "Signup Two",
        childlink: "/reg2",
      },
      {
        childtitle: "Signup Three",
        childlink: "/reg3",
      },
      {
        childtitle: "Forget Password One",
        childlink: "/forgot-password",
      },
      {
        childtitle: "Forget Password Two",
        childlink: "/forgot-password2",
      },
      {
        childtitle: "Forget Password Three",
        childlink: "/forgot-password3",
      },
      {
        childtitle: "Lock Screen One",
        childlink: "/lock-screen",
      },
      {
        childtitle: "Lock Screen Two",
        childlink: "/lock-screen2",
      },
      {
        childtitle: "Lock Screen Three",
        childlink: "/lock-screen3",
      },
    ],
  },
  {
    title: "Utility",
    icon: "heroicons-outline:view-boards",
    link: "#",
    isHide: false,
    child: [
      {
        childtitle: "Invoice",
        childlink: "invoice",
      },
      {
        childtitle: "Pricing",
        childlink: "pricing",
      },
      // {
      //   childtitle: "Testimonial",
      //   childlink: "testimonial",
      // },
      {
        childtitle: "FAQ",
        childlink: "faq",
      },
      {
        childtitle: "Blog",
        childlink: "blog",
      },
      {
        childtitle: "Blank page",
        childlink: "blank-page",
      },
      {
        childtitle: "Prfoile",
        childlink: "profile",
      },
      {
        childtitle: "Settings",
        childlink: "settings",
      },
      {
        childtitle: "404 page",
        childlink: "/404",
      },

      {
        childtitle: "Coming Soon",
        childlink: "/coming-soon",
      },
      {
        childtitle: "Under Maintanance page",
        childlink: "/under-construction",
      },
    ],
  },
  {
    isHeadr: true,
    title: "Elements",
  },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "#",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
      },
    ],
  },
  {
    title: "Components",
    icon: "heroicons-outline:collection",
    link: "#",
    child: [
      {
        childtitle: "Typography",
        childlink: "typography",
      },
      {
        childtitle: "Colors",
        childlink: "colors",
      },
      {
        childtitle: "Alert",
        childlink: "alert",
      },
      {
        childtitle: "Button",
        childlink: "button",
      },
      {
        childtitle: "Card",
        childlink: "card",
      },
      {
        childtitle: "Carousel",
        childlink: "carousel",
      },
      {
        childtitle: "Dropdown",
        childlink: "dropdown",
      },
      {
        childtitle: "Image",
        childlink: "image",
      },
      {
        childtitle: "Modal",
        childlink: "modal",
      },
      {
        childtitle: "Progress bar",
        childlink: "progress-bar",
      },
      {
        childtitle: "Placeholder",
        childlink: "placeholder",
      },
      {
        childtitle: "Tab & Accordion",
        childlink: "tab-accordion",
      },
      {
        childtitle: "Badges",
        childlink: "badges",
      },
      {
        childtitle: "Paginatins",
        childlink: "paginations",
      },
      {
        childtitle: "Video",
        childlink: "video",
      },
      {
        childtitle: "Tooltip & Popover",
        childlink: "tooltip-popover",
      },
    ],
  },
  {
    title: "Forms",
    icon: "heroicons-outline:clipboard-list",
    link: "#",
    child: [
      {
        childtitle: "Input",
        childlink: "input",
      },
      {
        childtitle: "Input group",
        childlink: "input-group",
      },
      {
        childtitle: "Input layout",
        childlink: "input-layout",
      },
      {
        childtitle: "Form validation",
        childlink: "form-validation",
      },
      {
        childtitle: "Wizard",
        childlink: "form-wizard",
      },
      {
        childtitle: "Input mask",
        childlink: "input-mask",
      },
      {
        childtitle: "File input",
        childlink: "file-input",
      },
      {
        childtitle: "Form repeater",
        childlink: "form-repeater",
      },
      {
        childtitle: "Textarea",
        childlink: "textarea",
      },
      {
        childtitle: "Checkbox",
        childlink: "checkbox",
      },
      {
        childtitle: "Radio button",
        childlink: "radio-button",
      },
      {
        childtitle: "Switch",
        childlink: "switch",
      },
      {
        childtitle: "Select & Vue select",
        childlink: "select",
      },
      {
        childtitle: "Date time picker",
        childlink: "date-time-picker",
      },
    ],
  },
  {
    title: "Table",
    icon: "heroicons-outline:table",
    link: "#",
    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
      },
      {
        childtitle: "React Table",
        childlink: "react-table",
      },
    ],
  },
  {
    title: "Chart",
    icon: "heroicons-outline:chart-bar",
    link: "#",
    child: [
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
      },
      {
        childtitle: "Recharts",
        childlink: "recharts",
      },
    ],
  },
  {
    title: "Map",
    icon: "heroicons-outline:map",
    link: "map",
  },
  {
    title: "Icons",
    icon: "heroicons-outline:emoji-happy",
    link: "icons",
  },
  {
    title: "Multi Level",
    icon: "heroicons:share",
    link: "#",
    child: [
      {
        childtitle: "Level 1.1",
        childlink: "icons",
      },
      {
        childtitle: "Level 1.2",
        childlink: "Level-1",
        multi_menu: [
          {
            multiTitle: "Level 2.1",
            multiLink: "Level-2",
          },
          {
            multiTitle: "Level 2.2",
            multiLink: "Level-2.3",
          },
        ],
      },
    ],
  },
];

export const topMenu = [
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },

          // {
          //   m_childtitle: "Testimonial",
          //   m_childlink: "testimonial",
          // },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blank page",
            m_childlink: "blank-page",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "/404",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "/coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "/under-construction",
          },
        ],
      },
    ],
  },

  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

import User1 from "@/assets/images/all-img/user.png";
import User2 from "@/assets/images/all-img/user2.png";
import User3 from "@/assets/images/all-img/user3.png";
import User4 from "@/assets/images/all-img/user4.png";
export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",

    image: User1,
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: User2,
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",

    image: User3,
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",

    image: User4,
    link: "#",
  },
];

export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: User1,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: User2,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: User2,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

import meetsImage1 from "@/assets/images/svg/sk.svg";
import meetsImage2 from "@/assets/images/svg/path.svg";
import meetsImage3 from "@/assets/images/svg/dc.svg";
import meetsImage4 from "@/assets/images/svg/sk.svg";

export const meets = [
  {
    img: meetsImage1,
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: meetsImage2,
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: meetsImage3,
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: meetsImage4,
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];
import file1Img from "@/assets/images/icon/file-1.svg";
import file2Img from "@/assets/images/icon/pdf-1.svg";
import file3Img from "@/assets/images/icon/zip-1.svg";
import file4Img from "@/assets/images/icon/pdf-2.svg";
import file5Img from "@/assets/images/icon/scr-1.svg";

export const files = [
  {
    img: file1Img,
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file2Img,
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file3Img,
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file4Img,
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file5Img,
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];

// ecommarce data

import blackJumper from "@/assets/images/e-commerce/product-card/classical-black-tshirt.png";
import blackTshirt from "@/assets/images/e-commerce/product-card/black-t-shirt.png";
import checkShirt from "@/assets/images/e-commerce/product-card/check-shirt.png";
import grayJumper from "@/assets/images/e-commerce/product-card/gray-jumper.png";
import grayTshirt from "@/assets/images/e-commerce/product-card/gray-t-shirt.png";
import pinkBlazer from "@/assets/images/e-commerce/product-card/pink-blazer.png";
import redTshirt from "@/assets/images/e-commerce/product-card/red-t-shirt.png";
import yellowFrok from "@/assets/images/e-commerce/product-card/yellow-frok.png";
import yellowJumper from "@/assets/images/e-commerce/product-card/yellow-jumper.png";

export const products = [
  {
    img: blackJumper,
    category: ["men"],
    name: "Classical Black T-Shirt Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt.",
    rating: "4.8",
    price: 489,
    oldPrice: "$700",
    percent: "40%",
    brand: "apple",
  },
  {
    img: blackTshirt,
    category: ["men"],
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 20,
    oldPrice: "$700",
    percent: "40%",
    brand: "apex",
  },
  {
    img: checkShirt,
    category: ["women"],
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 120,
    oldPrice: "$700",
    percent: "40%",
    brand: "easy",
  },
  {
    img: grayJumper,
    category: ["women"],
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 70,
    oldPrice: "$700",
    percent: "40%",
    brand: "pixel",
  },
  {
    img: grayTshirt,
    category: ["baby"],
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 30,
    oldPrice: "$700",
    percent: "40%",
    brand: "apex",
  },
  {
    img: pinkBlazer,
    category: ["women"],
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 40,
    oldPrice: "$700",
    percent: "40%",
    brand: "apple",
  },
  {
    img: redTshirt,
    category: ["women"],
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 90,
    oldPrice: "$700",
    percent: "40%",
    brand: "easy",
  },
  {
    img: yellowFrok,
    category: ["women"],
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 80,
    oldPrice: "$700",
    percent: "40%",
    brand: "pixel",
  },
  {
    img: yellowJumper,
    category: ["furniture"],
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 20,
    oldPrice: "$700",
    percent: "40%",
    brand: "samsung",
  },
];

const marketplaceFilters = ['insect', 'intertidal sampling', 'Active Layer', 'squirrel', 'colonial fort', 'underserved elementary schools', 'archaea', 'fish id', 'Android app', 'aquatic', 'Human Exposure Models', 'renewable', 'Stream health', 'Salinity', 'handwritten', 'openfda', 'aquaculture', 'watershed monitoring', 'Sea Ice', 'white house', 'larval transport', 'thunderstorm. hurricane', 'coastal streams', 'in-kind support', 'international collaboration', 'Underwater Archaeology', 'natural gas', 'DNA Barcode', 'social media', 'mammal', 'marine', 'Planet', 'Green Infrastructure', 'literature', 'sensor performance; environmental awareness; emerging sensor technologies', 'weather journal', 'storm surge', 'beach monitoring', 'bathymetry', 'Traditional Ecological Knowledge (TEK)', 'Community', 'resilience', 'exposure', 'urban informatics', 'female', 'science of science and innovation policy', 'planetary systems', 'Indigenous Knowledge', 'online', 'wildlife disease', 'Index survey', 'coral reefs', 'Parks', 'retina', 'Open Platform,Transparency', 'Sand', 'disease', 'production', 'Invasive terrestrial', 'carbon climate change satellite', 'Glacier Park', 'Population change', 'power outage', 'Blueback Herring', 'Ochotona princeps', 'earthquakes', 'Arctic', 'Coastal hazards', 'early-successional habitat', 'Canada', 'Space Exploration', 'Pollinators Native Plants', 'pollutants', 'molds', 'Plains to the park', 'innovation dynamics', 'Transcription', 'middle school', 'Volunteer', 'Debris', 'Community Practice', 'fishes', 'National Forest Foundation', 'Experiencing', 'flooding', 'harmful algal blooms', 'Space', 'capacity building', 'Harmful algal blooms', 'fish count', 'Community Monitoring', 'cyclone', 'iPhone app', 'Coastal', 'habitat monitoring', 'records', 'cactus moth', 'earth science', 'BERT', 'vaccine', 'Climate change', 'crowd sourcing', 'microplastics', 'Bluefin', 'Landslides', 'Sustainability', 'Park', 'tree mapping,', 'Mountain Goat', 'Public Awareness', 'high school', 'urban pollinator conservation', 'dc', 'NEFSC Ocean and Climate Branch', 'precision medicine', 'mapping', 'UCF', 'potable water', 'lakes', 'beached birds', 'water,', 'Herbarium', 'Crayfish', 'Hierarchical model', 'Universities', 'plant', 'ecology', 'Whole Genome Sequencing', 'Deaf; Deaf Community Research; informed consent; simulation; community engagement', 'Count data', 'evolved stars', 'New York', 'adaptation', 'queen', 'Lunar Science', 'observations', 'radiation', 'sampling', 'Child', 'Predator', 'Carbon Storage', 'Water quality monitoring', 'Water Quality', 'Bird count', 'travel management', 'cities', 'encyclopedia', 'Animals', 'ephemeral', 'community ecology', 'ionosphere', 'coordination', 'Ecosystem Ecology', 'historical records', 'laboratory astrophysics', 'Juno', 'Goats', ' center point', 'public health', 'stratigraphy', 'soil science', 'Exploitation', 'Open Source', 'Optical Character Recognition', 'Listeria', 'Pseudo-nitzschia', 'Biotoxins', 'weather', 'hummingbirds', 'Waterborne Pathogens', 'hazardous waste', 'Recreational Water Quality', 'Ladybugs', 'open-space', 'C-LINE', 'land cover', 'Sick wildlife', 'environmental chemistry', 'Savanna', 'damselflies', 'snapper', 'EPA', 'scuba dive', 'natural resource careers', 'Amphibians', 'Annual Survey', 'coyote', 'domoic acid', 'Environmental Stressors', 'New England', 'exchange', 'spotter', 'wind', 'conservation', 'mobile app', 'skiing', 'Quebec', 'emissions', 'Space Shuttle', 'ambphibians', 'water level', 'Bird survey', 'particulate matter', 'right whale', ' gas stations', 'climate', 'rain', 'taxonomy', 'Ecosystem', 'birds; biosecurity', 'National Park Service', 'extrasolar planets', 'Health Impacts', 'Project Budburst', 'Salt marsh', 'saliva', 'PM', 'Historic Preservation', 'historical archaeology', 'raptors', 'survey', 'crowdharvesting', 'perennial', 'benthic macroinvertebrates', 'marine debris', 'predator-prey', 'mosquitos', 'taste', 'Weippe Prairie', 'Antarctic Treaty Consultative Meeting', 'Alabama', 'camas lily', 'Internet', 'Children', 'aviation', 'citizen science,', 'metal contamination', 'Pennsylvania', 'Northeast States', 'reconfigurable architectures', 'Education', 'bumble bee', 'organic food', 'Ocean', 'freshwater streams', 'water pollution', 'Environmental Justice', 'scientific communication', 'delicious recipes', 'vehicular exhaust', 'citizen science; sensor performance; air sensor guidance', 'watershed', 'Volunteered Geographic Information (VGI)', 'United States', 'nesting success', 'biomedical', 'streamflow', 'Air quality', 'baldcypress swamp', 'forest', 'sea turtles', 'human activities', 'Hydrograph', 'pathogen surveillance', 'urban forest', 'mushrooms', 'natural resources', 'High School', 'regeneration', 'ground truthing', 'bioblitz', 'mobile data', 'research', 'pilots', 'Earthquakes', 'EduBat', 'Yellowfin', 'Maryland', 'Toads', ' Biology', 'Ohio', 'Chesapeake Bay', 'galaxy', 'Capacity Building', 'Monteverde', 'mammals', 'Breeding Call', 'chlorophyll', 'urban heat island', 'innovation', 'planet nine', 'landsat', 'Animal count', 'history', 'Fish and Wildlife Service (FWS)', 'Cal-EPA flowchart', 'Minnesota', 'entomology', 'lake', 'Houndstongue', 'American Woodcock', 'Transparent government', 'transcription', 'vegetables,', 'missouri', 'World War One', 'management-science partnerships', 'pesticide', 'spatial ecology', 'OpenStreetMap,', 'Plover', 'Children’s Environmental Health', 'Invasive plants', 'Genomics', ' urban ecology', 'humpback whale', 'geology', 'Safe Drinking Water Act', 'Astrobiology', 'GNSS', 'spiders', 'Land cover', 'birds', 'VGI', 'land potential', 'Grand Teton National Park', 'surveying', 'Rock Tank', 'Erosion', 'Landscaping', 'exposure reduction', 'transformative learning', 'forest ecology', 'computer vision', 'early detection', 'backyard birds', 'Forest Structure Wood Thrush', 'bird identification', 'apis mellifera', 'bacteria', 'Mobile Application', 'open educational resources', 'recreation', 'nitrogen dioxide', 'mullusks', 'Coronado National Memorial', 'weed', 'Courtship Display', 'coastal', 'Science', 'Phenology', 'Information Technology', 'SMART', 'geodesy', 'Astronaut photography', 'psychoPhysics', 'Propagation', 'Weedy plants', 'tropical', 'physical environment', 'National Park', 'Wetlands', 'Ovis canadensis', 'GIS', 'water', 'sea level rise', 'endangered species', 'Maps', 'marking', 'health effects', 'urban greening,urban forest', 'change', 'Indiana', 'natural phenomena', 'Connectivity', 'Citizen Sceince', 'Glen Canyon Dam', 'Collaboration', 'urban pollution', 'DISCOVER-AQ', 'reptiles', 'Yellow Toadflax', 'Jupiter', 'hawks', 'disaster', 'Illinois', 'NRCS Snow Survey', 'grouper', 'magnetic navigation', 'ocean', 'flowers', 'washington', 'marine litter', 'South Florida', 'humans', 'kelp', 'archives', 'pulsars', 'One Health', 'Community Engagement', 'harvested rainwater', 'environmental justice', 'fireballs', 'geocache', 'cultural heritage', 'cameratrap', 'response', 'weather recordkeeping', 'Citizen science', 'volcanic ash', 'fossils', 'nautical charting', 'Frogs', 'camera trapping', 'birding', 'Cancer', 'web map services', 'Accessibility', 'Canadian Wildlife Service', 'art', 'archeology', 'water sampling', 'heirloom varieties', 'parasite', 'Mission Planning Virtual', 'Lake Michigan', 'climate change activism', 'urban forestry', 'measuring environmental parameters drawing conclusions', 'NYC', 'environmental stewardship', 'World War Two', 'wolverine', 'bycatch', 'opuntia', 'students', 'Integrated Resource Management', 'Planetary Science', 'Influenza; Epidemic; flu; respiratory disease', 'crustaceans', 'threatened and endangered', 'Alaska', 'noxious weed', 'Ontario', 'Sediment', 'science', 'woods', 'genomics', 'leaf', 'environment', 'air quality', 'air', 'parasitism', 'Conservation', 'artifact', 'Beetles', 'flu', 'mobility impairments', 'plants,', 'land use change', 'Coastal change', 'oysters', 'clearcut', 'Synthetic Aperture Radar', 'humpback whale Caribbean', 'aurora borealis', 'cyberinfrastructure', 'Food safety', 'smokesense', 'Participatory Governance', 'fire', 'river', 'mentorship', 'Yukon River', 'natural disasters', 'Environment', 'emergency preparedness,', 'Zooniverse', 'fungicide', 'open government', 'BioGeography', 'ggnra', 'disaster_response', 'urbanization', 'Population dynamics', 'informatics', 'engagement', 'Computer Technology', 'smoke', 'Conservation Policy', 'New York City', 'computational model', 'Crowd Sourcing', 'right whales', 'Wildlife', 'Endangered species', 'design', 'Every Kid in a Park', 'aquatic ecology', 'BOINC', 'game camera', 'ozone', 'Urban', 'game', 'algal bloom', 'hypoxia', 'roost', 'stormwater', 'Dragonflies', 'Virginia', 'Management', 'geomagnetism', 'squash bee', 'West Virginia', 'Water quality', 'Undergraduate', 'ATBI (All Taxa Biodiversity Inventory)/BioBlitz SWAT Team 2014: Rocky Mountain National Park', 'Life', 'extreme heat', 'auto-coding', 'Twitter', 'Shellfish aquaculture', 'Pornogrpahic Activity', 'sea lion', 'Air Quality', 'Relative abundance', 'sightings', 'shoreline', 'Permafrost', 'damage maps', 'storm drain,', 'cyanobacteria', 'tropical ecology', 'Cartography', 'Index to abundance', 'Water quality testing', 'mountain hemlock', 'Grain Size', 'brain', 'seismograms', 'Florida', 'Nonindigenous', 'Search for Extraterrestrial Intelligence', 'ages 9-12', 'Marine conservation', 'Foodborne illness', 'volcano', 'trail camera', 'rivers', 'productivity', 'deer', 'data collection', 'postbreeding period', 'Geography', 'tree', 'Barcode Long Island', 'NPS', 'citizen science', 'habitat', 'Florida Keys', 'Pikas', 'restoration', 'Glacier National Park', 'Maritime Provinces', 'reservoir', 'flower', 'vegetable gardens', 'Oregon', 'sensor networks', 'Cattail', 'Secchi disk', 'volcanic smog', 'STEM', 'kayaking', 'longitudinal cohort', 'quality', 'typhoon', 'Butterflies', 'Environmental Awareness', 'Road Side Survey', 'falcons', 'Community Exposure', 'Loons', 'Open Access', 'fungi', 'dragonfly', 'water clarity', 'NASA', 'urban runoff', 'Research', 'geolocation', 'seasonal cycles', 'Birds', 'invasive species', 'physical crowdsourcing', 'habitat mapping', 'Spotted Knapweed', 'History', 'Population decline', 'storms', 'Bird data', 'wildlife', 'Department of Energy', 'eDNA', 'plant measurement', 'bees', 'swim', 'NGLY1', 'Disaster response', 'carbon dioxide', 'Vesta', 'Seismograph', 'crater lake', 'marine environment', 'tools & training', 'marine mammals', 'hydrography', 'story map', 'healthy eating', 'cricket', 'Bats', 'puzzle', 'Montana', 'data', 'radio transmitter', 'plants', 'ground truth', 'Moth', 'park', 'Monitoring', 'Pollinators/insects', 'magnetometer', 'Nova Scotia', 'Flowers', 'Lakes', 'imagery', 'behavior', 'radio astronomy', 'Ecology', 'CUAHSI', 'Trend analysis', 'eagles', 'macroinvertebrates', 'energy', 'insects', 'precipitation', 'pond', 'cactus', 'Skywarn', 'Diving', 'dissolved oxygen', 'recovery', 'Antarctica', 'Population trends', 'Ashland', 'Sexual Abuse', 'seismic', 'traditional', 'field guide', 'paraphrasing', 'Costal Communities', 'environmental science', 'wildfire', 'bats', 'Proof of concept', 'eyewire', 'penguin', 'Technology', 'summer camps', 'hiking,', 'Infrastructure', 'DC', 'pollution', 'honey bee', 'Asteroids', 'marine birds', 'Monarch butterfly', 'Rhode Island', 'wheelchair access', 'tracking', 'rockfish', 'seafood contamination', 'soil', 'Battle of the Atlantic', 'brown dwarfs', 'library', 'apiary', 'bird', 'wildlife management', 'Nature', 'observation', 'Track Trail', 'ashfall', 'waterbirds', 'headwaters', 'HAB monitoring', 'monitor', 'Agroecology', 'Connecticut', 'natural history collections', 'Futures', 'cyanotoxins', 'crowdsourcing', 'fires', 'Ground-based landscape data', 'natural disaster', 'participatory science', 'Standards', 'Gulf Oil Spill', 'endangered whales', 'artificial intelligence', 'migratory geese', 'nutrients', 'avian botulism', 'community engagement', 'fish', 'Adventurers and Scientists for Conservation', 'Public Participation', 'invasives', 'equipment lending', 'Invasive Fish Species', 'noxious weeds', 'Hawaii', 'Medicinal Herbs', 'cloud science', 'broadening participation', 'wader', 'recording', 'flood', 'Harmful Algal Blooms', 'WISE', 'native species', 'extreme weather', 'Hydrology', 'NWS', 'investigating and pondering', 'Citizen Science', 'INCLUDES', 'Red Knot', 'groundfish', 'riparian', 'alfalfa leafcutter bee', 'circumstellar chemistry', 'wing venation', 'air quality measurements', 'Crowdsourcing', 'beekeeper', 'hurricane', 'photography', '#wedigbio', 'urban ecology', 'biodiversity', 'Invasive species', 'wetlands', 'global community', 'home canning', 'phenology', 'Steller sea lion', 'identification', 'Alewife', 'Kaibab National Forest', 'bird count', 'volunteer data,', 'protists', 'Scientific Committee for Antarctic Research', 'microplastic', 'Mammals', 'saguaro', 'Oncology', 'whale alert', 'Spectral Usage', 'State Wildlife Agencies', 'Central California', 'meteors', 'canada lynx', 'DOE', 'NPN', 'Machine Learning', 'snow', 'virus', 'astronomy', 'biogeochemistry', 'United States Fish and Wildlife Service', 'Carl Sandburg', 'systematic survey', 'space debris', 'environmental health', 'Timberdoodle', 'community based data', 'climate change public data', 'Population modeling', 'Climate Impacts', 'Food Security', 'Atlantic Flyway', 'NOAA', 'avian survival', 'satellite', 'geothermal', 'social science', 'bird watching', 'Weather observation', 'volunteers,', 'bird mortality', 'mercury', 'coast,', 'photo-ID', 'Singing Ground Survey', 'annotation', "farmer's markets", 'science curriculum; sulfur dioxide', 'Bald Eagle', 'rocky intertidal', 'Oceanography', 'butterfly', 'red tides', 'landscape', 'Picture Post Phenology Bloom Time', 'Amphibian', 'low-cost sensors', 'Bird community', 'Baltimore', 'DO', 'Delaware', 'habitat choice', 'Renewable Energy', 'biological control', 'bird banding', 'storm drain', 'Marlin', 'Woodcock', 'marine science', 'iNaturalist', 'native bees', 'Technosignature', 'invasive', 'goviral', 'NSF', 'landslides', 'pika', 'trees', 'nest', 'interconnected', 'earthquake', 'king tide', 'Aquatic species', 'Solar', 'Beach', 'public participation', 'Mountain Goats', 'Natural History Collections', 'connectome', 'excavation', 'Exoplanets NASA telescope', 'wildflowers', 'salamander', 'Gavia immer', 'curriculum', 'Commission for the Conservation of Antarctic Marine Living Resources', 'pacific coast', 'carbon climate change monitoring', 'Mapping algorithms', 'adventure science', 'following science protocols', 'fur trade', 'hail', 'phenology woodthrush urban forest', 'community science', 'Glacier', 'urban greening', 'Signal Strength', 'salmon', 'rocks', 'historic,', 'marine reserve', 'Planets', 'education', 'seabirds', 'surveys', 'sensors', 'diverse', 'Common Loon', 'nature', 'model', 'hydrology', 'Environmental Survey', 'Maine', 'San Bernardino Mountains', 'Population Indices', 'pH', 'crowd source', 'video', 'Costa Rica', 'Sanitary Survey', 'blue whale', 'Goat', 'New Brunswick', 'Fugitive', 'CairClip', 'nitrogen', 'Breeding Range', 'invertebrates', 'monitoring', 'ice', 'Arizona', 'huckleberry', 'bird survey', 'Coastal Geology', 'citizen seismology', 'Centaurea stoebe', 'botany', 'Defense', 'student science', 'Northeast Cooperative Research Branch', 'pervasive', 'pollination services', 'undergraduate biology education', 'Natural Hazards', 'Bird abundance', 'Freshwater organisms', 'Prince Edward Island', 'networks', 'photo point', 'Secchi', 'Christmas', 'pollinator', 'checklist', 'meteorology', 'remotely sensed', 'tagging', '#wedigflplants', 'urban', 'Columbia River', 'storm', 'toxicology', 'Oreamnos americanus', 'remote sensing', 'greenhouse gas exchange', 'larva', 'Stream monitoring', 'maps', 'Digital seismograph', 'intermittent', 'drones', 'Renewable Energy; Transmission; Regulatory; Permitting', 'Beach Monitoring', 'nonpoint source pollution', 'cameras', 'Arlington', 'vegetables', 'Air pollution', ' Biogeochemistry', 'GLRI', 'Species Monitoring', 'botanical', 'rufous hummingbird', 'Massachusetts', 'birder', 'sick', 'collection', 'Drinking Water', 'Herbaria', 'freshwater', 'machine learning', 'Sequestration', 'salinity', 'Regional', 'fisheries', 'Digitization', 'Wildlife count', 'management', 'clouds', 'environmental education', 'data mining', 'Avian Biology', 'Water Quality Monitoring', 'satellite comparison', 'opportunistic reports', 'STEM education', 'Climate Data', 'data entry', 'Animal survey', 'horseshoe crab', 'mature-forest birds', 'seasons', 'Stabilization', 'Whales', 'tribal', 'smartphones', 'Migration', 'piping plover', 'Nonnative', 'Watershed', 'beaches', 'international space station', 'wet meadow', 'carbon climate change data', 'hiking', 'agave', 'Data extraction', 'Aquatic plants', 'GEBCO', 'training', 'Behavior', 'paleontology', 'Toxicity', 'adaptive management', 'Flying Squirrel', 'Ground Truthing', 'Crowdmapping', 'BioBlitz', 'social', 'sea-level rise', 'measuring snow courses', 'Newark', 'agriculture', 'Bird Studies Canada', 'environmenta justice', 'Space Weather', 'climate change', 'Nutrients', 'Invasive Species', 'ecosystems', 'Animal behavior', 'Bird diversity', 'Reptiles', 'California condor', 'shorebird', 'volunteer monitoring', 'Biodiversity', 'Biology', 'insecticide', 'PEFO', 'minerals', 'turkey', 'Structures', 'biology', 'place', 'point source', 'National Planning', 'Water', 'Public-Private Partnership', 'Caterpillar', 'National Laboratory', 'stream', 'camas', 'personal exposure', 'spotter pro', 'Belize', 'neuron', 'Geology', 'Linaria vulgaris', 'Vermont', 'Ornithology', 'Midwest', 'ADA', 'Mars', 'Fish Cam', 'katydid', 'mosquito-borne disease', 'Earthquake', 'biomonitoring', 'Climate', 'engineering', 'tool', 'Colorado', 'sleet', 'Range map', 'Native American', 'forest health', 'Mining', 'radio', 'volunteer', 'weeds', 'wildland fire', 'New Jersey', 'archive', 'reefs', 'bear', 'high-school', 'St. Johnswort', 'Leucanthemum vulgare', 'natural language processing', 'Population increase', 'human pharmacology', 'Wisconsin', 'Hypericum perforatum', 'climate change monitoring', 'fishing', 'national park', 'brown pelican', 'replication', 'Lesser long-nosed bats', 'Management Regions', 'habitat suitability model', 'cloud observation', 'Mapping', 'Geomorphology', 'lamprey', 'Broadband', 'C-FERST', 'landowner', 'public awareness', 'mining', 'testing hypotheses', 'Maple', 'automatic-species-identification', 'computational-ecology', 'banding', 'Training', 'partnership', 'Salmonella', 'environmental archaeology', 'photo-inventories', 'algae', 'Aerial photographs', 'national parks', 'local growing', 'custom domain specific architectures', 'technology; citizen science; air monitoring', 'United States Forest Service', 'Bighorn Sheep', 'Astronomy', 'Volunteer Monitoring', 'PAHs', 'environmental pollution', 'SETI', 'Families', 'interstellar dust', 'collaborative adaptive rangeland management', 'Wireless Channel', 'Cabin', 'pollinators', 'Air Pollution', 'worms', 'robotics', 'coast', 'bat', 'tornado', 'summer camp', 'rural', 'Temperature', 'paddling', 'Petrified Forest National Park', 'Peent', 'floods', 'sample collection', 'intertidal monitoring', 'temperature,', 'IPM', 'Army', 'computing', 'water quality', 'Pika', 'Museums', 'health', 'channel islands', 'salt marsh', 'Moon', 'satellites', 'Kids', 'on-the-go crowdsourcing', 'volcanoes', 'Kelly Warm Spring', 'ecological forecasting', 'organic', 'garden', 'damage', 'species', 'Cynoglossum officinale', 'community', 'beach', 'environmental monitoring', 'Loon', 'Youth Involvement', 'hazard', 'indoor air', 'Scientific Data', 'Great Lakes', 'ISS', 'gravitational lens', 'California', 'openstreetmap', 'Rocky Mountain National Park', 'Route Level', 'genetics', 'science literacy', 'Sheep', 'storm water', 'oceanographic', 'minority', 'adult education', 'Climate Change', 'shoreline monitoring', 'detection', 'zooniverse', 'Trees', 'grasslands', 'hummingbird feeder', 'seafloor', 'Point count', 'EnviroAtlas', 'Sugar Maple', 'remotesensing', 'community justice', 'Audubon', 'non-perennial', 'survival', 'Student Initiated Research', 'Photography', 'mosquito', 'landslide', 'Mobile application', ' ecology', 'Oxeye Daisy', 'protozoa', 'Tree of Life', 'natural hazards', 'animals', 'butterfly transects', 'viruses', 'Viriginia', 'crab', 'coke ovens', 'migration', 'Natural hazards', 'plant phenology', 'picture post', 'sandy beach', 'teachers', 'Michigan', 'Manitoba', 'Purple Loosestrife', 'environmental literacy', 'and Marine', 'amphbian ecology', 'sea ice', 'Wildlife survey', 'Environmental Monitoring', 'Landscape photographs', 'Cal-EPA courses', 'mentor', 'phosphorus', 'youth engagement', 'Plants', 'ICC', 'International Space Station', 'Exploited', 'Mississippi Flyway', 'humanities', 'ecosystem ecology', 'Butterfly', 'Missing', 'air pollution', 'Index', 'New Hampshire', 'open data', 'echo sounders', 'underserved communities', 'Adaptive Management'];

export const categories = [{ label: "All", value: "all", count: "9724" }, ...marketplaceFilters.map(filter=>({label: filter[0].toUpperCase()+filter.substring(1), value: filter.toLowerCase(), count: "100"})).sort((a,b)=> a[0]<b[0])];

export const brands = [
  { label: "Apple", value: "apple", count: "9724" },
  { label: "Apex", value: "apex", count: "1312" },
  { label: "Easy", value: "easy", count: "3752" },
  { label: "Pixel", value: "pixel", count: "985" },
  { label: "Samsung", value: "samsung", count: "2460" },
];

export const price = [
  {
    label: "$0 - $199",
    value: {
      min: 0,
      max: 199,
    },
    count: "9724",
  },
  {
    label: "$200 - $449",
    value: {
      min: 200,
      max: 499,
    },
    count: "1312",
  },
  {
    label: "$450 - $599",
    value: {
      min: 450,
      max: 599,
    },
    count: "3752",
  },
  {
    label: "$600 - $799",
    value: {
      min: 600,
      max: 799,
    },
    count: "985",
  },
  {
    label: "$800 & Above",
    value: {
      min: 800,
      max: 1000,
    },
    count: "745",
  },
];

export const ratings = [
  { name: 5, value: 5, count: "9724" },
  { name: 4, value: 4, count: "1312" },
  { name: 3, value: 3, count: "3752" },
  { name: 2, value: 2, count: "985" },
  { name: 1, value: 1, count: "2460" },
];

export const selectOptions = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];
export const selectCategory = [
  {
    value: "option1",
    label: "Top Rated",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];

import bkash from "@/assets/images/e-commerce/cart-icon/bkash.png";
import fatoorah from "@/assets/images/e-commerce/cart-icon/fatoorah.png";
import instamojo from "@/assets/images/e-commerce/cart-icon/instamojo.png";
import iyzco from "@/assets/images/e-commerce/cart-icon/iyzco.png";
import nagad from "@/assets/images/e-commerce/cart-icon/nagad.png";
import ngenious from "@/assets/images/e-commerce/cart-icon/ngenious.png";
import payfast from "@/assets/images/e-commerce/cart-icon/payfast.png";
import payku from "@/assets/images/e-commerce/cart-icon/payku.png";
import paypal from "@/assets/images/e-commerce/cart-icon/paypal.png";
import paytm from "@/assets/images/e-commerce/cart-icon/paytm.png";
import razorpay from "@/assets/images/e-commerce/cart-icon/razorpay.png";
import ssl from "@/assets/images/e-commerce/cart-icon/ssl.png";
import stripe from "@/assets/images/e-commerce/cart-icon/stripe.png";
import truck from "@/assets/images/e-commerce/cart-icon/truck.png";
import vougepay from "@/assets/images/e-commerce/cart-icon/vougepay.png";

export const payments = [
  {
    img: bkash,
    value: "bkash",
  },
  {
    img: fatoorah,
    value: "fatoorah",
  },
  {
    img: instamojo,
    value: "instamojo",
  },
  {
    img: iyzco,
    value: "iyzco",
  },
  {
    img: nagad,
    value: "nagad",
  },
  {
    img: ngenious,
    value: "ngenious",
  },

  {
    img: payfast,
    value: "payfast",
  },
  {
    img: payku,
    value: "payku",
  },
  {
    img: paypal,
    value: "paypal",
  },
  {
    img: paytm,
    value: "paytm",
  },
  {
    img: razorpay,
    value: "razorpay",
  },
  {
    img: ssl,
    value: "ssl",
  },
  {
    img: stripe,
    value: "stripe",
  },
  {
    img: truck,
    value: "truck",
  },
  {
    img: vougepay,
    value: "vougepay",
  },
];
