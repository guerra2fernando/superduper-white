'use client'
import { 
  CloudIcon,
  CubeIcon,
  BoltIcon,
  ArrowPathIcon,
  ScaleIcon,
  ChatBubbleLeftRightIcon,
  AdjustmentsHorizontalIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function UseCasesInDatabase() {

  const useCases01 = [
    {
      icon: <CubeIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Framework Compatibility',
      content: 'Easily integrate with popular Python frameworks like LangChain and LLamaIndex to streamline the development of your AI applications.',
    },
    {
      icon: <CloudIcon className="h-8 w-8 text-zinc-300" />,
      category: 'End-to-End Workflow',
      content: 'Maintain the complete RAG workflow within your database to simplify data management and processing tasks.',
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Real-Time Data Processing',
      content: 'Ensure new incoming data is instantly processed and made available for immediate use in applications, enhancing responsiveness.',
    },
    {
      icon: <ScaleIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Scalable Deployment',
      content: 'Deploy and scale multiple RAG applications concurrently, optimizing resource usage and performance across all applications.',
    },
  ]

  const useCases02 = [
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-zinc-300" />,
      category: 'API Switching',
      content: 'Easily switch between various AI APIs and the latest self-hosted models to leverage the best technologies for your needs.',
    },
    {
      icon: <AdjustmentsHorizontalIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Fine-Tuning',
      content: 'Customize large language models (LLMs) with your specific data to enhance their accuracy and performance for your applications.',
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Customer Support',
      content: 'Implement AI chatbots to provide instant, accurate responses to customer queries by leveraging real-time data processing.',
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-zinc-300" />,
      category: 'Automated Analysis',
      content: 'Use RAG to analyze and generate insights from large volumes of documents, automating tasks like compliance checks and report generation.',
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
