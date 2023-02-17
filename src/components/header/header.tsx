import Image from "../image/image";
import headerIllustration from "../../assets/images/trafalgar-header_illustration.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src="" alt="" />
        <nav></nav>
      </header>
      <article>
        <section>
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and
            online for everyone
          </p>
          <button>Consult today</button>
        </section>
        <Image image={headerIllustration} />
      </article>
    </>
  );
};

export default Header;
