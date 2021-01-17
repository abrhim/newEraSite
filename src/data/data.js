import Grading from "../icons/grading.png"
import Excavator from "../icons/excavator.png"
import CustomConcrete from "../icons/customconcrete.png"
import Foundation from "../icons/foundation.png"
import SiteMaintenance from "../icons/sitemaintenance.png"
import Driveway from "../icons/driveway.png"

import Framing from "../img/framing.jpeg"
import Dozer from "../img/dozer.png"
import FoundationImg from "../img/foundation.jpeg"
import Trench from "../img/trench.png"
import UnfinishedDriveway from "../img/unfinishedDriveway.png"
import FinishedDriveway from "../img/finishedDriveway.png"


export default {
    "Header": {

        "title": "New Era",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."

    },
    "About": {
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Why": [
            "Lorem ipsum dolor",
            "Tempor incididunt",
            "Lorem ipsum dolor",
            "Incididunt ut labore"
        ],
        "Why2": [
            "Aliquip ex ea commodo",
            "Lorem ipsum dolor",
            "Exercitation ullamco",
            "Lorem ipsum dolor"
        ]
    },
    "Services": [{
            "name": "Site Maintenance",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
            imgAttributes: {
                src: SiteMaintenance,
                style: {
                    height:45,
                    width:45,
                    alt:"Site Maintenance"
                }
            }
        },
        {
            "name": "Grading",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
            imgAttributes: {
                src: Grading,
                style: {
                    height:40,
                    width:40,
                    alt:"Grading"

                }
            }
        },
        {
            "name": "Excavating",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
            imgAttributes: {
                src: Excavator,
                style: {
                    height:45,
                    width:45,
                    alt:"Excavator"

                }
            }
        },
        {
            "name": "Concrete Foundation",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
            imgAttributes: {
                src: Foundation,
                style: {
                    height:45,
                    width:45,
                    alt:"Concrete Foundation"

                }
            }
        },
        {
            "name": "Driveway Concrete",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
            imgAttributes: {
                src: Driveway,
                style: {
                    height:45,
                    width:45,
                    alt:"Driveway Concrete"

                }
            }
        },
        {
            "name": "Custom Concrete Work",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
            imgAttributes: {
                src: CustomConcrete,
                style: {
                    height:45,
                    width:45,
                    alt:"Custom Concrete"

                }
            }
        }


    ],
    Gallery: [
        {
            src:Framing,
            name:"Site Maintenance"
        },
        {
            src:Dozer,
            name:"Excavating"
        },
        {
            src:FinishedDriveway,
            name:"Graded Yard"
        },
        {
            src:UnfinishedDriveway,
            name:"Ungraded Yard"
        },
        {
            src:Trench,
            name:"Excavating"
        },
        {
            src:FoundationImg,
            name: "Foundation"
        }
                        
    ],
    "Testimonials": [{
            "img": "img/testimonials/01.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "John Doe"
        },
        {
            "img": "img/testimonials/02.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "Johnathan Doe"
        },
        {
            "img": "img/testimonials/03.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "John Doe"
        },
        {
            "img": "img/testimonials/04.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "Johnathan Doe"
        },
        {
            "img": "img/testimonials/05.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "John Doe"
        },
        {
            "img": "img/testimonials/06.jpg",
            "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
            "name": "Johnathan Doe"
        }
    ],
    "Team": [{
            "img": "img/team/01.jpg",
            "name": "John Doe",
            "job": "Director"
        },
        {
            "img": "img/team/02.jpg",
            "name": "Mike Doe",
            "job": "Senior Designer"
        }, {
            "img": "img/team/03.jpg",
            "name": "Jane Doe",
            "job": "Senior Designer"
        },
        {
            "img": "img/team/04.jpg",
            "name": "Karen Doe",
            "job": "Project Manager"
        }
    ],
    "Contact": {
        "address": "4321 California St, San Francisco, CA 12345 ",
        "phone": "+1 123 456 1234",
        "email": "info@company.com",
        "facebook": "fb.com",
        "twitter": "twitter.com",
        "youtube": "youtube.com"
    },
    "Features": [{
            "icon": "fa fa-comments-o",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-bullhorn",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-group",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-magic",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        }
    ]
}