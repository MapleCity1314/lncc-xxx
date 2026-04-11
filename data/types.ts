export type FooterLink = {
  label: string
  href: string
  isExternal?: boolean
}

export type SiteSettings = {
  footerCopyright: string
  address: string
  postalCode: string
  telephone: string
  footerLogos: {
    primary: string
    secondary: string
  }
  footerLinks: FooterLink[]
}
