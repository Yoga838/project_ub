import React from 'react'
import FormInput from '../../../../component/dashboard/formInput/formInput'
// import FormDesc from '../../../../component/dashboard/formInput/formDesc'
import { Link } from 'react-router-dom'

export default function Page_3() {
  return (
    <div className='my-10'>
      <div className='bg-white border-2 border-primary-300 py-14 px-12 rounded-2xl'>
        <div className=''>
            <div>
                <FormInput 
                    label="Program Kerja 3"
                    name="program_kerja_3"
                    value=""
                    onChange=""
                    placeholder="Internasionalisasi Fakultas"
                />
            </div>
            <div className='my-14'>
                <FormInput 
                    label="Rincian Program Kerja 1"
                    name="rincian_program_kerja_1"
                    value=""
                    onChange=""
                    placeholder="Menerapkan tanda tangan elektronik dan sistem persetujuan online."
                />
            </div>
            <div>
                <FormInput 
                    label="Rincian Program Kerja 2"
                    name="rincian_program_kerja_2"
                    value=""
                    onChange=""
                    placeholder="Menerapkan tanda tangan elektronik dan sistem persetujuan online."
                />
            </div>
            <div className='text-center mt-14'>
                <Link to="/dashboard/Add Program Kerja/Page 3">
                    <button className='xl:w-[389px] xl:h-[50px] md:w-full md:h-[50px] w-full h-[50px] me-2.5 rounded-lg border border-primary-700 text-primary-700 text-sm font-medium hover:bg-gray-700 hover:text-white transition'>Kembali</button>
                </Link>
                <Link to="/dashboard/programkerja">
                    <button className='xl:w-[389px] xl:h-[50px] md:w-full md:h-[50px] w-full h-[50px] xl:mt-0 md:mt-5 mt-5 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-800 transition'>Simpan</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
