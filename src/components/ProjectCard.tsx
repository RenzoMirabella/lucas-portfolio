interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  detail?: string;
  tags?: string[];
  size?: "large" | "small";
  onClick?: () => void;
}
const ProjectCard = ({
  title,
  description,
  image,
  detail,
  tags = [],
  size = "large",
  onClick
}: ProjectCardProps) => {
  return <div className={`
        group cursor-pointer bg-portfolio-surface border border-portfolio-border rounded-lg overflow-hidden
        hover:bg-portfolio-surface-hover hover:border-portfolio-accent/50 
        transition-all duration-300 hover:shadow-portfolio-accent relative
        ${size === "large" ? "aspect-[4/3]" : "aspect-square"}
      `} onClick={onClick}>
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent/5 h-full">
        {image ? <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-sm transition-all duration-500" /> : <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 bg-portfolio-accent/30 rounded-lg flex items-center justify-center">
              <span className="text-portfolio-accent text-xl font-bold">
                {title.charAt(0)}
              </span>
            </div>
          </div>}
      </div>

      {/* Hover Overlay with Text */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center relative">
        <p className="text-white text-lg font-medium text-center px-4">
          {description}
        </p>
        {detail && (
          <div className="absolute bottom-4 left-4">
            <span className="text-white/80 text-sm">
              {detail}
            </span>
          </div>
        )}
      </div>
    </div>;
};
export default ProjectCard;