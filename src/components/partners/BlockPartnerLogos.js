import React from 'react';

import Container from '../Container';
import { ArchipelagoLogo, ArticleLogo, ConequipLogo, GomaterialsLogo, LinusLogo, LogosBack, OndemandLogo, screen, TernLogo, ViceLogo } from '../../constants';

export default function BlockPartnerLogos() {
  const logos = [
    {
      icon: ViceLogo,
      name: "Vice Golf"
    }, {
      icon: ArticleLogo,
      name: "Article"
    }, {
      icon: OndemandLogo,
      name: "Ondemand Tires"
    }, {
      icon: TernLogo,
      name: "Tern"
    }, {
      icon: ArchipelagoLogo,
      name: "Archipelago Lighting"
    }, {
      icon: LinusLogo,
      name: "Linus"
    }, {
      icon: ConequipLogo,
      name: "ConEquip"
    }, {
      icon: GomaterialsLogo,
      name: "Gomaterials"
    }
  ]
  return (
    <section className="block-partner-logos">
      <Container>
        <p className="logos__title">We already make B2B payments better for 1,000+ businesses</p>
        <div className="logos__wrap">
          {
            logos.map((item, idx) => <div key={idx} className="logo__img">
              <img src={item.icon} alt={item.name} />
            </div>
            )
          }
        </div>
      </Container>
      <style jsx>{`
        .block-partner-logos {
          position: relative;
          padding: 120px 0 150px;
          background: linear-gradient(180deg, #1F325D 0%, #13203F 100%);
          z-index: 0;
        }
        .block-partner-logos::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          background-image: url(${LogosBack});
          background-position: top right;
          background-repeat: no-repeat;
          background-size: auto;
          z-index: -1;
        }
        .logos__title {
          margin-bottom: 40px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          text-align: center;
          color: #FFFFFF;
        }
        .logos__wrap {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .logo__img {
          width: 127px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-partner-logos::before {
            display: none;
          }
          .logo__img {
            margin: 20px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-partner-logos {
            padding: 65px 0;
          }
          .logos__wrap {
            justify-content: center;
          }
          .logos__title {
            font-size: 20px;
            line-height: 24px;
          }
          .logo__img {
            flex-shrink: 0;
            width: 85px;
            height: 48px;
            margin: 10px;
          }
          .logo__img img {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
