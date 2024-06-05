import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo-official.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="SuperDuper">
      <Image className="max-w-none" src={LogoImg} height={55} priority alt="SuperDuper" />
    </Link>
  )
}