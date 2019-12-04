const content = {
    NavHeaderLinks: [
        { name: 'Home', link: 'home' },
        {
            name: 'Portfolio', link: 'portfolio', branch: [
                { name: 'Timeline', link: 'timeline' },
                { name: 'Projects', link: 'projects' }
            ]
        },
        { name: 'Experience', link: 'experience' },
        { name: 'Print', link: 'print' }
    ],

    NavFooterLinks: [
        { name: 'Instagram', link: 'https://www.instagram.com/therealboi_io/', icon: 'fab fa-instagram' },
        { name: 'Twitter', link: 'https://twitter.com/therealboi_io', icon: 'fab fa-twitter' },
        { name: 'Email', link: 'https://github.com/theboi', icon: 'fab fa-github' },
        { name: 'Email', link: 'mailto:ryan.theodore.2006@gmail.com', icon: 'far fa-envelope' }
    ]
};

export default content;