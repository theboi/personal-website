export const content = {
    NavHeaderLinks: [
        { name: 'Home', link: '/home' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Experience', link: '/experience' },
        { name: 'Contact', link: '/contact' },
    ],

    Projects: [
        {
            header: {
                display: `Personal Website`,
                title: `My Personal Portfolio Website`,
                subtitle: `this. Yes, the website you are viewing right now. Made with <3 with React, JavaScript`,
                date: `83/123/42`,
                tags: [],
                image: `https://unsplash.it/id/237/200/200.jpg`,
                genre: [`code`, `design`]
            },
            // type: paragraph, image, link, quote
            body: [
                { type: `paragraph`, value: `My personal website` },
                { type: `image`, value: `https://unsplash.it/id/237/200/200.jpg`, meta: `3M InnoScience Logo` },
                { type: `link`, value: `https://ryanthe.com`, meta: `My Website` },
            ]
        },
        {
            header: {
                display: `Lost App`,
                title: `Project SF: Lost App`,
                subtitle: `An app to for caregivers to track their family members with dementia.`,
                date: `83/123/42`,
                tags: [],
                image: `https://unsplash.it/id/237/200/200.jpg`,
                genre: [`code`, `design`]
            },
            // type: paragraph, image, link, button, quote, iframe
            body: [
                { type: `paragraph`, value: `This website is the website you are viewing right now.` },
                { type: `image`, value: `https://unsplash.it/id/237/200/200.jpg`, meta: `3M InnoScience Logo` },
                { type: `link`, value: `https://ryanthe.com`, meta: `My Website` },
            ]
        },
        {
            header: {
                display: `RoboRAVE Kaga 2019`,
                title: `RoboRAVE Kaga 2019`,
                subtitle: `An international robotics competition held for all ages & experience levels`,
                date: `83/123/42`,
                tags: [],
                image: `https://unsplash.it/id/237/200/200.jpg`,
                genre: [`code`, `robot`]
            },
            // type: paragraph, image, link, button, quote, iframe
            body: [
                { type: `paragraph`, value: `RoboRAVE Kaga 2019 is a robotics competition held in Kaga, Japan.` },
                { type: `image`, value: `https://unsplash.it/id/237/200/200.jpg`, meta: `RoboRAVE Kaga Logo` },
                { type: `link`, value: `https://www.roborave-kaga.com/`, meta: `RoboRAVE Kaga official website` },
                { type: `link`, value: `http://www.roborave.org/`, meta: `RoboRAVE International official website` },
                {
                    type: `paragraph`, value: `During the end-of-year school break, a group of students from my 
                school's, the School of Science and Technology, Singapore, Robotics Club CCA went on a learning 
                journey to Kaga, Japan to participate in an international robotics competition.` },
            ]
        },
        

    ],


    Experience: [
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