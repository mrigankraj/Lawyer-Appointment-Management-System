import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setSelectedLawyer } from '../../store/lawyersSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const selectedLawyer = useAppSelector((state) => state.lawyers.selectedLawyer);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-xl font-bold cursor-pointer"
            onClick={() => dispatch(setSelectedLawyer(null))}
          >
            Law Firm Appointments
          </div>
          {selectedLawyer && (
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => dispatch(setSelectedLawyer(null))}
            >
              ← Back to Lawyers
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
