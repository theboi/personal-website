export const content = {
    NavHeaderLinks: [
        { name: 'Home', link: '/home' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Experience', link: '/experience' },
        { name: 'Contact', link: '/contact' },
    ],


    NavFooterLinks: [
        { name: 'Instagram', link: 'https://www.instagram.com/therealboi_io/', icon: 'fab fa-instagram' },
        { name: 'Twitter', link: 'https://twitter.com/therealboi_io', icon: 'fab fa-twitter' },
        { name: 'Email', link: 'https://github.com/theboi', icon: 'fab fa-github' },
        { name: 'Email', link: 'mailto:ryan.theodore.2006@gmail.com', icon: 'far fa-envelope' }
    ],

    Home: [

    ],


    Projects: [
        {
            header: {
                display: `Personal Website`,
                title: `My Personal Portfolio Website`,
                subtitle: `Personal Projects`,
                date: `83/123/42`,
                tags: [],
                image: `https://unsplash.it/1000/1000`,
                genre: [`code`, `design`]
            },
            // type: paragraph, image, link, button, quote, iframe
            body: [
                { type: `paragraph`, value: `My personal website` },
                { type: `image`, value: `https://unsplash.it/200`, meta: `3M InnoScience Logo` },
                { type: `link`, value: `https://ryanthe.com`, meta: `My Website` },
            ]
        },
        {
            header: {
                display: `Personal Website (Old)`,
                title: `My Personal Portfolio Website (Old)`,
                subtitle: `Personal Projects`,
                date: `83/123/42`,
                tags: [],
                image: `https://unsplash.it/1000/1000`,
                genre: [`code`, `design`]
            },
            // type: paragraph, image, link, button, quote, iframe
            body: [
                { type: `paragraph`, value: `This website is the website you are viewing right now.` },
                { type: `image`, value: `https://unsplash.it/200`, meta: `3M InnoScience Logo` },
                { type: `link`, value: `https://ryanthe.com`, meta: `My Website` },
            ]
        },
        {
            header: {
                display: `RoboRAVE Kaga 2020`,
                title: `RoboRAVE Kaga 2020`,
                subtitle: `Robotics CCA`,
                date: `83/123/42`,
                tags: [],
                image: `https://unsplash.it/1000/1000`,
                genre: [`code`, `robot`]
            },
            // type: paragraph, image, link, button, quote, iframe
            body: [
                { type: `paragraph`, value: `RoboRAVE Kaga 2019 is a robotics competition held in Kaga, Japan.` },
                { type: `image`, value: `https://unsplash.it/200`, meta: `RoboRAVE Kaga Logo` },
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

    ]

};