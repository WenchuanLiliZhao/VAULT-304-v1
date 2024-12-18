import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Page } from "../../docs/_types/PageShapes";

interface PageLinkProps {
  page: Page;
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
  const isExternalLink = page.info.slug.startsWith("https");

  const pageLink = isExternalLink ? `${page.info.slug}` : `/${page.info.slug}`;
  const linkTarget = isExternalLink ? "_blank" : "";

  return (
    <Link
      to={pageLink}
      className={className}
      id={id}
      style={style}
      target={linkTarget}
    >
      {children}
    </Link>
  );
};

export const PageNavLink: React.FC<PageLinkProps> = ({
  page,
  children,
  className,
  id,
  style,
}) => {
  const isExternalLink = page.info.slug.startsWith("http");

  const pageLink = isExternalLink ? `${page.info.slug}` : `/${page.info.slug}`;
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
};
