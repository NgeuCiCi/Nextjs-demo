
import Link from 'next/link'
import Layout from '../components/layout'
export default function Home() {
  return (
    <>
      <Layout home>
        <div className="posts">

          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </div>
      </Layout>
    </>
  )
}
