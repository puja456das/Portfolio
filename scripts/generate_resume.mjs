import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

// Primary colors
const primaryColor = [24, 43, 73]; // Deep Navy
const secondaryColor = [79, 70, 229]; // Indigo
const textDark = [30, 41, 59]; // Slate 800
const textMuted = [100, 116, 139]; // Slate 500

let y = 18;

// Name & Title
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(...primaryColor);
doc.text('PUJA DAS', 20, y);

y += 6;
doc.setFont('helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(...secondaryColor);
doc.text('Software Developer | Full Stack & Frontend Specialist', 20, y);

y += 5;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...textDark);
doc.text('Email: pujadas09262001@gmail.com  |  Phone: +91 8927850682  |  Location: Newtown, Kolkata, WB, India', 20, y);

y += 4;
doc.text('GitHub: https://github.com/puja456das  |  LinkedIn: https://linkedin.com/in/puja-das-190049221', 20, y);

// Horizontal line
y += 3;
doc.setDrawColor(203, 213, 225);
doc.setLineWidth(0.5);
doc.line(20, y, 190, y);

// Helper for section headings
function addSectionHeader(title) {
  y += 6;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text(title.toUpperCase(), 20, y);
  
  y += 1.5;
  doc.setDrawColor(...secondaryColor);
  doc.setLineWidth(0.8);
  doc.line(20, y, 45, y);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(45, y, 190, y);
  y += 4;
}

// Professional Summary
addSectionHeader('Professional Summary');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...textDark);
const summary = 'Dedicated Frontend & Full Stack Software Developer with 2.5+ years of experience in building modern, scalable web and mobile applications. Proficient in React.js, Next.js, Node.js, Express.js, and database design (MongoDB, MySQL, PostgreSQL). Proven track record of developing REST APIs handling 10,000+ daily requests, crafting pixel-perfect responsive interfaces with Tailwind CSS, and delivering reliable cross-platform solutions.';
const splitSummary = doc.splitTextToSize(summary, 170);
doc.text(splitSummary, 20, y);
y += (splitSummary.length * 4) + 1;

// Experience
addSectionHeader('Professional Experience');

// Transmogrify
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...textDark);
doc.text('Software Developer', 20, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textMuted);
doc.text('06/2024 - Present | Kolkata, India', 190, y, { align: 'right' });

y += 4;
doc.setFont('helvetica', 'bold');
doc.setTextColor(...secondaryColor);
doc.text('Transmogrify Global Private Limited', 20, y);

y += 4;
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textDark);
const exp1 = [
  '• Developed end-to-end full stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).',
  '• Designed, developed, and deployed high-performance REST APIs serving 10,000+ daily requests.',
  '• Crafted highly responsive, modern front-end user interfaces using Tailwind CSS and Material-UI.',
  '• Implemented secure JWT-based authentication, authorization, and role-based access control (RBAC).'
];
exp1.forEach(line => {
  doc.text(line, 22, y);
  y += 3.8;
});

y += 1;
// Sambhav
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...textDark);
doc.text('Web Developer', 20, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textMuted);
doc.text('12/2023 - 05/2024 | Kolkata, India', 190, y, { align: 'right' });

y += 4;
doc.setFont('helvetica', 'bold');
doc.setTextColor(...secondaryColor);
doc.text('Sambhav Consultants', 20, y);

y += 4;
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textDark);
const exp2 = [
  '• Built fully responsive, mobile-first websites using HTML5, CSS3, JavaScript, and Bootstrap.',
  '• Conducted code debugging, quality testing, and cross-browser compatibility optimization.',
  '• Managed codebase with Git/GitHub, actively participating in agile workflows and sprint updates.'
];
exp2.forEach(line => {
  doc.text(line, 22, y);
  y += 3.8;
});

// Technical Skills
addSectionHeader('Technical Skills');
const skillsList = [
  { category: 'Frontend', items: 'React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Material-UI, JavaScript (ES6+), Core Java' },
  { category: 'Backend & APIs', items: 'Node.js, Express.js, RESTful API Architecture, JWT Authentication, RBAC, JSP/Servlet' },
  { category: 'Databases', items: 'MongoDB, MySQL, PostgreSQL' },
  { category: 'Mobile & DevOps', items: 'Ionic Framework, Capacitor, Android Studio, Git, GitHub, Postman, VS Code, Vite' }
];
skillsList.forEach(s => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...secondaryColor);
  doc.text(s.category + ':', 20, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textDark);
  doc.text(s.items, 50, y);
  y += 4;
});

// Key Projects
addSectionHeader('Key Projects');
const projects = [
  {
    title: 'E-Commerce Platform & EV Solutions (React.js | Next.js | MySQL | REST API)',
    desc: 'Responsive web platform with product catalog, cart, checkout, JWT auth, and inventory management.'
  },
  {
    title: 'Job Application Portal (React.js | Node.js | Context API | Axios | REST API)',
    desc: 'Dual applicant/employer dashboards, job posting, real-time application tracking, and role-based access.'
  },
  {
    title: 'Hospital Management System (React.js | Bootstrap / Tailwind | REST API)',
    desc: 'Patient registration, appointment scheduling, doctor availability calendar, and billing module.'
  },
  {
    title: 'School Management System (React.js | Tailwind CSS | Express | PostgreSQL)',
    desc: 'Multi-role portals (Admin, Teacher, Student, Parent), attendance tracking, and grade management.'
  },
  {
    title: 'Mobile Applications (Ionic Framework | React | Capacitor | PostgreSQL)',
    desc: 'Home Maid Helper App and Shuttle Booking App with route selection, seat reservations, and tracking.'
  }
];

projects.forEach(p => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  doc.text('• ' + p.title, 20, y);
  y += 3.5;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textMuted);
  doc.text('  ' + p.desc, 22, y);
  y += 3.8;
});

// Education & Achievements
addSectionHeader('Education & Achievements');
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...textDark);
doc.text('B.Tech in Computer Science and Engineering (85%)', 20, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textMuted);
doc.text('2019 - 2023 | CEM Kolaghat', 190, y, { align: 'right' });
y += 4;

doc.setFont('helvetica', 'bold');
doc.setTextColor(...textDark);
doc.text('Certifications:', 20, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textDark);
doc.text('Java Full Stack with Angular (Anudip), Core Java (Oracle Academy), NPTEL', 45, y);
y += 4;

doc.setFont('helvetica', 'bold');
doc.setTextColor(...secondaryColor);
doc.text('Honors:', 20, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textDark);
doc.text('Bronze Medal in International Math Olympiad (2016)', 45, y);

// Output
const outPath = path.resolve('public', 'resume.pdf');
const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outPath, Buffer.from(pdfBytes));
console.log('Successfully generated resume at:', outPath);
