import Image from 'next/image'
import { withBasePath } from '@/app/(frontend)/_lib/base-path'
import siteSettings from '@/data/siteSettings'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-900 font-sans text-neutral-300">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div
          data-testid="footer-body"
          className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-col items-start gap-8 md:gap-10">
            <div
              data-testid="footer-brand-row"
              className="flex items-center gap-4 sm:gap-5"
            >
              <Image
                src={withBasePath(siteSettings.footerLogos.primary)}
                alt="辽宁省交通高等专科学校"
                width={260}
                height={60}
                loading="eager"
                className="h-10 w-auto object-contain opacity-95 sm:h-12"
              />
              <div className="hidden h-8 w-px bg-neutral-700 sm:block" />
              <Image
                src={withBasePath(siteSettings.footerLogos.secondary)}
                alt="信息工程系"
                width={200}
                height={60}
                loading="eager"
                className="h-10 w-auto object-contain opacity-95 sm:h-12"
              />
            </div>

            <p className="text-[13px] tracking-wide text-neutral-500">
              {siteSettings.footerCopyright}
            </p>
          </div>

          <div
            data-testid="footer-contact-list"
            className="flex flex-col gap-4 pb-1 text-sm tracking-wide text-neutral-300 sm:text-[15px]"
          >
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="size-5 shrink-0 opacity-70"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{siteSettings.address} ， {siteSettings.postalCode}</span>
            </div>

            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="size-5 shrink-0 opacity-70"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <span>联系电话：{siteSettings.telephone}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
