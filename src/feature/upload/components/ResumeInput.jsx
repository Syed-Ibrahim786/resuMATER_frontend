import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useRef } from "react";

export function  ResumeInput({ data, setData }) {
  const dragAndDropBox = useRef(null);
  function handleDrop(e) {
    e.preventDefault();
    dragAndDropBox.current.classList.remove("bg-success")
    console.log(dragAndDropBox.current.classList)
    setData({ ...data, resume: e.dataTransfer.files[0] });
  }
 

  function flush(){
    setData({...data, resume:null});
  }
  return (
    <div
      className="flex justify-center items-center flex-col bg-surface p-8
     rounded-2xl border-2 border-dashed  border-default 
     text-muted"
      onDragOver={(e) => {
        e.preventDefault();
        dragAndDropBox.current.classList += " bg-success"}
      }
      onDrop={handleDrop}
      ref={dragAndDropBox}
    >
      {
        data.resume ? <div className="flex gap-2 flex-wrap "><p>{data.resume.name} </p><p onClick={flush}><X /></p></div> :
        <>
        <Label htmlFor="pdf" className="text-lg">
          Drag&Drop
        </Label>
        <Label className="text-sm font-light text-accent">or Click to enter Resume</Label>
        <Input
          onChange={(e) => {
            console.log(e.target.files);
            setData({ ...data, resume: e.target.files[0] });
          }}
          id="pdf"
          className="
         
          hidden
          bg-surface
          border border-default
          rounded-xl"
          type="file"
          accept=".pdf"
          required
        />
        {/* <p className="text-accent font-light text-sm">
          max size: 1 MB (pdf only)
        </p> */}
        </>
      }
    </div>
  );
}
