import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

// 1. loading to lazy
// 2. width and height
// 3. srcset: different images for different screen of diff resolution

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/">
        <Image
          src={logo}
          alt="Mobile phone with posts feed on it"
          // there is a default width and height but it can be over-written
          // width={100}
          // height={100}
          // recommended way to resizing
          sizes={"10vw"}
          priority
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
