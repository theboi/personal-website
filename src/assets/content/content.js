const content = {
    NavLinks: [
        { name: 'Home', link: 'home' },
        {
            name: 'Portfolio', link: 'portfolio', branch: [
                { name: 'Timeline', link: 'timeline' },
                { name: 'Projects', link: 'projects' }
            ]
        },
        { name: 'Experience', link: 'experience' },
        { name: 'Print', link: 'print' }
    ]
};

export default content;