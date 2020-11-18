import React, {useState} from 'react'
import axios from 'axios'
function User() {
    const [username, setUsername] = useState('');
    const handleUserChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handleUserSubmit = (e) => {
        e.preventDefault();
        const user = {username: username}
        // backend
        // model/add in user model
        axios.post("/users/add", user).then(res => console.log(res.data));
        setUsername('');
    }

    return (
        <div>
            <form>
                <label>username: </label>
                <input type="text" required
                    value={username}
                    onChange={handleUserChange}
                />
                <div>
                    <input type="submit" value="create user" 
                    onClick={handleUserSubmit}
                    />
                </div>
            </form>
        </div>
    )
}

export default User
