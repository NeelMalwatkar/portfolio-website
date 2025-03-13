import React from "react";
import { Box, Typography, Card, CardContent, Tooltip, Avatar, Button, AvatarGroup } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct import for Grid v2
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import devicons from './icons.json';

// import React from "react";
// import { Box, Typography, Card, CardContent, Tooltip, Avatar, AvatarGroup } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// const img_parent_path="/assets/projects/"

const img_parent_path = process.env.PUBLIC_URL+"/assets/projects/";
const icon_url = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const projects = [
  // {
  //   title: "Portfolio Website",
  //   description: "A personal portfolio showcasing my skills and projects with interactive animations.",
  //   image: "portfolio.jpeg",
  //   techStack: [
  //     { name: "React", icon: "/react/react-original.svg" },
  //     { name: "Material UI", icon: "/materialui/materialui-original.svg" },
  //     { name: "Framer Motion", icon: "/javascript/javascript-original.svg" },
  //   ],
  //   link: "https://github.com/NeelMalwatkar/portfolio-website", // Add link for redirection
  // },
  {
    title: "Roamio",
    description: "Everybody loves to travel but the pressure to plan a trip is too much? To solve this, a social network for travellers to share their travel itineraries.",
    image: "roamio.jpeg",
    techStack: [
      { name: "Go", icon: `${devicons['Go']}` },
      { name: "SQLite", icon: `${devicons['SQLite']}` },
      { name: "ReactJS", icon: "/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss/tailwindcss-original.svg" },
    ],
    link: "https://github.com/Nirvisha82/Roamio", // Add link for redirection
  },
  {
    title: "Reddit Engine and Simulator",
    description: "Built a highly scalable reddit engine in Go using actor model. Implemented a simulator to emulate user behaviour using zipf distribution.",
    image: "reddit.webp",
    techStack: [
      { name: "Go", icon: "/go/go-original.svg" },
    ],
    link: "https://github.com/Nirvisha82/Reddit-clone", // Add link for redirection
  },
  {
    title: "Proposal ChatBot",
    description: "LLM driven chatbot on past 7000+ RFPs and Proposal PDF documents to speed up proposal drafting process.",
    image: "prop_chatbot.webp",
    techStack: [
      { name: "Python", icon: "/python/python-original.svg" },
      { name: "Llama-Index", icon_local:"llamaIndex.jpeg", icon: "" },
      { name: "Flask", icon: "/flask/flask-original.svg" },
      { name: "Azure", icon: "/azure/azure-original.svg" },
    ],
    
    link: "https://example.com/news-aggregator", // Add link for redirection
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ width: "100%", maxWidth: 420, borderRadius: 3, p: 2, boxShadow: 3 }}>
      {/* Project Image */}
      <Box
        component="img"
        src={img_parent_path + project.image}
        alt={project.title}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
      <CardContent>
        {/* Project Title */}
        <Typography variant="h6" fontWeight="bold" mt={1} textAlign="center">
          {project.title}
        </Typography>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" textAlign="center" mt={1}>
          {project.description}
        </Typography>

        {/* Tech Stack Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          {/* Avatars Grouped on the Left */}
          <AvatarGroup max={6} spacing='medium'>
            {project.techStack.map((tech, index) => (
              <Tooltip key={index} title={tech.name} arrow>
                <Avatar
                  sx={{
                    width: 42,
                    height: 42,
                    bgcolor: 'white',
                    boxShadow: 1,
                    transition: 'transform 0.2s ease-in-out',
                    '& img': { width: '100%', height: '100%' }, // Ensure icons fit perfectly
                  }}
                >
                  <Box
                    component="img"
                    src={
                      tech.icon.startsWith("/") ? icon_url + tech.icon //devicon api
                        : tech.icon || `${img_parent_path}/${tech.icon_local}` // Devicon or fallback
                    }

                    alt={tech.name}
                  />
                </Avatar>
              </Tooltip>
            ))}
          </AvatarGroup>

          {/* Button on the Right */}
          <Button
            variant="contained"
            color="primary"
            endIcon={<ExitToAppIcon />}
            href={project.link} // Redirect to provided link
            target="_blank" // Open in a new tab
            sx={{
              textTransform: 'none',
              borderRadius: 3,
              boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            Check it out
          </Button>
        </Box>

      </CardContent>
    </Card>
  );
};

const Projects = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom fontWeight="bold"textAlign="center" color="primary">
        PROJECTS
      </Typography>

      {/* Grid Layout with Fixed Spacing */}
      <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: "900px", margin: "0 auto" }}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} display="flex" justifyContent="center">

            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;


// const ProjectCard = ({ project }) => {
//   return (
//     <Card sx={{ width: "100%", maxWidth: 500, borderRadius: 3, p: 2, boxShadow: 3 }}>
//       {/* Project Image */}
//       <Box
//         component="img"
//         src={img_parent_path+project.image}
//         alt={project.title}
//         sx={{
//           width: "100%",
//           height: 200,
//           objectFit: "cover",
//           borderRadius: 2,
//         }}
//       />
//       <CardContent>
//         {/* Project Title */}
//         <Typography variant="h6" fontWeight="bold" mt={1} textAlign="center">
//           {project.title}
//         </Typography>

//         {/* Description */}
//         <Typography variant="body2" color="text.secondary" textAlign="center" mt={1}>
//           {project.description}
//         </Typography>

//         {/* Tech Stack with Avatars */}
//         <Box sx={{ display: "flex", justifyContent: "left", gap: 1.5, mt: 2 }}>
//           {project.techStack.map((tech, index) => (
//             <Tooltip key={index} title={tech.name} arrow>
//               <AvatarGroup >
//               <Avatar
//                 sx={{
//                   width: 42,
//                   height: 42,
//                   bgcolor: "white",
//                   boxShadow: 1,
//                   transition: "transform 0.2s ease-in-out",
//                   "&:hover": { transform: "scale(1.2)" },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={icon_url+tech.icon}
//                   alt={tech.name}
//                   sx={{ width: 28, height: 28 }}
//                 />
//               </Avatar>
//               </AvatarGroup>
//             </Tooltip>
//           ))}
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// const Projects = () => {
//   return (
//     <Box>
//       <Typography variant="h3" gutterBottom textAlign="center" color="primary">
//         PROJECTS
//       </Typography>

//       {/* Grid Layout with Fixed Spacing */}
//       <Grid container spacing={3} justifyContent="center" alignItems='center'>

//         {projects.map((project, index) => (
//           <Grid item key={index} xs={12} sm={6} display="flex" justifyContent="center">
//             <ProjectCard project={project} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Projects;

{/* Tech Stack without avatars*/}
//         <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
//           {project.techStack.map((tech, index) => (
//             <Tooltip key={index} title={tech.name} arrow>
//               <Box
//                 component="img"
//                 src={tech.icon}
//                 alt={tech.name}
//                 sx={{
//                   width: 36,
//                   height: 36,
//                   transition: "transform 0.2s ease-in-out",
//                   "&:hover": { transform: "scale(1.2)" },
//                 }}
//               />
//             </Tooltip>
//           ))}
//         </Box>


