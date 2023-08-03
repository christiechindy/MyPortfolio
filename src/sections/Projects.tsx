import ProjectItem from "@/components/ProjectItem"
import { EachProjectData } from "@/datas"

const Projects = () => {
    return (
        <section className="projects">
            <div className="title">My projects.</div>
            <div className="project_container">
                {EachProjectData.map((d) => (
                    <ProjectItem id={d.id} title={d.title} texts={d.outline} img={d.laptop}/>
                ))}
            </div>
        </section>
    )
}

export default Projects