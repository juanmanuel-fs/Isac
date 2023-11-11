import { useEffect, useState } from "react";
import { BsFillFilePdfFill } from "react-icons/bs";
import { SiFiles } from "react-icons/si";
import { TfiClose } from "react-icons/tfi";

function Upload() {
  const [count, setCount] = useState<number>(0)
  const [isProcess, setIsProcess] = useState<boolean>(false)

  useEffect(() => {
    if(isProcess == true && count <= 10) {
      const countInterval = setInterval(()=> {
        setCount(count => count +1 )
        console.log(count)
        if(count == 10) {
          setIsProcess(false)
          return () => clearInterval(countInterval)         
        }
      }, 500)
    }
  }, [isProcess])

  return (
    <div className="h-full flex justify-center items-center ">
      <div className="flex flex-col gap-4">
        <div className="min-w-[480px] border-2 border-white-50 rounded-2xl border-dashed p-8 flex flex-col items-center justify-center gap-2">
          <SiFiles className='text-white-22 text-4xl'/>
          <label htmlFor="" className="text-white-50 flex flex-col item-center">
            Drag Files 
          </label>
        </div>
        <div className=" flex flex-row items-center gap-2">
          <hr className="flex-auto border border-white-22"/>
          <h4>OR</h4>
          <hr className="flex-auto border border-white-22"/>
        </div>
        <div className="">
          <h6 className="uppercase font-semibold text-white-75 mb-2">Current Files:</h6>
          <ul className="flex flex-col gap-2">
            <li className="rounded-lg flex flex-row gap-2 justify-between items-center p-2 bg-white-10">
              <span className="flex gap-2 items-center text-sm">
                <BsFillFilePdfFill/>
                20070019378.pdf
              </span>
              <TfiClose className='text-white-50'/>
            </li>
            <li className="rounded-lg flex flex-row gap-2 justify-between items-center p-2 bg-white-10">
              <span className="flex gap-2 items-center text-sm">
                <BsFillFilePdfFill/>
                20120003510.pdf
              </span>
              <TfiClose className='text-white-50'/>
            </li>
            <li className="rounded-lg flex flex-row gap-2 justify-between items-center p-2 bg-white-10">
              <span className="flex gap-2 items-center text-sm">
                <BsFillFilePdfFill/>
                JSC-65828B-Chg1.pdf
              </span>
              <TfiClose className='text-white-50'/>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-4 items-center text-white-50">

          <button
              className="py-2 px-6 text-sm  bg-indigo-900 text-white-75 rounded-lg font-semibold ring-1 ring-transparent hover:ring-indigo-600 disabled:bg-indigo-500 disabled:text-white-50 font-montserrat"
              onClick={()=>setIsProcess(true)}
              disabled={isProcess}
            >Process Data
          </button>
          <div className="flex-auto">
            {
              (count <= 10 && count > 0) &&
              <div className={`w-[${count*10+'%'}] h-3 bg-indigo-500 rounded-lg`}>
              </div>

            }
             {count >= 10 && '100% Completed'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload