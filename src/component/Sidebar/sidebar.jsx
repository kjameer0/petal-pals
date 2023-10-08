import styles from '/src/component/Sidebar/Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <h2>Search Fields</h2>
      <div>
        <div className={styles.formItem}>
          <label>Search</label>
          <input className={styles.textInput} placeholder='' type="text" name="location" />
        </div>
        <div className={styles.formItem}>
          <label>Location</label>
          <input className={styles.textInput} type="text" name="location" placeholder="Zip Code" />
        </div>
        <div className={styles.formItem}>
          <label>Category</label>
          <label>
            <input type="checkbox" value="air" />
            Air Quality
          </label>
          <label>
            <input type="checkbox" value="water" />
            Water Quality
          </label>
          <label>
            <input type="checkbox" value="energy" />
            Energy
          </label>
          <label>
            <input type="checkbox" value="waste" />
            Waste
          </label>
          <label>
            <input type="checkbox" value="other" />
            Other
          </label>
        </div>
      </div>
    </div>
  );
}
