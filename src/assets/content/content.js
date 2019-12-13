const content = {
    NavHeaderLinks: [
        { name: 'Home', link: '/home' },
        {
            name: 'Portfolio', link: '/portfolio', branch: [
                { name: 'Projects', link: '/portfolio/projects' },
                { name: 'Timeline', link: '/portfolio/timeline' },
                { name: 'Experience', link: '/portfolio/experience' },
            ]
        },
        { name: 'Print', link: '/print' }
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
                title: "InnoScience Challenge", 
                subtitle: "ChangeMakers Programme", 
                date: "13/07/19 - 29/08/19", 
                tags: ["SST", "Design"], 
                image: "https://unsplash.it/200"
            },
            // type: paragraph, quote, link, button, iframe
            body: [ 
                { type: "paragraph", value: "The InnoScience Challenge 2019 is an intra-school competiton held by my secondary school, SST, together with 3M Singapore. In teams of three to four, teams had to come up with a product to solve a real world problem, regarding the year's theme: Safety and Transport." }, 
                { type: "image", value: "https://unsplash.it/200", meta: "3M InnoScience Logo" }, 
            ]
        }
    ]

};

export default content;