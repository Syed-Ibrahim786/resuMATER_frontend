import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import { useRef } from "react";

export function ResumeInput({ data, setData, previewURL, setPreviewURL }) {
  const dragAndDropBox = useRef(null);
  console.log(previewURL)
  function handleDrop(e) {
    e.preventDefault();
    dragAndDropBox.current.classList.remove("bg-success");
    console.log(dragAndDropBox.current.classList);
    setData({ ...data, resume: e.dataTransfer.files[0] });
    const url = URL.createObjectURL(e.dataTransfer.files[0] );
    setPreviewURL(url);
  }

  function flush() {
    setData({ ...data, resume: null });
    setPreviewURL(null);
  }
  return (
    <div
      className="flex justify-end flex-col bg-surface border border-default p-6
     rounded-2xl 
     text-muted"
      onDragOver={(e) => {
        e.preventDefault();
        dragAndDropBox.current.classList += " bg-success";
      }}
      onDrop={handleDrop}
      ref={dragAndDropBox}
    >
      <div className="flex justify-center items-center p-4 border-4 border-dashed  border-default md:h-[70%] rounded-2xl">

      {
        // previewURL ?
        // <iframe 
        // src={`${previewURL}#page=1&zoom=100`}
        // title="resume preview"
        // className="overflow-scroll custom-scrollbar w-[70%] rounded-lg "
        // />
        // :
       data.resume ? (
        <div className="flex gap-2 flex-wrap ">
          <p>{data.resume.name} </p>
          <p onClick={flush}>
            <X />
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center ">
        <Upload size={60} className="text-muted/70"/>
          
          <Label htmlFor="pdf" className="text-lg font-light text-accent ">
            Click to enter Resume
          </Label>
          <Input
            onChange={(e) => {
              console.log(e.target.files);
              setData({ ...data, resume: e.target.files[0] });
              let url = URL.createObjectURL(e.target.files[0]);
              setPreviewURL(url);
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
          <Label  className="text-sm">
            or Drag & Drop
          </Label>
          {/* <p className="text-accent font-light text-sm">
          max size: 1 MB (pdf only)
        </p> */}
        </div>
      )}
      </div>
      
      
    </div>
  );
}
