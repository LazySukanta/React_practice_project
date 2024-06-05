//Single Selection
//multi Selection

import { useState } from "react";
import data from "./data.js"


export default function Accordian() {

  // const [selected]
  const [selected, setSelected] = useState(0)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multple, setMultiple] = useState([])

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId)
    console.log("from single Select");
  }

  function handleMultiSelection(getCurrentId) {
    console.log('MultiSelect');
  }

  // console.log(enableMultiSelection);
  return (
    <div className=" mt-16 justify-center align border ">
      <div>
        <button
          className="border bg-indigo-600 p-2 m-2"
          onClick={
            () => setEnableMultiSelection(!enableMultiSelection)}
        >Enable MultiSelection </button>
      </div>
      <div>
        {
          data && data.length > 0 ?
            data.map((dataItem) =>
              <div key={dataItem.id} className="w-[900px] border border-purple-900 " >
                <div
                  className="flex m-2 p-2 cursor-pointer border justify-between"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3
                    className="text-xl font-bold"
                  >
                    {dataItem.question}
                  </h3>
                  <span className="text-xl font-bold" >+</span>
                </div>

                {
                  selected === dataItem.id ?
                    <div className="m-2">
                      {dataItem.answer}
                    </div> : null
                }
              </div>
            ) :
            <h1>No data Found</h1>


        }

      </div>

    </div>
  )
}