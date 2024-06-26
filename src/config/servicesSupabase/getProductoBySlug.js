import { supabase } from "../../lib/supabase";

export async function getProductoBySlug(slug) {
  try {
    const { data: product, error } = await supabase
      .from('product')
      .select('*')
      .eq('slug', slug)
      .single(); // Si esperas solo un resultado;      
      
    if (error) {
      console.error('Error al recuperar producto:', error.message);
      return null;
    }

    return product;
  } catch (error) {
    console.error('Error al recuperar producto:', error.message);
    return null;
  }
}
