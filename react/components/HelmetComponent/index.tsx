import React from 'react'
import { Helmet } from 'vtex.render-runtime'
const HelmetComponent = () => (
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <meta name="facebook-domain-verification" content="msqgxq03yp5uu8u9w1lbowqmpu3nfc" />
        <script>
            {`
                      (function (s,u,i,t,e) {
                          var share = s.createElement('script');
                          share.async = true;
                          share.id = 'suiteshare';
                          share.src = 'https://static.suiteshare.com/widgets.js';
                          share.setAttribute('init',i);
                          s.head.appendChild(share);
                        })( document, 'script', '0cc846bbe4e1e8e29d6b9476297d8cbfd7e5fb6e');
                        ;`}
        </script>
        <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/580ff808-3d66-4ae6-bb0f-7cd8bbdc0884-loader.js" ></script>
    </Helmet>
)


// interface HelmetComponentProps {
//     sessionId: string | null
// }
export default HelmetComponent