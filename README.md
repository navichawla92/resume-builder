# Resume Builder

A modern, single-page resume builder application built with Svelte and SvelteKit. Create professional resumes with multiple customizable templates.

## Features

- **Multiple Templates**: Choose from 4 different resume templates:
  - Modern: Clean and contemporary design
  - Classic: Traditional professional layout
  - Minimal: Simple and elegant design
  - Creative: Unique and eye-catching layout

- **Easy Editing**: User-friendly form interface to edit all resume sections
- **Live Preview**: Real-time preview of your resume as you type
- **PDF Export**: Print-optimized PDF export functionality
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Built with TypeScript for better development experience

## Resume Sections

- Personal Information (Name, Contact, Summary)
- Work Experience
- Education
- Skills (categorized)
- Projects (with links and technologies)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resume-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Choose Template**: Select from 4 available templates using the template selector
2. **Edit Content**: Fill in your information using the form tabs:
   - Personal: Basic information and summary
   - Experience: Work history
   - Education: Academic background
   - Skills: Technical and soft skills
   - Projects: Personal or professional projects
3. **Preview**: See live updates in the preview panel
4. **Export**: Click "Export PDF" to download your resume as PDF

## Technologies Used

- **Svelte**: Frontend framework
- **SvelteKit**: Application framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling framework
- **Vite**: Build tool and dev server

## Customization

The application is highly customizable. You can:

- Add new resume templates by creating new components in `src/lib/templates/`
- Modify existing templates by editing the template files
- Add new form fields by updating the resume store and form components
- Customize styling by modifying Tailwind classes

## License

This project is licensed under the ISC License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

