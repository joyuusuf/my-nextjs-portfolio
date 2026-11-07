"use client";
import React from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const isLink = (url) => typeof url === "string" && url.trim().startsWith("http");

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, tags = [], stack = [], index = 0 }) => {
  const hasPreview = isLink(previewUrl);
  const hasGit = isLink(gitUrl);
  const labels = tags.filter((t) => t !== "Project");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-400/30 hover:shadow-[0_24px_60px_-20px_rgba(168,85,247,0.45)]">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgUrl}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
        {labels.length > 0 && (
          <div className="absolute right-4 top-4 flex gap-1.5">
            {labels.map((t) => (
              <span key={t} className="rounded-full bg-gradient-to-r from-purple-500/80 to-pink-500/80 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[#ADB7BE]">{description}</p>

        {stack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <li key={s} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-white/70">
                {s}
              </li>
            ))}
          </ul>
        )}

        {(hasPreview || hasGit) && (
          <div className="mt-auto flex gap-2.5 pt-6">
            {hasPreview && (
              <a
                href={previewUrl.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#121212] transition hover:bg-white/90"
              >
                Live demo <ArrowIcon />
              </a>
            )}
            {hasGit && (
              <a
                href={gitUrl.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                <GithubIcon /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;