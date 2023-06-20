import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';

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
                    Code Editor 
                </div> 
            </Split>
        </>
    )
}
export default workspace;