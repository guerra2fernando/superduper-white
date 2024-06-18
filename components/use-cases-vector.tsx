'use client'
import { 
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  SparklesIcon,
  MagnifyingGlassCircleIcon,
  DocumentIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function UseCasesVector() {

  const useCases01 = [
    {
      icon: <AdjustmentsHorizontalIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Integrate',
      content: 'Seamlessly integrate vector search capabilities into your existing applications to enhance data retrieval efficiency and accuracy.',
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Automate',
      content: 'Automate real-time data processing and embedding generation, ensuring immediate vectorization of new data for rapid searchability.',
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Secure',
      content: 'Securely host your own models to ensure data privacy and compliance with regulations, while scaling operations as needed.',
    },
    {
      icon: <LifebuoyIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Customer Support',
      content: 'Enhance customer support by integrating vector search to quickly retrieve relevant solutions from a knowledge base.',
    },
  ]

  const useCases02 = [
    {
      icon: <SparklesIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Personalization',
      content: 'Use embeddings to personalize content and product recommendations for users based on their past interactions and preferences.',
    },
    {
      icon: <MagnifyingGlassCircleIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Advanced Search',
      content: 'Implement advanced, multi-modal search capabilities across text, images, and other data types to enhance retrieval accuracy.',
    },
    {
      icon: <DocumentIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Document Management',
      content: 'Improve document management systems by using vector search to find and organize documents based on content similarity.',
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Chatbots',
      content: 'Integrate with chatbots to enable them to understand and respond to user queries more effectively by leveraging vector embeddings.',
    },
  ]

  return (
    <section className="bg-zinc-800">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">Use Cases</h2>
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
