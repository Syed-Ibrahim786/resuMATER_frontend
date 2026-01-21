import { ResumeInput } from "./ResumeInput";
import JDTextarea from "./JDTextarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Scoreboard from "./Scoreboard";
import SuggestionSection from "../SuggestionSection";
import ScoreExplanation from "./ScoreExplanation";
import AboutScore from "./AboutScore";

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
  return (
    <main className="flex flex-col gap-6 w-full items-center mt-10 mb-16 ">
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

        {error && (
          <p className="text-center text-error font-medium">{errorMsg}</p>
        )}

        <Button disabled={loading} className="bg-primary hover-bg-primary-dark">
          Analyze
        </Button>
      </form>

      {loading && (
        <div className="w-full  flex  justify-center items-center text-accent">
          <p className=" text-md ">processing</p>
          <Spinner className="size-5  " />
        </div>
      )}

      {res ? (
        <article className="w-[90%] flex flex-col gap-10">
          <Scoreboard res={res} />

          <SuggestionSection suggestions={suggestions} />

          <ScoreExplanation res={res} />
          {/* <span className=" w-fit text-muted border rounded-2xl p-1 border-default">Why Trust us?</span>
            <div className="w-full border-b border-default"></div> */}

          <AboutScore />
        </article>
      ) : (
        <></>
      )}
    </main>
  );
};

export default UploadUI;
