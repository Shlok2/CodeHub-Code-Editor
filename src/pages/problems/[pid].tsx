import Topbar from '@/Components/Topbar/Topbar';
import React from 'react';
import Workspace from '@/Components/Workspace/workspace';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return <div>
        <Topbar problemPage/>
        <Workspace/>
    </div>
}

export default ProblemPage;