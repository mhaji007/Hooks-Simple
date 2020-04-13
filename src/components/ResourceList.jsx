import React, {useState, useEffect} from 'react';
import axios from 'axios';


 const ResourceList = ({resource}) => {

    // state = {resources: []};

    const [resources, setResources] = useState([]);

    const fetchResource = async(resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource)
    }, [resource])

    return <div>{resources.length}</div>

}



    // async componentDidUpdate (prevProps) {
    //     if(prevProps.resource !== this.props.resource) {
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        
    //     this.setState({resources:response.data});
    //     }


    // async componentDidUpdate (){
        // const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        
        // this.setState({resources:response.data});
        
    // }



 
export default ResourceList;