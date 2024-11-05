## 💻 Development Specifications

### Frontend Architecture

#### Theme Implementation
- Implemented a dark/light theme system using React Context API
- Utilized Tailwind CSS's `darkMode: 'class'` for seamless theme switching
- Custom color palette defined in `tailwind.config.js`:
  - Light theme: Custom Snow (#FBFBFB)
  - Dark theme: Dark Void (#151419)
  - Accent color: Liquid Lava (#F56E0F)

#### Routing & Navigation
- Implemented client-side routing using React Router v6
- Created a centralized routing configuration in `router/Router.jsx`
- Utilized `RouterProvider` for modern routing implementation

#### UI/UX Features
- Interactive particle effects using `react-particles` and `tsparticles-slim`
- Smooth animations implemented with GSAP
- Responsive design using Tailwind CSS flexbox and grid systems
- Icon integration using Remix Icons and React Icons
- Toast notifications using `react-hot-toast` for user feedback

### Backend Implementation

#### Email Service
- Built with Express.js for handling API requests
- Implemented secure email functionality using Nodemailer
- CORS enabled for secure cross-origin requests
- Environment variables for sensitive data protection
- Error handling and response status codes for robust operation

#### API Endpoints
