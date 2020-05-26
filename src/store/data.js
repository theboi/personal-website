export const data = {
    projects: [
        {
            header: {
                display: `Personal Website`,
                title: `My Personal Portfolio Website`,
                subtitle: `this. Yes, the website you are viewing right now. Built with <3 with JavaScript and React.`,
                date: `19/06/19`,
                tags: [],
                image: `1-1`,
                genre: [`code`, `design`]
            },
            // type: headline, subhead, paragraph, image, link, quote
            body: [
                {
                    type: `group`, value: [
                        { type: `link`, value: `https://github.com/theboi/personal-website`, meta: `personal-website GitHub repository` },
                        { type: `link`, value: `https://ryanthe.com`, meta: `My website` },
                    ]
                },
                {
                    type: `group`, value: [
                        { type: `headline`, value: `Purpose` },
                        { type: `paragraph`, value: `Around June 2019, I embarked on a journey to create a website to showcase my accomplishments and projects. This website would be then shown during interviews and applications (or for my Instagram bio).` },
                        { type: `paragraph`, value: `Apart from the primary goal being to produce a product, it was also a new start for me in the field of software development. I got to learn many tools and frameworks such as React, Node Package Manager (NPM), Modern JavaScript, Git, and many more.` },
                        { type: `image`, value: `1-2`, meta: `My collection of portfolio content` },
                    ]
                },
                {
                    type: `group`, value: [
                        { type: `headline`, value: `Journey` },
                        { type: `subhead`, value: `The beginning` },
                        { type: `paragraph`, value: `Originally, built with vanilla HTML, CSS and JavaScript, the website was troublesome to manage due to the immense amount of pages there were. ` },
                        { type: `paragraph`, value: `As my know-how in web development expanded, I began to start exploring other frameworks beginning with jQuery. jQuery was an impressive library, allowing me to shorten code significantly.` },
                        { type: `image`, value: `1-1`, meta: `An earlier version of my website` },
                        { type: `paragraph`, value: `That is until I started using React.` },
                        { type: `subhead`, value: `Dynamic pages` },
                        { type: `paragraph`, value: `When I started using React, it completely changed how I made web pages. It was dynamic, clean, and fast (oh, and don't forget cool). I never had to write lines of HTML repetitively for each page over and over again. Up till now, the webpage as of April 2020 still uses React.` },
                        { type: `paragraph`, value: `The pages created are stored in files of JavaScript objects, thus reducing repetition in the code. This modular code design, components, allows for parts of the code to be reused in similar pages as well.` },
                        { type: `image`, value: `1-3`, meta: `My website as of April 2020` },
                        // { type: `iframe`, value: `https://ryanthe.com/`, meta: `Current website` },
                    ]
                },
                {
                    type: `group`, value: [
                        { type: `headline`, value: `Reflection` },
                        { type: `paragraph`, value: `Although the website finished, for the most part, I believe this project will never actually end. Every time it seems finished, there is always something I would go back and improve.` },
                        { type: `subhead`, value: `Learning Points` },
                        { type: `list`, value: ['Using React and its ecosystem', 'Creating websites using vanilla HTML, CSS and JavaScript (the first version of the site)', 'Using Git and GitHub to keep track of the project', 'Guiding teammates on the basics of React Native', 'Designing a website'], meta: `ul` },
                    ]
                },
            ]
        },
        {
            header: {
                display: `Lost App`,
                title: `Project SF: Lost App`,
                subtitle: `Have family members with dementia who get lost easily? Lost can aid you in finding them easily!`,
                date: `12/01/20`,
                tags: [],
                image: `https://unsplash.it/id/237/300/200.jpg`,
                genre: [`code`, `design`]
            },
            // type: paragraph, image, link, button, quote, iframe
            body: [
                {
                    type: `group`, value: [
                        { type: `headline`, value: `Status` },
                        { type: `paragraph`, value: `This project is currently in progress :D` },
                    ]
                },
                // {
                //     type: `group`, value: [
                //         { type: `headline`, value: `Purpose` },
                //         { type: `paragraph`, value: `Lost allows users ` },
                //     ]
                // },
                // {
                //     type: `group`, value: [
                //         { type: `headline`, value: `Reflection` },
                //         { type: `paragraph`, value: `This enlightening experience of building an application for a outside-of-school client in a team environment has truly taught me a lot.` },
                //         { type: `subhead`, value: `Learning Points` },
                //         { type: `list`, value: ['Leading a company, Exponential Inc, in delivering the app', 'Collaborative work using Git & GitHub', 'Guiding teammates on the basics of React Native'], meta: `ul` },
                //     ]
                // },
                // { type: `image`, value: `https://unsplash.it/id/237/200/200.jpg`, meta: `3M InnoScience Logo` },
                { type: `link`, value: `https://github.com/exponential-inc/lost-app`, meta: `lost-app GitHub repository` },
            ]
        },
        {
            header: {
                display: `RoboRAVE Kaga 2019`,
                title: `RoboRAVE Kaga 2019`,
                subtitle: `An international robotics competition held for all ages & experience levels`,
                date: `83/123/42`,
                tags: [],
                image: `1-1`,
                genre: [`code`, `robot`]
            },
            // type: paragraph, image, link, button, quote, iframe
            body: [
                {
                    type: `group`, value: [
                        { type: `headline`, value: `About` },
                        { type: `paragraph`, value: `RoboRAVE Kaga 2019 was a robotics competition held in Kaga, Japan. This competiton is acta` },
                        { type: `image`, value: `https://unsplash.it/id/237/200/200.jpg`, meta: `RoboRAVE Kaga Logo` },
                        { type: `link`, value: `https://www.roborave-kaga.com/`, meta: `RoboRAVE Kaga official website` },
                        { type: `link`, value: `http://www.roborave.org/`, meta: `RoboRAVE International official website` },
                        {
                            type: `paragraph`, value: `During the end-of-year school break, a group of students from my 
                school's, the School of Science and Technology, Singapore, Robotics Club CCA went on a learning 
                journey to Kaga, Japan to participate in an international robotics competition.` },
                    ]
                },
                {
                    type: `group`, value: [
                        { type: `headline`, value: `Journey` },
                        { type: `subhead`, value: `The beginning` },
                        { type: `paragraph`, value: `Originally, built with vanilla HTML, CSS and JavaScript, the website was troublesome to manage due to the immense amount of pages there were. As my know-how in web development expanded, I began to start exploring other frameworks beginning with jQuery. jQuery was an impressive library, allowing me to shorten code significantly. ` },
                        { type: `image`, value: `1-1`, meta: `An earlier version of my website` },
                        { type: `paragraph`, value: `That is until I started using React.` },
                        { type: `subhead`, value: `Dynamic pages` },
                        { type: `paragraph`, value: `When I started using React, it completely changed how I saw making web pages. It was dynamic, clean, and fast (oh, and don't forget cool). I never had to write lines of HTML repetitively for each page over and over again. Up till now, the webpage, as of April 2020, still uses React.` },
                        { type: `paragraph`, value: `The pages created are stored in files of JavaScript objects, thus reducing repetition in the code. This modular code design, components, allows for parts of the code to be reused in similar pages as well.` },
                        { type: `image`, value: `1-3`, meta: `My website as of April 2020` },
                        { type: `iframe`, value: `https://ryanthe.com/`, meta: `Current website` },
                    ]
                },
                {
                    type: `group`, value: [
                        { type: `headline`, value: `Reflection` },
                        { type: `paragraph`, value: `Although the website finished, for the most part, I believe this project will never actually end. Every time it seems finished, there is always something I would go back and improve.` },
                        { type: `subhead`, value: `Learning Points` },
                        { type: `list`, value: ['Using React and its ecosystem', 'Creating websites using vanilla HTML, CSS and JavaScript (first version of the website)', 'Using Git and GitHub to keep track of the project', 'Guiding teammates on the basics of React Native', 'Designing a website'], meta: `ul` },
                    ]
                },
            ]
        },


    ],


    experience: [
        {
            title: 'Coding', content: [
                'HTML5 / CSS3',
                'JavaScript / TypeScript',
                'Dart',
                'React',
                'React Native / Flutter',
                'Sketch',
                'Version Control (GIT)'
            ]
        },
        {
            title: 'Design', content: [
                'Sketch'
            ]
        },
        {
            title: 'Media', content: [
                'Final Cut Pro X', 'Motion', 'iMovie'
            ]
        }
    ]

};