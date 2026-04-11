import Link from 'next/link'

type SearchButtonProps = {
  className?: string
  href?: string
  label?: string
  onClick?: () => void
}

export default function SearchButton({
  className,
  href,
  label = '搜索',
  onClick,
}: SearchButtonProps) {
  const classes = [
    'inline-flex items-center justify-center rounded-full text-white transition',
    'hover:bg-white/14 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const icon = (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )

  if (href) {
    return (
      <Link href={href} aria-label={label} className={classes}>
        {icon}
      </Link>
    )
  }

  return (
    <button type="button" aria-label={label} onClick={onClick} className={classes}>
      {icon}
    </button>
  )
}
