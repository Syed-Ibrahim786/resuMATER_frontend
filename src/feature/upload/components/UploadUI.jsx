import { ResumeInput } from "./ResumeInput";
import JDTextarea from "./JDTextarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Scoreboard from "./Scoreboard";
import SuggestionSection from "./SuggestionSection";
import ScoreExplanation from "./ScoreExplanation";
import AboutScore from "../../../page/AboutScore";
import { TrendingUp } from "lucide-react";
import Insights from "./Insights";
import { NavLink } from "react-router-dom";
import Enhancement from "./Enhancement";

const UploadUI = ({
  res,
  analyzeResume,
  loading,
  error,
  errorMsg,
  data,
  setData,
  suggestions,
  previewURL,
  setPreviewURL,
}) => {
  console.log(res)
  return (
    <main className="flex flex-col gap-6 w-full items-center mt-10 mb-16 px-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          analyzeResume(data);
        }}
        className="w-[95%] grid gap-8 md:grid-cols-2  mb-8 "
      >
        <ResumeInput
          data={data}
          setData={setData}
          previewURL={previewURL}
          setPreviewURL={setPreviewURL}
        />

        <JDTextarea data={data} setData={setData} />

        

        <Button disabled={loading || !res} className="bg-primary hover-bg-primary-dark shadow-2xl">
          <TrendingUp/>Analyze
        </Button>

        {error && (
          <p className="text-center text-error font-medium">{errorMsg || "some error occured"}</p>
        )}
      </form>

      {loading && (
        <div className="w-full  flex  justify-center items-center text-accent">
          <p className=" text-md ">processing</p>
          <Spinner className="size-5  " />
        </div>
      )}

      {
      res ? (
        <article className="w-[90%] flex flex-col gap-10">
          <Scoreboard res={res} />

          <Insights label={"Critical Issue"} insight={res['critical issues']}/>
          <Insights label={"Minor Issue"} insight={res['minor issues']}/>
          <Insights label={"best things"} insight={res['best things']}/>

          <Enhancement enhancement={res['Best Suggestion']}/>


          <SuggestionSection suggestions={suggestions} />

          <ScoreExplanation res={res} />
          {/* <span className=" w-fit text-muted border rounded-2xl p-1 border-default">Why Trust us?</span>
            <div className="w-full border-b border-default"></div> */}

          {/* <AboutScore /> */}
            <NavLink to="/how" className="w-fit mx-auto py-2 px-4 rounded-2xl text-white font-medium bg-gray-600 animate-fade-in-up">how <span className="text-primary ">resuMATER</span> calculates score?</NavLink>
        </article>
      ) : (
        <div>
          <p className="text-4xl font-bold text-muted/10">provide input</p>
        </div>
      )}
    </main>
  );
};

export default UploadUI;
