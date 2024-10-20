import './styles.css';
import Navbar from './Navbar';
import { UserProvider } from './context/UserContext';

export const metadata = {
  title: "WNC Hiking Hub",
  description: "An app for hikers to join or post hikes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}