import {Component} from "react";
import { useState } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        const filterBtnList = ['All', 'Websites', 'Flayers', 'Business Cards'];
        const projectList = {projectList};
        const filter = (e) => {
            const [filteredListProjects, setFilteredListProjects] = useState(projectList);
            const [selected, setSelected] = useState('All');
            const buttons = document.querySelectorAll('button');
            buttons.forEach((item) => item.classList.remove('active'));
            
            e.target.classList.add('active');
        
            const select = e.target.textContent;
            
            if (select === 'All') {
              setFilteredListProjects(projectList);
            } else {
              setFilteredListProjects(
                projectList.filter(item => item.category === select)
              );
            }
        
            setSelected(select);
        
            console.log(select);
        }

        return (
            <div>
                <Toolbar 
                    filters={filterBtnList}
                    selected={selected}
                    onSelectFilter={filter}
                />

                <div>
                    <ProjectList projects={filteredListProjects} /> 
                </div>
            </div>
        );

    }
}

export default Portfolio;