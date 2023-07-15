export async function fetchAllPosts () {
  const res = await fetch(`${process.env.URL}/api/prompt`)
  const result = await res.json();

  return result;
}