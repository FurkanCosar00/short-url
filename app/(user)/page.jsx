import { createClient } from "@/utils/supabase/server";
import postLongUrl from "./actions";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  const {data : { user }} = await supabase.auth.getUser();
  let registeredUrl = [];
  let anonUrl = [];

  if(user) {
    let { data: userUrl } = await supabase
    .from('urls')
    .select('*')
    .eq("user_id", user?.id)
    registeredUrl = userUrl;
  } 
  
  else {
    let { data: userUrl } = await supabase
    .from('urls')
    .select('*')
    .is('user_id', null)
    anonUrl = userUrl;
  }

  return (
    <div className="container">
      <h1>linkini kısalt hayatını uzat</h1>

      <form className="link-shortener">
          <input type="text" id="long_url" name="long_url" placeholder="kısaltmak istediğin URL"/>
          <button formAction={postLongUrl}>Linki Kısalt</button>
      </form>

      <ul className="links">
        {user ? 
          registeredUrl.map(x => <li><Link href={`/${x.short_url}`}>{x.short_url}</Link></li>)
        : 
          anonUrl.map(x => <li><Link href={`/${x.short_url}`}>{x.short_url}</Link></li>)
        } 
      </ul>
    </div>
  );
}