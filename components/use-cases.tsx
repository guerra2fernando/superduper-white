import { ServerIcon, MagnifyingGlassIcon, CameraIcon, ChartBarIcon, ShieldExclamationIcon, ClockIcon } from '@heroicons/react/24/solid';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function UseCasesSection() {
  return (
    <section className="relative">
      <div className="pt-10 pb-10 md:py-15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h2 className="font-inter-tight text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900">
                    Instead of bringing your data to AI, bring your AI deployment to your data. 
                        </h2>
                        <p className="text-lg text-slate-400">
                        Superduper integrates with your existing databases, facilitating data transfer to AI models, APIs and frameworks, ensuring that all steps of your AI workflows are contained in your databases end-to-end, instead of being spread across various places, systems and environments. 
                        </p>
                    </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <UseCase
              icon={<ServerIcon className="h-6 w-6 text-blue-600" />}
              title="LLM and RAG applications"
              description="Allow large language models direct access to your data to build chatbots, assistants, sentiment analysis, classification, summarization."
            />
            <UseCase
              icon={<MagnifyingGlassIcon className="h-6 w-6 text-green-600" />}
              title="Vector Embedding Generation"
              description="Install and manage vector embedding models and APIs side-by-side, enabling semantic and similarity search, recommendation systems."
            />
            <UseCase
              icon={<CameraIcon className="h-6 w-6 text-red-600" />}
              title="Computer Vision"
              description="Analyze, process, and extract meaningful insights from images and videos to build classification, segmentation, object detection, and recognition systems."
            />
            <UseCase
              icon={<ChartBarIcon className="h-6 w-6 text-yellow-600" />}
              title="Predictive Analytics"
              description="Predict behavioral patterns and anticipate changes and trends based on historical and current data for various applications."
            />
            <UseCase
              icon={<ShieldExclamationIcon className="h-6 w-6 text-purple-600" />}
              title="Anomaly and Fraud Detection"
              description="Identify deviations or irregularities in data patterns, signaling potential instances of fraudulent activity or abnormal behavior."
            />
            <UseCase
              icon={<ClockIcon className="h-6 w-6 text-orange-600" />}
              title="Time Series Prediction"
              description="Forecast future values based on historical data points, predicting trends, patterns, or outcomes over time."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCase({ icon, title, description }: UseCaseProps) {
  return (
    <div className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg p-5">
      <div className="flex items-center space-x-3 mb-1">
        {icon}
        <h3 className="font-inter-tight font-semibold text-zinc-900">{title}</h3>
      </div>
      <p className="grow max-w-md text-sm text-zinc-500">
        {description}
      </p>
    </div>
  );
}
