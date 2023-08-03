import Link from "next/link"

interface IProps {
    id: number,
    title: string,
    texts: string,
    img: string
}

const ProjectItem = ({id, title, texts, img}: IProps) => {
    return (
        <div className="project_item">
            <img src={img} alt="Chat App"/>
            <Link style={{color: "#000", textDecoration: "none"}} href={`/project/${id}`} className="texts">
                <div className="title">{title}</div>
                <p>{texts}</p>
            </Link>
        </div>
    )
}

export default ProjectItem