// context
import UserWrapper from '../context/states/user.state';
import ProjectsWrapper from '../context/states/projects.state';
import TasksWrapper from '../context/states/tasks.state';
//styles
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const projectData = {
    projectsList : '',
    currentProject : '',
  }
  return (
    <UserWrapper>
      <ProjectsWrapper >
        <TasksWrapper>
            <Component {...pageProps} />
        </TasksWrapper>
      </ProjectsWrapper>
    </UserWrapper>
  )
}

export default MyApp
