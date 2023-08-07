import React, { useState } from "react";
import "./Dropdown.css";
import arrow from "../../assets/arrow-down.svg";

const Dropdown = ({ title, options, setImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeImage = () => {
    switch (title) {
      case "Our Companies":
        setImage(
          "https://s3-alpha-sig.figma.com/img/2301/0a7f/38a22509a0130ce146e5532c44b2a1d4?Expires=1691971200&Signature=K1yVrSMPhLT3g8RNVxJnPlUrxIOr-A1X2Y4FvgxQ~vblkW13TwSUOn7MiQzMqUCz21IR3IpV03QBp--O07WUJfje4MOL3STTcJwRt82ljZcH9SkqB0RyYJrYH6~HQTeZPr5Ep9gfCy-fobvdtIjWceNQeDOPF2S2xSr0rbYlB3UacMAaDkoo69K2tB9uGwIuxJQl3krN9v3gFj3e4FtKMegMrPH6KOk9bRdN3IutUxjFX9M-J1DvpyjJL-3Al2aavQ8EVafY4mgP3ZLcAKOtC0OpFM~V-pV8oZjyrtalgqK4BMCILqUho~yyHzJwcUguOc6EPOrrnRkJ1qIIF2rq5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        );
        break;
      case "About Us":
        setImage(
          "https://s3-alpha-sig.figma.com/img/a8ce/cdc4/b02b91f68db33f8ed94a5745f35fa485?Expires=1691971200&Signature=JXZ-q36RGtAw2nyg7aOGx8zBxNvz1khpw3SLCpbnMK0KvRMQrqYq8v09NgwARrENTvJV2qRgtJJtRumVEB4rm9GCVf~G0nZ79zR6D6JjVntMQi5cl4w5PT5LrVrUZfGnvN8esDoxhfpvYuejzHUwMfv5dVPxLCDa1cHIdbrK9nBQ3CyGB~LKpxKiuwJ5ZuvJBFzCHAZdzp5khvXTWGdaAcXBdrc8qH6o4aDYO0EzRjKLNpaM5SieBdW0Nhq~vf-60bdNoUGoG-xVz-KpYd6S2gDmoHVcwSxsHe0NTFX4Syyzt1jkE7gnsCSAGKEUz3LjQIvHBNUczYoMRBJviJE6vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        );
        break;
      case "Contact Us":
        setImage(
          "https://s3-alpha-sig.figma.com/img/6061/2f7e/e6282c49fa5f22671ca35ad5f74d812a?Expires=1691971200&Signature=GEsIFCjYAdqlmlsu6yJfr8Y2-HAgYCcNyCp9bgg~sGJDhsX~w-iaOWk6R-~JOXyJEbAbkFtYizQyht0tHpCR5D4VH9WLRQefVzaEs5dPaox0Kb2JVxBE-NeY6mhzh8BlcYjsKwQ~JoocOuxXBtLp~H8Gg4i3NUVI1~t6Panqr3tD8yLaI9eGmQIODXEgGZuYYpDQQ8U8KnGDSEDVj1j92gVxkuAVRT101SX~TZz4o8dbYaPHJcWhMJL81RMbh7zn64Jmf8Q97q9CKb3Rr~T62tG1NrPRnNeJmLXoM74k8qn4Y7WlzoJJCPMu3-eEp6r7M3xCapxhXpe3ISdCmwXuSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        );
        break;
    }
  };

  return (
    <div className="dropdown" onMouseOver={handleChangeImage}>
      <div className="dropdown-title-parent" onClick={handleOpen}>
        <p className="dropdown-title">{title}</p>
        {options.length > 0 && <img src={arrow} className="arrow" />}
      </div>

      {options.length > 0 && isOpen && (
        <ul className="dropdown-content-parent">
          {options.map((option, index) => (
            <li key={index}>
              <a href="#" className="dropdown-item">
                {option}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
