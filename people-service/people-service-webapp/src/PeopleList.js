import React, {useEffect, useState} from 'react';

export function PeopleList() {

    const [people, setPeople] = useState([]);

    const handleFindAllPeople = () => {
        findAllPeople()
            .then(data => setPeople(data.results))
            .catch(err => console.error(err));
    };

    const findAllPeople = async () => {
        const headers = new Headers({
            "Content-Type": "application/json",
        });
        const request = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default',
        };
        return await fetch('https://randomuser.me/api/?results=100', request)
            .then(response => response.json());
    };

    useEffect(() => handleFindAllPeople(), []);

    return (
      <div>
          <ul>
              {people.map(row => <li key={row.email}>{row.email}</li>)}
          </ul>
      </div>
    );

}