/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import { faGithub, faStackOverflow, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()

  const iconMappings: Record<string, IconDefinition> = {
    'Github': faGithub,
    'Stack Overflow': faStackOverflow
  }

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => {
            let linkContent: jsx.JSX.Element | string = link.name;
            const icon = iconMappings[link.name];
            if (icon) {
              linkContent = <FontAwesomeIcon size="lg" icon={icon}/>
            }
            return <TLink target="_blank" key={link.url} href={link.url}>
              {linkContent}
            </TLink>
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks