import Topbar from '@/Components/Topbar/Topbar';
import React from 'react';
import Workspace from '@/Components/Workspace/workspace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';

type ProblemPageProps = {
    problem:Problem
};

const ProblemPage:React.FC<ProblemPageProps> = ({problem}) => {
    // console.log(problem);
    return <div>
        <Topbar problemPage/>
        <Workspace problem={problem}/>
    </div>
}

export default ProblemPage;

// CSR -> Client side rendering
// SSR -> Server side rendering
// SSG -> Static site generation
// ISR -> Incremental static generation

// SSG is used below -> which means while building the project the whole html
// css and js is generated and send to server as whole, so when client asks 
// for web page server just send the pre generated page which server got during
// build time

export async function getStaticPaths(){
    const paths = Object.keys(problems).map((key) => ({
        params:{pid:key}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}:{params:{pid:string}}){
    const {pid} = params;
    const problem = problems[pid];

    if(!problem){
        return {
            notFound: true
        }
    }

    problem.handlerFunction = problem.handlerFunction.toString();

    return {
        props:{
            problem
        }
    }
}