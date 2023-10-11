export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
              const end = Date.now() + 1000;  
              while (Date.now() < end) {
                  // Block thread for 1 second
              }
              console.log('Zewnętrzny skrypt został zakończony!');
              `,
        }}
      ></script>
    </>
  );
}
