// import React, { useState, useEffect } from "react";
// import "../styles/Navbar.css";

// function Navbar() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "floor-plans", "amenities", "contact-us"];
//       const scrollPosition = window.scrollY + window.innerHeight / 3;
//       for (let section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsMobileMenuOpen(false);
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="navbar-wrapper py-3 px-3 px-lg-5">
//       {/* Mobile Navbar */}
//       <div className="d-lg-none mobile-navbar-top">
//         <img
//           alt="logo"
//           width="104"
//           height="54"
//           decoding="async"
//           data-nimg="1"
//           className="img-fluid mobile-logo"
//           src="https://urbanranch.irarealty.in/_next/static/media/urhmobile.b0919f50.webp"
//           style={{ color: "transparent" }}
//         />
//         {!isMobileMenuOpen && (
//           <button
//             className="btn fs-3 text-white mobile-hammenu-button"
//             onClick={toggleMobileMenu}
//             aria-label="Open navigation menu"
//           >
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 15 15"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
//                 fill="currentColor"
//               ></path>
//             </svg>
//           </button>
//         )}
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="mobile-menu-overlay position-fixed top-0 start-0 w-100 h-100 bg-white p-4"
//           style={{ zIndex: 1050 }}
//         >
//           <div className="position-absolute top-0 end-0 mt-3 me-3">
//             <button
//               className="btn fs-3 text-dark close-button"
//               onClick={toggleMobileMenu}
//               aria-label="Close navigation menu"
//             >
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 512 512"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
//               </svg>
//             </button>
//           </div>
//           <nav className="d-flex flex-column gap-4 mt-5 pt-5">
//             {["home", "floor-plans", "amenities", "contact-us"].map((section) => (
//               <a
//                 key={section}
//                 href={`#${section}`}
//                 className={`nav-link fs-5 ${activeSection === section ? "text-warning" : "text-dark"}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(section);
//                 }}
//               >
//                 {section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}

//       {/* Desktop Navbar wrapped in container */}
//       <div className="d-none d-lg-flex justify-content-center navbar-desktop-wrapper">
//         <div className="Navbar1 d-flex justify-content-between align-items-center w-100">
//           <img
//             src="https://urbanranch.irarealty.in/_next/static/media/urlogodesktop.28cffa17.webp"
//             alt="logo"
//             width="104"
//             height="54"
//             className="img-fluid"
//           />
//           <nav className="d-flex gap-4 flex-wrap justify-content-center">
//             {["home", "floor-plans", "amenities", "contact-us"].map((section) => (
//               <a
//                 key={section}
//                 href={`#${section}`}
//                 className={`nav-link fw-medium position-relative ${activeSection === section ? "text-warning active-desktop-link" : "text-light"
//                   }`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavClick(section);
//                 }}
//               >
//                 {section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </header>

//   );
// }

// export default Navbar;




import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "floor-plans", "amenities", "contact-us"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar-wrapper-mobile py-3 px-3 px-lg-5">
      {/* Mobile View */}
      <div className="d-lg-none navbar-mobile-top">
        {/* <img
          src="https://urbanranch.irarealty.in/_next/static/media/urhmobile.b0919f50.webp"
          alt="Mobile Logo"
          width="104"
          height="54"
          className="img-fluid"
        /> */}
        <div></div>
        {!isMobileMenuOpen && (
          <button
            className="btn fs-3 text-white navbar-mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            &#9776;
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-overlay">
          <button
            className="btn close-button"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="navbar-mobile-links">
            {["home", "floor-plans", "amenities", "contact-us"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link ${activeSection === section ? "text-warning" : "text-light"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
              >
                {section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop View */}
      <div className="d-none d-lg-flex navbar-desktop-wrapper">
        <div className="navbar-desktop-container">
          <img
            src="https://urbanranch.irarealty.in/_next/static/media/urlogodesktop.28cffa17.webp"
            alt="Desktop Logo"
            width="104"
            height="54"
            className="img-fluid"
          />
          <nav className="navbar-desktop-links">
            {["home", "floor-plans", "amenities", "contact-us"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link fw-medium ${activeSection === section ? "text-warning active-desktop-link" : "text-light"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
              >
                {section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;



