import React, { memo } from 'react'
import { dicoverMenu } from '../../common/local-data'
import { CategoryList, NavBarWrapper } from './style'
import { Link } from 'react-router-dom'

function AppNavBar() {
  // other handle
  return (
    <NavBarWrapper>
      <CategoryList className="w1100">
        {dicoverMenu.map((item) => {
          return (
            <li key={item.title} className="item">
              <Link to={item.link} activeClassName="menu-active">
                {item.title}
              </Link>
            </li>
          )
        })}
      </CategoryList>
    </NavBarWrapper>
  )
}

export default memo(AppNavBar)
