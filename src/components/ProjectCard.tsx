import ProjectScreenshotCarousel from "./ProjectScreenshotCarousel";

interface ProjectProps {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  images: string[];
}

const ProjectCard = ({ title, description, features, tags, images }: ProjectProps) => {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6">
      {/* Left: carousel */}
      <div className="w-full md:w-2/5">
        <ProjectScreenshotCarousel images={images} altPrefix={title} />
      </div>

      {/* Right: content */}
      <div className="flex-1 space-y-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-slate-300 text-sm md:text-base">{description}</p>

        <ul className="text-slate-400 text-sm space-y-1 list-disc list-inside">
          {features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2 text-xs">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
