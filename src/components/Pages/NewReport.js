import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NewReport.css';
import { FaFileAlt, FaBook, FaChartLine } from 'react-icons/fa';

const NewReport = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
    exit: { opacity: 0, x: '100vw', transition: { ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="new-report-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>New Report Submission</h1>
      <p>Select a section to start filling out your report.</p>
      <div className="sections-grid">
        <Link to="/section-a" className="section-card">
          Section A: General Disclosures
        </Link>
        <Link to="/section-b" className="section-card">
          Section B: Management and Process Disclosures
        </Link>
        <Link to="/section-c" className="section-card">
          Section C: Principle-Wise Performance
        </Link>
        <Link to="/section-c" className="section-card">
          Section D: All Section
        </Link>
      </div>
    </motion.div>
  );
};
<div className="sections-grid">
  <Link to="/section-a" className="section-card">
    <FaFileAlt className="section-icon" />
    Section A: General Disclosures
  </Link>
  <Link to="/section-b" className="section-card">
    <FaBook className="section-icon" />
    Section B: Management and Process Disclosures
  </Link>
  <Link to="/section-c" className="section-card">
    <FaChartLine className="section-icon" />
    Section C: Principle-Wise Performance
  </Link>
  <Link to="/section-d" className="section-card">
    <FaChartLine className="section-icon" />
    Section D: All
  </Link>

</div>

export default NewReport;
