import React, { useState } from "react"
import { Link } from "gatsby"
import { screen } from "../constants"

const NavDropdown = ({ items }) => {
  const [isHover, setHover] = useState("")
  return (
    <div className="dropdown-content">
      <div className="dropdown-container">
        {
          items.map((item, idx) =>
            <Link to={item.to} key={idx}>
              <div className="dropdown-item" onMouseEnter={() => setHover(item.name)} onMouseLeave={() => setHover("")} role="button" tabIndex="0">
                {isHover === item.name ? item.iconHover : item.icon}
                <div className="dropdown-item__content">
                  <p className="dropdown-item__name">{item.name}</p>
                  <p className="dropdown-item__label">{item.label}</p>
                </div>
              </div>
            </Link>
          )
        }
      </div>
      <style jsx global>{`
        .dropdown-container {
          max-width: 976px;
          padding: 45px 30px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
        }
        .dropdown-item {
          display: flex;
          margin-bottom: 8px;
          padding: 12px;
          width: 312px;
          border: 1px solid transparent;
          box-sizing: border-box;
        }
        .dropdown-item__content {
          margin-left: 20px;
          text-align: left;
        }
        .dropdown-item__name {
          margin-bottom: 4px;
          font-weight: 400;
          font-size: 18px;
          line-height: 20px;
          color: #1F325D;
        }
        .dropdown-item__label {
          font-weight: 300;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.2px;
          color: #68738C;
        }
        .dropdown-item:hover {
          background: #F7F8FA;
          border: 1px solid #DCDCDC;
          border-radius: 4px;
        }
        .dropdown-item:hover .dropdown-item__name {
          color: #FB835E;
        }
        @media (max-width: ${screen.laptop}px) {
          .dropdown {
            flex-direction: column;
          }
          .dropdown-item {
            width: 285px;
          }
        }
        @media (max-width: ${screen.tabletMax}px) {
          .dropdown-container {
            padding: 24px 40px;
          }
          .dropdown-container a {
            width: 100%;
          }
          .dropdown-item:hover {
            background: none;
            border: none;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .dropdown-container {
            flex-direction: column;
          }
          .dropdown-item {
            width: 100%;
            padding: 0;
            margin: 8px 0;
          }
          .dropdown-item__name {
            font-size: 16px;
            line-height: 16px;
          }
          .dropdown-item__label {
            font-size: 14px;
            line-height: 20px;    
          }
        }
      `}</style>
    </div>
  )
}

export default NavDropdown
