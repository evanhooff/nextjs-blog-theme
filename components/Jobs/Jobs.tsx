

'use client'
 
import Script from 'next/script'
import { Maybe } from 'graphql/jsutils/Maybe';
 
type Props = {
  header: Maybe<string>;
};
export default function Jobs({header}: Props) {
  console.log(header)
    return (
      <div className="mx-auto mt-16 px-4 py-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        {header && <h2 className="mx-6 lg:mx-40 text-center mb-8 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
          {header}
        </h2>}
        <div id="recruitee-careers" className="mx-6 mt-2 grid gap-4 lg:mx-40"></div>
        <Script
          src="https://jobs-widget.recruiteecdn.com/widget.js"
          onLoad={() => {
            // @ts-ignore
            var widget = new RTWidget({ 
                "companies": [
                    93654
                ],
                "detailsMode": "popup", // popup, overlay or recruitee
                "language": "en",
                "departmentsFilter": [],
                "tagsFilter": [],
                "themeVars": {
                    "primary": "#07c",
                    "secondary": "#07c",
                    "text": "#1d2144",
                    "textDark": "#090e34",
                    "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;",
                    "baseFontSize": "16px"
                },
                "flags": {
                    "showLocation": true,
                    "showCountry": true,
                    "showCity": true,
                    "showState": true,
                    "showLocationName": true,
                    "showWorkModel": true,
                    "groupByLocation": false,
                    "groupByState": false,
                    "groupByDepartment": false,
                    "groupByCompany": false
                }
            })
          }}
        />
      </div>
    )
  }


