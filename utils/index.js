export async function fetchAllPosts () {
  const res = await import('../app/api/prompt/route');
  return await (await res.GET()).json();
}