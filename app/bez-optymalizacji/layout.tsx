export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* SImulate heavy script load */}
      <script
        type="text/javascript"
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `
            for(let i = 0; i< 999999999; i++){};
            console.log('Long running script');`,
        }}
      ></script>
    </>
  );
}
