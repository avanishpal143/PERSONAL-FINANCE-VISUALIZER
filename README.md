# Personal Finance Tracker

A modern, responsive web application for tracking personal finances built with Next.js 13, React, and Tailwind CSS.

![Finance Tracker Screenshot](https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 💰 **Transaction Management**
  - Add, edit, and delete transactions
  - Sort and filter transaction history
  - Form validation and error handling
  
- 📊 **Data Visualization**
  - Monthly expenses bar chart
  - Interactive data tooltips
  - Responsive chart layouts
  
- 💼 **Dashboard Overview**
  - Total expenses summary
  - Month-over-month comparison
  - Recent transactions list
  
- 🎨 **Modern UI/UX**
  - Clean, intuitive interface
  - Dark/light theme support
  - Responsive design for all devices
  - Smooth animations and transitions

## Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

```
├── app/
│   ├── dashboard/
│   │   └── page.tsx           # Dashboard page component
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx            # Landing page
├── components/
│   ├── dashboard/
│   │   ├── dashboard-header.tsx
│   │   ├── dashboard-nav.tsx
│   │   ├── dashboard-shell.tsx
│   │   ├── dashboard-tabs.tsx
│   │   ├── expenses-chart.tsx
│   │   ├── overview.tsx
│   │   ├── transaction-dialog.tsx
│   │   ├── transaction-provider.tsx
│   │   └── transactions-list.tsx
│   ├── ui/                  # shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── sample-data.ts      # Sample transaction data
│   ├── types.ts           # TypeScript interfaces
│   └── utils.ts          # Utility functions
├── hooks/
│   └── use-toast.ts      # Toast notification hook
├── public/              # Static assets
├── .eslintrc.json      # ESLint configuration
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/finance-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd finance-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

No environment variables are required for basic functionality as the app uses localStorage for data persistence.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Recharts](https://recharts.org/) for the charting library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
