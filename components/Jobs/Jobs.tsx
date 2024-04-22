// 

'use client'
 
import Script from 'next/script'

 
export default function Jobs() {
    return (
      <>
        <div id="recruitee-careers"></div>
        <Script
          src="https://jobs-widget.recruiteecdn.com/widget.js"
          onLoad={() => {
            /* eslint-disable */
            var widget = new RTWidget({ 
                "companies": [
                    93654
                ],
                "detailsMode": "popup",
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
      </>
    )
  }


