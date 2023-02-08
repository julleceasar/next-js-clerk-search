import {nav_menus} from '../../data';
import Link from 'next/link';


const Menu = () => {
  return (
    <>
      <ul>
        {nav_menus?.map((item, index) => {
          return (
            <li key={index} className={`${item.hasDropdown && !item.megamenu ? 'active has-dropdown'
              : item.megamenu && 'mega-menu has-dropdown'}`}>
              <Link href={`${item.link}`}>{`${item.title}`}</Link>

              {item?.hasDropdown && !item.megamenu && <ul className="submenu transition-3">
                {item?.dropdownItems?.map((menu, index) => (
                  <li key={index}><Link href={`${menu.link}`}>{menu.title}</Link></li>
                ))}
              </ul>}

              {item.hasDropdown && item.megamenu && <ul className="submenu transition-3" style={{ background:
                `url(${'/assets/img/bg/mega-menu-bg.jpg'})`,backgroundRepeat:'no-repeat',backgroundPosition:'center right',backgroundSize:'cover'}}>
                  {item.dropdownItems.map((menu, index) => (
                    <li key={index} className={`${menu.hasDropdown ? 'has-dropdown' : ''}`}>
                      <Link href={`${menu.link}`}>{menu.title}</Link>
                      <ul>
                        {menu?.dropdownMenu?.map((m, index) => (
                          <li key={index}><Link href={`${m.link}`}>{m.title}</Link></li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>}

            </li>

          )
        })}

      </ul>
    </>
  );
};

export default Menu;