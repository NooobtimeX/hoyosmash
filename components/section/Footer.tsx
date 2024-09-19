const links = [
  {
    section: "Games",
    items: [
      { text: "All Game", href: "/game" },
      { text: "Report", href: "/report" },
      { text: "Character", href: "/character" },
      { text: "Posts", href: "/posts" },
    ],
  },
  {
    section: "Information",
    items: [
      { text: "About Us", href: "/about_us" },
      { text: "Privacy Policy", href: "/privacy_policy" },
      { text: "Terms and Conditions", href: "/terms_and_conditions" },
      { text: "Contact Us", href: "/contact_us" },
    ],
  },
];

const images = [
  {
    src: "/game/honkai_impact_icon.webp",
    alt: "Honkai Impact",
    href: "https://honkaiimpact3.hoyoverse.com/",
  },
  {
    src: "/game/genshin_impact_icon.webp",
    alt: "Genshin Impact",
    href: "https://genshin.hoyoverse.com/",
  },
  {
    src: "/game/honkai_star_rail_icon.webp",
    alt: "Honkai Star Rail",
    href: "https://hsr.hoyoverse.com/",
  },
  {
    src: "/game/zenless_zone_zero_icon.webp",
    alt: "Zenless Zone Zero",
    href: "https://zenless.hoyoverse.com/",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content bottom-0 mx-auto max-w-6xl rounded-t-xl p-4 backdrop-blur">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {links.map((linkGroup, groupIndex) => (
          <div className="mb-6" key={groupIndex}>
            <div className="mb-2.5 font-bold uppercase">
              {linkGroup.section}
            </div>
            <ul className="mb-0 list-none">
              {linkGroup.items.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 m-auto grid max-w-sm grid-cols-4 gap-2">
          {images.map((image, index) => (
            <a key={index} href={image.href}>
              <img
                className="rounded-xl object-cover"
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="/" className="text-blue-400 hover:underline">
            hoyosmash.com | HoYoSmash
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
