# The Bat Project

This is my portfolio website built using Next.js, Tailwind CSS, and TypeScript. It uses Framer Motion for animations and contains a 3D model rendered using Three.js.

## Features

- **Animations**: Smooth animations powered by Framer Motion.
- **3D Model**: Interactive 3D model rendered using Three.js.
- **Image Optimization**: Scripts for optimizing images.
- **Custom Icon Library**: Includes a custom icon library.
- **Service Worker**: Script to generate a service worker.
- **CI/CD Pipeline**: Setup using GitHub Actions and Cloudflare Wrangler CLI.
- **Docker Deployment**: Can be deployed anywhere using Docker.
- **Accessibility**: Highly accessible and responsive design.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/thebatproject.git
cd thebatproject
```

1. Install dependencies:

```sh
npm install
# or
yarn install
```

### Development

To start the development server:

```sh
npm run dev
# or
yarn dev
```

### Build

To build the project:

```sh
npm run build
# or
yarn build
```

### Lint

To lint the project:

```sh
npm run lint
# or
yarn lint
```

### Format

To format the code:

```sh
npm run pretty
# or
yarn pretty
```

### Image Optimization

To optimize images:

```sh
npm run minify:images
# or
yarn minify:images
```

### Generate Service Worker

To generate the service worker:

```sh
npm run generate:sw
# or
yarn generate:sw
```

### CI/CD Pipeline

This project uses GitHub Actions for CI/CD and Cloudflare Wrangler CLI for deployment.

### Docker Deployment

To build and run the Docker container:

```sh
docker build -t thebatproject .
docker run -p 3000:3000 thebatproject
```
