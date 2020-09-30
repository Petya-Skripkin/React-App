import React from 'react';

import { getUsers } from "./users";
import classes from "./styles.module.scss";

function AboutUs() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const loadUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };
        loadUsers();
    }, []);

    console.log(users);

    return (
        <div className={classes.conteiner}>
            {users.map(item => (
                <div className={classes.content}>
                    <p className={classes.title}>{item['name']}</p>
                    <div className={classes.paragraph}>
                        <p><b>User Name:</b> {item['username']}</p>
                        <p><b>Email:</b> {item['email']}</p>
                    </div>
                    <div className={classes.paragraph}>
                        <span><b>City:</b><br /> {item['address']['city']}</span>
                        <span><b>Street:</b><br /> {item['address']['street']}</span>
                        <span><b>Suite:</b><br /> {item['address']['suite']}</span>
                        <span><b>Zipcode:</b><br /> {item['address']['zipcode']}</span>
                    </div>
                    <div className={classes.paragraph}>
                        <span><b>company:</b><br /> {item['company']['name']}</span>
                        <span className={classes.length}>{item['company']['catchPhrase']}</span>
                        <span className={classes.length}>{item['company']['bs']}</span>
                    </div>

                    <div className={classes.paragraph}>
                        <a className={classes.link} href={item['website']}>{item['website']}</a>
                        {item['phone']}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AboutUs;