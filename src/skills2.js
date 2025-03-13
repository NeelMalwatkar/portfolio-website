import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardContent, Tabs, Tab, Box } from '@mui/material';
import { FaPython, FaJs, FaJava, FaAws, FaDatabase, FaDocker, FaGit, FaFlask } from 'react-icons/fa';
import { SiGo, SiCplusplus, SiMysql, SiMongodb, SiDjango, SiPytorch, SiTensorflow, SiPostman, SiScikitlearn } from 'react-icons/si';

const skillsData = {
  Languages: [
    { name: 'Python', icon: <FaPython size={30} color="#3776AB" /> },
    { name: 'Go', icon: <SiGo size={30} color="#00ADD8" /> },
    { name: 'JavaScript', icon: <FaJs size={30} color="#F7DF1E" /> },
    { name: 'C/C++', icon: <SiCplusplus size={30} color="#00599C" /> },
    { name: 'SQL', icon: <FaDatabase size={30} color="#4479A1" /> },
    { name: 'Julia', icon: <SiScikitlearn size={30} color="#9558B2" /> },
  ],
  'Cloud & Databases': [
    { name: 'AWS', icon: <FaAws size={30} color="#FF9900" /> },
    { name: 'Azure', icon: <FaDatabase size={30} color="#0078D4" /> },
    { name: 'MongoDB', icon: <SiMongodb size={30} color="#47A248" /> },
    { name: 'DynamoDB', icon: <FaDatabase size={30} color="#4053D6" /> },
    { name: 'MySQL', icon: <SiMysql size={30} color="#4479A1" /> },
    { name: 'SQLite', icon: <FaDatabase size={30} color="#003B57" /> },
  ],
  Others: [
    { name: 'Llama-Index', icon: <SiScikitlearn size={30} color="#F7931E" /> },
    { name: 'Pandas', icon: <SiScikitlearn size={30} color="#150458" /> },
    { name: 'NumPy', icon: <SiScikitlearn size={30} color="#013243" /> },
    { name: 'Streamlit', icon: <FaFlask size={30} color="#FF4B4B" /> },
    { name: 'PyTorch', icon: <SiPytorch size={30} color="#EE4C2C" /> },
    { name: 'SciPy', icon: <SiScikitlearn size={30} color="#8CA2AF" /> },
    { name: 'Scikit-Learn', icon: <SiScikitlearn size={30} color="#F7931E" /> },
    { name: 'Django', icon: <SiDjango size={30} color="#092E20" /> },
    { name: 'Postman', icon: <SiPostman size={30} color="#FF6C37" /> },
    { name: 'Flask', icon: <FaFlask size={30} color="#000000" /> },
    { name: 'Selenium', icon: <FaFlask size={30} color="#43B02A" /> },
    { name: 'REST', icon: <FaFlask size={30} color="#E34C26" /> },
    { name: 'Docker', icon: <FaDocker size={30} color="#2496ED" /> },
    { name: 'GitHub', icon: <FaGit size={30} color="#181717" /> },
    { name: 'TensorFlow', icon: <SiTensorflow size={30} color="#FF6F00" /> },
  ],
};

const Skills2 = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Skills
      </Typography>

      {/* Tabs Navigation */}
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        {Object.keys(skillsData).map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ marginTop: 3 }}>
        {Object.keys(skillsData).map((category, index) => (
          <Box key={index} hidden={tabIndex !== index}>
            <Grid container spacing={2}>
              {skillsData[category].map((skill, idx) => (
                <Grid item xs={6} sm={4} md={3} key={idx}>
                  <Card sx={{ textAlign: 'center', padding: 2, bgcolor: '#1E1E1E', color: 'white' }}>
                    <CardContent>
                      {skill.icon}
                      <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                        {skill.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Skills2;
