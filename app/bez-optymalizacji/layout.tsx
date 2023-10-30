export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
              const end = Date.now() + 2000;  
              while (Date.now() < end) {
                  // Block thread for 2 seconds
              }
              console.log('Zewnętrzny skrypt został zakończony!');
              `,
        }}
      ></script>
    </>
  );
}
