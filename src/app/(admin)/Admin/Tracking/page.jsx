'use client';
import { useUser } from '@/context/Context'
import { useEffect, useState } from 'react'
import { onAuth, signInWithEmail, writeUserData, removeData } from '@/firebase/utils'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/app/page.module.css'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal'
import InputFlotante from '@/components/InputFlotante'






export default function Home() {




    const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, trackingDB, setUserData, tracking, postsIMG, setUserPostsIMG, item, cliente, setCliente, cart, setCart, modal, setModal } = useUser()
    const router = useRouter()
    const [query, setQuery] = useState('')
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})




    function handlerOnChange(e, key) {
        setData({ ...data, [key]: { ...data[key], [e.target.name]: e.target.value } })
    }



    console.log(data)



    function saveFrontPage(e, key) {
        console.log('jhdjskf')
        e.preventDefault()
        if (data[key]) {
            setUserSuccess('Cargando')
            writeUserData(`/tracking/${key}`, data[key], setUserSuccess)
        }
    }

    function close(e) {
        router.back()
    }
    console.log(trackingDB)
    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setQuery(window.location.href.split('=')[1])
        }
    }, [cliente, trackingDB])
    return (

        <div className="min-h-full">
            <img src="/airplane-bg.jpg" className='fixed  w-screen h-screen  object-cover  ' alt="" />

            <div className="fixed top-0 left-0 flex justify-center w-full h-auto bg-[#000000b4] p-0 z-40 " >
                <div className="relative w-[95%] h-screen overflow-y-scroll lg:w-[50%] bg-white border-b border-gray-900/10 pt-16 pb-16 lg:pb-4 px-5">
                    <Link href={`/Admin/Tracking/Add`} className='fixed bottom-[100px] right-[100px]  rounded-full z-50 block font-medium '>
                        <div className="absolute top-5 left-5  p-1 border text-white border-white rounded-full h-[50px] w-[50px] text-center flex items-center justify-center bg-[#F1BA06]" >
                            ADD
                        </div>
                    </Link>
                    <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                        X
                    </div>
                    <form className="relative  pt-5 sm:col-span-3 mb-5 pb-5 border-b-[.5px] border-[#666666]"  >


                        {
                            trackingDB && trackingDB && Object.entries(trackingDB).map((i, index) => {
                                return <div className='relative p-5 my-5 mt-10 bg-white space-y-5 shadow-2xl border-b-[.5px] border-[#666666] '>
                                    <h5 className='text-center font-medium text-[16px]'>Editar {query}<br /> <span className='text-[#5c5c5c]'> {i[0]}</span></h5>

                                    <h5 className='text-center font-medium text-[16px]'>DETALLE DEL SERVICIO {query}<br /> </h5>

                                    < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['FECHA DE CREACION']} required label={'FECHA DE CREACION'} shadow='shadow-white' />
                                    < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['CODIGO DE SERVICIO']} required label={'CODIGO DE SERVICIO'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['CODIGO DE CLIENTE']} required label={'CODIGO DE CLIENTE'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['MODALIDAD DE TRANSPORTE']} required label={'MODALIDAD DE TRANSPORTE'} shadow='shadow-white' />
                                    < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['DESTINO']} required label={'DESTINO'} shadow='shadow-white' />
                                    < InputFlotante type="text" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['MERCANCIA']} required label={'MERCANCIA'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['PESO TN']} required label={'PESO TN'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['SHIPPER']} required label={'SHIPPER'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['CONSIGNATARIO']} required label={'CONSIGNATARIO'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['MANIFIESTO']} required label={'MANIFIESTO'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['ETD']} required label={'ETD'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['ETA']} required label={'ETA'} shadow='shadow-white' />

                                    <h5 className='text-center font-medium text-[16px]'>STATUS {query}<br /> </h5>

                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['BOOKING']} required label={'BOOKING'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['ZARPE']} required label={'ZARPE'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['TRANSITO']} required label={'TRANSITO'} shadow='shadow-white' />
                                    < InputFlotante type="number" id="floating_5" onChange={(e) => handlerOnChange(e)} defaultValue={i[1]['ARRIBO A DESTINO']} required label={'ARRIBO A DESTINO'} shadow='shadow-white' />
                                    <h5 className='text-center font-medium text-[16px]'>STATUS +<br /> </h5>
                                    {i[1] && i[1].subItems && Object.values(i[1].subItems).map((item, index) => {
                                        return <div className=' space-y-5 border-b md:grid md:grid-cols-2 md:place-items-end md:gap-2  border-[#818181] pb-5'>
                                            < InputFlotante type="text" name={`ip`} uid={`column_${index}`} onChange={(e) => onChangeHandler2(e, index, 'd4')} value={data2[`item${index}`] && data2[`item${index}`][`ip`] ? data2[`item${index}`][`ip`] : item[`ip`]} required label={'Item'} shadow='shadow-white' />
                                            < InputFlotante type="text" name={`ic`} uid={`value_${index}`} onChange={(e) => onChangeHandler2(e, index, 'd4')} value={data2[`item${index}`] && data2[`item${index}`][`ic`] ? data2[`item${index}`][`ic`] : item[`ic`]} required label={'Valor'} shadow='shadow-white' />
                                        </div>
                                    })
                                    }




                                    <div className='w-full grid grid-cols-2 justify-items-center	'>
                                        <Button theme="Danger" click={(e) => { saveFrontPage(e, i[0]) }}>Eliminar</Button>
                                        <Button theme="Primary" click={(e) => { saveFrontPage(e, i[0]) }}>Guardar</Button>
                                    </div>

                                </div>
                            })
                        }

                    </form>
                </div>
            </div>
            {success === 'Cargando' && <Loader>ghfhfhj</Loader>}
        </div>
    )
}






