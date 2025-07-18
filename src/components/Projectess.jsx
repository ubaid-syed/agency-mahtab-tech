import { useState } from "react";
import ProjectDetails from "./ProjectDetails.jsx";

const Projectess = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-10 gap-8 sm:gap-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-heading">{title}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sand">
            {tags &&
              tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-sand/10 text-sand px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag.name}
                </span>
              ))}
          </div>
        </div>
        <button
          onClick={() => setShowDetails(true)}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-light shadow hover:bg-storm transition-colors duration-200 hover:-translate-y-1"
        >
          Read More
          <img src="/arrow-right.svg" alt="arrow right" className="w-5 h-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-2" />
      {showDetails && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default Projectess;
