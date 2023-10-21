interface Props {
  name: string;
  href: string;
  className?: string;
}

const ExternalLink = ({ name, href, className }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`font-medium underline text-sm my-2 inline-block ${className}`}
    >
      {name}
    </a>
  );
};

export default ExternalLink;
