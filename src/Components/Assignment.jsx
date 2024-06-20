import { useCallback, useEffect, useRef, memo } from "react";
import { lengthAtom, sentences } from "./atoms/Atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const Assignment = memo(()=>{
    const [count, setCount] = useRecoilState(lengthAtom)
    const refrence = useRef();
    return (
        <div className="  w-screen h-screen">
            <div className="flex gap-16 flex-col   justify-center h-screen items-center   ">
                <h1 className=" text-6xl ">Paragraph Genrater</h1>
                <div>
                    <input 
                    type="number" 
                    className="border w-96 hover:pointer-events-none" 
                    ref={refrence}
                    onChange={(e)=>{
                        if(e.target.value<0)
                            alert("Enter only Positive Value")
                    }}
                    />
                    <button 
                    type="button"  
                    className=" border-black bg-black p-5 rounded-2xl  text-white m-5"
                    onClick={()=>{
                            refrence.current.focus();
                            setCount(refrence.current.value);
                    }}
                    > Get Paragraph</button>
                </div>
                <GetSentences />
                
            </div>
            
        </div>
    )
})
function GetSentences(){
    const count = useRecoilValue(lengthAtom)
    const [Sentences, setValue] = useRecoilState(sentences)
    console.log(count)
    const arr=[  "apple",
        "banana",
        "cherry",
        "date",
        "elderberry",
        "fig",
        "grape",
        "honeydew",
        "kiwi",
        "lemon",
        "mango",
        "nectarine",
        "orange",
        "papaya",
        "quince",
        "raspberry",
        "strawberry",
        "tangerine",
        "ugli fruit",
        "victoria plum",
        "watermelon",
        "xigua",
        "yellow passion fruit",
        "zucchini"]
         useEffect(()=>{
            let lines = ""
            for(let i =0;i<count;i++){
                lines +=arr[Math.round(Math.random() * arr.length)]+`(${i+1})`+" "
            }
            lines.trim();
            setValue(lines)
        },[count])
        return(
            <div className="text-justify text-2xl p-10 sm: w-9/10 h-96 flex" onSuspend={()=>{
                console.log("loading")
            }}>
                {Sentences}
            </div>
        )
}


export default Assignment;