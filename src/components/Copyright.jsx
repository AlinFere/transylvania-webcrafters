import React from "react"
import { SectionWrapper } from "../hoc"
import { companylogo, facebook, instagram, twitter, linkedin } from "../assets"

const Copyright = () => {
  return (
    <footer>
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row items-center">
          <img
            src={companylogo}
            alt="companylogo"
            className="h-52 w-62 mb-8 items-center sm:mb-0 sm:mr-6"
          />
          <span className="text-white font-medium ">
            Follow for designs so stunning, even vampires pause to appreciate.
            🦇
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-6 w-auto mx-2"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded"
              >
                <img src={twitter} alt="Twitter" className="h-6 w-auto mx-2" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded"
              >
                <img
                  src={linkedin}
                  alt="Linkedin"
                  className="h-6 w-auto mx-2"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-6 w-auto mx-2"
                />
              </a>
            </div>
          </span>
        </div>

        <p className="bg-[#915EFF] text-white text-center text-[10px] mt-4">
          © {new Date().getFullYear()} Designed with love and garlic to keep
          unauthorized vampires away. © Transylvania WebCrafters
        </p>
      </div>
    </footer>
  )
}

export default SectionWrapper(Copyright, "rights")
