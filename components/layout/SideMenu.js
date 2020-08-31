import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import classnames from 'classnames'

import adminMenuItems from '../../constans/adminMenuItems'

const SideMenuContainer = styled.div`
  background-color: #2c3e50;
  color: #fff;
  min-width: 200px;
  overflow: auto;

  .logo {
    padding 15px;
    text-align: center;
  }

  ul {
    margin: 0;
    padding-left: 0;
    user-select: none;

    li {
      .title {
        padding: 15px;
      }

      &.active {
        background-color: #16a085;
      }

      a {
        color: #fff;
        text-decoration: none;
        padding: 15px;
        display: block;
      }

      ul {
        display: none;

        &.active {
          display: block;
        }

        li {
          padding-left: 25px;
        }
      }
    }
  }

  .menus {
    margin-top: 15px;
    height: calc(100% - 119px);
    overflow: auto;
  }
`

const SideMenu = (props) => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [menuSelected, setMenuSelected] = useState(null)

  useEffect(() => {
    adminMenuItems.map((menu) => {
      const submenus = menu.submenus || []

      if (submenus.length > 0 && props.router.pathname.includes(menu.slug)) {
        setMenuSelected(menu.slug)
        setShowSubMenu(true)
      }
    })
  }, [])

  const handleMenuSelcted = (menu) => {
    setMenuSelected(menu)
    setShowSubMenu(true)
  }

  return (
    <SideMenuContainer>
      <div className='logo'>
        <img src='https://placehold.it/70x70' alt='logo' />
      </div>

      <div className='menus'>
        <ul>
          {adminMenuItems.map((menu, i) => {
            const submenus = menu.submenus || []

            if (submenus.length > 0) {
              return (
                <li key={i} onClick={() => handleMenuSelcted(menu.slug)}>
                  <div className='title'>{menu.title}</div>
                  <ul
                    className={classnames({
                      active: showSubMenu && menuSelected === menu.slug,
                    })}
                  >
                    {submenus.map((submenu, si) => {
                      const isActive = props.router.pathname.includes(
                        submenu.slug,
                      )

                      return (
                        <li
                          key={si}
                          className={classnames({ active: isActive })}
                          onClick={() => handleMenuSelcted(menu.slug)}
                        >
                          <Link href={`/admin/${menu.slug}/${submenu.slug}`}>
                            <a>{submenu.title}</a>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            } else {
              const isActive = props.router.pathname.includes(menu.slug)

              return (
                <li key={i} className={classnames({ active: isActive })}>
                  <Link href={`/admin/${menu.slug}`}>
                    <a>{menu.title}</a>
                  </Link>
                </li>
              )
            }
          })}
          <li>
            <Link href='/admin'>Logout</Link>
          </li>
        </ul>
      </div>
    </SideMenuContainer>
  )
}

export default withRouter(SideMenu)
