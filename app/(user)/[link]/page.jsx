import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DynamicURLPage ({ params }) {
    const { link } = params;
    const supabase = createClient();

    let { data: urls, error } = await supabase
    .from('urls')
    .select('*');

    const matchingUrl = urls.find(x => x.short_url === link);

    redirect(matchingUrl.long_url)
}