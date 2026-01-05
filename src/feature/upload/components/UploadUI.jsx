import { ResumeInput } from "./ResumeInput";
import JDTextarea from "./JDTextarea";
import { Button } from "@/components/ui/button";
import ScoreChart from "./ScoreChart";
import { Spinner } from "@/components/ui/spinner";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

const UploadUI = ({
  res,
  analyzeResume,
  loading,
  error,
  errorMsg,
  data,
  setData,
  suggestions,
}) => {
  const scoreExplanationContainer = useRef(null);
  const scoreExplanationContainerStyleOpen = "rotate-0";
  function show(e) {
    let open = true;
    return () => {
      if (open) {
        scoreExplanationContainer.current.style.display = "none";
        console.log(scoreExplanationContainer.current.style.display);
     
        open = false;
        return;
      }
      scoreExplanationContainer.current.style.display = "block";

      open = true;
    };
  }
  return (
    <div className="flex flex-col gap-6 w-[90%] mx-auto mt-10 mb-16 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          analyzeResume(data);
        }}
        className="w-full grid gap-8 md:grid-cols-2 h-[80vh] mb-8 "
      >
        <ResumeInput data={data} setData={setData} />

        <JDTextarea data={data} setData={setData} />

        {error && (
          <p className="text-center text-error font-medium">{errorMsg}</p>
        )}

        <Button disabled={loading} className="bg-primary hover-bg-primary-dark">
          Analyze
        </Button>
      </form>

      {loading && (
        <div className="w-full  flex justify-center ">
          <p className="text-accent text-lg p-0">processing</p>
          <Spinner className="size-6 text-accent" />
        </div>
      )}

      { res ? 
        <>
          <div className="grid grid-cols-2 grid-rows-3 gap-y-2 gap-x-1 z-10 ">
            <ScoreChart
              score={res.overallScore}
              className="col-start-1 col-span-2 row-start-1 row-span-1"
              title="Overall Score"
            />
            <ScoreChart
              score={res.skillScore}
              className="col-start-1 col-end-2 row-start-2 row-end-3"
              title="Skills Score"
            />
            <ScoreChart
              score={res.projectScore}
              className="col-start-2 col-end-3 row-start-2 row-end-3"
              title="Project Score"
            />
            <ScoreChart
              score={res.keywordMatchScore}
              className="col-start-1 col-end-2 row-start-3 row-end-4"
              title="Keyword Match Score"
            />
            <ScoreChart
              score={res.experienceScore}
              className="col-start-2 col-end-3 row-start-3 row-end-4"
              title="Experience score"
            />
          </div>

          <section>
            <h1 className="text-accent font-bold ">
              Fast Solution
            </h1>
            <ul className="leading-7">
              {suggestions.map((s, i) => (
                <>
                <li className="text-muted my-4" key={i}>
                  {s}
                </li>
                
                </>
              ))}
            </ul>
          </section>

          <section>
            <h1 className=" flex justify-between text-muted font-bold p-4 bg-surface">
              Why this Score?
              <button className="rotate-0 transition-all duration-300" onClick={show()}>
                <ChevronDown />
              </button>
            </h1>
            <div ref={scoreExplanationContainer}>
              {res.scoreExplanation?.map((entry, index) => (
                <p className="text-muted" key={index}>
                  <b>{entry.scoreType}</b>: {entry.explanation}
                </p>
              ))}
            </div>
          </section>
        </>
        : <></>
      }
    </div>
  );
};

export default UploadUI;
