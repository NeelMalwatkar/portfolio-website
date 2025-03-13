import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, timelineOppositeContentClasses } from '@mui/lab';
import { Container,Typography, Paper, Avatar, List, ListItem } from '@mui/material';

const img_parent_path = "/assets/experience/"
const experienceData = [
  {
    role: "Graduate Teaching Assistant",
    company: "CISE, University of Florida | Part-Time",
    logo: "uf_logo.png",
    duration: "Jan 2025 - Present",
    description: [
      "Assisting in evaluating assignments and projects for a course on programming language principles.",
      "Created automated scripts to evaluate assignments, reducing manual efforts and errors to carry out consistent and fair assessments.",
    ],
    techStack: ["Python", "JavaScript", "ANTLR", "Pascal"],
  },
  {
    role: "Associate Product Developer",
    company: "AlgoAnalytics Private Limited | Full-Time",
    logo: "Algo_logo.png",
    duration: "Jun 2023 - Jul 2024",
    description: [
      "Developed a framework for a stock picking product in Python employing Machine Learning and optimization techniques.",
      "Enhanced, scaled and automated the back-testing system, making it 300% faster by optimizing data structures and introducing parallel computing. Thus reducing the decision making time by 80%.",
      "Built efficient data pipelines for data ingestion, processing, and storage, integrating web scraping, APIs, and remote processing to maintain a robust data repository.",
      "Managed a team of 4 interns in the transformation of the newsletter system’s architecture from monolithic to micro-services, providing flexibility for adding new features and cut down execution time by 40%, minimizing the costs of remote compute instance.",
    ],
    techStack: ["Python", "AWS", "Azure", "Docker", "GitHub", "PyTorch", "SciPy", "Pandas", "Streamlit", "Llama-Index", "REST", "MySQL"],
  },
  {
    role: "Software Development Intern",
    company: "AlgoAnalytics Private Limited | Internship",
    logo: "Algo_logo.png",
    duration: "Aug 2023 - Dec 2023",
    description: [
      "Pioneered a auto-scalable feature analyzing shareholding patterns, expanding from 50 to 125+ Nifty companies, providing key market insights to traders.",
      "Engineered an automated and scalable data pipeline for web scraping, processing, analyzing and storing data on cloud.",
      "Streamlined development workflow by implementing CI/CD pipeline with GitHub Actions, Docker, and AWS ECS deployment.",
    ],
    techStack: ["Python", "AWS S3", "Docker", "GitHub"],
  },
  {
    role: "Corporate Engineering Intern - Design",
    company: "Wipro PARI | Internship",
    logo: "wipropari.jpg",
    duration: "Jun 2022 - Jan 2023",
    description: [
      "Implemented features for Azure DevOps CI/CD pipelines.",
      "Enhanced Kubernetes-based deployment process for scalability.",
      "Collaborated with cross-functional teams to develop .NET-based services.",
    ],
    techStack: ["C#", ".NET", "Azure", "Kubernetes"],
  }
];


const Experience = () => {
  return (
    // <Box sx={{ display: 'flex', flexDirection: 'column', mt: 5, ml: 5, width: '100%' }}>
    <Container sx={{  minHeight: '100vh' }}>
      <Typography variant="h3" fontWeight='bold' gutterBottom color="primary" textAlign="center">
        EXPERIENCE
      </Typography>
     <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2, // Shrinks opposite content to push timeline left
          },
          pl: 0, // Ensures proper left alignment
        }}
      >
        {experienceData.map((exp, index) => (
          <TimelineItem key={index}>

            {/* Empty Space for Proper Left Alignment */}
            <TimelineOppositeContent sx={{color:"primary.light"}}>
              {exp.duration}
            </TimelineOppositeContent>

            {/* Logo & Line on the Left */}
            <TimelineSeparator>
              <TimelineDot sx={
                {bgcolor: "white", 
                  boxShadow: "none", 
                  p: 0,
                  borderRadius:2,
                  width: 60, height: 60,
                  }}>
                <Avatar src={img_parent_path+exp.logo} sx={{ width: 60, height: 60, borderRadius:2, border: "0.7px solid black", }} />
              </TimelineDot>
              {index !== experienceData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            {/* Experience Content */}
            <TimelineContent sx={{ width: '100%', maxWidth: '800px' }}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: 'white', width: '100%' }}>
                <Typography variant="h6" fontWeight="bold" color="primary">{exp.role}</Typography>
                <Typography variant="body1" color="primary">{exp.company}</Typography>

                {/* Bullet Points for Description */}
                <List sx={{ pl: 2 }}>
                  {exp.description.map((point, i) => (
                    <ListItem key={i} sx={{ display: 'list-item', pl: 1, color:"primary.light" }}>
                      {point}
                    </ListItem>
                  ))}
                </List>

                <Typography variant="subtitle2" color="primary" sx={{ mt: 1 }}>
                  <strong>Tech Stack:</strong> {exp.techStack.join(", ")}
                </Typography>
              </Paper>
            </TimelineContent>

          </TimelineItem>
        ))}
      </Timeline>
      </Container>
    
  );
};




export default Experience;
