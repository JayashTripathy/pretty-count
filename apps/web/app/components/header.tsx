import { GithubIcon, XIcon } from "lucide-react";
import Link from "next/link";
function IconFlowerTulip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M3 13a9 9 0 009 9 9 9 0 00-9-9m9 9a9 9 0 009-9 9 9 0 00-9 9m6-19v5a6 6 0 01-6 6 6 6 0 01-6-6V3c.74 0 1.47.12 2.16.39.55.23 1.04.57 1.45 1L12 2l2.39 2.39c.41-.43.9-.77 1.45-1A5.9 5.9 0 0118 3z" />
    </svg>
  );
}

export default function Header() {
    return (
      <header className=' z-50   px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0 sticky top-0  backdrop-blur-3xl  border-b border-border bg-background/50'>
        <div className='mx-auto flex w-full items-center justify-between md:max-w-6xl'>
          <a href='/' className='relative flex items-center'>
            <div className='  px-2 rounded-xl flex justify-center items-center gap-2'>Pretty Count<IconFlowerTulip className="text-yellow-400"/></div>
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