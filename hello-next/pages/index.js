import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about" title="About Page">
      <button>About Page</button>
    </Link>
    <p>Hell Next.js</p>
  </div>
);

export default Index;
