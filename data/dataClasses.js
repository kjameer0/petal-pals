export function createBounty(
  category,
  status,
  title,
  postDate,
  location,
  completed,
  description,
  email
) {
  return {
    category,
    status,
    postDate,
    location,

    completed,
    description,
    email
  };
}
