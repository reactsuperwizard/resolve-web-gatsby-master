import React, { useState } from 'react'
import { screen } from "../../constants";
import Container from "../Container";

const CardBox = ({ data }) => <article className="parallel-card">
  <img className="card__image" src={data.img} alt={data.title} />
  <div className="card-inner">
    <p className="card__title">{data.title}</p>
    <p className="card__desc">{data.desc}</p>
  </div>
  <style jsx>{`
    .parallel-card {
      max-width: 453px;
      margin-top: 100px;
    }
    .card-inner {
      padding: 11px 17px;
    }
    .card__image {
      width: 100%;
    }
    .card__title {
      display: none;
    }
    .card__desc {
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.5px;
      color: #1F325D;
    }
    @media (max-width: ${screen.laptop}px) {
      .parallel-card {
        max-width: 320px;
      }
    }
    @media (max-width: ${screen.mobileMax}px) {
      .parallel-card {
        margin-top: 0;
      }
      .parallel-card:nth-child(odd) {
        margin-top: 45px;        
      }
    }
    @media (max-width: ${screen.mobileExtraSmall}px) {
      .parallel-card {
        width: 160px;
      }
      .parallel-card:nth-child(odd) {
        margin-top: 25px;        
      }
      .card-inner {
        padding: 6px 0;
      }
      .card__title {
        display: block;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #1F325D;
      }
      .card__desc {
        display: none;
      }
    }
  `}</style>
</article>

export default function BlockIndustriesServe({ items }) {
  const [tabIndex, setTabIndex] = useState(0);
  return <section className="block-industries-serve">
    <Container>
      <p className="kicker-text">Some of the industries we serve</p>
      <div className="industries-serve">
        <ul className="industries-serve__menu" style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          {
            items.map((item, idx) =>
              <li key={idx}>
                <button onClick={() => setTabIndex(idx)} className={`industries-serve__title ${tabIndex === idx ? 'active' : ''}`}>
                  {item.title}
                </button>
              </li>
            )
          }
        </ul>
        <CardBox data={items[tabIndex]} />
      </div>
      <div className="industries-serve__mob">
        {items.map((item, idx) => <CardBox data={item} key={idx} />)}
      </div>
    </Container>

    <style jsx>{`
      .block-industries-serve {
        padding-bottom: 400px;
        background: linear-gradient( -8.7deg,transparent 28.2%,#F7F8FA 28.3% );
      }
      .kicker-text {
        margin-bottom: 50px;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #1F325D;
      }
      .industries-serve {
        display: flex;
        justify-content: space-between;
      }
      .industries-serve__menu {
        padding: 0;
        margin: 0;
        flex-shrink: 0;
        list-style: none;
      }
      .industries-serve__title {
        border: none;
        background: none;
        cursor: pointer;
        font-weight: 500;
        font-size: 50px;
        color: #E0E3EA;
      }
      .industries-serve__title:hover, .industries-serve__title.active {
        color: #1F325D;
        transition: all .2s ease-in;
      }
      .industries-serve__mob {
        display: none;
        grid-template-columns: auto auto;
        gap: 16px;
      }
      @media (max-width: ${screen.laptop}px) {
        .block-industries-serve {
          padding-bottom: 350px;
          background: linear-gradient( -8.7deg,transparent 25.2%,#F7F8FA 25.3% );
        }
        .industries-serve__title {
          font-weight: 400;
          font-size: 32px;
        }
      }
      @media (max-width: ${screen.mobileMax}px) {
        .block-industries-serve {
          padding-bottom: 250px;
          background: linear-gradient( -8.7deg,transparent 11.2%,#F7F8FA 11.3% );
        }
        .industries-serve {
          display: none;
        }
        .kicker-text {
          margin-bottom: 24px;
          font-size: 13px;
          line-height: 20px;
          text-align: center;
        }
        .industries-serve__mob {
          display: grid;
        }
      }
      @media (max-width: ${screen.mobileMax}px) {
        .block-industries-serve {
          padding-bottom: 150px;
        }
      }
    `}</style>
  </section>
}