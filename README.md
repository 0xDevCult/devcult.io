# devcult.io

https://devcult.io

## Development

This website uses TailwindCSS with a build process for optimal production performance.

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

1. Install dependencies:
```bash
npm install
```

2. Build CSS for production:
```bash
npm run build
```

3. For development with auto-rebuild:
```bash
npm run dev
```

### Project Structure

- `src/input.css` - Source CSS file with Tailwind directives
- `assets/styles.css` - Generated CSS file (do not edit directly)
- `tailwind.config.js` - Tailwind configuration
- `index.html` - Main HTML file

### Building for Production

The CSS is pre-built using TailwindCSS for better performance compared to the CDN approach:

```bash
npm run build
```

This generates a minified `assets/styles.css` file that includes only the CSS classes used in the project.

### GitHub Pages Deployment

This project is set up to automatically deploy to GitHub Pages using GitHub Actions.

#### Automatic Deployment (Recommended)

1. Push your changes to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the CSS
   - Deploy to GitHub Pages

#### Manual Setup

If this is your first time deploying:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will run automatically on your next push

#### Local Testing

To test the built version locally:

```bash
# Build the CSS
npm run build

# Serve the files (using any static server)
npx serve .
# or
python -m http.server 8000
```

The built `assets/styles.css` file is tracked in the repository to ensure GitHub Pages can serve it properly.
