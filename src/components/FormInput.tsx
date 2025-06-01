import React from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: string;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  className = ""
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -translate-y-2/4 w-5 h-5 left-4 top-2/4">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: icon,
            }}
          />
        </div>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[69px] border text-base text-[#8C8C8C] pl-14 pr-4 rounded-[9px] border-solid border-[#277C30] focus:outline-none focus:ring-2 focus:ring-[#277C30] focus:border-transparent"
      />
    </div>
  );
};
