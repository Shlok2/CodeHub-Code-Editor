import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';

type workspaceProps = {
    problem: Problem
};

const workspace:React.FC<workspaceProps> = ({problem}) => {
    
    return(
        <>
            <Split className='split' minSize={0}>
                <div>
                    <ProblemDescription problem={problem}/>
                </div>
                <div>
                    <Playground problem={problem}/>
                </div> 
            </Split>
        </>
    )
}
export default workspace;