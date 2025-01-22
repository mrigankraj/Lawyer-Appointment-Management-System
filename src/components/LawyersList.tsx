import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setSelectedLawyer } from '../store/lawyersSlice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LawyersList = () => {
  const dispatch = useAppDispatch();
  const lawyers = useAppSelector((state) => state.lawyers.lawyers);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lawyers.map((lawyer) => (
        <Card 
          key={lawyer.id} 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => dispatch(setSelectedLawyer(lawyer))}
        >
          <CardHeader>
            <CardTitle>{lawyer.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {lawyer.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <p>Available: {lawyer.availability.workingDays.join(', ')}</p>
                <p>
                  Hours: {lawyer.availability.startTime} - {lawyer.availability.endTime}
                </p>
                <p className="font-semibold mt-2">
                  ${lawyer.costPerAppointment} per appointment
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LawyersList;
