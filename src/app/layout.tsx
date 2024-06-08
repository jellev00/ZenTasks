import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";

export const metadata: Metadata = {
  title: "ZenTasks",
  description: "Your Path to Productive Harmony. Stay Focused, Stay Zen.",
};

/**
 * The {@link RootLayout} wraps the base HTML structure for the application.
 *
 * @param {Object} props - the props object containing the following property:
 * @param {React.ReactNode} props.children - the React nodes representing the content to be rendered within the layout
 * @returns {ReactElement} - the HTML structure with appropriate metadata and the provided children
 *
 * @author Jelle Vandriessche
 * @since 2406.0
 */

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="flex justify-center">
          <NavBar />
        </div>
        <div className="flex flex-col justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
