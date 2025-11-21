import React, { useLayoutEffect, useRef } from "react";
import Container from "./layout/Container";
import { Link } from "react-router-dom";
import footer from "../../public/footer.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapRef.current;
      if (!wrapper) return;

      const cols = gsap.utils.toArray(".footer-col"); // columns
      const icons = wrapper.querySelectorAll(".footer-icons a");

      // staggered reveal for columns
      gsap.fromTo(
        cols,
        { autoAlpha: 0, y: 30, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            // markers: true, // enable to debug
          },
        }
      );

      // icons micro-stagger
      gsap.fromTo(
        icons,
        { autoAlpha: 0, y: 8, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // subtle parallax on footer image for premium feel
      const img = wrapper.querySelector(".footer-image");
      if (img) {
        gsap.to(img, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      ScrollTrigger.refresh();
    }, wrapRef);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onLoad);
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-[#F5F5F3] md:py-14 py-5" ref={wrapRef}>
      <Container>
        <div className="px-4 md:px-0 grid md:grid-cols-12 sm:grid-cols-4 sm:grid-rows-1 gap-y-6">
          <div className="MENU sm:col-span-2 footer-col">
            <h3 className="font-DM leading-6 font-bold mb-1 sm:mb-4">MENU</h3>
            <ul className="font-DM leading-6 font-normal text-sm flex flex-row sm:flex-col gap-4 sm:gap-1.5 text-[#6D6D6D]">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Shop</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Journal</Link>
              </li>
            </ul>
          </div>

          <div className="SHOP md:col-span-2 col-span-1 hidden sm:block footer-col">
            <h3 className="font-DM leading-6 font-bold mb-4">SHOP</h3>
            <ul className="font-DM leading-6 font-normal text-sm flex flex-col gap-1.5 text-[#6D6D6D]">
              <li>
                <Link>Category 1</Link>
              </li>
              <li>
                <Link>Category 2</Link>
              </li>
              <li>
                <Link>Category 3</Link>
              </li>
              <li>
                <Link>Category 4</Link>
              </li>
              <li>
                <Link>Category 5</Link>
              </li>
            </ul>
          </div>

          <div className="HELP md:col-span-2 col-span-1 hidden sm:block footer-col">
            <h3 className="font-DM leading-6 font-bold mb-4">HELP</h3>
            <ul className="font-DM leading-6 font-normal text-sm flex flex-col gap-1.5 text-[#6D6D6D]">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Special E-shop</Link>
              </li>
              <li>
                <Link>Shipping</Link>
              </li>
              <li>
                <Link>Secure Payments</Link>
              </li>
            </ul>
          </div>

          <div className="four md:col-span-2 my-3 sm:my-0 footer-col">
            <Link className="block font-DM sm:leading-7 font-bold text-Primary">
              <h5 className="text-sm sm:text-base "> (052) 611-5711</h5>
            </Link>
            <Link className="font-DM leading-7 font-bold text-Primary">
              <h2 className="text-sm sm:text-base ">company@domain.com</h2>
            </Link>
            <p className="font-DM leading-6 font-normal text-sm flex flex-col text-[#6D6D6D] sm:mt-4">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>

          <div className="five sm:ml-[138px] md:col-span-4 col-span-1 mb-1 sm:mb-0 footer-col">
            <img className="footer-image" src={footer} alt="footer brand" />
          </div>
        </div>

        <div className="flex sm:justify-between flex-col sm:flex-row md:mt-16 px-4 md:px-0 mt-2 md:gap-0 items-center">
          <div className="icons footer-icons flex sm:justify-center items-center gap-x-6 text-xl sm:text-base">
            <Link aria-label="facebook">
              <FaFacebookF />
            </Link>
            <Link aria-label="linkedin">
              <FaLinkedinIn />
            </Link>
            <Link aria-label="instagram">
              <FaInstagram />
            </Link>
          </div>

          <h2 className="font-DM leading-6 font-normal text-sm text-[#6D6D6D] flex justify-center sm:justify-normal items-center gap-1 ">
            <span className="text-xl">&copy;</span> Copyright Sharif 2025. All right reserved
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
