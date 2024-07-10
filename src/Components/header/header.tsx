import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <main>
      <header >
        <Image src='/icons/menu.svg' alt="menu" width={36} height={24} />
        <Link href={'/'}>
          <Image src='/spider-logo.svg' alt="menu" width={262} height={70} />
        </Link>
        <Image src='/icons/user.svg' alt="menu" width={34} height={34} />
      </header>
    </main>
  )
}

export default Header