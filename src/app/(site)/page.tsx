import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ImageSection } from '@/components/image-section'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { COMPANY_NAME } from '@/content/config'
import { getClients } from '@/content/get-clients'
import { getTestimonials } from '@/content/get-testimonials'
import { SITE_IMAGES } from '@/content/images'
import { cn } from '@/lib/utils'
import { getMediaAlt, getMediaUrl } from '@/lib/utils/to-image-url'
import { TestimonialCard } from '@/components/testimonial-card'

export const revalidate = 3600
export const dynamicParams = true

export const metadata: Metadata = { title: COMPANY_NAME }

export default async function Home() {
  const clients = await getClients()
  const testimonials = await getTestimonials()

  return (
    <main className="bg-gradient-to-b from-secondary to-background">
      <ImageSection className="pt-header relative h-max flex-col items-center justify-start">
        <Image
          className="h-max w-full bg-pink-300 object-contain"
          {...SITE_IMAGES.home.heroBanner}
          alt=""
        />
        <div className="absolute z-10 mt-28 flex flex-col items-center justify-start gap-10">
          <h3 className="heigh text-center font-sans text-2xl font-semibold uppercase tracking-[0.2rem] text-secondary md:text-2xl">
            Luxurious, Timeless, Digital Dreamscapes
          </h3>
          <Image
            className="absolute w-60 -translate-y-5 object-cover"
            {...SITE_IMAGES.logo.main}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 z-20 flex w-full justify-end">
          <Carousel opts={{ loop: false }} className="w-full translate-y-[19rem]">
            <CarouselContent className="flex w-full">
              {clients.map((client) => (
                <CarouselItem
                  key={client.id}
                  className="ml-20 grid h-96 max-w-[19rem] place-items-center rounded-2xl bg-slate-900"
                >
                  <Button asChild>
                    <Link href={`/our-work/${encodeURIComponent(client.name)}`}>
                      <Image
                        className="h-40 w-40 object-contain"
                        height={300}
                        width={300}
                        src={getMediaUrl(client.logo!)}
                        alt={getMediaAlt(client.logo!)}
                      />
                    </Link>
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="translate-x-[4rem] translate-y-60" />
            <CarouselNext className="-translate-x-[4rem] translate-y-60" />
          </Carousel>
        </div>
      </ImageSection>
      <ImageSection className="relative flex h-[1250px] items-center justify-start">
        <h3 className="z-10 ml-20 translate-y-32 text-center font-sans text-2xl tracking-[0.2rem] text-accent-foreground md:text-4xl">
          Shaping brands that <strong className="font-bold">inspire,</strong>
          <br />
          <strong className="font-bold">connect,</strong> and{' '}
          <strong className="font-bold">define luxury.</strong>
        </h3>
        <Image
          className="absolute left-0 top-0 h-full w-full object-cover object-[50%_5%]"
          {...SITE_IMAGES.home.banner1}
          alt=""
        />
      </ImageSection>
      <ImageSection className="relative flex h-[2000px] flex-col items-end justify-start bg-secondary">
        <h3 className="z-10 mr-20 mt-20 text-4xl font-semibold uppercase text-accent-foreground">
          Our Expertise
        </h3>
        <div className="relative z-20 flex flex-col justify-center">
          <Image className="h-max w-full" {...SITE_IMAGES.logo.withWave} alt="" />
          <div className="absolute left-0 flex h-1/2 w-full translate-y-16 flex-col justify-between gap-5 px-20">
            <div className="flex w-full justify-evenly gap-5">
              <p className="w-max -translate-x-28 text-xl font-semibold text-white">
                Branding Strategy
              </p>
              <p className="w-max translate-y-11 text-xl font-semibold text-white">Consulting</p>
              <p className="w-max text-xl font-semibold text-white">Content Production</p>
              <p className="w-max translate-y-11 text-xl font-semibold text-white">
                Influencer Marketing
              </p>
            </div>
            <div className="flex w-full -translate-x-20 justify-end gap-40">
              <p className="w-max text-xl font-semibold text-white">Social Media Management</p>
              <p className="w-max text-xl font-semibold text-white">Performance Marketing</p>
            </div>
          </div>
        </div>
        <Image
          className="absolute left-0 top-0 h-max w-full -translate-y-60 object-cover"
          {...SITE_IMAGES.home.banner2}
          alt=""
        />
      </ImageSection>
      <section className="flex h-full flex-col px-20 py-20">
        <div className="grid place-items-center">
          <h3 className="-translate-y-40 text-4xl font-semibold uppercase text-accent-foreground">
            Our Philosophy
          </h3>
        </div>
        <p className="mx-auto mb-20 max-w-5xl text-justify font-sans text-2xl">
          In the world of digital storytelling, Nõstos echoes the significance of returning,
          creating a sense of belonging and connection. It&apos;s important to us to nurture and
          build relationships helping us grow together. We define luxury as an intimate, attentive
          journey, fostering genuine connections.
        </p>
        <div className="my-20 grid grid-cols-3 gap-10">
          <div className="h-60 w-80 rounded-3xl bg-slate-900">&nbsp;</div>
          <div className="h-60 w-80 rounded-3xl bg-slate-900">&nbsp;</div>
          <div className="h-60 w-80 rounded-3xl bg-slate-900">&nbsp;</div>
        </div>
        {testimonials.length !== 0 && (
          <div className="my-16 flex w-full flex-col items-center justify-center">
            <h3 className="font-serif text-7xl">Testimonials</h3>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={cn(
                  'mt-20 flex w-full',
                  testimonial.variant === 'v1' && 'justify-start',
                  testimonial.variant === 'v2' && 'justify-end',
                )}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        )}
      </section>
      <ImageSection className="relative flex h-[1500px] flex-col items-center justify-center">
        <div className="z-10 flex translate-y-72 flex-col items-center justify-center gap-10 text-secondary-foreground">
          <h3 className="text-4xl">Contact Us</h3>
          <p>We&apos;ll prepare a proposal and walk you through every step of the process.</p>
          <Button className="w-80 rounded-xl py-6">Contact Us</Button>
        </div>
        <Image
          className="absolute left-0 top-0 h-max w-full -translate-y-[500px] object-cover"
          {...SITE_IMAGES.home.banner3}
          alt=""
        />
      </ImageSection>
    </main>
  )
}
