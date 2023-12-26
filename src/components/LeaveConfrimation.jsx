import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleEditJob } from '../features/jobs/jobSlice';

const LeaveConfirmation = () => {
    const dispatch=useDispatch()
  useEffect(() => {
    const handleBeforeUnload = (event) => {
        
      const message = "Are you sure you want to leave this page?";
      event.returnValue = message; // Standard for most browsers
      dispatch(toggleEditJob())
      return message; // For some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      {/* Your page content goes here */}
    </div>
  );
};

export default LeaveConfirmation;
