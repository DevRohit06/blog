

export const Authors = [
    {
        name: "Rohit Kushwaha",
        nickname: "rohitk06",
        email: "technicalrohit06@gmail.com",
        skills: ["Web Developer", "Freelancer"],
        profile: "https://i.ibb.co/3s6wzHv/1675459090047-1.jpg"
    },
    {
        name: "John Doe",
        nickname: "lol",
        email: "technicalrohit06@gmail.com",
        profile: "https://i.seadn.io/gae/X9cGg3uZBYkgT-lXtheNveeOX1qUQ2K3nMPMMbBfcUnPMv5Legm5_pAPxOoqSujh7heg6bN5rZYL8cpg3PkVU2Yor56ZGJ4hTrWU0-0?auto=format&dpr=1&w=1000"
    }
]

export const getAuthors = (name: string) => {
    return Authors.filter(author => author.nickname === name)[0]
}
export const getSkills = (name: string) => {
    return Authors.filter(author => author.nickname === name)[0].skills
}

