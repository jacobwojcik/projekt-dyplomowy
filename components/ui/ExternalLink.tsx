interface Props {
  name?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const ExternalLink = ({ name, href, className, children }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`font-medium underline text-sm inline-block ${className}`}
    >
      {name}
      {children}
    </a>
  );
};

export default ExternalLink;
