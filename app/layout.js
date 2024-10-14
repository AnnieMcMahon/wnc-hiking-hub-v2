import './styles.css';
import Navbar from './Navbar';

export const metadata = {
  title: "WNC Hiking Hub",
  description: "An app for hikers to join or post hikes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
