
# Global Wedding Planners

A dynamic and aesthetic website for Global Wedding Planners, showcasing services, a gallery, and testimonials. This single-page application (SPA) is built to provide an elegant and user-friendly experience for couples planning their dream weddings.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
- **Hero Section**: Eye-catching hero with background image and call-to-action button.
- **About Section**: Company introduction with local image integration.
- **Services Section**: 
  - Three main wedding planning services (Full-Service, Partial, Day-of Coordination).
  - Additional services carousel showcasing various event types (weddings, baptisms, anniversaries, etc.).
- **Gallery Section**: Image carousel displaying wedding and event photos.
- **Testimonials Section**: Customer reviews and feedback.
- **Contact Section**: WhatsApp integration for direct communication with the planning team.
- **Footer**: Contact information, social media links, and company details.
- **Navigation**: Fixed header with smooth scrolling navigation and mobile hamburger menu.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (via CDN)
- **Fonts**: Google Fonts (Playfair Display, Poppins)
- **Icons**: Custom SVG icons
- **Deployment**: Static site hosting (compatible with Netlify, Vercel, etc.)

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/global-wedding-planners.git
   cd global-wedding-planners
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` (or the port specified in the terminal).

## 📁 Project Structure

```
global-wedding-planners/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── about/
│   │       │   └── wedding-setup.jpg
│   │       ├── gallery/
│   │       │   ├── gallery2.jpg
│   │       │   ├── gallery4.jpg
│   │       │   └── gallery5.jpg
│   │       ├── anniversary.jpg
│   │       ├── baby-shower.jpg
│   │       ├── baptism.jpg
│   │       ├── get-together.jpg
│   │       ├── haldi.jpg
│   │       ├── led-screen.jpg
│   │       ├── luxury-car.jpg
│   │       └── wedding-stage.jpg
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   └── constants.ts
├── App.tsx
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── README.md
├── tsconfig.json
├── types.ts
└── vite.config.ts
```

## 🎨 Customization

### Colors and Branding
The website uses a custom color palette defined in Tailwind CSS:
- Primary: `#4A2E2A` (brand-primary)
- Secondary: `#D4AF37` (brand-secondary)
- Light: `#F5F2F0` (brand-light)
- Dark: `#2C1B19` (brand-dark)
- Accent: `#C9A381` (brand-accent)

### Content Updates
- **Services**: Edit `SERVICES_DATA` and `ADDITIONAL_SERVICES_DATA` in `src/constants.ts`
- **Testimonials**: Update `TESTIMONIALS_DATA` in `src/constants.ts`
- **Gallery Images**: Modify `GALLERY_IMAGES` array in `src/constants.ts`
- **Contact Information**: Update phone number and WhatsApp link in `components/Contact.tsx` and `components/Footer.tsx`
- **Social Media Links**: Change URLs in `components/Footer.tsx`

### Images
- Replace images in `src/assets/images/` with your own high-quality photos
- Ensure images are optimized for web (use WebP format where possible)
- Update image imports in `src/constants.ts` if filenames change

## 📱 WhatsApp Integration

The contact form integrates with WhatsApp for direct communication:
- Phone number: +91 95679 55459
- Form data is formatted into a WhatsApp message
- Opens WhatsApp web or app automatically

## 🔧 Build and Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Preview the build**:
   ```bash
   npm run preview
   ```

3. **Deploy**: Upload the `dist` folder contents to your hosting provider (Netlify, Vercel, GitHub Pages, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Global Wedding Planners
- Phone: +91 95679 55459
- Location: Global Events, Yendayar
- Instagram: [@global.events.ydr](https://www.instagram.com/global.events.ydr/)
- Facebook: [globaleventsyendayar](https://www.facebook.com/globaleventsyendayar)

For inquiries, please use the contact form on the website or reach out via WhatsApp.

---

*Crafting timeless moments, one wedding at a time.*
