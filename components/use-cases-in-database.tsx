'use client'
import { 
  CloudIcon,
  CubeIcon,
  BoltIcon,
  ArrowPathIcon,
  ScaleIcon,
  BriefcaseIcon,
  AdjustmentsHorizontalIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'

export default function UseCasesInDatabase() {

  const useCases01 = [
    {
      icon: <CubeIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Framework Compatibility',
      content: 'Work with your favorite Python and RAG frameworks like LangChain and LLamaIndex.',
    },
    {
      icon: <CloudIcon className="h-8 w-8 text-zinc-300" />,
      category: 'End-to-End Workflow',
      content: 'Have the end-to-end RAG workflow contained in your database.',
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Instant Processing',
      content: 'Have new incoming data instantly processed and made available to your applications.',
    },
    {
      icon: <ScaleIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Scalable Deployment',
      content: 'Implement and scale various RAG applications side-by-side with one deployment, reusing workflow steps across your applications if possible.',
    },
  ]

  const useCases02 = [
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-zinc-300" />,
      category: 'API Switching',
      content: 'Switch between AI APIs and the latest self-hosted embedding and language models.',
    },
    {
      icon: <AdjustmentsHorizontalIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Fine-tune Models',
      content: 'Fine-tune LLMs with your data for optimal performance and accuracy.',
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Schedule a Demo',
      content: 'Special industry, domain and use-case specific demonstrations. Schedule a demo to learn more!',
    },
    {
      icon: <BriefcaseIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Hero Illustration',
      content: 'Showcase your use cases and solutions with engaging hero illustrations.',
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
