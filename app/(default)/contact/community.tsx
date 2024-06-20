export default function Community() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-50 before:-z-10">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900">
              Join the Superduper Community
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
            {/* Twitter */}
            <div className="flex flex-col p-4 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg shadow shadow-black/5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="fill-zinc-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M24 4.557a9.926 9.926 0 0 1-2.827.775 4.933 4.933 0 0 0 2.163-2.724 9.865 9.865 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.379 4.482 13.978 13.978 0 0 1-10.15-5.144 4.922 4.922 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.23-.616v.061a4.923 4.923 0 0 0 3.95 4.829 4.904 4.904 0 0 1-2.224.085 4.924 4.924 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54a13.965 13.965 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.419 0-.219-.005-.437-.015-.653A10.243 10.243 0 0 0 24 4.557z" />
                  </svg>
                </div>
                <h3 className="font-inter-tight font-semibold text-zinc-800">
                  Twitter
                </h3>
              </div>
              <p className="grow text-sm text-zinc-500">
                Follow us on Twitter for the latest updates and news.
              </p>
              <div className="text-right">
                <a
                  className="inline-flex items-center font-medium text-sm mt-4"
                  href="https://twitter.com/superduperdb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us
                  <svg
                    className="shrink-0 ml-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* LinkedIn */}
            <div className="flex flex-col p-4 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg shadow shadow-black/5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="fill-zinc-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 310 310"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                    />
                    <path
                      d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                    />
                    <path
                      d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                    />
                  </svg>
                </div>
                <h3 className="font-inter-tight font-semibold text-zinc-800">
                  LinkedIn
                </h3>
              </div>
              <p className="grow text-sm text-zinc-500">
                Connect with us on LinkedIn to stay updated with our
                professional activities.
              </p>
              <div className="text-right">
                <a
                  className="inline-flex items-center font-medium text-sm mt-4"
                  href="https://www.linkedin.com/company/superduperdb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect
                  <svg
                    className="shrink-0 ml-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* YouTube */}
            <div className="flex flex-col p-4 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg shadow shadow-black/5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="fill-zinc-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 461.001 461.001"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                    />
                  </svg>
                </div>
                <h3 className="font-inter-tight font-semibold text-zinc-800">
                  YouTube
                </h3>
              </div>
              <p className="grow text-sm text-zinc-500">
                Subscribe to our YouTube channel for tutorials and updates.
              </p>
              <div className="text-right">
                <a
                  className="inline-flex items-center font-medium text-sm mt-4"
                  href="https://www.youtube.com/channel/UC-clq9x8EGtQc6MHW0GF73g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe
                  <svg
                    className="shrink-0 ml-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Slack */}
            <div className="flex flex-col p-4 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg shadow shadow-black/5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="fill-zinc-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2447.6 2452.5"
                    width="24"
                    height="24"
                  >
                    <g clipRule="evenodd" fillRule="evenodd">
                      <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" />
                      <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" />
                      <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" />
                      <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" />
                    </g>
                  </svg>
                </div>
                <h3 className="font-inter-tight font-semibold text-zinc-800">
                  Slack
                </h3>
              </div>
              <p className="grow text-sm text-zinc-500">
                Join our Slack community for real-time collaboration.
              </p>
              <div className="text-right">
                <a
                  className="inline-flex items-center font-medium text-sm mt-4"
                  href="https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join us
                  <svg
                    className="shrink-0 ml-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Blog */}
            <div className="flex flex-col p-4 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg shadow shadow-black/5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="fill-zinc-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h8a2 2 0 0 1-2-2V3ZM4 4h4v2H4V4Zm4 3.5H4V9h4V7.5Zm-4 3h4V12H4v-1.5Z"
                      clipRule="evenodd"
                    />
                    <path d="M13 5h-1.5v6.25a1.25 1.25 0 1 0 2.5 0V6a1 1 0 0 0-1-1Z" />
                  </svg>
                </div>
                <h3 className="font-inter-tight font-semibold text-zinc-800">
                  Blog
                </h3>
              </div>
              <p className="grow text-sm text-zinc-500">
                Read our blog for the latest articles and updates.
              </p>
              <div className="text-right">
                <a
                  className="inline-flex items-center font-medium text-sm mt-4"
                  href="https://blog.superduperdb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <svg
                    className="shrink-0 ml-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* GitHub */}
            <div className="flex flex-col p-4 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg shadow shadow-black/5">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="fill-zinc-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h3 className="font-inter-tight font-semibold text-zinc-800">
                  GitHub
                </h3>
              </div>
              <p className="grow text-sm text-zinc-500">
                Contribute to our projects and explore our code on GitHub.
              </p>
              <div className="text-right">
                <a
                  className="inline-flex items-center font-medium text-sm mt-4"
                  href="https://github.com/superduperdb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute
                  <svg
                    className="shrink-0 ml-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
