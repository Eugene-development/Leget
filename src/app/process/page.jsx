import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Согласование" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Эффективное сотрудничество начинается с тщательного согласования проекта. На этом этапе ключевые заинтересованные стороны собираются вместе, чтобы определить цели, обсудить требования и установить четкие ожидания.
        </p>
        <p>
          Важно провести всесторонний анализ потребностей бизнеса, чтобы ИТ-решение максимально соответствовало стратегическим задачам компании. На этом этапе мы определим основные сроки, бюджет, а также ресурсы, необходимые для реализации проекта.
        </p>
        <p>
          Ключевым элементом является составление подробного плана проекта, который будет служить основой для всех последующих шагов. Коммуникация между всеми участниками должна быть открытой и постоянной, чтобы обеспечить понимание и поддержку проекта на всех уровнях.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Мы согласуем
      </h3>
      <TagList className="mt-4">
        <TagListItem>Сроки</TagListItem>
        <TagListItem>Бюджет</TagListItem>
        <TagListItem>Коммуникации</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Разработка" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          После согласования проекта, следующим шагом является его разработка. В этом разделе мы рассмотрим, какие шаги необходимо предпринять для разработки ИТ проекта.
        </p>
        <p>
          Первый шаг - это разработка дизайна проекта. Дизайн должен быть согласован с заказчиком и учитывать все требования к проекту.
        </p>
        <p>
          Второй шаг - это разработка кода. Код должен быть написан на языке программирования, определенном в технических требованиях, и быть согласованным с дизайном проекта.
        </p>
        <p>
          Третий шаг - это тестирование проекта. Тестирование должно быть проведенно на всех этапах разработки и включать в себя тестирование функциональности, производительности и безопасности.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Евгений Изумрудов', role: 'Виртуальный ассистент' }}
        className="mt-12"
      >
        На этом этапе мы также проведём обучение вашей команды всему интерфейсу ресурса и обозначим все тонкости его использования.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Презентация" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          На этом этапе мы проведём демонстрацию функциональности продукта, обзор выполненной работы и достигнутых результатов.
        </p>
        <p>
          Получив обратную связь от всех участников мы учтём любые рекомендации или изменения, которые могут быть внесены в проект после презентации.
        </p>
        <p>
          После успешного завершения этого этапа следует постпроектный анализ и, при необходимости, планирование дальнейшего сопровождения и поддержки ИТ-проекта.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Где проходит презентация?
      </h3>
      <List className="mt-8">
        <ListItem title="Офис">
          В нашем офисе
        </ListItem>
        <ListItem title="Выезд">
          У вас в компании
        </ListItem>
        <ListItem title="Удалённо">
          Удаленно по сети интернет
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">

      
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Сервис и поддержка"
        title="Мы всегда рядом"
      >
        <p>
          Наши продукты постоянно развиваются, появляется новый функционал и потенциальные возможности. Если вам нужна помощь, то мы готовы дать вам необходимую поддержку.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Вопрос">
            Ответим на все интересующие вас вопросы.
          </GridListItem>
          <GridListItem title="Баг">
            Устраним дефекты с функционалом сайтов.
          </GridListItem>
          <GridListItem title="Предложение">
            Выслушаем ваши идеи по развитию проекта.
          </GridListItem>
          <GridListItem title="Помощь">
            Окажем помощь в сложной ситуации.
          </GridListItem>
          <GridListItem title="Проблема">
            Решим проблемы общего характера.
          </GridListItem>
          <GridListItem title="Отзыв">
            Выслушаем честный отзыв о нашей работе.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

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


export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Как мы работаем" title="Сотрудничество">
        <p className='my-2'>Предлагаем компаниям воспользоваться нашими разработками, а также мы открыты к разного рода бизнес коллаборациям для взаимного развития.</p>
        
        <p className='my-2'>
          Если Вас заинтересовало наше предложение, то просим Вас связаться с нами по телефону <strong>8 (915) 400-00-20</strong>  или через форму контактной связи. Наши сотрудники дадут полную консультацию о нашей работе и возможностях сервиса.
        </p>
        <p className='my-2'>
          Предоставляется льготный тестовый период на три месяца.
        </p>
      </PageIntro>
      <Culture/>


      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
