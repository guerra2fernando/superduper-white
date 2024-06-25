import { ServerIcon, MagnifyingGlassIcon, CameraIcon, ChartBarIcon, ShieldExclamationIcon, ClockIcon } from '@heroicons/react/24/solid';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function UseCasesSection() {
  return (
    <section className="relative bg-zinc-800 pb-10">
      <div className="pt-10 pb-10 md:py-15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-8 md:pt-8 pb-8 md:pb-8">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-200">
            Implement custom AI applications and workflows more efficiently
            </h2>
            <p className="text-lg text-zinc-500">
            Enable your team to deliver enterprise AI applications at speed, from idea to high-scale. Build, deploy and manage all your AI workflows, from GenAI and LLMs to classic ML, in a single platform and your databases. Get in touch with our data scientist consultants to discuss your AI use-cases and requirements. </p>
          
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
              icon={<ChartBarIcon className="h-6 w-6 text-red-600" />}
              title="Predictive Analytics"
              description="Predict behavioral patterns and anticipate changes and trends based on historical and current data for various applications."
            />
            <UseCase
              icon={<ShieldExclamationIcon className="h-6 w-6 text-blue-600 " />}
              title="Anomaly and Fraud Detection"
              description="Identify deviations or irregularities in data patterns, signaling potential instances of fraudulent activity or abnormal behavior."
            />
            <UseCase
              icon={<ClockIcon className="h-6 w-6 text-green-600" />}
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
    <div className="flex flex-col border border-transparent [background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] rounded-lg p-5">
      <div className="flex items-center space-x-3 mb-1">
        {icon}
        <h3 className="font-inter-tight font-semibold text-zinc-200">{title}</h3>
      </div>
      <p className="grow max-w-md text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}
