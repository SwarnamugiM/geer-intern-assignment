# LuxuryGems - Jewelry E-Commerce Store

A modern, full-stack e-commerce web application built with Next.js, featuring a luxury jewelry store with authentication, shopping cart, and product management capabilities.

![LuxuryGems Store](https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=400&fit=crop&crop=center)

## 🚀 Features

### 🛍️ **E-Commerce Functionality**
- **Product Catalog** - Browse luxury jewelry collection with detailed product pages
- **Shopping Cart** - Add items to cart with color selection and quantity management
- **Product Search** - Real-time search functionality to find specific jewelry pieces
- **Color Variations** - Multiple color options for each jewelry piece (Gold, Silver, Platinum, etc.)
- **Responsive Design** - Mobile-first design that works on all devices

### 🔐 **Authentication System**
- **User Registration** - Create new accounts with email validation
- **User Login** - Secure session-based authentication
- **Protected Routes** - Cart and checkout require authentication
- **Admin Features** - Product management for admin users

### 💎 **Product Management**
- **Product Details** - Comprehensive product information with high-quality images
- **Category Organization** - Rings, Necklaces, Earrings, and Bracelets
- **Material Information** - Detailed material specifications (18k Gold, Sterling Silver, etc.)
- **Stock Management** - Real-time inventory tracking

### 🛒 **Shopping Experience**
- **Add to Cart** - Select colors and add items to shopping cart
- **Cart Management** - Update quantities, remove items, view totals
- **Checkout Process** - Simulated checkout with order summary
- **Order Confirmation** - Success messages and cart clearing

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with hooks and context
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Next.js API Routes** - Server-side API endpoints
- **Server Components** - React components rendered on server
- **Server Actions** - Server-side form handling

### **Data Management**
- **In-Memory Storage** - Simple data persistence for demo purposes
- **Context API** - State management for cart and authentication
- **Local Storage** - Client-side cart persistence

### **Authentication**
- **Session-based Auth** - Secure HTTP-only cookies
- **Password Validation** - Client and server-side validation
- **Protected Routes** - Route-level authentication checks

### **Image Management**
- **Next.js Image** - Optimized image loading and rendering
- **Unsplash Images** - High-quality jewelry photography
- **Responsive Images** - Multiple sizes for different devices

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

## 🚀 How to Run the Project

### 1. **Clone the Repository**
\`\`\`bash
git clone <repository-url>
cd luxury-jewelry-store
\`\`\`

### 2. **Install Dependencies**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. **Run Development Server**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

### 4. **Open in Browser**
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### 5. **Build for Production** (Optional)
\`\`\`bash
npm run build
npm start
# or
yarn build
yarn start
\`\`\`

## 🔑 Demo Credentials

### **Admin Account**
- **Email:** \`admin@jewelry.com\`
- **Password:** Any password (demo purposes)

### **Regular User**
- Create a new account through the registration page
- Or use any email with any password for existing demo users

## 📁 Project Structure

\`\`\`
luxury-jewelry-store/
├── /frontend                     # Next.js Application (Full-Stack)
│   ├── /app                      # Next.js App Router
│   │   ├── /api                  # Backend API Routes
│   │   │   ├── /auth             # Authentication endpoints
│   │   │   │   ├── login/        # POST /api/auth/login
│   │   │   │   ├── register/     # POST /api/auth/register
│   │   │   │   ├── logout/       # POST /api/auth/logout
│   │   │   │   └── me/           # GET /api/auth/me
│   │   │   └── /products         # Product CRUD endpoints
│   │   │       ├── route.ts      # GET, POST /api/products
│   │   │       └── /[id]         # DELETE /api/products/[id]
│   │   ├── /cart                 # Shopping cart page
│   │   │   └── page.tsx          # Cart management UI
│   │   ├── /login                # Authentication pages
│   │   │   └── page.tsx          # Login form
│   │   ├── /register             # User registration
│   │   │   └── page.tsx          # Registration form
│   │   ├── /products             # Product catalog
│   │   │   ├── page.tsx          # Product listing page
│   │   │   └── /[id]             # Dynamic product routes
│   │   │       └── page.tsx      # Product detail page
│   │   ├── globals.css           # Global Tailwind styles
│   │   ├── layout.tsx            # Root layout with providers
│   │   └── page.tsx              # Homepage/landing page
│   ├── /components               # Reusable React Components
│   │   ├── auth-provider.tsx     # Authentication context provider
│   │   ├── cart-provider.tsx     # Shopping cart context provider
│   │   ├── navigation.tsx        # Header navigation component
│   │   ├── product-card.tsx      # Product display card
│   │   └── add-product-form.tsx  # Admin product creation form
│   ├── /lib                      # Utility Functions & Data
│   │   ├── auth.ts               # Authentication utilities & user management
│   │   ├── cart.ts               # Cart type definitions & interfaces
│   │   └── data.ts               # Product data & CRUD operations
│   ├── /public                   # Static Assets
│   │   └── /images               # Product images & assets
│   ├── package.json              # Dependencies & scripts
│   ├── next.config.js            # Next.js configuration
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   └── tsconfig.json             # TypeScript configuration
├── README.md                     # Project documentation
└── .gitignore                    # Git ignore rules
\`\`\`

### **Architecture Overview**
\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js)                      │
├─────────────────────────────────────────────────────────────┤
│  Client-Side (React)           Server-Side (Node.js)       │
│  ├── Pages & Components        ├── API Routes              │
│  ├── Context Providers         ├── Authentication          │
│  ├── State Management          ├── Data Management         │
│  └── UI/UX Layer              └── Business Logic          │
├─────────────────────────────────────────────────────────────┤
│                    DATA LAYER                              │
│  ├── In-Memory Storage (Products, Users, Sessions)         │
│  ├── Local Storage (Cart Persistence)                      │
│  └── Session Cookies (Authentication)                      │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## 🎯 Key Features Explained

### **Product Management**
- **8 Pre-loaded Products** - Luxury jewelry items with detailed descriptions
- **Color Variations** - Each product has multiple color options with unique images
- **Admin Controls** - Add, edit, and delete products (admin only)
- **Real-time Updates** - Changes reflect immediately across the application

### **Shopping Cart**
- **Persistent Storage** - Cart items saved in localStorage
- **Color Selection** - Each cart item includes selected color information
- **Quantity Management** - Increase, decrease, or remove items
- **Price Calculation** - Automatic subtotal, tax, and total calculations

### **Authentication Flow**
- **Registration** - Create account with name, email, and password
- **Login** - Authenticate with email and password
- **Session Management** - Secure session cookies with expiration
- **Route Protection** - Redirect to login for protected pages

## 📝 Notes and Assumptions

### **Architecture Decision**
- **Monolithic Structure** - Frontend and backend combined in single Next.js application
- **Full-Stack Next.js** - Leverages Next.js API routes for backend functionality
- **No Separate Backend** - All server logic handled within Next.js framework

### **Data Storage**
- **In-Memory Storage** - All data is stored in memory and resets on server restart
- **No Database** - This is a demo application without persistent database storage
- **Production Ready** - For production, integrate with PostgreSQL, MongoDB, or similar database

### **Authentication**
- **Demo Authentication** - Simplified auth system for demonstration purposes
- **Password Security** - In production, implement proper password hashing (bcrypt)
- **Session Security** - Uses HTTP-only cookies for basic security

### **Images**
- **External Images** - Product images sourced from Unsplash
- **Image Optimization** - Next.js Image component handles optimization automatically
- **Fallback Images** - Error handling for missing or broken images

### **Payment Processing**
- **Simulated Checkout** - No real payment processing implemented
- **Order Management** - No order history or tracking functionality
- **Production Integration** - Integrate with Stripe, PayPal, or similar payment processors

### **Performance**
- **Client-Side Rendering** - Most components use client-side rendering for interactivity
- **Server Components** - Some components rendered on server for better SEO
- **Image Loading** - Optimized image loading with Next.js Image component

### **Browser Compatibility**
- **Modern Browsers** - Designed for Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Responsive** - Fully responsive design for mobile and tablet devices
- **JavaScript Required** - Application requires JavaScript to be enabled

## 🔧 Development Notes

### **Environment Variables**
Currently, no environment variables are required for development. For production deployment, consider adding:
- \`NEXTAUTH_SECRET\` - For authentication security
- \`DATABASE_URL\` - For database connection
- \`STRIPE_SECRET_KEY\` - For payment processing

### **API Endpoints**
- \`GET /api/products\` - Fetch all products
- \`POST /api/products\` - Create new product (admin only)
- \`DELETE /api/products/[id]\` - Delete product (admin only)
- \`POST /api/auth/login\` - User login
- \`POST /api/auth/register\` - User registration
- \`POST /api/auth/logout\` - User logout
- \`GET /api/auth/me\` - Get current user

### **Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Components** - Reusable styled components
- **Responsive Design** - Mobile-first approach with breakpoints
- **Color Scheme** - Purple primary color with gray accents

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

### **Other Platforms**
- **Netlify** - Static site deployment with serverless functions
- **Railway** - Full-stack deployment with database support
- **DigitalOcean** - VPS deployment with custom configuration

## 🔄 Future Enhancements

### **Database Integration**
\`\`\`
/frontend
├── /lib
│   ├── /database
│   │   ├── connection.ts         # Database connection setup
│   │   ├── models/               # Data models
│   │   └── migrations/           # Database migrations
\`\`\`

### **Microservices Architecture** (Future)
\`\`\`
/project-root
├── /frontend                     # Next.js client application
├── /backend                      # Separate Node.js/Express API
│   ├── /auth-service            # Authentication microservice
│   ├── /product-service         # Product management microservice
│   └── /order-service           # Order processing microservice
├── /shared                       # Shared types and utilities
└── /database                     # Database schemas and migrations
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Unsplash** - For high-quality jewelry photography
- **Lucide** - For beautiful icons
- **Vercel** - For hosting and deployment platform

---

**Built with ❤️ using Next.js and TypeScript**
