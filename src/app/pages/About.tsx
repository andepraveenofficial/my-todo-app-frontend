import React from 'react';
import { Heading, Paragraph } from '../../library/typography';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <Heading className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About Our Todo Management App
          </Heading>

          <div className="space-y-4 text-gray-600">
            <Paragraph className="text-lg">
              Welcome to our Todo Management Application, a powerful and
              intuitive tool designed to help you stay organized and productive.
            </Paragraph>

            <div className="bg-gray-50 p-4 rounded-md">
              <Heading color="secondary" variant="h3" align="left">
                Our Mission
              </Heading>
              <Paragraph>
                We believe in simplifying task management and empowering
                individuals to achieve their goals efficiently. Our application
                provides a seamless experience for creating, tracking, and
                managing todos.
              </Paragraph>
            </div>

            <div>
              <Heading color="secondary" variant="h3" align="left">
                Key Features
              </Heading>
              <ul className="list-disc list-inside space-y-2">
                <li>Create todos with ease</li>
                <li>Update todo status (Pending → In Progress → Completed)</li>
                <li>Delete todos you no longer need</li>
                <li>Responsive design for desktop and mobile</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-md">
              <Heading color="secondary" variant="h3" align="left">
                Tech Stack
              </Heading>
              <Paragraph>
                Built with modern web technologies including React, TypeScript,
                and Tailwind CSS, our application provides a robust and elegant
                solution for task management.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
