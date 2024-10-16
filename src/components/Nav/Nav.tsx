import logo from "../../assets/images/logo.png";

export function Nav() {
  return (
    <nav className="py-5 px0">
      <div className="container flex justify-between">
        <div className="logo">
          <img src={logo} alt="Logo Image" />
        </div>
        <span className="md:hidden" id="btn-menu">
          Menu
        </span>
        <ul className="hidden md:flex">
          <li>
            <a className="text-white md:text-heading-color" href="/">
              Demos
            </a>
          </li>
          <li>
            <a className="text-white md:text-heading-color" href="/">
              Pages
            </a>
          </li>
          <li>
            <a className="text-white md:text-heading-color" href="/">
              Projects
            </a>
          </li>
          <li>
            <a className="text-white md:text-heading-color" href="/">
              Blog
            </a>
          </li>
          <li>
            <a className="text-white md:text-heading-color" href="/">
              Blocks
            </a>
          </li>
          <li>
            <a className="text-white md:text-heading-color" href="/">
              Documentacion
            </a>
          </li>
          <span
            className="font-semibold absolute right-[10px] top-[20px] md:hidden"
            id="btn-close"
          >
            close
          </span>
        </ul>
      </div>
    </nav>
  );
}
