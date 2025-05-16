import React from 'react'
import FormInput from '../../../../component/dashboard/formInput/formInput'
import FormDesc from '../../../../component/dashboard/formInput/formDesc'
import { Link } from 'react-router-dom'

export default function Page_1() {
  return (
    <div className='my-10'>
      <div className='bg-white border-2 border-primary-300 py-14 px-12 rounded-2xl'>
        <div className=''>
            <div>
                <FormInput 
                    label="Tagline Program"
                    name="tagline_program"
                    value=""
                    onChange=""
                    placeholder="Digitalisasi Administrasi dan Pelayanan Akademik"
                />
            </div>
            <div className='my-14'>
                <FormDesc
                    label="Deskripsi Program"
                    name="desc"
                    value=""
                    onChange=""
                    placeholder="Tuliskan deskripsi di sini..."
                />
            </div>
            <Link to="/dashboard/Add Program Kerja/Page 2">
                <div className='text-center'>
                    <button className='w-[778px] h-[50px] rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-800 transition'>Lanjut</button>
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}
