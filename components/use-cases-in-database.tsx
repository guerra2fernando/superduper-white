'use client'
import { 
  BriefcaseIcon, 
  ClipboardDocumentCheckIcon, 
  UserCircleIcon, 
  DocumentIcon, 
  CurrencyDollarIcon, 
  TruckIcon, 
  LifebuoyIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline'

export default function UseCasesInDatabase() {

  const useCases01 = [
    {
      icon: <BriefcaseIcon className="h-8 w-8 text-zinc-300" />,
      category: 'HR',
      content: 'Employment contracts: salary, termination date, probation period, non-compete clause, personal details',
    },
    {
      icon: <CurrencyDollarIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Revenue Management',
      content: 'Purchase orders: line items, quantity, price, customer name, payment terms, due dates',
    },
    {
      icon: <UserCircleIcon className="h-8 w-8 text-zinc-300" />,
      category: 'CRM',
      content: 'Registration forms: personal information, purchase history, segment information.',
    },
    {
      icon: <DocumentIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Legal',
      content: 'Contracts: parties involved, effective dates, terms and conditions, regulatory requirements, confidentiality clauses',
    },
  ]

  const useCases02 = [
    {
      icon: <ClipboardDocumentCheckIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Finance',
      content: 'Financial statements: Extract revenue, expenses, profit margins, asset details.',
    },
    {
      icon: <TruckIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Supply Chain',
      content: 'Shipping documents: tracking numbers, delivery dates, shipment contents, carrier details',
    },
    {
      icon: <LifebuoyIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Technical Support',
      content: 'Service agreements: Extract service levels, support hours, escalation procedures, contract duration, troubleshooting steps, maintenance schedules',
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Custom',
      content: 'Special industry, domain and use-case specific documents. Book a demo to learn more!',
    },
  ]

  return (
    <section className="bg-zinc-800">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">Use-Cases</h2>
          </div>
        </div>
        <div className="max-w-[94rem] mx-auto space-y-6">
          {/* Row #1 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {/* Items */}
              {useCases01.map((useCase, index) => (
                <div key={index} className="flex flex-col items-start text-left space-y-4 [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] p-6 rounded-lg shadow-lg min-w-[350px] min-h-[200px]">
                  <div className="flex items-center space-x-2">
                    {useCase.icon}
                    <h3 className="text-lg font-bold text-zinc-200">{useCase.category}</h3>
                  </div>
                  <p className="text-zinc-400">{useCase.content}</p>
                </div>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
              {/* Items */}
              {useCases01.map((useCase, index) => (
                <div key={index} className="flex flex-col items-start text-left space-y-4 [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] p-6 rounded-lg shadow-lg min-w-[350px] min-h-[200px]">
                  <div className="flex items-center space-x-2">
                    {useCase.icon}
                    <h3 className="text-lg font-bold text-zinc-200">{useCase.category}</h3>
                  </div>
                  <p className="text-zinc-400">{useCase.content}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Row #2 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]">
              {/* Items */}
              {useCases02.map((useCase, index) => (
                <div key={index} className="flex flex-col items-start text-left space-y-4 [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] p-6 rounded-lg shadow-lg min-w-[350px] min-h-[200px]">
                  <div className="flex items-center space-x-2">
                    {useCase.icon}
                    <h3 className="text-lg font-bold text-zinc-200">{useCase.category}</h3>
                  </div>
                  <p className="text-zinc-400">{useCase.content}</p>
                </div>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]" aria-hidden="true">
              {/* Items */}
              {useCases02.map((useCase, index) => (
                <div key={index} className="flex flex-col items-start text-left space-y-4 [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] p-6 rounded-lg shadow-lg min-w-[350px] min-h-[200px]">
                  <div className="flex items-center space-x-2">
                    {useCase.icon}
                    <h3 className="text-lg font-bold text-zinc-200">{useCase.category}</h3>
                  </div>
                  <p className="text-zinc-400">{useCase.content}</p>
                </div>
              ))}
            </div>
          </div >
        </div >
      </div >
    </section >
  )
}
