import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlueButton } from '@/core-ui/Button';
import { headerTitle, registerButtonText } from '../../uitlTexts';

export default function Header() {
  const navigate = useNavigate();  
    return (
      <div className="flex w-full justify-around items-center p-4">
        <p>{headerTitle}</p>
        <div>
          <BlueButton action={() => navigate("/register")} title={registerButtonText} />
        </div>
      </div>
    );
  }