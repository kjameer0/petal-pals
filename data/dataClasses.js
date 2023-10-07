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
export function createCompany(name, completedNum, email, tier) {
  return  {
    name, completedNum, email, tier
  }
}
