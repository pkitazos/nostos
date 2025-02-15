import { Media } from '@/payload-types'

export const getMediaUrl = (image: Media | number) => (image as Media).url ?? ''

export const getMediaAlt = (image: Media | number) => (image as Media).alt ?? ''
