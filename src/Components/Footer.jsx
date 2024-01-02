// Source: https://www.floatui.com/components/footers
import logo from "../assets/logo.svg";

const Footer = () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "Terms",
    },
    {
      href: "javascript:void()",
      name: "License",
    },
    {
      href: "javascript:void()",
      name: "Privacy",
    },
    {
      href: "javascript:void()",
      name: "About us",
    },
  ];
  return (
    <footer className="w-full bg-[#47626B] pt-10">
      <div className="mx-auto max-w-screen-xl px-4 text-white md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img src={logo} className="w-32" />
            <p className="max-w-md">
              Nulla auctor metus vitae lectus iaculis, vel euismod massa
              efficitur.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li className="text-white duration-150 hover:text-white/50">
                  <a key={idx} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-white">Developed by</p>
            <div className="mt-3 flex items-center gap-3 sm:block">
              <a href="https://www.jpdiaz.dev/">Juan Diaz</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t py-10 md:text-center">
          <p>© 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
