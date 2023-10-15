interface Props {
  name: string;
  href: string;
}

const ExternalLink = ({ name, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className="font-medium underline text-sm my-2 inline-block"
    >
      {name}
    </a>
  );
};

export default ExternalLink;
