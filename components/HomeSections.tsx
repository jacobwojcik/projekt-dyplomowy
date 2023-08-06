import { ButtonLink } from './ui/ButtonLink';

const HomeSections = () => {
  return (
    <div className="my-6 w-full max-w-xl rounded-lg border border-zinc-200 p-4 text-center">
      <span>Dodatkowe</span>
      <div className="my-4 flex justify-center gap-4">
        <ButtonLink href={`/sr-streaming`}>Server Side Streaming</ButtonLink>
        <ButtonLink href={`/tbd`}>TBD</ButtonLink>
      </div>
    </div>
  );
};

export default HomeSections;
