import React from 'react';
import { Row, Col, Card } from 'antd';
import './projectList.css';
import Filter from './Filter';
import ProjectItem from './ProjectItem';
import Right from './Right';
import { projectList } from './mockData';

const App: React.FC = () => (
  <Card>
    <div className='filter_page'>
      <Filter />
    </div>
    <div className='flex Card_Project'>
      <div className='filter_left w-[700px]'>
        {
          projectList.map((projectInfo, index)=>(
            <ProjectItem projectInfo={projectInfo} key={index} />
          ))
        }
      </div>
      <div className='filter_right w-[400px]'>
        <Right />
      </div>
    </div>
  </Card>
  
);

export default App;