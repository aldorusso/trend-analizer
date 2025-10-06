"use client";
import globalSettings from '@/../content/settings/global.json';
import { useState } from "react";
import Link from "next/link";

export default function CustomNavMenus() {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const { navigation } = globalSettings;

  return (
    <ul>
      {navigation.mainMenu.map((menu, index) => (
        <li
          key={index}
          className={menu.hasSubmenu ? "has-dropdown" : ""}
          onMouseEnter={() => setHoveredMenu(index)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <Link href={menu.url}>
            {menu.title}
            {menu.hasSubmenu && (
              <span className="dropdown-btn"></span>
            )}
          </Link>

          {menu.hasSubmenu && menu.submenu && (
            <ul className="tp-submenu submenu">
              {menu.submenu.map((submenuItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={submenuItem.url}>
                    {submenuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
