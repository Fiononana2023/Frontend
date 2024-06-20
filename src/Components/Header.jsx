
function Header() {
  return (
    <header
    className="rounded-xl z-30 mx-auto w-full bg-purple-100 py-3 md:top-6">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <img className="h-14" src="/images/trel.png" alt=""/>
                    <span className='font-extrabold'>Trello</span>                   
                </a>
            </div>
            
            <div className="flex items-center justify-end gap-3">
                <a className="hidden items-center justify-center rounded-sm bg-white px-3 py-1 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/login">Sign in</a>
                <a className="inline-flex items-center justify-center rounded-sm bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/login">Login</a>
            </div>
        </div>

        
    </div>
</header>
  )
}

export default Header;
