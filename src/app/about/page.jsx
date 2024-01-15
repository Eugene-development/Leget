import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpeg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpeg'
import imageBlakeReid from '@/images/team/blake-reid.jpeg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpeg'
import imageDriesVincent from '@/images/team/dries-vincent.jpeg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpeg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpeg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpeg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpeg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpeg'
import imageMichaelFoster from '@/images/team/michael-foster.jpeg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpeg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Наша культура"
        title="Баланс идей и навыков"
        invert
      >
        <p>
          Мы постоянно интегрируем в наши продукты передовые технологии и идеи наших партнёров и надёжно храним коммерческую тайну
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Лояльность" invert>
            В нашей компании мы всегда стремимся к установлению долгосрочных, продуктивных и доверительных отношений со всеми нашими клиентами. 
          </GridListItem>
          <GridListItem title="Доверие" invert>
            Для нас взаимное доверие — это фундамент нашего долгосрочного партнерства. Ведь Ваш успех – наша общая основная цель.
          </GridListItem>
          <GridListItem title="Конфиденциальность" invert>
            Мы строго соблюдаем стандарты защиты информации, гарантируя, что ваша конфиденциальность останется неприкосновенной.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Лендинг',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Коммерческий сайт',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Фирменный сайт',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Интернет магазин',
    people: [
      {
        name: 'ZOV',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Точка',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Биохим',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="О нас" title="Компания для интернет бизнеса">
        <p>
          Приветствуем вас в [Название Компании] – вашем надежном партнере в мире цифрового успеха!
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Мы – команда профессионалов, специализирующихся на поддержке и развитии интернет-бизнеса. Наша миссия – создание уникальных решений, позволяющих вашему онлайн-проекту процветать в современном цифровом мире.
          </p>
          {/* <p>
            Наши услуги:
          </p>
          <ul>
            <li>Веб-Разработка и Дизайн: Ваш виртуальный прилавок – это визитная карточка вашего бренда. Мы создаем современные, функциональные и привлекательные веб-сайты, которые не только привлекают внимание, но и конвертируют посетителей в клиентов.</li>
            <li>Оптимизация и Продвижение: Позиционируйтесь выше конкурентов с нашими услугами по SEO и маркетингу. Мы разрабатываем стратегии, которые повышают видимость вашего бренда в поисковых системах и приводят к росту органического трафика.</li>
            <li>Эффективная Реклама: Мы создаем кампании цифровой рекламы, которые максимизируют ваш бюджет и достигают целевой аудитории. Работаем с контекстной рекламой, социальными сетями и другими платформами.</li>
            <li>Аналитика и Управление Данными: Решения на основе данных - ключ к принятию правильных бизнес-решений. Мы предоставляем инструменты аналитики, которые помогают вам понять поведение клиентов и оптимизировать ваш бизнес.</li>
            <li>ИТ-Консалтинг и Поддержка: Наша команда экспертов всегда готова помочь в решении технических вопросов, обеспечивая стабильную и бесперебойную работу вашего онлайн-проекта.</li>
          </ul>
          <p>Почему [Название Компании]?</p>
          <ol>
            <li>Опыт и Экспертиза: Мы обладаем многолетним опытом работы в индустрии интернет-бизнеса и постоянно следим за последними трендами и технологиями.</li>
            <li>Индивидуальный Подход: Мы понимаем, что каждый проект уникален. Поэтому мы создаем индивидуальные стратегии и решения, соответствующие вашим конкретным потребностям.</li>
            <li>Результативность: Наш успех измеряется успехами наших клиентов. Мы гордимся тем, что помогаем им достигать своих целей и развиваться в цифровом пространстве.</li>
          </ol>
          <p>Сделайте ваш интернет-бизнес процветающим с [Название Компании] – вашим надежным партнером в цифровом мире!</p> */}
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Передовых технологий" />
          <StatListItem value="52" label="Партнёра компании" />
          <StatListItem value="45" label="Программистов" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
