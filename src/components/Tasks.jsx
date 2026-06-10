export default function Tasks(props) {
    return
    <h1 >{props.tasks.map((task) => task.title
    )}</h1>;
}