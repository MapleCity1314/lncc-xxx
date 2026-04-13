import Footer from '@/components/Footer'
import FooterQuickLinks from '@/components/FooterQuickLinks'
import Header from '@/components/header'

type FrontendLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function FrontendLayout({ children }: FrontendLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <FooterQuickLinks />
      <Footer />
    </div>
  )
}