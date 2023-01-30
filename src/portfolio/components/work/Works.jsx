import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { dataProjects, projectsNav } from './dataProjects';



const Works = () => {

    const [item, setItem] = useState({ name: 'todos' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'todos') {
            setProjects(dataProjects);
        } else {
            const newProjects = dataProjects.filter(project => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }


    return (
        <>
            <div className="work__filters">
                {
                    projectsNav.map((item, index) => {
                        return (
                            <span
                                onClick={(e) => { handleClick(e, index) }}
                                className={`${active === index ? 'active-work' : ''} work__item`}
                                key={index}
                            >
                                {item.name}</span>
                        )
                    })
                }
            </div>

            <div className="work__container container grid">
                {
                    projects.map(data => {
                        return <CardItem data={data} key={data.id} />
                    })
                }
            </div>
        </>

    )
}

export default Works;