// src/components/YearAgeDisplay.jsx
import { useEffect, useState } from 'react';

export default function YearAgeDisplay() {
  const [age, setAge] = useState(0);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      const birthDate = new Date(2008, 2, 16); // 16 Maret 2008 (Maret = bulan ke-2)

      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dateDiff = today.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
        calculatedAge -= 1;
      }

      setAge(calculatedAge);
      setCurrentYear(today.getFullYear());
    };

    calculateAge();
    const interval = setInterval(calculateAge, 60000); // update tiap menit
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'var(--color-panel-solid)',
        padding: '8px 16px',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-3)',
        border: '1px solid var(--color-border)',
        fontSize: '14px',
        fontWeight: '500',
        color: 'var(--color-text)',
        zIndex: 1000,
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <span>2008</span>
      <span>—</span>
      {/* Bagian tengah dibuat lebih menonjol */}
      <span
        style={{
          fontWeight: '700',
          color: 'var(--color-accent, #FF6B6B)', // fallback warna jika --color-accent tidak ada
          padding: '0 4px',
          letterSpacing: '0.5px',
        }}
      >
        {age} Years
      </span>
      <span>—</span>
      <span>{currentYear}</span>
    </div>
  );
}