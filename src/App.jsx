import { useStyles } from './styles'
import { Activities } from './pages/Activities'
import Theme from './layout/config/theme'



function App() {
  const classes = useStyles()



  return (
    <div>
      <Theme>
        <Activities />
      </Theme>
    </div>
  )
}

export default App
