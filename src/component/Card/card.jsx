import styles from "./card.module.css";

export function Card() {
  const need = {
    title:
      "Let's Grow Together! Help Us Create Green Havens in Our Neighborhood.",
    category: "air quality and emissions",
    description:
      "We're seeking volunteers to join us in planting trees in various areas across our community. These trees will not only enhance our environment but also combat air pollution and provide much-needed shade in our neighborhoods. Your participation will make our community a healthier and greener place to live.",
    requested_date: "10-15-2023",
    completed_date: "11-20-2024",
    location: "12345",
    status: "Requested",
    email: "john.doe@example.com",
  };
  return (
    <div className={styles.main}>
      <div className={styles.cardTitle}>
        <div>
          <div>{need.title}</div>
          <div>Category: {need.category}</div>
        </div>
        <div>
          <div>Posted: {need.requested_date}</div>
          <div>Zipcode: {need.location}</div>
        </div>
      </div>
      <p>{need.description}</p>
      <button>...See more</button>
      <div>Status: {need.status}</div>
      <div>Contact Email: {need.email}</div>
      <div>Completions Date: {need.requested_date}</div>
    </div>
  );
}
