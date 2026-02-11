import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Download,
  Eye,
  Grid3X3,
  List,
  Plus,
  Search,
  Star,
  Trash,
} from "lucide-react";
import React, { useState } from "react";
import OwnResume from "./component/OwnResume";

const ResumeUI = ({ myResumes, templates }) => {
  const [myResumeSide, setMyResumeSide] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResumes, setFilteredResumes] = useState([]);
  const [gridLayout, setGridLayout] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [templateInput, setTemplateInput] = useState("");
  const [filteredtemplates, setFilteredTemplates] = useState(templates);
  const categories = [...new Set(templates.map(t => t.category))];
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setFilteredResumes(myResumes.filter((resume) => resume.name.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  const handleTemplateSearch = (e) => {
    setTemplateInput(e.target.value);

    if(!e.target.value){
        setFilteredTemplates(templates);
    }else{
        setFilteredTemplates(templates.filter((template) => template.name.toLowerCase().includes(e.target.value)));
    }
  }
  const handleCategorySelect = (category) => {
    if(category == "All"){
        setFilteredTemplates(templates);
        setCurrentCategory("All");
        return
    }
    setCurrentCategory(category);
    console.log(templates.filter((template) => template.category === category))
    setFilteredTemplates(templates.filter((template) => template.category === category))
    setCurrentCategory(category);
    console.log(category); 
  }
  console.log(filteredtemplates);
  return (
    <main className="p-6 text-muted">
      <h1 className="mb-4 font-bold text-2xl">Resume Manager</h1>

      <div className="mb-4 p-2 pt-6 border md:border-none border-default rounded-2xl ">
        <Button
          variant="hero"
          size="sm"
          title="upload resume"
          className="w-full md:w-[150px] brightness-80"
        >
          <Plus />
          upload resume
        </Button>
      </div>

      <section className=" flex gap-6 border-b border-default">
        <button
          title="click to my resume page"
          onClick={() => setMyResumeSide(true)}
          className={`${
            myResumeSide ? ` text-accent border-b-2 border-amber-400` : ``
          } font-semibold`}
        >
          my resume
        </button>
        <button
          title="click to view templates"
          onClick={() => setMyResumeSide(false)}
          className={`${
            !myResumeSide ? ` text-accent border-b-2 border-amber-400` : ``
          } font-semibold`}
        >
          templates
        </button>
      </section>

      <div className=" w-[100%] overflow-x-hidden">
        <div
          className={`flex w-[200%] transition-all duration-300 ease-out ${
            !myResumeSide ? `translate-x-[-50%]` : ``
          }`}
        >
          <section className="mt-4 w-[50%]">
            <div className=" p-2 pl-4 flex items-center border border-default rounded-2xl">
              <Search className="text-gray-600" />

              <Input
                title="search resume"
                placeholder="search your resume"
                value={searchInput}
                onChange={handleSearch}
                className="border-none outline-none"
              />
            </div>

            <div className="hidden mt-2 md:flex gap-2">
              <button onClick={() => setGridLayout(true)} className="p-2 w-fit border border-default rounded-lg">
                <Grid3X3 className=""  />
              </button>
              <button onClick={() => setGridLayout(false)} className="p-2 w-fit border border-default rounded-lg">
                <List />
              </button>
            </div>

            {!searchInput ? (
              <div className={`${gridLayout ? `grid md:grid-cols-2 lg:grid-cols-3`:`grid`}`}>
                {myResumes.map((resume) => (
                  <div
                    key={resume.id}
                    className="mt-4 p-4 relative border border-default rounded-2xl"
                  >
                    <div className="flex justify-center items-center">
                      <span className="absolute top-2 right-2 p-2 text-sm border border-default rounded-lg">
                        {resume.atsScore}%
                      </span>
                      <OwnResume />
                      <p className="p-2  absolute  bg-bg/95  hover:opacity-100 focus:opacity-100 transition-opacity duration-300 flex gap-2 cursor-pointer">
                        <Button
                          title={`view the ${resume.name}resume`}
                          variant="hero"
                          className="opacity-100 md:opacity-20 hover:opacity-100 focus:opacity-100"
                        >
                          <Eye />
                        </Button>
                        <Button
                          title={`download the ${resume.name} resume`}
                          variant="secondary"
                          className="opacity-100 md:opacity-20 hover:opacity-100 focus:opacity-100"
                        >
                          <Download />
                        </Button>
                        <Button
                          title={`delete the ${resume.name} resume`}
                          variant="outline"
                          className="opacity-100 md:opacity-20  hover:opacity-100 focus:opacity-100"
                        >
                          <Trash className="text-gray-700" />
                        </Button>
                      </p>
                    </div>
                    <div className="mt-4">
                      <b className="font-bold ">{resume.name}</b>
                      <p className=" brightness-75">{resume.lastModified}</p>
                    </div>
                    {
                        !resume.favorite ?
                        <Button
                        key="add"
                        title={`add ${resume.name} to favourite`}
                        variant="outline"
                        className="mt-2 bg-primary brightness-80 w-full border"
                      >
                        <Star />
                        <p>Add to Favourite</p>
                      </Button> :
                      <Button
                      key="remove"
                        title={`remove ${resume.name} from favourite`}
                        variant="outline"
                        className="mt-2 brightness-80 w-full border"
                      >
                        
                        <p>remove from Favourite</p>
                      </Button>
                    }
                      
                    
                  </div>
                ))}
              </div>
            ) : (
                !filteredResumes.length ? 
                <div className="p-4 text-muted">
                    <p className=" text-center text-lg">not found</p>
                </div> :

              <div className={`${gridLayout ? `grid md:grid-cols-2 lg:grid-cols-3`:`grid`}`}>
                {filteredResumes.map((resume) => (
                  <div
                    key={resume.id}
                    className="mt-4 p-4 relative border border-default rounded-2xl"
                  >
                    <div className="flex justify-center items-center">
                      <span className="absolute top-2 right-2 p-2 text-sm border border-default rounded-lg">
                        {resume.atsScore}%
                      </span>
                      <OwnResume />
                      <p className="p-2  absolute  bg-bg/95  hover:opacity-100 focus:opacity-100 transition-opacity duration-300 flex gap-2 cursor-pointer">
                        <Button
                          title={`view the ${resume.name}resume`}
                          variant="hero"
                          className="opacity-100 md:opacity-20 hover:opacity-100 focus:opacity-100"
                        >
                          <Eye />
                        </Button>
                        <Button
                          title={`download the ${resume.name} resume`}
                          variant="secondary"
                          className="opacity-100 md:opacity-20 hover:opacity-100 focus:opacity-100"
                        >
                          <Download />
                        </Button>
                        <Button
                          title={`delete the ${resume.name} resume`}
                          variant="outline"
                          className="opacity-100 md:opacity-20  hover:opacity-100 focus:opacity-100"
                        >
                          <Trash className="text-gray-700" />
                        </Button>
                      </p>
                    </div>
                    <div className="mt-4">
                      <b className="font-bold ">{resume.name}</b>
                      <p className=" brightness-75">{resume.lastModified}</p>
                    </div>
                    
                       {
                        !resume.favourite ?
                        <Button
                        key="add"
                        title={`add ${resume.name} to favourite`}
                        variant="outline"
                        className="mt-2 bg-primary brightness-80 w-full border"
                      >
                        <Star />
                        <p>Add to Favourite</p>
                      </Button> :
                      <Button
                      key="remove"
                        title={`remove ${resume.name} from favourite`}
                        variant="outline"
                        className="mt-2 bg-primary brightness-80 w-full border"
                      >
                        
                        <p>remove from Favourite</p>
                      </Button>
                    }
                    
                  </div>
                ))}
              </div>
            )}
          </section>





          <section className="mt-4 w-[50%]">
            <div className=" p-2 pl-4 flex items-center border border-default rounded-2xl">
              <Search className="text-gray-600" />

              <Input
                title="search resume"
                placeholder="search template"
                value={templateInput}
                onChange={handleTemplateSearch}
                className="border-none outline-none"
              />
            </div>

            <div className="hidden mt-2 md:flex gap-2">
              <button onClick={() => setGridLayout(true)} className="p-2 w-fit border border-default rounded-lg">
                <Grid3X3 className=""  />
              </button>
              <button onClick={() => setGridLayout(false)} className="p-2 w-fit border border-default rounded-lg">
                <List />
              </button>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-scroll custom-scrollbar-options ">
                <Button variant={`${currentCategory === "All"? `hero`:`secondary`}`} key="All" onClick={() => handleCategorySelect("All")}>All</Button>
                {   
                    categories.map((category) => (
                        <Button key={category} variant={`${currentCategory === category? `hero`:`secondary`}`} onClick={() => handleCategorySelect(category)} className="border border-default">{category}</Button>
                    ))
                }
            </div>

            {
                !filteredtemplates.length ?  
                <div className="p-4 text-muted">
                    <p className=" text-center text-lg">not found</p>
                </div> :

             <div className={`${gridLayout ? `grid md:grid-cols-2 lg:grid-cols-3`:`grid`}`}>
                {filteredtemplates.map((template) => (
                  <div
                    key={template.id}
                    className="mt-4 p-4 relative border border-default rounded-2xl"
                  >
                    <div className="flex justify-center items-center">
                      <span className="absolute top-2 right-2  text-sm  ">
                        {template.popular ? <div className="flex gap-2 py-1 px-2 text-accent border border-amber-400 rounded-3xl"><Star/><p>popular</p></div>:""}
                      </span>
                      <OwnResume />
                      <p className="p-2  absolute  bg-bg/95  hover:opacity-100 focus:opacity-100 transition-opacity duration-300 flex gap-2 cursor-pointer">
                        <Button
                          title={`view the ${template.name}resume`}
                          variant="hero"
                          className="opacity-100 md:opacity-20 hover:opacity-100 focus:opacity-100"
                        >
                          <Eye />
                        </Button>
                        <Button
                          title={`download the ${template.name} resume`}
                          variant="secondary"
                          className="opacity-100 md:opacity-20 hover:opacity-100 focus:opacity-100"
                        >
                          <Download />
                        </Button>
                        
                      </p>
                    </div>
                    <div className="mt-4">
                      <b className="font-bold ">{template.name}</b>
                      <p className=" brightness-75">{template.category}</p>
                    </div>
                    {!template.favourite && (
                      <Button
                        title={`add ${template.name} to favourite`}
                        variant="outline"
                        className="mt-2 bg-primary brightness-80 w-full border"
                      >
                        
                        <p>Use Template</p>
                      </Button>
                    )}
                  </div>
                ))}
              </div>   
            }
            

          </section>
        </div>
      </div>
    </main>
  );
};

export default ResumeUI;




