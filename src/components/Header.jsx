const Header = ({ name, page }) => {
  return (
    <header>
      <p>Selamat Pagi, {name}</p>
      <h1 className="ps-2 border-l-2 border-black font-bold my-3">{page}</h1>
    </header>
  );
};

export default Header;
