import type { Recipe } from '../Types'

export async function fetchRecipes(category: String): Promise<Recipe[] | null> {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`;

    console.log(`fetching ${url}`)

    try {
        console.log('Fetching...')
        const res = await fetch(url);

        if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
        }

        console.log('Fetch complete...')
        const data = await res.json();
        console.log(data);
        return data.meals || [];

    } catch (error) {
        console.error("Failed to fetch recipes:", error);
        return null;
    }
}

export async function fetchRecipeById(id: string) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const data = await res.json()
  return data.meals ? data.meals[0] : null
}
