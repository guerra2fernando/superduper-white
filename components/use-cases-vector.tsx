'use client'
import { 
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  SparklesIcon,
  MagnifyingGlassCircleIcon,
  BookOpenIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'

export default function UseCasesVector() {

  const useCases01 = [
    {
      icon: <AdjustmentsHorizontalIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Integrate',
      content: 'Integrate and manage the latest open-source embedding models and API providers for different applications side-by-side.',
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Automate',
      content: 'Forget building and maintaining data and embedding pipelines and enjoy streaming inference, so that new incoming data gets vectorized immediately and automatically.',
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Safeguard',
      content: 'Safeguard your data by self-hosting your own models. Scale inference flexibly to accommodate large data.',
    },
    {
      icon: <LifebuoyIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Scale',
      content: 'Scale inference flexibly to accommodate large data.',
    },
  ]

  const useCases02 = [
    {
      icon: <SparklesIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Fine-tune',
      content: 'Fine-tune your embedding models for maximum performance, whether from open or closed source.',
    },
    {
      icon: <MagnifyingGlassCircleIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Search',
      content: 'Search across any type of data using best-in-class multi-modal vector search on your existing databases.',
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Book a Demo',
      content: 'Special industry, domain and use-case specific demonstrations. Book a demo to learn more!',
    },
    {
      icon: <PuzzlePieceIcon className="h-8 w-8 text-zinc-300" />,
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
