import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic mt-4',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Телефон для связи" invert={invert}>
          Руководитель по работе с клиентами:
          <br />
          8 915 400-00-20 (Пн-Сб с 10-00 до 21-00)
        </Office>
      </li>
      {/* <li>
        <Office name="Почта" invert={invert}>
          Клиентский отдел:
          <br />
          info@leget.ru
        </Office>
      </li> */}
    </ul>
  )
}
