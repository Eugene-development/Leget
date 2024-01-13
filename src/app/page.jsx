import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const technology = [
  ['NextJS', logoFamilyFund],
  ['Kubernetes', logoFamilyFund],
  ['Kafka', logoUnseal],
  ['Bun', logoMailSmirk],
  ['GraphQL', logoHomeWork],
  ['Laravel', logoGreenLife],
  ['Tailwind', logoBrightPath],
  ['Nginx', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Технологии, которые мы применяем 
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {technology.map(([name, logo]) => (
              <li key={name}>
                <FadeIn>
                  <div className='flex'>

                    {/* <Image className='h-24 w-full grayscale' src={logo} alt={client} unoptimized /> */}
                    <p className='text-center font-display text-lg font-semibold tracking-wider text-white sm:text-left'>{name}</p>
                  </div>
                  
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Мы предлагаем"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Полное покрытие потребностей бизнеса в ИТ сфере. Интернет ресурс, его поддержка, развитие и продвижение.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p> */}
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Комплексный подход"
        title="Решение для бизнеса"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          В сжатые сроки мы подготовим стартовый проект, запустим его и будем развивать всё время нашего сотрудничества.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Интернет-магазин">
              Обеспечивает онлайн-торговлю, увеличивает доступность товаров, удобство покупок и активно расширяет клиентскую базу.
            </ListItem>
            <ListItem title="Корпоративный сайт">
              Способствует презентации компании, улучшает имидж, обеспечивает актуальной информацией бизнес партнеров и сотрудников.
            </ListItem>
            <ListItem title="Коммерческий сайт">
              Позволяет эффективно продавать услуги, управлять бизнес-процессами, привлекать клиентов и укреплять силу бренда.
            </ListItem>
            <ListItem title="Лендинг">
              Направлен на привлечение внимания к конкретному продукту или услуге, максимально убеждает посетителя совершить целевое действие.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    '',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Сайт и IT технологии для Вашего бизнеса
          </h1>
          {process.env.NODE_ENV === 'development' && (
            <p>Этот текст будет отображен только в режиме dev</p>
          )}        

          <p className="mt-6 text:lg sm:text-xl text-neutral-600">  
            <strong>LEGET</strong>  - команда web-разработчиков, работающая на стыке дизайна и технологий. Основной целью мы видим создание максимально точных отражений бизнес процессов в современных интернет решениях.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32  lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Наша команда пошла дальше стереотипов в современном интернет бизнесе. Мы создали концепт и разработали уникальную архитектуру web-приложений.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
