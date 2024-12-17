import React from "react"
import { MDBlock } from "../components/markdown/MDBlock"
import { Page } from "../../docs/_types/PageShapes"



export const ContentMapper: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <>
      {page.content.map((item, i: number) => (
        <React.Fragment key={i}>
          {typeof item === "string" ? (
            <MDBlock>
              {item}
            </MDBlock>
          ) : item}
        </React.Fragment>
      ))}
    </>
  )
}