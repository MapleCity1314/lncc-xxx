import Image from 'next/image'
import Link from 'next/link'
import siteSettings from '@/data/siteSettings'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 selection:bg-sky-400/30">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-8 lg:col-span-5 xl:col-span-4">
            <div
              data-testid="footer-logo-stack"
              className="flex flex-col items-start gap-5"
            >
              <Image
                src={siteSettings.footerLogos.primary}
                alt="辽宁交专标识"
                width={120}
                height={120}
                className="h-16 w-auto object-contain sm:h-20"
              />
              <Image
                src={siteSettings.footerLogos.secondary}
                alt="信息工程系标识"
                width={400}
                height={120}
                className="h-10 w-auto max-w-full object-contain sm:h-12"
              />
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-slate-400">
              <p className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-3">
                <span className="min-w-[48px] text-slate-500">地址</span>
                <span>{siteSettings.address}</span>
              </p>
              <p className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-3">
                <span className="min-w-[48px] text-slate-500">邮编</span>
                <span>{siteSettings.postalCode}</span>
              </p>
              <p className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-3">
                <span className="min-w-[48px] text-slate-500">电话</span>
                <span>{siteSettings.telephone}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 xl:col-span-7 xl:col-start-6">
            <h2 className="mb-8 text-sm font-semibold tracking-widest text-white uppercase">
              常用链接 / Quick Links
            </h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
              {siteSettings.footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noreferrer noopener' : undefined}
                    className="group inline-flex items-center text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <span className="relative py-1">
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-sky-400 transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-center sm:flex-row sm:gap-4 sm:text-left lg:mt-24">
          <p className="text-xs text-slate-500">
            {siteSettings.footerCopyright}
          </p>
          <p className="mt-3 text-xs text-slate-500 sm:mt-0">
            辽宁省交通高等专科学校 信息工程系
          </p>
        </div>
      </div>
    </footer>
  )
}
