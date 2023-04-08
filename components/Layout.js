import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>
        <Link legacyBehavior href='/'>
          <a>
            <h1>
              <span>But First</span>
              <span>Coffee</span>
            </h1>
          </a>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Copyright &copy; 2023 But First Coffee :)</p>
      </footer>
    </div>
  )
}
