# 🧑‍⚖️ Lawyer Appointment Management System

A modern, React-based appointment management system for law firms that enables efficient scheduling and management of client appointments. Built as part of a frontend developer assignment, this application demonstrates clean code architecture, modern UI/UX principles, and robust state management.

## 📝 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [State Management](#-state-management)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)
- [Screenshots](#-screenshots)

## ✨ Features
- **Lawyer Management**
  - View lawyers with multiple specialties
  - Filter lawyers by specialty
  - Display individual lawyer profiles with detailed information

- **Appointment Booking**
  - Real-time availability checking
  - 30-minute appointment slots
  - Automatic conflict prevention
  - Custom pricing per lawyer

- **Appointment Management**
  - View upcoming appointments
  - Track appointment history
  - Sort appointments by status
  - Cancel or reschedule appointments

- **User Interface**
  - Clean, modern design using shadcn/ui
  - Responsive layout for all devices
  - Intuitive navigation
  - Clear error handling and user feedback

## 🛠 Tech Stack
- **Core:**
  - React 18
  - TypeScript
  - Vite

- **State Management:**
  - Redux Toolkit
  - Redux Logger middleware

- **Routing:**
  - React Router v6

- **UI/Styling:**
  - shadcn/ui components
  - Tailwind CSS
  - Lucide Icons

- **Date Handling:**
  - date-fns

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://https://github.com/mrigankraj/Lawyer-Appointment-Management-System.git
```

2. Navigate to project directory
```bash
cd lawyer-appointment-system
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure
```
lawyer-appointment-system/
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── LawyersList.tsx
│   │   ├── LawyerDetail.tsx
│   │   └── ...
│   ├── store/             # Redux store setup
│   │   ├── index.ts
│   │   ├── lawyersSlice.ts
│   │   └── appointmentsSlice.ts
│   ├── types/             # TypeScript interfaces
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── data/              # Mock data
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## 🧩 Key Components

### LawyersList
Displays a grid of available lawyers with their specialties, pricing, and booking options.

### LawyerDetail
Shows detailed information about a specific lawyer, including:
- Personal information
- Specialties
- Availability calendar
- Booking form

### AppointmentHistory
Tracks and displays all appointments for a specific lawyer:
- Upcoming appointments
- Past appointments
- Appointment status

### BookingForm
Handles the appointment booking process with:
- Date and time selection
- Real-time availability checking
- Conflict prevention
- Confirmation system

## 📊 State Management

The application uses Redux Toolkit for state management with the following slices:

### Lawyers Slice
```typescript
interface LawyersState {
  lawyers: Lawyer[];
  loading: boolean;
  error: string | null;
}
```

### Appointments Slice
```typescript
interface AppointmentsState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}
```

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Lint code
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📸 Screenshots

### Home Page
![Screenshot (991)](https://github.com/user-attachments/assets/6643e094-de94-415e-8612-adfbfaa03c88)

- Grid view of all lawyers
- Quick filters for specialties
- Clear pricing display

### Lawyer Profile
![Screenshot (992)](https://github.com/user-attachments/assets/602f62e7-955d-49d2-9bfd-ab34385a114d)

- Detailed lawyer information
- Availability calendar
- Booking interface

### Appointment History
![Screenshot (993)](https://github.com/user-attachments/assets/774b7457-b08c-4946-9d40-a3f44e399efc)

- List of all appointments
- Status indicators
- Sort and filter options

## ✅ Requirements Met

1. ✓ Multiple specialties per lawyer
2. ✓ Flexible lawyer availability
3. ✓ Different charges per appointment
4. ✓ Clean, professional code
5. ✓ Modern UI/UX design
6. ✓ Redux implementation
7. ✓ Middleware integration
8. ✓ UI library usage

## 🔒 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

Made with ❤️ by Mrigank Raj Dubey
