import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b-2 p-4 px-6">
      <div className="mx-auto max-w-7xl">
        <Link className="text-lg font-semibold" href={'/'}>
          Strona Główna
        </Link>
      </div>
    </header>
  );
};

export default Header;
