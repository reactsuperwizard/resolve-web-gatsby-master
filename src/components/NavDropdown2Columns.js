import React from "react"
import { Link } from "gatsby"

import { screen } from "../constants"

const DropdownColumn = ({ data, columns2 }) => {
  return <div className={`${data.type} ${columns2 ? 'column2' : 'column1'}`}>
    <p className="column__type">
      {data.type}
    </p>
    <div className="dropdown-column">
      {
        data.items.map((item, idx) => {

          return item.href ? <a href={item.href} key={idx}>
            <div className="dropdown-item">
              <div className="dropdown-item__content">
                <p className="dropdown-item__name">{item.name}</p>
                <p className="dropdown-item__label">{item.label}</p>
              </div>
            </div>
          </a> : <Link to={item.to} key={idx}>
            <div className="dropdown-item">
              <div className="dropdown-item__content">
                <p className="dropdown-item__name">{item.name}</p>
                <p className="dropdown-item__label">{item.label}</p>
              </div>
            </div>
          </Link>
        }
        )
      }
    </div>
    <style jsx>{`
      .dropdown-item {
        width: 305px;
      }
      .dropdown-item__content {
        margin-left: 0;
      }
      .dropdown-blog {
        display: flex;
        max-width: 360px;
        margin-bottom: 24px;
      }
      .dropdown-blog__img {
        width: 104px;
        height: 64px;
        margin-right: 16px;
        background: #D9D9D9;
        flex-shrink: 0;
      }
      .dropdown-blog__content {
        text-align: left;
      }
      .dropdown-blog__name {
        margin-bottom: 4px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #1F325D;
      }
      .dropdown-blog__label {
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        color: #FB835E;
      }
      .column1 {
        width: 33%;
        margin-left: 32px;
      }
      .column2 {
        width: 67%;
        border-right: 1px solid #C1CADE;
      }
      .column__type {
        margin: 20px 12px;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: left;
        color: #FB835E;
      }
      .dropdown-column {
        display: flex;
        flex-wrap: wrap;
      }
      @media (max-width: ${screen.laptop}px) {
        .column1, .column2 {
          width: 50%;
        }
      }
      @media (max-width: ${screen.tabletMax}px) {
        .column2 {
          border: none;
        }
        .dropdown-item {
          width: 100%;
        }
        .Blog, .Learn .column__type {
          display: none;
        }
      }
      @media (max-width: ${screen.mobileExtraSmall}px) {
        .column__type {
          margin: 8px 0;
          font-weight: 500;
          font-size: 13px;
          line-height: 16px;
        }
        .column1 {
          margin-top: 20px;
          margin-left: 0;
        }
        .column1, .column2 {
          width: 100%;
        }
      }
    `}</style>
  </div>
}

const NavDropdown2Columns = ({ items1, items2 }) => {
  return (
    <div className="dropdown-content">
      <div className="dropdown-container">
        <DropdownColumn data={items1} columns2 />
        <DropdownColumn data={items2} />
      </div>
      <style jsx>{`
        .dropdown-container {
          max-width: 1036px;
          flex-wrap: nowrap;
        }
      `}</style>
    </div>
  )
}

export default NavDropdown2Columns
