# DocRoster - Complete Medical Platform

A beautiful React medical platform with authentication and doctor search functionality built with Tailwind CSS and Vite.

## Features

- **Modern Design**: Glass-morphism design with backdrop blur effects
- **Complete Authentication Flow**: Login, registration, and password recovery with navigation
- **Doctor Search Platform**: Full search interface with multiple sections
- **Real Images**: Integrated actual logo and user photos
- **Social Authentication**: Google and Apple sign-in buttons (UI ready for integration)  
- **Form Validation**: Email and password validation with loading states
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Elements**: Password visibility toggle, hover effects, loading spinners
- **Accessibility**: ARIA labels and keyboard navigation support
- **Modular Components**: Clean architecture with placeholder components ready for development

## Application Flow

1. **Login Page**: Main authentication screen with email/password and social login options
2. **Registration Page**: User registration with name, email, phone fields and terms agreement
3. **Password Recovery**: Email-based password reset functionality
4. **Doctor Search Platform**: Full featured search with filters, results, and specialist listings
5. **Navigation**: Smooth transitions between all screens with proper state management
2. **Registration Page**: User registration with name, email, phone fields and terms agreement  
3. **Search Platform**: Doctor search interface with filters, results, and specialized sections
4. **Logout**: Return to authentication from search platform

## Getting Started

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd docroster
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000` (or the port shown in terminal)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
docroster/
├── src/
│   ├── components/
│   │   ├── Auth.jsx                      # Main authentication/login component
│   │   ├── Register.jsx                  # User registration component
│   │   ├── Recover.jsx                   # Password recovery component
│   │   ├── Search.jsx                    # Main search platform component
│   │   ├── Box.jsx                       # User avatar component
│   │   ├── UserAvatar.jsx                # Interactive avatar with upload
│   │   ├── Btn.jsx                       # Reusable button component
│   │   ├── Close.jsx                     # Close/back button component
│   │   ├── AppointmentSection.jsx        # Doctor appointment booking
│   │   ├── ContentWrapperSection.jsx     # Content wrapper
│   │   ├── DoctorCardSection.jsx         # Individual doctor cards
│   │   ├── DoctorDetailsSection.jsx      # Doctor detailed information
│   │   ├── FilterOptionsSection.jsx      # Search filters
│   │   ├── MainContentSection.jsx        # Main content container
│   │   ├── NotificationSection.jsx       # User notifications
│   │   ├── PaginationSection.jsx         # Results pagination
│   │   ├── ProfileSection.jsx            # User profile display
│   │   ├── ResultsSection.jsx            # Search results
│   │   ├── SearchBarSection.jsx          # Search input fields
│   │   ├── SearchResultsWrapperSection.jsx # Results wrapper
│   │   ├── SearchSection.jsx             # Top search section
│   │   └── SpecialistListSection.jsx     # Medical specialties list
│   ├── assets/
│   │   ├── logo-docroster.png           # Main DocRoster logo
│   │   ├── user.png                     # User profile photo
│   │   ├── logo.png                     # Alternative logo
│   │   └── default-user.svg             # Fallback user avatar
│   ├── App.jsx                          # Main app with routing logic
│   ├── main.jsx                         # Entry point
│   └── index.css                        # Global styles with Tailwind
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Features Implementation

### Authentication Methods
- Email/Password login with validation
- User registration with name, email, phone fields  
- Google OAuth (UI ready - needs backend integration)
- Apple ID (UI ready - needs backend integration)
- Terms and conditions agreement for registration

### Navigation
- Smooth page transitions between login and registration
- Back button functionality from registration to login
- Clean state management for page switching

### UX Enhancements
- Loading states for all buttons and forms
- Form validation feedback with error messages
- Password visibility toggle on login page
- Custom checkbox component for terms agreement
- Smooth hover animations and focus states
- Touch-friendly button sizes for mobile

### Responsive Design
- Mobile-first approach
- Flexible container sizing
- Touch-friendly button sizes

## Next Steps for Production

1. **Backend Integration**:
   - Connect form submission to authentication API
   - Implement Google OAuth flow
   - Implement Apple ID authentication

2. **Security**:
   - Add CSRF protection
   - Implement proper session management
   - Add rate limiting

3. **Enhanced Features**:
   - Remember me functionality
   - Forgot password flow
   - Email verification
   - Two-factor authentication

4. **Performance**:
   - Code splitting
   - Image optimization
   - Bundle analysis

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.