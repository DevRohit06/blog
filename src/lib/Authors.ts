

export const Authors = [
    {
        id: 1,
        name: "Rohit Kushwaha",
        nickname: "rohitk06",
        email: "technicalrohit06@gmail.com",
        role: "Founder & Developer",
        skills: ["Web Developer", "Freelancer"],
        profile: "https://i.ibb.co/3s6wzHv/1675459090047-1.jpg",
        links: {
            github: "https://github.com/DevRohit06",
            instagram: "https://www.instagram.com/rohitk.06"

        }
    },
    {
        id: 2,
        name: "John Doe",
        nickname: "lol",
        role: "Writer",
        email: "technicalrohit06@gmail.com",
        profile: "https://i.seadn.io/gae/X9cGg3uZBYkgT-lXtheNveeOX1qUQ2K3nMPMMbBfcUnPMv5Legm5_pAPxOoqSujh7heg6bN5rZYL8cpg3PkVU2Yor56ZGJ4hTrWU0-0?auto=format&dpr=1&w=1000",
        links: {
            github: "https://github.com/DevRohit06",
            instagram: "https://www.instagram.com/rohitk.06"

        }
    }
]


export const getAuthors = () => {
    return Authors
}
export const getAuthorsByName = (name: string) => {
    return Authors.filter(author => author.nickname === name)[0]
}
export const getAuthorsById = (id: number) => {
    return Authors.filter(author => author.id === id)[0]
}
export const getAuthorsByNickname = (nickname: string) => {
    return Authors.filter(author => author.nickname === nickname)[0]
}
export const getSkills = (name: string) => {
    return Authors.filter(author => author.nickname === name)[0].skills
}

