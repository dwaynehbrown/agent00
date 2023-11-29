import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Inital Form Interactivity',
    date: 'Dec 19 2023',
    icon: UserIcon,
    iconBackground: 'bg-blue-400',
  },
  {
    id: 1,
    content: 'Inital Data Population',
    date: 'Dec 9 2023',
    icon: UserIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 2,
    content: 'Initial Layout',
    date: 'Nov 23 2023',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-green-500',
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Changelog() {
  return (
    <div className="flow-root">
      <h2 className="mb-4">Changelog</h2>

      {/* <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0"> */}

        <ul role="list" className="-mb-8">
          {timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                  <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                      )}
                    >
                      <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        {event.content}{' '}
                        <a href={event.href} className="font-medium text-gray-900">
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={event.datetime}>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      {/* </div> */}
    </div>
  )
}
