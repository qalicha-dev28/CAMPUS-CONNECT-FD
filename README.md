# CampusConnect

A comprehensive platform connecting students with essential campus services. Built with React, Vite, and modern web technologies to provide a seamless experience for students, service providers, and administrators.

## Overview

CampusConnect is a web application designed to bridge the gap between students and campus service providers. The platform enables students to easily discover, book, and review various services while providing vendors with tools to manage their offerings and administrators with oversight capabilities.

## Features

### For Students
- **Service Discovery**: Browse and search through available campus services
- **Easy Booking**: Simple booking process with real-time availability
- **Service Reviews**: Leave reviews and ratings for completed services
- **Booking Management**: Track active and completed bookings
- **Profile Management**: Manage personal information and preferences

### For Service Providers (Vendors)
- **Service Management**: Add, edit, and remove services
- **Booking Overview**: View and manage incoming bookings
- **Revenue Tracking**: Monitor earnings and performance metrics
- **Service Analytics**: Track service popularity and customer feedback

### For Administrators
- **User Management**: Oversee all platform users (students and vendors)
- **Service Oversight**: Monitor and manage all services on the platform
- **Booking Analytics**: View comprehensive booking statistics
- **Platform Reports**: Generate insights and reports for decision-making

## Technology Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS with custom gradients and animations
- **Animations**: Framer Motion for smooth interactions
- **Routing**: React Router DOM v7
- **Forms**: React Hook Form for form management
- **HTTP Client**: Axios for API communication
- **Icons**: React Icons library
- **Date Handling**: Day.js for date manipulation

## Available Services

The platform supports various campus services including:

- **Laundry Services**: Professional wash, dry, and fold with eco-friendly options
- **Printing & Copying**: High-quality printing with color and binding services
- **Academic Tutoring**: Expert tutors across all subjects with flexible scheduling
- **Campus Transportation**: Safe rides and shuttle services
- **Food Delivery**: Hot meals from campus dining partners
- **Tech Support**: Device repair and software assistance

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd campus-connect-fd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the deployed application at `https://campus-connect-fd.onrender.com` or run locally with `npm run dev` for development

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── modals/         # Modal components
│   ├── interactions/   # Interactive components
│   └── bookings/       # Booking-related components
├── pages/              # Page components
│   ├── admin/          # Admin dashboard pages
│   ├── student/        # Student dashboard pages
│   ├── vendor/         # Vendor dashboard pages
│   └── LandingPage.jsx # Public landing page
├── services/           # API service functions
├── layouts/            # Layout components
├── hooks/              # Custom React hooks
├── context/            # React context providers
└── styles/             # Additional CSS files
```

## Key Components

- **Authentication System**: Role-based access control for students, vendors, and admins
- **Service Management**: CRUD operations for services with modal interfaces
- **Booking System**: Complete booking lifecycle management
- **Review System**: Rating and review functionality for services
- **Dashboard Analytics**: Statistics and insights for different user roles

## Contributing

This project was developed by:
- Boru Qalicha
- Alex Rooney
- Kaisang Vincent
- Ochieng Oduor

## License

© 2025 CampusConnect. All rights reserved.
