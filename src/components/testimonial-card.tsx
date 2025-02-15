import { cn } from '@/lib/utils'
import { getMediaAlt, getMediaUrl } from '@/lib/utils/to-image-url'
import { Testimonial } from '@/payload-types'
import Image from 'next/image'

export function TestimonialCard({
  testimonial: { client_name, quote, logo, variant },
}: {
  testimonial: Testimonial
}) {
  return (
    <div
      className={cn(
        'rounded-5xl flex h-max w-full max-w-3xl items-center justify-center gap-5 bg-secondary px-14 py-11 text-xl text-secondary-foreground',
        variant === 'v1' ? 'flex-row' : 'flex-col',
      )}
    >
      <Image
        className={cn(
          'h-20 w-20 flex-none rounded-full bg-black',
          variant == 'v1' ? 'block' : 'hidden',
        )}
        src={getMediaUrl(logo)}
        alt={getMediaAlt(logo)}
        width={50}
        height={50}
      />
      <div className={cn('flex flex-col gap-10', variant == 'v2' && 'hidden')}>
        <p className="font-inter">&quot;{quote}&quot;</p>
        <p className="font-inter"> - {client_name}</p>
      </div>
      <p className={cn('font-inter', variant == 'v1' ? 'hidden' : 'block')}>{quote}</p>
      <div
        className={cn(
          'flex w-full flex-row items-center justify-between gap-5',
          variant == 'v1' && 'hidden',
        )}
      >
        <p className="font-inter"> - {client_name}</p>
        <Image
          className="h-10 w-40 flex-none rounded-full bg-black"
          src={getMediaUrl(logo)}
          alt={getMediaAlt(logo)}
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}
