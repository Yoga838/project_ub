import React from "react";

export default function FormInput({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="">
      {label && (
        <label htmlFor={name} className="block mb-1 font-normal">
          {label}
        </label>
      )}
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-[900px] text-sm px-6 py-4 border-grey-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

// How to FormInput Component
// <FormInput
//   label="Tagline Program"
//   name="email"
//   value={form.email}
//   onChange={handleChange}
//   placeholder="Digitalisasi Administrasi dan Pelayanan Akademik"
// />
