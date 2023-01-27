export const fetchData = async (url: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`);
  return await res.json();
};
