import React, {useState} from 'react';
import ResourceList from './ResourceList';

const App = ()=> {
    const [resource, setResource] = useState('post')
        return (
        <div>
            <div>
                <button onClick={()=> setResource('Posts')}>Posts</button>
                <button onClick={()=> setResource('Todos')}>ToDo</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
        );
};

export default App;
