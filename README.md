`# AlecerPay

A modern financial management application built with Next.js, React, and TypeScript. AlecerPay provides a comprehensive platform for managing wallets, sending/receiving money, currency conversion, and business operations.

## Features

###  Money Tools
- **Dashboard** - Overview of your financial activities
- **Wallets** - Manage multiple wallets and balances
- **Convert** - Real-time currency conversion
- **Send Money** - Transfer funds securely
- **Receive Money** - Generate payment requests
- **Withdraw** - Withdrawal management

### Business
- **Cards** - Digital and physical card management
- **Invoices** - Create and manage business invoices

### Support & Analytics
- **Analytics** - View detailed financial statistics and reports
- **Settings** - Customize your account preferences

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form
- **Data Fetching**: TanStack React Query
- **State Management**: Next.js App Router
- **Package Manager**: Bun

## Installation

### Prerequisites
- Node.js 18+ (or Bun)
- npm or Bun

### Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd sharp-look-rebuild

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:3000`.

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── analytics/         # Analytics page
│   ├── cards/             # Cards management page
│   ├── convert/           # Currency conversion page
│   ├── invoices/          # Invoices management page
│   ├── receive-money/     # Receive money page
│   ├── send-money/        # Send money page
│   ├── settings/          # Settings page
│   ├── sign-in/           # Authentication page
│   ├── wallets/           # Wallets management page
│   ├── withdraw/          # Withdrawal page
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── AppSidebar.tsx     # Main navigation sidebar
│   ├── TopBar.tsx         # Top navigation bar
│   ├── WalletCards.tsx    # Wallet display component
│   ├── QuickActions.tsx   # Quick action buttons
│   ├── RecentTransactions.tsx
│   └── ui/                # UI component library (Radix UI)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── styles/                # Global styles
```

## Key Components

### AppSidebar
The main navigation component featuring:
- Collapsible sidebar on desktop (collapses on nav link click)
- Mobile-friendly sheet navigation
- Logout functionality with confirmation dialog
- Help desk link
- Organized navigation sections (Money Tools, Business, Support)

### Navigation
- Responsive design (collapse on mobile, expand on desktop)
- Active link highlighting
- Tooltip support for collapsed state
- Auto-collapse on link selection

## Styling

The project uses Tailwind CSS with custom configuration. Theme colors are defined in `tailwind.config.ts` with support for:
- Dark mode
- Custom color variables
- Responsive design utilities

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Proprietary - AlecerPay 2026*

## Support

For help or questions:
- Visit the [AlecerPay Help Desk](https://help.alecerpay.com)
- Check documentation in the Settings page
- Contact support through the app
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

 
