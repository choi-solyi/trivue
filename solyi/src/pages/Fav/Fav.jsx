// import './App.css'
import Stack from '@mui/material/Stack' // Grid version 2
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { findFavList, insertFav, updateFav} from '../../plugins/firestore'

function Fav() {
    const [favList, setFavList] = useState([])
    const [name, setName] = useState()
    const [url, setUrl] = useState()


    useEffect(() => {
        const fetchData = async () => {
            const list = await findFavList()
            setFavList(list)
        }
        fetchData()
    }, [])
    const handlerSubmit = async () => {
        await insertFav(name.target.value, url.target.value)
        setName('')
        setUrl('')
    }
    const handlerDelete =async( name,url )=> {
        if(confirm('진짜 삭제할거야?')){
            await updateFav(name, url)
        }
    }

  return (
    <div className="mx-4 xl:mx-68 lg:mx-24 md:mx-16 sm:mx-6">
      <SectionTitle name="즐찾" />
      <Box sx={{ width: '100%' }}>
        <Stack
            direction="column"
            alignItems="center"
            spacing={4}
            >
            {favList &&
            favList.map((data, id) => {
            return (
                // <div key={id}>안녕..{data.data.name}</div>
                <div key={id} >

                    <a target="_blank" rel="noreferrer" href={data.data.url} >{data.data.name}</a>
                    <ClearIcon onClick={() => handlerDelete(data.data.name, data.data.url)}></ClearIcon>
                </div>
                
            )
            })}
        </Stack>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Stack
            direction="column"
            alignItems="center"
            spacing={4}
            >

            <TextField
                label="Name"
                id="name"
                size="small"
                onChange={val => setName(val)}
            />
            
            <TextField
                label="Url"
                id="url"
                size="small"
                onChange={val => setUrl(val)}
            />
            <IconButton
                aria-label="add to favorites"
                onClick={handlerSubmit}
            ><AddIcon /></IconButton>

        </Stack>
      </Box>
      
    </div>
  )
}

export default Fav
