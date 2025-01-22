import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/ui/Navbar';
import LawyersList from './components/LawyersList';
import LawyerDetail from './components/LawyerDetail';
import { useAppSelector } from './hooks/useRedux';

const AppContent = () => {
  const selectedLawyer = useAppSelector((state) => state.lawyers.selectedLawyer);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {selectedLawyer ? <LawyerDetail /> : <LawyersList />}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
