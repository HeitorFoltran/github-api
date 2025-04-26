import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="flex flex-row space-x-60">
        <Link
          to="/styled"
          className="text-white text-4xl font-bold transition-all duration-700 transform hover:scale-110 hover:animate-pulse hover:text-red-500"
        >
            Styled
        </Link>
        <Link
          to="/tailwind"
          className="text-white text-4xl font-bold transition-all duration-700 transform hover:scale-110 hover:animate-pulse hover:text-blue-400"
        >
            Tailwind
        </Link>
      </div>
    </div>
  )
}

export default HomePage;
