export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
              const end = Date.now() + 2500;  
              while (Date.now() < end) {
                  // Block thread for 2.5 seconds
              }
              console.log('Zewnętrzny skrypt został zakończony!');
              `,
        }}
      ></script>
    </>
  );
}
