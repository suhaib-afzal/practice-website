import { loremIpsum } from "lorem-ipsum"
import imageOffice from "../../assets/shutterstock_696636415.jpg"
import { AboutDocumentContainer } from "./page-styling-components/about-document-container/AboutDocumentContainer"
import { TextDoc } from "../../core-components/text-doc-components/text-doc/TextDoc"
import { TextDocParagraph } from "../../core-components/text-doc-components/text-doc-paragraph/TextDocParagraph"
import { TextDocImage } from "../../core-components/text-doc-components/text-doc-image/TextDocImage"
import { useContext } from "react"
import { IsMobileContext } from "../../app/App"
import { TextDocTitle } from "../../core-components/text-doc-components/text-doc-title/TextDocTitle"

export const AboutUsPage : React.FC = () => {
  const isMobile = useContext(IsMobileContext);
  const desktopOrMobile = isMobile? "mobile": "desktop";
  const imageProportions = isMobile? "Wide" : "Standard";
  return <AboutDocumentContainer desktopOrMobile={desktopOrMobile}>
    <TextDoc>
      <TextDocTitle title="About Us"/>
      <TextDocParagraph>
        {loremIpsum({count: 3, units: "paragraphs"})}
      </TextDocParagraph>
      <TextDocParagraph>
        {loremIpsum({count: 3, units: "paragraphs"})}
      </TextDocParagraph>
      <TextDocImage image={imageOffice} textDocImageStyle={imageProportions}/>
      <TextDocParagraph>
        {loremIpsum({count: 3, units: "paragraphs"})}
      </TextDocParagraph>
      <TextDocParagraph>
        {loremIpsum({count: 3, units: "paragraphs"})}
      </TextDocParagraph>
      <TextDocParagraph>
        {loremIpsum({count: 3, units: "paragraphs"})}
      </TextDocParagraph>
    </TextDoc>
  </AboutDocumentContainer>
}