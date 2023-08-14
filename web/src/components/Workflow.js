import React,{useState,useEffect} from 'react'
import './Workflow.css'
import "aos/dist/aos.css";
import Aos from 'aos';

const notes =[
    {
        id: '1',
        header: "1. Define the problem",
        details: "I ask questions to understand the business problem",
    },
    {
        id: '2',
        header: "2. Prepare the data",
        details: "I collect, store the data with proper versioning & management",
    },
    {
        id: '3',
        header: "3. Process the data",
        details: "I wrangle / Clean the data",
    },
    {
        id: '4',
        header: "Analyze",
        details: "I transform and organize my data into a useful format to draw useful insights",
    },
    {
        id: '5',
        header: "Share & Act",
        details: "I communicate my findings to stakeholders to help solve the business problem.",
    }
];
const Workflow = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const [cards] = useState(notes);
    return (
        <div className="workflow1" id="portfolio">
        <div className="workflow2" data-aos="flip-left" data-aos-easing="ease-out-cubic"data-aos-duration="2000">
           {cards.map((project)=>{
               return(
                <Names key={notes.id} {...project}/>
               );
           })}
        </div>
        </div>
    );
}
const Names =(props)=>{
const {id,img,header,details} = props;
return(
         <div className="workflow" key={id}>
                    {/* <img src={img} alt="design" width="30%" height="20%" /> */}
                    <h1>{header}</h1>
                    <p>{details}</p>
        </div>
);
}
export default Workflow
