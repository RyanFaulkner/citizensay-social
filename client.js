import { i18n, library, addRoute } from "meteor/citizensay:core";
import { addField } from "meteor/citizensay:workflows";

import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Facebook  } from "./lib/Facebook";
import { Twitter   } from "./lib/Twitter";
import { Instagram } from "./lib/Instagram";
import { Linkedin  } from "./lib/Linkedin";
import { Social    } from "./lib/workflows/Social";

i18n.addResource("en", "groups", "communicate", "Communicate")
    .addResources("en", "tiles", {
        facebook: "Facebook",
        facebookDesc: "Facebook",
        twitter: "Twitter",
        twitterDesc: "Twitter",
        linkedin: "LinkedIn",
        linkedinDesc: "LinkedIn",
        instagram: "Instagram",
        instagramDesc: "Instagram"
    })
    .addResources("en", "editors", {
        socialMedia: "Link Social Media",
        facebook: "Facebook Page",
        facebookHelp: "Please enter a Facebook Page URL here.",
        linkedin: "LinkedIn Post",
        linkedinHelp: "Please enter a LinkedIn Post ID here."
    });

library.add(
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram
);

[
    {
        path: "/facebook",
        component: Facebook
    },
    {
        path: "/twitter",
        component: Twitter
    },
    {
        path: "/linkedin",
        component: Linkedin
    },
    {
        path: "/instagram",
        component: Instagram
    }
].forEach(r =>
    addRoute(r)
);

addField("basic", Social);