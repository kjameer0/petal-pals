export function Filter() {
    return (
        <aside>
            <div className="">
                <div className="form-item">
                    <label>Search:</label>
                    <input type="text" name="location" />
                    <button>Search</button>
                </div>
                <div className="form-item">
                    <label>Location:</label>
                    <input type="text" name="location" placeholder="Borough or Zip Code" />
                </div>
                <div className="form-item">
                    <label>Category:</label>
                    <select>
                        <option value="water">Water</option>
                        <option value="air">Air</option>
                        <option value="waste">Waste</option>
                        <option value="energy">Energy</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-item">
                    <label>Show Completed?</label>
                    <input type="checkbox" name="show-completed" />
                </div>
            </div>
        </aside>
    );
}