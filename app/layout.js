
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Toaster } from '../@/components/ui/sonner';
import { Poppins, Nunito } from "next/font/google";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});


export const metadata = {
  title: "ExpenseEase",
  description: "Track and manage your expenses effortlessly",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} ${nunito.variable} antialiased`}>
            {/* <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut> */}
            {/* <SignedIn>
              <UserButton />
            </SignedIn> */}
            <Toaster/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
