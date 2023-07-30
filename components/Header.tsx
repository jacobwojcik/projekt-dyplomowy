import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4 border border-b-2">
      <Link className="font-semibold text-lg" href={'/'}>
        Strona Główna
      </Link>
    </header>
  );
};

export default Header;
