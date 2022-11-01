import React from "react";

import HomeIcon from '@mui/icons-material/Home';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AddIcon from '@mui/icons-material/Add';

export const SidebarData = [
    {
        title: "DASHBOARD",
        icon: <HomeIcon />,
        link: "/dashboard"
    },
    {
        title: "Supllier MANAGEMENT",
        icon: <CheckBoxIcon />,
        link: "/#"
    },
    {
        title: "Order MANAGEMENT",
        icon: <AddIcon />,
        link: "/#"
    },
    {
        title: "Product MANAGEMENT",
        icon: <LocalLibraryIcon />,
        link: "/#"
    },
    {
        title: "Delivery MANAGEMENT",
        icon: <LibraryBooksIcon />,
        link: "/#"
    },
    {
        title: "Transaction MANAGEMENT",
        icon: <ImportContactsIcon />,
        link: "/#"
    }
] 