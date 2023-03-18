import Link from "next/link"
import style from "../styles/common.module.scss"

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href="https://github.com/15night">
          <img src="/images/github.svg" alt="logo" />
        </a>
        <a href="https://www.google.com/">
          <img src="/images/linkedin.svg" alt="logo" />
        </a>
        <a href="https://twitter.com/15night_">
          <img src="/images/twitter.svg" alt="logo" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100003541378550">
          <img src="/images/facebook.svg" alt="logo" />
        </a>
        <hr />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <p>©{new Date().getFullYear()} Misa Shindo</p>
      </div>
    </footer>
  )
}

export default Footer
