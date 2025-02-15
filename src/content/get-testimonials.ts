import { payload } from '@/lib/db'

export async function getTestimonials() {
  return await payload.find({ collection: 'testimonials' }).then((res) => res.docs)
}
export async function getTestimonialsMock() {
  return [
    {
      id: 1,
      client_name: 'Seesoo',
      quote:
        'Working with you guys was the best experience in our hospitality business so far. The warm and understanding approach to our needs and visions was amazing and the outcome of the material just amazing! Thank you for joining The Seesoo Family ♥️',
      variant: 'v2',
      logo: {
        id: 1,
        url: '/assets/expertise-1.png',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
    },
    {
      id: 2,
      client_name: "Anil Ozer (Cook's Club Adakoy)",
      quote: '"Nadia, did a great job here at Cook\'s Club Adakoy, it was an absolute pleasure."',
      variant: 'v1',
      logo: {
        id: 2,
        url: '/assets/expertise-1.png',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
    },
    {
      id: 3,
      client_name: 'Antonis (Casa Cook Rhodes)',
      quote:
        '"Ελπίζω να δουλέψουμε μαζί και του χρόνου! Κάνετε εξαιρετική δουλειά και χαίρομαι πολύ που συνεργαστήκαμε!"',
      variant: 'v2',
      logo: {
        id: 3,
        url: '/assets/expertise-1.png',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
    },
    {
      id: 4,
      client_name: '(Nissiblu Beach Resort)',
      quote:
        '"It was great collaborating with you last year, we are happy to continue with our collaboration. The Social Media Strategy was on point."',
      variant: 'v1',
      logo: {
        id: 4,
        url: '/assets/expertise-1.png',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
    },
  ]
}
