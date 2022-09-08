import uniqid from "uniqid"
const ResumeTemplate = {
    personalInfo: {
        name: "",
        title: "",
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
    },
    experience: [
        {
            id: uniqid(),
            position: "",
            company: "",
            from: "",
            to: "",
        },
    ],
}

export default ResumeTemplate;