import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title-layout")} style={{ marginBottom: "1.5rem" }}>
      <h2 class="page-title">
        <a href={baseDir} style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "0.75rem", 
          textDecoration: "none" 
        }}>
          {/* Safe inline avatar injection */}
          <img 
            src="https://callen-architect.github.io/nexus/static/callenavatar.jpg" 
            alt="Avatar" 
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "1.5px solid var(--lightgray)",
              objectFit: "cover",
              flexShrink: 0
            }}
          />
          <span>{title}</span>
        </a>
      </h2>
      {/* Subtitle stacked cleanly under the layout alignment */}
      <span style={{ 
        display: "block", 
        fontSize: "0.75rem", 
        fontWeight: "normal", 
        color: "var(--gray)",
        marginTop: "0.35rem",
        paddingLeft: "calc(45px + 0.75rem)"
      }}>
        Atlassian Systems Architect
      </span>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title a:hover {
  opacity: 0.85;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
