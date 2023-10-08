import styles from '/src/component/Sidebar/Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebarContainer}>
            <div>
                <div className={styles.formItem}>
                    <label>Search</label>
                    <input type="text" name="location" />
                </div>
                <div className={styles.formItem}>
                    <label>Location</label>
                    <input type="text" name="location" placeholder="Borough or Zip Code" />
                </div>
                <div className={styles.formItem}>
                    <label>Category</label>
                    <input type="checkbox" value="water" /> Water
                    <input type="checkbox" value="air" /> Air
                    <input type="checkbox" value="waste" />Waste
                    <input type="checkbox" value="energy" />Energy
                    <input type="checkbox" value="other" />Other
                </div>
            </div>
        </aside>
    );
}