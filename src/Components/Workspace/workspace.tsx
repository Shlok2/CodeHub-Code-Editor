import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';

type workspaceProps = {
    
};

const workspace:React.FC<workspaceProps> = () => {
    
    return(
        <>
            <Split className='split' minSize={0}>
                <div>
                    <ProblemDescription/>
                </div>
                <div>
                    <Playground/>
                </div> 
            </Split>
        </>
    )
}
export default workspace;