import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

const LoadingModal: React.FC<ModalProps> = ({ isOpen, onComplete }) => {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) =>
          prevPercentage < 100 ? prevPercentage + 1 : prevPercentage
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  useEffect(() => {
    if (percentage === 100) {
      onComplete(); // Signal that the loading is complete
    }
  }, [percentage, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="text-6xl font-bold text-white">{percentage}%</div>
    </div>
  );
};

export default LoadingModal;
