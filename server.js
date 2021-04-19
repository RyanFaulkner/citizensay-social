import { Groups, Tiles } from "meteor/citizensay:core";

Meteor.startup(() => {

    const group = "communicate";

    if(!Groups.findOne(group))
        Groups.insert({_id: group});

    [
        {
            _id: "facebook",
            group,
            icon: ["fab", "facebook-f"],
            color: "rgb(59,89,152)"
        },
        {
            _id: "twitter",
            group,
            icon: ["fab", "twitter"],
            color: "rgb(29,161,242)",
            size: "wide"
        },
        {
            _id: "linkedin",
            group,
            icon: ["fab", "linkedin-in"],
            color: "rgb(72, 117, 180)",
            size: "wide"
        },
        {
            _id: "instagram",
            group,
            icon: ["fab", "instagram"],
            color: "rgb(221,42,123)"
        }
    ].forEach(t =>
        !Tiles.findOne(t._id) &&
            Tiles.insert(t)
    );

});