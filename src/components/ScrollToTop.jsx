import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll both window and main container to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // Also try scrolling the main content manually (if it's scrollable)
    const main = document.querySelector('main')
    if (main) {
      main.scrollTop = 0
    }
  }, [pathname])

  return null
}

export default ScrollToTop
