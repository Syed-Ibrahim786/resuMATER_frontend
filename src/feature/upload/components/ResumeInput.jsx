import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ResumeInput({ data, setData }) {
  return (
    <div className="bg-surface p-4 rounded-2xl border border-default text-muted">
      <Label htmlFor="pdf" className="mb-6 text-lg">
        Enter your Resume
      </Label>
      <Input
        onChange={(e) => {
          console.log(e.target.files);
          setData({ ...data, resume: e.target.files[0] });
        }}
        id="pdf"
        className="
        bg-surface
        border border-default
        rounded-xl"
        type="file"
      />
      <p className="text-accent font-light text-sm">
        max size: 1 MB (pdf only)
      </p>
    </div>
  );
}
