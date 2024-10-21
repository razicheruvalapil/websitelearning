export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 p-4 text-white text-center">
          <h1>My Website Header</h1>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 p-4 text-white text-center mt-10">
          <p>&copy; 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}
