export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
              setTimeout(() => {
                console.log('Zewnętrzny skrypt został zakończony!');
              }, 1000);
              `,
        }}
      ></script>
    </>
  );
}
