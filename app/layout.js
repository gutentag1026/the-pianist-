import { Provider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import { Links } from "@/components/Links"
import './globals.css'

export const metadata = {
    title: 'Wendy Huang | Pianist',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
      <div className="flex min-h-screen flex-row justify-between p-12">
          <div><Links /></div>
          <div>{children}</div>
          <Navbar />
      </div>
      </Provider>
      </body>
    </html>
  )
}
