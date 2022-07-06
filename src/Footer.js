import React from "react";
import CardData from "./CardData";

const Footer = () => {
  return (
    <>
      <footer>
        <p>Copyright © 1996–2022 Booking.com™. All rights reserved.</p>
        <p>
          Booking.com is part of Booking Holdings Inc., the world leader in
          online travel and related services.
        </p>
        <div className="company-logo">
          {CardData.map((Val, index) => {
            const FooterLogo = Val.Footerlogo;

            return (
              <>
                {FooterLogo.map((Alllogo, index) => {
                  const { img } = Alllogo;
                  return (
                    <div className="logo" key={index}>
                      <img src={img} alt="a" />
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </footer>
    </>
  );
};

export default Footer;
