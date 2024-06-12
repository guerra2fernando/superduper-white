import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-zinc-200">

          {/* 1st block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-6 max-sm:order-1 flex flex-col">
            <div className="mb-4">
              {/* Logo */}
              <Link className="flex items-center justify-center bg-white w-8 h-8 rounded shadow-sm shadow-zinc-950/20" href="/">
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
            </div>
            <div className="grow text-sm text-zinc-500">&copy; SuperDuper.com. All rights reserved.</div>
            {/* Social links */}
            <ul className="flex space-x-4 mt-4 mb-1">
              <li>
                <a className="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition" href="https://twitter.com/superduperdb" aria-label="Twitter">
                <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M24 4.557a9.926 9.926 0 0 1-2.827.775 4.933 4.933 0 0 0 2.163-2.724 9.865 9.865 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.379 4.482 13.978 13.978 0 0 1-10.15-5.144 4.922 4.922 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.23-.616v.061a4.923 4.923 0 0 0 3.95 4.829 4.904 4.904 0 0 1-2.224.085 4.924 4.924 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54a13.965 13.965 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.419 0-.219-.005-.437-.015-.653A10.243 10.243 0 0 0 24 4.557z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition" href="https://www.linkedin.com/company/superduperdb" aria-label="LinkedIn">
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" width="20" height="20">
                    <path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
	<path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
	<path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a className="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition" href="https://www.youtube.com/channel/UC-clq9x8EGtQc6MHW0GF73g" aria-label="YouTube">
                  <svg className="fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.001 461.001" width="25" height="25">
                    <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Company</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://join.com/companies/superduperdb">Careers</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://blog.superduperdb.com/">Blog</a>
              </li>
              
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://github.com/SuperDuperDB/superduperdb/blob/main/CONTRIBUTING.md">Contibute</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://blog.superduperdb.com/">Docs</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="/pricing">Pricing</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA">Slack</a>
              </li>
              
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#">Brand Guide</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Legals</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://github.com/SuperDuperDB/superduperdb/blob/main/CHANGELOG.md">Changelog</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://github.com/SuperDuperDB/superduperdb/blob/main/LICENSE">Licence</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://pypi.org/project/superduperdb/">Pip Package</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}
