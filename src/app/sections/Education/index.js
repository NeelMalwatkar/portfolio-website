"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

// Use a relative path since Next.js serves public assets from the root
const img_parent_path = "/assets/education/";

const educationData = [
  {
    degree: "M.S Computer Science",
    college: "Herbert Wertheim College of Engineering",
    university: "University of Florida",
    gpa: "4.0/4.0",
    duration: "August 2024 - May 2026",
    image: "uf_gate.jpeg",
    coursework: [
      "Advanced Data Structures",
      "Machine Learning",
      "Natural Language Processing",
      "Distributed Systems",
      "Software Engineering",
      "Applied Linear Algebra",
    ],
  },
  {
    degree: "B.Tech. Mechanical Engineering",
    college: "Vishwakarma Institute of Technology",
    university: "Pune University",
    gpa: "9.31/10",
    duration: "August 2019 - May 2023",
    image: "sppu_gate.webp",
    coursework: [
      "Robotics (Honors)",
      "Object Oriented Programming",
      "Data Science",
      "Advanced Computer Programming",
      "Mechatronics",
      "Linear Algebra",
    ],
  },
];

const EducationCard = ({ edu }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      sx={{
        perspective: "1200px",
        width: 500,
        height: 350,
        position: "relative",
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {/* FRONT SIDE */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${img_parent_path + edu.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          {/* Overlay for better text readability */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.55)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" fontWeight="bold">{edu.degree}</Typography>
            <Typography variant="h6">{edu.college}</Typography>
            <Typography variant="h6">{edu.university}</Typography>
            <Typography variant="body1">GPA: {edu.gpa}</Typography>
            <Typography variant="body2">{edu.duration}</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => setFlipped(true)}
            >
              View Coursework
            </Button>
          </Box>
        </Box>

        {/* BACK SIDE */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            bgcolor: "primary.light",
            color: "white",
            p: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Key Coursework
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {edu.coursework.map((course, i) => (
              <li key={i} style={{ fontSize: "14px", margin: "5px 0" }}>
                • {course}
              </li>
            ))}
          </ul>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={() => setFlipped(false)}
          >
            Back
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

const Education = () => {
  return (
    <Box sx={{ minHeight: "70vh", paddingTop: "50px" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
        color="primary"
      >
        EDUCATION
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 5 }}>
        {educationData.map((edu, index) => (
          <EducationCard key={index} edu={edu} />
        ))}
      </Box>
    </Box>
  );
};

export default Education;
