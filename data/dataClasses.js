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
    email,
  };
}
export function createCompany(name, completedNum, email, tier, address) {
  return {
    name,
    completedNum,
    email,
    tier,
    address,
  };
}
