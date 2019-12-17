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
        { name: 'Contact', link: '/contact' }
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
        // {
        //     header: {
        //         display: "Thunkable November Hackathon 2019",
        //         title: "Total Defence Logo Design Competiton 2019",
        //         subtitle: "ChangeMakers Programme",
        //         date: "29/08/19",
        //         tags: ["SST", "Design"],
        //         image: "https://unsplash.it/200",
        //         link: "https://npgcc.org/?p=628"
        //     },
        //     // type: paragraph, image, link, button, quote, iframe
        //     body: [
        //         { type: "paragraph", value: "The InnoScience Challenge 2019 is an intra-school competiton held by my secondary school, SST, together with 3M Singapore. In teams of three to four, teams had to come up with a product to solve a real world problem, regarding the year's theme: Safety and Transport." },
        //         { type: "image", value: "https://unsplash.it/200", meta: "3M InnoScience Logo" },
        //         { type: "link", value: "https://npgcc.org/?p=628", meta: "NPGCC 2016 Website" },
        //     ]
        // },
        {
            header: {
                title: 'Innovation, Design and Engineering (IDE) Series 2019',
                display: 'IDE Series 2019',
                subtitle: 'Robotics CCA',
                date: '21/03/19',
                tags: ['EV3'],
                link: 'http://ideseries.org/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Asia Pacific Youth Robotics Competition (APYRC) 2019',
                display: 'APYRC 2019',
                subtitle: 'Robotics CCA',
                date: '26/07/19',
                tags: ['EV3'],
                link: 'https://www.apyrc.com/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'National Primary Game Creation Competition (NPGCC) 2016',
                display: 'NPGCC 2016',
                subtitle: 'Robotics CCA',
                date: '22/06/16',
                tags: ['Scratch'],
                link: 'https://npgcc.org/?p=628',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'RoboRAVE Kaga 2019',
                display: 'RoboRAVE Kaga 2019',
                subtitle: 'Robotics CCA',
                date: '10/11/19',
                tags: ['C++', 'Arduino'],
                link: 'http://www.roborave-kaga.com/contents-in-english/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'National Robotics Challenge (NRC) 2017',
                display: 'NRC 2017',
                subtitle: 'Robotics CCA',
                date: '08/09/19',
                tags: ['EV3'],
                link: 'http://www.nrc.sg/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Original Personal Portfolio Website',
                display: 'Original Personal Website',
                subtitle: 'Personal Projects',
                date: '12/07/19',
                tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Updated Personal Portfolio Website (using React.js)',
                display: 'Updated Personal Website',
                subtitle: 'Personal Projects',
                date: '17/12/19',
                tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Web'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Original Personal Logo Design',
                display: 'Personal Logo Design',
                subtitle: 'Personal Projects',
                date: '03/02/19',
                tags: ['Design'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Thunkable November Gaming Hackathon 2019',
                display: 'Thunkable November Hackathon 2019',
                subtitle: 'Personal Competitions',
                date: '30/11/19',
                tags: ['Thunkable'],
                link: 'https://medium.com/@JimmyCH/october-gaming-hackathon-cdd35ac39fb0',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Trend Micro What\'s Your Story Poster Design Competition 2019',
                display: 'What\'s Your Story 2019',
                subtitle: 'Personal Competitions',
                date: '29/09/19',
                tags: ['Design'],
                link: 'https://whatsyourstory.trendmicro.com.sg/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Total Defence Logo Design Competiton 2019',
                display: 'Total Defence Logo Design Competiton 2019',
                subtitle: 'Personal Competitions',
                date: '28/09/19',
                tags: ['Design'],
                link: 'https://www.mindef.gov.sg/oms/imindef/mindef_websites/topics/totaldefence/total-defence-logo-competition.html',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Art, Design, Media, Technology (ADMT) Icon Design',
                display: 'ADMT Icon Design',
                subtitle: 'ChangeMakers Programme',
                date: '16/02/19',
                tags: ['Design'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Art, Design, Media, Technology (ADMT) Poster Design',
                display: 'ADMT Poster Design',
                subtitle: 'ChangeMakers Programme',
                date: '03/04/19',
                tags: ['Design'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Art, Design, Media, Technology (ADMT) Product Design',
                display: 'ADMT Product Design',
                subtitle: 'ChangeMakers Programme',
                date: '17/07/19',
                tags: ['Design'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Art, Design, Media, Technology (ADMT) Badge Design',
                display: 'ADMT Badge Design',
                subtitle: 'ChangeMakers Programme',
                date: '06/08/19',
                tags: ['Design'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Infocomm Technologies (ICT) SSTuino (Arduino)',
                display: 'ICT SSTuino (Arduino)',
                subtitle: 'ChangeMakers Programme',
                date: '30/09/19',
                tags: ['C++', 'Arduino'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'InnoScience Challenge 2019 (Competiton)',
                display: 'InnoScience Challenge 2019',
                subtitle: 'ChangeMakers Programme',
                date: '14/10/19',
                tags: ['C++', 'Arduino', 'Design'],
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Singapore and Asian Schools Math Olympiad (SASMO) 2015',
                display: 'SASMO 2015',
                subtitle: 'Academics',
                date: '06/04/15',
                tags: ['Mathematics'],
                link: 'https://sasmo.sg/sasmo-2015-results/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Singapore and Asian Schools Math Olympiad (SASMO) 2016',
                display: 'SASMO 2016',
                subtitle: 'Academics',
                date: '06/04/16',
                tags: ['Mathematics'],
                link: 'https://sasmo.sg/sasmo-2016-results/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Singapore and Asian Schools Math Olympiad (SASMO) 2017',
                display: 'SASMO 2017',
                subtitle: 'Academics',
                date: '06/04/17',
                tags: ['Mathematics'],
                link: 'https://sasmo.sg/sasmo-2017-results/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Singapore and Asian Schools Math Olympiad (SASMO) 2018',
                display: 'SASMO 2018',
                subtitle: 'Academics',
                date: '06/04/18',
                tags: ['Mathematics'],
                link: 'https://sasmo.sg/sasmo-2018-results/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
        {
            header: {
                title: 'Singapore and Asian Schools Math Olympiad (SASMO) 2019',
                display: 'SASMO 2019',
                subtitle: 'Academics',
                date: '06/04/19',
                tags: ['Mathematics'],
                link: 'https://sasmo.sg/sasmo-2019-results3/',
            },
            // type: paragraph, image, link, button, quote, iframe
            body: []
        },
    ],


    Experience: [

    ]

};

export default content;