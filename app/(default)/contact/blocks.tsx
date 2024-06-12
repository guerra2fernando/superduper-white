export default function Blocks() {
  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-16 text-center">
            {/* Item #1 */}
            <div>
              <div className="w-8 h-8 bg-slate-50 border border-zinc-200 rounded-md inline-flex items-center justify-center mb-3">
                <svg className="fill-zinc-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M2 2v12h12V2H2zm11 11H3V3h10v10zM6 6h4v4H6V6z" />
                </svg>
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Real-time Insights</h3>
              <p className="text-sm text-zinc-500">Get real-time insights from your data with our advanced analytics tools.</p>
            </div>
            {/* Item #2 */}
            <div>
              <div className="w-8 h-8 bg-slate-50 border border-zinc-200 rounded-md inline-flex items-center justify-center mb-3">
                <svg className="fill-zinc-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 12H7V7h2v5zm0-7H7V3h2v2z" />
                </svg>
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">AI-Powered</h3>
              <p className="text-sm text-zinc-500">Leverage AI to enhance your database management and performance.</p>
            </div>
            {/* Item #3 */}
            <div>
              <div className="w-8 h-8 bg-slate-50 border border-zinc-200 rounded-md inline-flex items-center justify-center mb-3">
                <svg className="fill-zinc-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M13.41 7H8V1.59c0-.53-.21-1.04-.59-1.41C6.82-.41 6.32-.01 6.32.59V7H1.59c-.53 0-1.04.21-1.41.59-.41.41-.01.91.59.91H7v5.41c0 .53.21 1.04.59 1.41.41.41.91.01.91-.59V8h5.41c.53 0 1.04-.21 1.41-.59.41-.41.01-.91-.59-.91z" />
                </svg>
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Scalable</h3>
              <p className="text-sm text-zinc-500">Easily scale your database to handle increasing data volumes.</p>
            </div>
            {/* Item #4 */}
            <div>
              <div className="w-8 h-8 bg-slate-50 border border-zinc-200 rounded-md inline-flex items-center justify-center mb-3">
                <svg className="fill-zinc-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.86 6.97l-4.2 4.2a.5.5 0 01-.71 0L4.14 9.37a.5.5 0 01.71-.71L7.36 10l3.5-3.5a.5.5 0 01.71.71z" />
                </svg>
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Secure</h3>
              <p className="text-sm text-zinc-500">Ensure your data is protected with industry-leading security measures.</p>
            </div>
            {/* Item #5 */}
            <div>
              <div className="w-8 h-8 bg-slate-50 border border-zinc-200 rounded-md inline-flex items-center justify-center mb-3">
                <svg className="fill-zinc-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 13a6 6 0 110-12 6 6 0 010 12zM7 4h2v5H7zm0 6h2v2H7z" />
                </svg>
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Reliable</h3>
              <p className="text-sm text-zinc-500">Depend on our robust framework and constant updates to have the latest tech.</p>
            </div>
            {/* Item #6 */}
            <div>
              <div className="w-8 h-8 bg-slate-50 border border-zinc-200 rounded-md inline-flex items-center justify-center mb-3">
                <svg className="fill-zinc-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.86 6.97l-4.2 4.2a.5.5 0 01-.71 0L4.14 9.37a.5.5 0 01.71-.71L7.36 10l3.5-3.5a.5.5 0 01.71.71z" />
                </svg>
              </div>
              <h3 className="font-inter-tight font-semibold text-zinc-800 mb-1">Customizable</h3>
              <p className="text-sm text-zinc-500">Tailor the database to meet your specific needs and preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
