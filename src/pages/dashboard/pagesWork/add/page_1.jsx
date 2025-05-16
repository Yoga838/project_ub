import React from 'react'
import FormInput from '../../../../component/dashboard/formInput/formInput'
import FormDesc from '../../../../component/dashboard/formInput/formDesc'

export default function Page_1() {
  return (
    <div className='my-10'>
      <div className='bg-white border-2 border-primary-300 flex justify-center py-14 px-12'>
        <div className=''>
            <FormInput 
            label="Tagline Program"
            name="tagline_program"
            value=""
            onChange=""
            placeholder="Digitalisasi Administrasi dan Pelayanan Akademik"
            />
            <FormDesc
            label="Deskripsi Program"
            name="desc"
            value=""
            onChange=""
            placeholder="Tuliskan deskripsi di sini..."
            />
        </div>
      </div>
    </div>
  )
}
