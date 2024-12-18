import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Page } from "../../docs/_types/PageShapes";

interface PageLinkProps {
  page: Page | string;
  children?: string | React.ReactNode;
  className?: string;
  id?: string;
  style?: object;
}

export const PageLink: React.FC<PageLinkProps> = ({
  page,
  children,
  className,
  id,
  style,
}) => {
  // Determine if the link is external
  const isExternalLink =
    typeof page === "string"
      ? page.startsWith("https")
      : page.info.slug.startsWith("https");

  // Get the link URL or path
  const pageLink = typeof page === "string" ? page : page.info.slug;

  // Define target and rel attributes for external links
  const target = isExternalLink ? "_blank" : undefined;
  const rel = isExternalLink ? "noopener noreferrer" : undefined;

  if (isExternalLink) {
    // Use <a> for external links
    return (
      <a
        href={pageLink}
        className={className}
        id={id}
        style={style}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  } else {
    // Use <Link> for internal navigation
    return (
      <Link to={pageLink} className={className} id={id} style={style}>
        {children}
      </Link>
    );
  }
};

export const PageNavLink: React.FC<PageLinkProps> = ({
  page,
  children,
  className,
  id,
  style,
}) => {
  if (typeof page !== "string") {
    const isExternalLink = page.info.slug.startsWith("http");

    const pageLink = isExternalLink
      ? `${page.info.slug}`
      : `/${page.info.slug}`;
    const linkTarget = isExternalLink ? "_black" : "";

    return (
      <NavLink
        to={pageLink}
        className={className}
        id={id}
        style={style}
        target={linkTarget}
      >
        {children}
      </NavLink>
    );
  }
};
