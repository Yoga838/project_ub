import React from "react";

export default function FormDesc({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id || name} className="block mb-1 font-normal">
          {label}
        </label>
      )}
      <textarea
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-sm px-6 py-4 border-grey-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

// How to Form Desc
// <FormDesc
//   label="Deskripsi"
//   name="desc"
//   value={desc}
//   onChange={(e) => setDesc(e.target.value)}
//   placeholder="Tuliskan deskripsi di sini..."
// />
