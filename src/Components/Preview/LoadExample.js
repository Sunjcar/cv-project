import uniqid from "uniqid";

const LoadExample = {
    personalInfo: {
        name: "Johnny Bravo",
        title: "Software Developer",
        address: "123 Hill ST",
        phoneNumber: "123456789",
        email: "johnnybravo@gmail.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.",
    },
    experience: [
        {
            id: uniqid(),
            position: "Senior Software Developer",
            company: "Google",
            from: "2021",
            to: "2022",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
        },
        {
            id: uniqid(),
            position: "Data Scientist",
            company: "Facebook",
            from: "2018",
            to: "2020",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
        },
        {
            id: uniqid(),
            position: "Junior Web Developer",
            company: "Tesla",
            from: "2017",
            to: "2018",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
        },
    ],
    education: [
        {
            id: uniqid(),
            course: 'BS Computer Science',
            school: 'New York State University',
            from: '2013',
            to: '2017',
        },
        {
            id: uniqid(),
            course: 'Fullstack Web Development',
            school: 'The Odin Project',
            from: '2013',
            to: '2017',
        }
    ],
}

export default LoadExample