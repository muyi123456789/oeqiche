"use client"
import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import './projectList.css'
const { Title, Text } = Typography;

interface ProjectInfo {
    title: string;
    type: string;
    details: string[];
    publishedTime: string;
    publishDateTime: string;
    company: string;
    enrolled: string;
}
// 2. 定义组件的 props 类型
interface ProjectItemProps {
    projectInfo: ProjectInfo;
}

const ProjectItem: React.FC<ProjectItemProps> = ({projectInfo}) => {
    return (
        <Card className="w-full Card_ProjectItem">
            <div className="flex justify-between items-center">
                <div>
                <h3 className="text-lg font-bold">{projectInfo.title}</h3>
                <p className="text-sm text-gray-600">{projectInfo.type}</p>
                </div>
                <div>
                <p className="text-sm text-gray-500">发布于：{projectInfo.publishedTime}</p>
                <p className="text-sm text-gray-500">{projectInfo.company}</p>
                </div>
            </div>
            <ul className="mt-2 list-disc pl-4">
                {
                    projectInfo.details.map((detail, index) => (
                        <li key={index} className="text-sm text-gray-600">{detail}</li>
                    ))
                }
            </ul>
            <div className="flex justify-end mt-2">
                <p className="text-sm text-blue-500 font-semibold">{projectInfo.enrolled}</p>
            </div>
        </Card>
    )
}

export default ProjectItem;