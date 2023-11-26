import { CategoryProductSummary } from "@/types";
import { supabase } from "../utils";

export const getCategoryProductSummary = async(limit = 10) => {

    const { data: categorySummary } = await supabase
    .rpc('get_category_product_summary', {selected_limit: limit})
    .select('*')
    .returns<CategoryProductSummary>();

  return categorySummary;

}