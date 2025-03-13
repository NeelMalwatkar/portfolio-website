import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import devicons from './icons.json';

const icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skillsData = [
  {
    category: "Programming Languages",
    tools: [
      { name: "Python" },
      {name:"Go"},
      { name: "JavaScript" },
      { name: "C++"},
      {name:"Julia"},
      {name:"Java"}
    ],
  },
  {
    category: "Web Technologies",
    tools: [
      { name: "HTML5" },
      {name:"CSS"},
      { name: "React" },
      { name: "Node.js"},
    ],
  },
  {
    category: "Database/Storage Technologies",
    tools: [
      { name: "SQLite"},
      { name: "MongoDB"},
      { name: "MySQL"},
      {name: "DynamoDB"},

    ],
  },
  {
    category: "Cloud Services",
    tools: [
      { name: "AWS"},
      { name: "Azure"},
    ],
  },
];

const Skills = () => {
  return (
    <Box id='skills' sx={{ 
      minHeight:'70vh', maxWidth: "900px", 
    margin: "auto", textAlign: "center", p: 4 
    }}>
      <Typography variant="h3" gutterBottom fontWeight="bold"textAlign="center" color="primary">
        SKILLS
      </Typography>

      {skillsData.map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" fontWeight="bold" textAlign="left" color="primary">
            {section.category}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              p: 2,
              borderRadius: 3,
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
              justifyContent: "center",
            }}
          >
            {section.tools.map((tool, i) => (
              <Tooltip key={i} title={tool.name} arrow>
                
                <Box
                  component="img"
                  // src={tool.icon}
                  src={`${icon_url}${devicons[tool.name]}`}
                  alt={tool.name}
                  sx={{
                    width: 50,
                    height: 50,
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": { transform: "scale(1.2)" },
                  }}
                />
              </Tooltip>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
