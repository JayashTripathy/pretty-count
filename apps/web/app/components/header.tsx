import { GithubIcon, XIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
      <header className='  z-10  px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0 sticky top-0 backdrop-blur-3xl  border-b border-border'>
        <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
          <a href='/' className='relative flex items-center'>
            <div className=''>Pretty Count</div>
          </a>
          <nav className='flex items-center gap-2'>
            
            <Link
              href='https://github.com/JayashTripathy/pretty-count.git'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center'
            >
              <GithubIcon className='h-5 w-5 ' />
            </Link>
            {/* <ThemeSwitch /> */}
          </nav>
        </div>
      </header>
    );
  }