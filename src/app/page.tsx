import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export default async function Home() {  
  const supabase = createServerComponentClient({ cookies })
  const { data: posts } = await supabase.from('posts').select()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Good Morning!! 🫠

      <pre>
        {
          JSON.stringify(posts, null, 2)
        }
      </pre>
    </main>
  )
}
